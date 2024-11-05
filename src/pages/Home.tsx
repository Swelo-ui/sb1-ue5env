import React from 'react';
import { Activity, PlusCircle, ThermometerSun } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const recentMedications = [
    { name: 'Paracetamol', time: '2 hours ago', dose: '500mg' },
    { name: 'Cetirizine', time: 'Yesterday', dose: '10mg' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Actions</h2>
        <div className="space-y-4">
          <Link
            to="/self-medication"
            className="flex items-center justify-center w-full py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-200"
          >
            <ThermometerSun className="mr-2 h-5 w-5" />
            Check Symptoms
          </Link>
          <Link
            to="/drug-library"
            className="flex items-center justify-center w-full py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-200"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Add Medication
          </Link>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Medications</h2>
        <div className="space-y-4">
          {recentMedications.map((med, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-primary">{med.name}</h3>
              <p className="text-sm text-secondary mt-1">
                {med.dose} • {med.time}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Health Insights</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <Activity className="h-5 w-5 text-primary mr-2" />
              <h3 className="font-medium text-gray-800">Activity Summary</h3>
            </div>
            <p className="text-sm text-secondary mt-2">
              2 medications taken in the last 24 hours
            </p>
          </div>
          <Link
            to="/profile"
            className="block text-center text-primary hover:text-primary-dark"
          >
            Complete your profile for more insights →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;