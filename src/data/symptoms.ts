export const symptoms = [
  {
    id: 'sym1',
    name: 'Headache',
    possibleCauses: ['Stress', 'Dehydration', 'Eye strain', 'Migraine'],
    recommendedMedications: ['med1', 'med2'],
    severity: ['mild', 'moderate', 'severe'],
  },
  {
    id: 'sym2',
    name: 'Fever',
    possibleCauses: ['Infection', 'Inflammation', 'Heat exhaustion'],
    recommendedMedications: ['med1'],
    severity: ['mild', 'moderate', 'severe'],
  },
  {
    id: 'sym3',
    name: 'Allergic Reaction',
    possibleCauses: ['Pollen', 'Dust', 'Pet dander', 'Food allergens'],
    recommendedMedications: ['med3'],
    severity: ['mild', 'moderate', 'severe'],
  },
] as const;