export interface User {
  id: string;
  email: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  weight: number;
  height: number;
  chronicConditions: string[];
  allergies: string[];
  medications: UserMedication[];
}

export interface UserMedication {
  id: string;
  medicationId: string;
  startDate: string;
  endDate?: string;
  dosage: string;
  frequency: string;
}

export interface Medication {
  id: string;
  name: string;
  category: string;
  description: string;
  dosage: string;
  sideEffects: string[];
  warnings: string[];
  interactions: {
    medicationId: string;
    severity: 'mild' | 'moderate' | 'severe';
    description: string;
  }[];
}

export interface Symptom {
  id: string;
  name: string;
  severity: 'mild' | 'moderate' | 'severe';
}