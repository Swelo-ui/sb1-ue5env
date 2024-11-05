import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Medication, UserMedication } from '../types';
import { medications } from '../data/medications';

interface InteractionsProps {
  userMedications: UserMedication[];
}

const Interactions: React.FC<InteractionsProps> = ({ userMedications }) => {
  const findInteractions = () => {
    const interactions: {
      medication1: Medication;
      medication2: Medication;
      severity: 'mild' | 'moderate' | 'severe';
      description: string;
    }[] = [];

    for (let i = 0; i < userMedications.length; i++) {
      for (let j = i + 1; j < userMedications.length; j++) {
        const med1 = medications.find(m => m.id === userMedications[i].medicationId);
        const med2 = medications.find(m => m.id === userMedications[j].medicationId);

        if (med1 && med2) {
          const interaction = med1.interactions.find(int => int.medicationId === med2.id);
          if (interaction) {
            interactions.push({
              medication1: med1,
              medication2: med2,
              severity: interaction.severity,
              description: interaction.description,
            });
          }
        }
      }
    }

    return interactions;
  };

  const interactions = findInteractions();

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild':
        return 'bg-yellow-100 text-yellow-800';
      case 'moderate':
        return 'bg-orange-100 text-orange-800';
      case 'severe':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Drug Interactions</h2>

      {userMedications.length < 2 ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-600">
            Add at least two medications to check for potential interactions.
          </p>
        </div>
      ) : interactions.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-green-600">No interactions found between your medications.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {interactions.map((interaction, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <AlertTriangle className={`h-6 w-6 ${
                  interaction.severity === 'severe' ? 'text-red-500' :
                  interaction.severity === 'moderate' ? 'text-orange-500' :
                  'text-yellow-500'
                }`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {interaction.medication1.name} + {interaction.medication2.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(interaction.severity)}`}>
                      {interaction.severity.charAt(0).toUpperCase() + interaction.severity.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-600">{interaction.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Interactions;