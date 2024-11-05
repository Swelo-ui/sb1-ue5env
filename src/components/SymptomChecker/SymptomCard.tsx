import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { Symptom } from '../../types';

interface SymptomCardProps {
  symptom: Symptom;
  onSelect: (symptom: Symptom) => void;
}

const SymptomCard: React.FC<SymptomCardProps> = ({ symptom, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(symptom)}
      className="w-full bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-between"
    >
      <div>
        <h3 className="text-lg font-medium text-gray-900">{symptom.name}</h3>
      </div>
      <ChevronRight className="h-5 w-5 text-primary" />
    </button>
  );
};

export default SymptomCard;