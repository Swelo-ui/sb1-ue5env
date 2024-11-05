import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { medications } from '../data/medications';

const DrugLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(medications.map(med => med.category))];

  const filteredMeds = medications.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || med.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" />
          <input
            type="text"
            placeholder="Search medications..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" />
          <select
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMeds.map(med => (
          <div key={med.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-2">{med.name}</h3>
            <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary-light text-white mb-4">
              {med.category}
            </span>
            <p className="text-gray-600 mb-4">{med.description}</p>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-800">Dosage:</h4>
              <p className="text-secondary">{med.dosage}</p>
              <h4 className="font-medium text-gray-800">Side Effects:</h4>
              <ul className="list-disc list-inside text-secondary">
                {med.sideEffects.map((effect, index) => (
                  <li key={index}>{effect}</li>
                ))}
              </ul>
              <h4 className="font-medium text-gray-800">Warnings:</h4>
              <ul className="list-disc list-inside text-secondary">
                {med.warnings.map((warning, index) => (
                  <li key={index}>{warning}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrugLibrary;