export type Condition = 'Sangat Baik' | 'Baik' | 'Cukup'

export interface Product {
  id: number
  name: string
  location: string
  year: number
  condition: Condition
  price: number
  image: string
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Forklift Toyota 3 Ton',
    location: 'Surabaya, Jawa Timur',
    year: 2018,
    condition: 'Sangat Baik',
    price: 125000000,
    image: 'https://picsum.photos/seed/forklift1/400/280',
    category: 'Forklift',
  },
  {
    id: 2,
    name: 'CNC Milling Machine Mazak',
    location: 'Bekasi, Jawa Barat',
    year: 2019,
    condition: 'Baik',
    price: 350000000,
    image: 'https://picsum.photos/seed/cnc2/400/280',
    category: 'Mesin CNC',
  },
  {
    id: 3,
    name: 'Genset Perkins 250 KVA',
    location: 'Tangerang, Banten',
    year: 2017,
    condition: 'Baik',
    price: 180000000,
    image: 'https://picsum.photos/seed/genset3/400/280',
    category: 'Generator',
  },
  {
    id: 4,
    name: 'Excavator Komatsu PC200',
    location: 'Medan, Sumatera Utara',
    year: 2016,
    condition: 'Cukup',
    price: 420000000,
    image: 'https://picsum.photos/seed/excavator4/400/280',
    category: 'Alat Berat',
  },
  {
    id: 5,
    name: 'Mesin Injection Plastik 200T',
    location: 'Semarang, Jawa Tengah',
    year: 2020,
    condition: 'Sangat Baik',
    price: 275000000,
    image: 'https://picsum.photos/seed/injection5/400/280',
    category: 'Mesin Produksi',
  },
  {
    id: 6,
    name: 'Mesin Offset Heidelberg CD74',
    location: 'Jakarta Utara, DKI Jakarta',
    year: 2015,
    condition: 'Baik',
    price: 310000000,
    image: 'https://picsum.photos/seed/offset6/400/280',
    category: 'Mesin Percetakan',
  },
]
