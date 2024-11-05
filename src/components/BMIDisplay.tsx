import React from 'react';
import { Activity } from 'lucide-react';

interface BMIDisplayProps {
  weight: number; // in kg
  height: number; // in cm
}

const BMIDisplay: React.FC<BMIDisplayProps> = ({ weight, height }) => {
  const calculateBMI = () => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-600' };
    if (bmi < 25) return { category: 'Normal weight', color: 'text-green-600' };
    if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-600' };
    return { category: 'Obese', color: 'text-red-600' };
  };

  const bmi = parseFloat(calculateBMI());
  const { category, color } = getBMICategory(bmi);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-3 mb-4">
        <Activity className="h-6 w-6 text-primary" />
        <h3 className="text-lg font-semibold text-gray-900">BMI Calculator</h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Your BMI:</span>
          <span className="text-xl font-bold text-primary">{bmi}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Category:</span>
          <span className={`font-medium ${color}`}>{category}</span>
        </div>
        
        <div className="mt-4 text-sm text-gray-500">
          <p>Height: {height} cm</p>
          <p>Weight: {weight} kg</p>
        </div>
      </div>
    </div>
  );
};

export default BMIDisplay;