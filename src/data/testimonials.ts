export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  text: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Direktur Operasional',
    company: 'PT Maju Jaya Teknik',
    avatar: 'https://i.pravatar.cc/80?img=11',
    rating: 5,
    text: 'MesinBekas.id sangat membantu bisnis kami. Kami berhasil mendapatkan mesin CNC berkualitas dengan harga 40% lebih murah dari baru. Prosesnya mudah dan seller-nya terpercaya.',
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    role: 'Manager Pengadaan',
    company: 'CV Karya Mandiri',
    avatar: 'https://i.pravatar.cc/80?img=47',
    rating: 5,
    text: 'Transaksi aman dan cepat. Tim customer service sangat responsif membantu negosiasi harga. Forklift yang kami beli kondisinya persis seperti deskripsi di platform.',
  },
  {
    id: 3,
    name: 'Agus Wijaya',
    role: 'Pemilik Usaha',
    company: 'UD Surya Teknik',
    avatar: 'https://i.pravatar.cc/80?img=52',
    rating: 5,
    text: 'Sudah 3 kali beli mesin lewat MesinBekas.id. Selalu puas dengan kualitas mesin dan layanannya. Platform terbaik untuk jual beli mesin industri di Indonesia.',
  },
]
