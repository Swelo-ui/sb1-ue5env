import React, { useState } from 'react';
import { User, Activity, Pill, AlertCircle, Edit2 } from 'lucide-react';
import BMIDisplay from '../components/BMIDisplay';
import AddMedication from '../components/AddMedication';
import HealthInsights from '../components/HealthInsights';
import { medications } from '../data/medications';
import type { User as UserType } from '../types';

interface ProfileProps {
  user: UserType;
  onMedicationAdd: (medication: any) => void;
  onUserUpdate: (updatedUser: UserType) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onMedicationAdd, onUserUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUserUpdate(editedUser);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-primary hover:text-primary-dark"
            >
              <Edit2 className="h-5 w-5" />
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  name="age"
                  value={editedUser.age}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={editedUser.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={editedUser.weight}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={editedUser.height}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setEditedUser(user);
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Full Name</label>
                <p className="text-gray-900 font-medium">{user.name}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <p className="text-gray-900">{user.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Age</label>
                <p className="text-gray-900">{user.age} years</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Gender</label>
                <p className="text-gray-900 capitalize">{user.gender}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Weight</label>
                <p className="text-gray-900">{user.weight} kg</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Height</label>
                <p className="text-gray-900">{user.height} cm</p>
              </div>
            </div>
          )}
        </div>

        {/* Health Metrics */}
        <BMIDisplay weight={user.weight} height={user.height} />

        {/* Medical History */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <AlertCircle className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold text-gray-900">Medical History</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Chronic Conditions</h3>
              {user.chronicConditions.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {user.chronicConditions.map((condition, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-light text-white rounded-full text-sm"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No chronic conditions reported</p>
              )}
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Allergies</h3>
              {user.allergies.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {user.allergies.map((allergy, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                    >
                      {allergy}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No allergies reported</p>
              )}
            </div>
          </div>
        </div>

        {/* Current Medications */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Pill className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold text-gray-900">Current Medications</h2>
            </div>
            <AddMedication onAdd={onMedicationAdd} />
          </div>
          <div className="space-y-4">
            {user.medications.length > 0 ? (
              user.medications.map((med) => {
                const medication = medications.find(m => m.id === med.medicationId);
                return (
                  <div key={med.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-primary">{medication?.name}</h3>
                        <p className="text-sm text-gray-600">
                          {med.dosage} • {med.frequency}
                        </p>
                        <p className="text-sm text-gray-500">
                          Started: {new Date(med.startDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-500">No medications currently listed</p>
            )}
          </div>
        </div>

        {/* Health Insights */}
        <HealthInsights user={user} />
      </div>
    </div>
  );
};

export default Profile;