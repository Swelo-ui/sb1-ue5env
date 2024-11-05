import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SymptomCard from '../components/SymptomChecker/SymptomCard';
import SeveritySelector from '../components/SymptomChecker/SeveritySelector';
import RecommendationCard from '../components/SymptomChecker/RecommendationCard';
import { symptoms } from '../data/symptoms';
import { medications } from '../data/medications';
import type { Symptom } from '../types';

const SelfMedication = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom | null>(null);
  const [severity, setSeverity] = useState<'mild' | 'moderate' | 'severe'>('mild');

  const filteredSymptoms = symptoms.filter((symptom) =>
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRecommendedMedications = () => {
    if (!selectedSymptom) return [];
    return medications.filter((med) =>
      selectedSymptom.recommendedMedications.includes(med.id)
    );
  };

  return (
    <div className="space-y-6">
      {!selectedSymptom ? (
        <>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" />
            <input
              type="text"
              placeholder="Search symptoms..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-3">
            {filteredSymptoms.map((symptom) => (
              <SymptomCard
                key={symptom.id}
                symptom={symptom}
                onSelect={setSelectedSymptom}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">{selectedSymptom.name}</h2>
            <button
              onClick={() => setSelectedSymptom(null)}
              className="text-primary hover:text-primary-dark"
            >
              Change Symptom
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              How severe is your {selectedSymptom.name.toLowerCase()}?
            </h3>
            <SeveritySelector value={severity} onChange={setSeverity} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              Recommended Medications
            </h3>
            {getRecommendedMedications().map((medication) => (
              <RecommendationCard
                key={medication.id}
                medication={medication}
                severity={severity}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelfMedication;