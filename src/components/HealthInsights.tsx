import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Activity, Brain, Heart } from 'lucide-react';
import type { User } from '../types';

interface HealthInsightsProps {
  user: User;
}

const HealthInsights: React.FC<HealthInsightsProps> = ({ user }) => {
  // Sample data - in a real app, this would come from the user's history
  const healthData = [
    { month: 'Jan', headaches: 4, fever: 1, cough: 2 },
    { month: 'Feb', headaches: 3, fever: 0, cough: 1 },
    { month: 'Mar', headaches: 5, fever: 2, cough: 3 },
    { month: 'Apr', headaches: 2, fever: 1, cough: 4 },
    { month: 'May', headaches: 4, fever: 0, cough: 2 },
    { month: 'Jun', headaches: 3, fever: 1, cough: 1 },
  ];

  const calculateBMI = () => {
    const heightInMeters = user.height / 100;
    return (user.weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const getBMICategory = () => {
    const bmi = parseFloat(calculateBMI());
    if (bmi < 18.5) return 'underweight';
    if (bmi < 25) return 'healthy weight';
    if (bmi < 30) return 'overweight';
    return 'obese';
  };

  const getHealthTips = () => {
    const tips = [];
    const bmiCategory = getBMICategory();

    // BMI-based tips
    if (bmiCategory === 'underweight') {
      tips.push('Consider increasing your caloric intake with nutrient-rich foods');
    } else if (bmiCategory === 'overweight' || bmiCategory === 'obese') {
      tips.push('Try incorporating more physical activity into your daily routine');
    }

    // Medication-based tips
    if (user.medications.length > 0) {
      tips.push('Remember to take your medications as prescribed');
    }

    // General health tips
    tips.push('Stay hydrated by drinking at least 8 glasses of water daily');
    tips.push('Aim for 7-9 hours of sleep each night');

    return tips;
  };

  return (
    <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Health Insights</h2>

      <div className="space-y-8">
        {/* Health Trends Graph */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Symptom Trends</h3>
          <div className="w-full overflow-x-auto">
            <LineChart width={600} height={300} data={healthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="headaches" stroke="#8884d8" name="Headaches" />
              <Line type="monotone" dataKey="fever" stroke="#82ca9d" name="Fever" />
              <Line type="monotone" dataKey="cough" stroke="#ffc658" name="Cough" />
            </LineChart>
          </div>
        </div>

        {/* Health Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-gray-900">BMI Status</h4>
            </div>
            <p className="text-2xl font-bold text-primary">{calculateBMI()}</p>
            <p className="text-sm text-gray-600 capitalize">{getBMICategory()}</p>
          </div>

          <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Heart className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-gray-900">Active Medications</h4>
            </div>
            <p className="text-2xl font-bold text-primary">{user.medications.length}</p>
            <p className="text-sm text-gray-600">Current prescriptions</p>
          </div>

          <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Brain className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-gray-900">Health Score</h4>
            </div>
            <p className="text-2xl font-bold text-primary">85</p>
            <p className="text-sm text-gray-600">Based on your profile</p>
          </div>
        </div>

        {/* Health Tips */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Personalized Health Tips</h3>
          <div className="space-y-3">
            {getHealthTips().map((tip, index) => (
              <div key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                </div>
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInsights;