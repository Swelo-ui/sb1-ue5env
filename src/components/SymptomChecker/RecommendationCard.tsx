import React from 'react';
import { Pill, Clock, AlertTriangle } from 'lucide-react';
import type { Medication } from '../../types';

interface RecommendationCardProps {
  medication: Medication;
  severity: 'mild' | 'moderate' | 'severe';
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ medication, severity }) => {
  const getSeverityDosage = () => {
    switch (severity) {
      case 'mild':
        return 'Minimum recommended dosage';
      case 'moderate':
        return 'Standard recommended dosage';
      case 'severe':
        return 'Maximum recommended dosage';
      default:
        return medication.dosage;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-primary">{medication.name}</h3>
        <span className="px-3 py-1 bg-primary-light text-white text-sm rounded-full">
          {medication.category}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Pill className="h-5 w-5 text-primary mt-1" />
          <div>
            <p className="font-medium text-gray-700">Recommended Dosage</p>
            <p className="text-gray-600">{getSeverityDosage()}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Clock className="h-5 w-5 text-primary mt-1" />
          <div>
            <p className="font-medium text-gray-700">Timing</p>
            <p className="text-gray-600">{medication.dosage}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1" />
          <div>
            <p className="font-medium text-gray-700">Important Warnings</p>
            <ul className="list-disc list-inside text-gray-600">
              {medication.warnings.map((warning, index) => (
                <li key={index}>{warning}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;