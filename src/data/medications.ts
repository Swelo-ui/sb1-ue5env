export const medications = [
  {
    id: 'med1',
    name: 'Paracetamol',
    category: 'Analgesics',
    description: 'Common pain reliever and fever reducer',
    dosage: '500-1000mg every 4-6 hours as needed',
    sideEffects: ['Nausea', 'Liver problems (with overdose)', 'Skin reactions'],
    warnings: ['Do not exceed 4000mg per day', 'Avoid alcohol consumption'],
    interactions: [
      {
        medicationId: 'med7',
        severity: 'moderate',
        description: 'May increase risk of liver damage when combined with Isoniazid'
      }
    ]
  },
  {
    id: 'med2',
    name: 'Ibuprofen',
    category: 'NSAIDs',
    description: 'Anti-inflammatory pain reliever',
    dosage: '200-400mg every 4-6 hours',
    sideEffects: ['Stomach upset', 'Heartburn', 'Dizziness'],
    warnings: ['Take with food', 'Not for long-term use without medical supervision'],
    interactions: [
      {
        medicationId: 'med3',
        severity: 'moderate',
        description: 'Increased risk of bleeding when combined with aspirin'
      },
      {
        medicationId: 'med8',
        severity: 'severe',
        description: 'May reduce effectiveness of blood pressure medications'
      }
    ]
  },
  {
    id: 'med3',
    name: 'Aspirin',
    category: 'NSAIDs',
    description: 'Pain reliever and blood thinner',
    dosage: '325-650mg every 4 hours as needed',
    sideEffects: ['Stomach upset', 'Bleeding risk', 'Tinnitus'],
    warnings: ['Not for children under 12', 'Avoid if bleeding risk'],
    interactions: [
      {
        medicationId: 'med2',
        severity: 'moderate',
        description: 'Increased risk of bleeding when combined with other NSAIDs'
      }
    ]
  },
  {
    id: 'med4',
    name: 'Cetirizine',
    category: 'Antihistamines',
    description: 'Allergy relief medication',
    dosage: '10mg once daily',
    sideEffects: ['Drowsiness', 'Dry mouth', 'Fatigue'],
    warnings: ['May impair driving ability', 'Avoid alcohol'],
    interactions: [
      {
        medicationId: 'med6',
        severity: 'moderate',
        description: 'Increased drowsiness when combined with anxiety medications'
      }
    ]
  },
  {
    id: 'med5',
    name: 'Omeprazole',
    category: 'Proton Pump Inhibitors',
    description: 'Reduces stomach acid production',
    dosage: '20mg once daily',
    sideEffects: ['Headache', 'Nausea', 'Vitamin B12 deficiency'],
    warnings: ['Long-term use may increase fracture risk'],
    interactions: [
      {
        medicationId: 'med9',
        severity: 'moderate',
        description: 'May reduce absorption of certain medications'
      }
    ]
  },
  {
    id: 'med6',
    name: 'Alprazolam',
    category: 'Anxiolytics',
    description: 'Anti-anxiety medication',
    dosage: '0.25-0.5mg 3 times daily',
    sideEffects: ['Drowsiness', 'Dizziness', 'Memory problems'],
    warnings: ['Addictive', 'Do not stop suddenly', 'Avoid alcohol'],
    interactions: [
      {
        medicationId: 'med4',
        severity: 'moderate',
        description: 'Increased drowsiness with antihistamines'
      }
    ]
  },
  {
    id: 'med7',
    name: 'Isoniazid',
    category: 'Antibiotics',
    description: 'Treatment for tuberculosis',
    dosage: '300mg daily',
    sideEffects: ['Liver problems', 'Nerve damage', 'Nausea'],
    warnings: ['Regular liver function monitoring required'],
    interactions: [
      {
        medicationId: 'med1',
        severity: 'moderate',
        description: 'Increased risk of liver damage with paracetamol'
      }
    ]
  },
  {
    id: 'med8',
    name: 'Lisinopril',
    category: 'ACE Inhibitors',
    description: 'Blood pressure medication',
    dosage: '10-40mg daily',
    sideEffects: ['Dry cough', 'Dizziness', 'High potassium'],
    warnings: ['Monitor blood pressure regularly', 'Avoid pregnancy'],
    interactions: [
      {
        medicationId: 'med2',
        severity: 'severe',
        description: 'NSAIDs may reduce blood pressure lowering effect'
      }
    ]
  },
  {
    id: 'med9',
    name: 'Levothyroxine',
    category: 'Thyroid Hormones',
    description: 'Thyroid replacement hormone',
    dosage: '25-200mcg daily',
    sideEffects: ['Heart palpitations', 'Weight changes', 'Anxiety'],
    warnings: ['Take on empty stomach', 'Regular thyroid monitoring needed'],
    interactions: [
      {
        medicationId: 'med5',
        severity: 'moderate',
        description: 'Acid reducers may decrease absorption'
      }
    ]
  },
  {
    id: 'med10',
    name: 'Metformin',
    category: 'Antidiabetics',
    description: 'Diabetes medication',
    dosage: '500-2000mg daily',
    sideEffects: ['Nausea', 'Diarrhea', 'Vitamin B12 deficiency'],
    warnings: ['Take with meals', 'Monitor kidney function'],
    interactions: [
      {
        medicationId: 'med8',
        severity: 'mild',
        description: 'May enhance blood pressure lowering effect'
      }
    ]
  }
] as const;