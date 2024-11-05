import React from 'react';
import { AlertCircle, AlertTriangle, AlertOctagon } from 'lucide-react';

interface SeveritySelectorProps {
  value: string;
  onChange: (severity: 'mild' | 'moderate' | 'severe') => void;
}

const SeveritySelector: React.FC<SeveritySelectorProps> = ({ value, onChange }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        onClick={() => onChange('mild')}
        className={`p-4 rounded-lg flex flex-col items-center ${
          value === 'mild'
            ? 'bg-green-100 border-2 border-green-500'
            : 'bg-white border border-gray-200'
        }`}
      >
        <AlertCircle className="h-6 w-6 text-green-500 mb-2" />
        <span className="text-sm font-medium">Mild</span>
      </button>

      <button
        onClick={() => onChange('moderate')}
        className={`p-4 rounded-lg flex flex-col items-center ${
          value === 'moderate'
            ? 'bg-yellow-100 border-2 border-yellow-500'
            : 'bg-white border border-gray-200'
        }`}
      >
        <AlertTriangle className="h-6 w-6 text-yellow-500 mb-2" />
        <span className="text-sm font-medium">Moderate</span>
      </button>

      <button
        onClick={() => onChange('severe')}
        className={`p-4 rounded-lg flex flex-col items-center ${
          value === 'severe'
            ? 'bg-red-100 border-2 border-red-500'
            : 'bg-white border border-gray-200'
        }`}
      >
        <AlertOctagon className="h-6 w-6 text-red-500 mb-2" />
        <span className="text-sm font-medium">Severe</span>
      </button>
    </div>
  );
};

export default SeveritySelector;