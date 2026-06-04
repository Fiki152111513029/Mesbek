export interface Category {
  id: number
  name: string
  count: number
  icon: string
}

export const categories: Category[] = [
  { id: 1, name: 'Mesin CNC', count: 1234, icon: 'cnc' },
  { id: 2, name: 'Forklift', count: 567, icon: 'forklift' },
  { id: 3, name: 'Generator', count: 890, icon: 'generator' },
  { id: 4, name: 'Mesin Produksi', count: 2341, icon: 'production' },
  { id: 5, name: 'Mesin Percetakan', count: 456, icon: 'printing' },
  { id: 6, name: 'Alat Berat', count: 789, icon: 'heavy' },
  { id: 7, name: 'Mesin Pertanian', count: 345, icon: 'agriculture' },
  { id: 8, name: 'Mesin Pengolahan Makanan', count: 678, icon: 'food' },
]
