import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Disclaimer } from './components/Disclaimer';
import AuthScreen from './components/Auth/AuthScreen';
import Home from './pages/Home';
import DrugLibrary from './pages/DrugLibrary';
import SelfMedication from './pages/SelfMedication';
import Interactions from './pages/Interactions';
import Profile from './pages/Profile';
import LoadingSpinner from './components/LoadingSpinner';
import type { User, UserMedication } from './types';

function App() {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUserUpdate = async (updatedUser: User) => {
    try {
      // Only show loading for the specific section being updated
      const sectionId = 'profile-section';
      const loadingElement = document.getElementById(sectionId);
      if (loadingElement) {
        loadingElement.classList.add('opacity-50', 'pointer-events-none');
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser(updatedUser);
    } catch (err) {
      setError('Failed to update profile');
    } finally {
      const loadingElement = document.getElementById('profile-section');
      if (loadingElement) {
        loadingElement.classList.remove('opacity-50', 'pointer-events-none');
      }
    }
  };

  const handleMedicationAdd = async (medication: UserMedication) => {
    try {
      // Only show loading for the medications section
      const sectionId = 'medications-section';
      const loadingElement = document.getElementById(sectionId);
      if (loadingElement) {
        loadingElement.classList.add('opacity-50', 'pointer-events-none');
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser(prev => prev ? {
        ...prev,
        medications: [...prev.medications, medication]
      } : prev);
    } catch (err) {
      setError('Failed to add medication');
    } finally {
      const loadingElement = document.getElementById('medications-section');
      if (loadingElement) {
        loadingElement.classList.remove('opacity-50', 'pointer-events-none');
      }
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => setError(null)}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!disclaimerAccepted) {
    return <Disclaimer onAccept={() => setDisclaimerAccepted(true)} />;
  }

  if (!user) {
    return (
      <AuthScreen 
        onAuthSuccess={(userData) => {
          setIsLoading(true);
          // Simulate API delay
          setTimeout(() => {
            setUser(userData);
            setIsLoading(false);
          }, 1000);
        }} 
      />
    );
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={
            <Home 
              user={user} 
              onMedicationAdd={handleMedicationAdd}
            />
          } />
          <Route path="/drug-library" element={<DrugLibrary />} />
          <Route path="/self-medication" element={<SelfMedication />} />
          <Route path="/interactions" element={<Interactions userMedications={user.medications} />} />
          <Route path="/profile" element={
            <Profile 
              user={user} 
              onMedicationAdd={handleMedicationAdd}
              onUserUpdate={handleUserUpdate}
            />
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;