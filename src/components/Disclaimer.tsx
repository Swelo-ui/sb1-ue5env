import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface DisclaimerProps {
  onAccept: () => void;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ onAccept }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
        <div className="flex items-center justify-center mb-6">
          <ShieldAlert className="h-12 w-12 text-indigo-600" />
        </div>
        
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
          Important Disclaimer
        </h2>
        
        <div className="space-y-4 text-gray-600">
          <p>
            This app provides general drug information for knowledge purposes only. It should not
            replace consultation with a licensed healthcare professional.
          </p>
          <p>
            Always consult a healthcare provider before taking medication or making changes to your
            treatment plan.
          </p>
          <p className="font-semibold">
            By proceeding, you acknowledge that you understand and accept these terms.
          </p>
        </div>
        
        <button
          onClick={onAccept}
          className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          I Understand and Accept
        </button>
      </div>
    </div>
  );
}