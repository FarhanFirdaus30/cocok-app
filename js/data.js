/* =========================================================
   COCOK — Data dummy (disimpan di memori, bukan backend nyata)
   ========================================================= */

// Palet warna untuk avatar berbasis inisial
const AVATAR_PALETTE = [
  ['#E8546B', '#C9375A'],
  ['#5B2C56', '#33163B'],
  ['#CDA43D', '#A9822B'],
  ['#4E9350', '#357238'],
  ['#3E6FA8', '#2C5480'],
  ['#B15FC4', '#8A3E9C'],
];

function paletteFor(seed) {
  const idx = seed % AVATAR_PALETTE.length;
  return AVATAR_PALETTE[idx];
}

function initialsOf(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

// Daftar profil calon jodoh (dummy)
const PROFILES = [
  {
    id: 'p01',
    name: 'Nadira Putri',
    age: 26,
    city: 'Jakarta Selatan',
    bio: 'Suka naik gunung tiap long weekend, tapi juga betah rebahan sambil nonton drakor seharian.',
    interests: ['Hiking', 'Kopi', 'Drakor', 'Fotografi'],
  },
  {
    id: 'p02',
    name: 'Bagas Wirawan',
    age: 29,
    city: 'Bandung',
    bio: 'Pecinta musik indie, akhir pekan biasa nongkrong di kafe sambil bawa vinyl favorit.',
    interests: ['Musik', 'Vinyl', 'Kafe', 'Sepeda'],
  },
  {
    id: 'p03',
    name: 'Salsabila Rahma',
    age: 24,
    city: 'Surabaya',
    bio: 'Dokter hewan yang gemar masak, terutama eksperimen resep dari negara yang belum pernah dikunjungi.',
    interests: ['Masak', 'Traveling', 'Hewan', 'Kuliner'],
  },
  {
    id: 'p04',
    name: 'Reza Pratama',
    age: 28,
    city: 'Yogyakarta',
    bio: 'Arsitek, suka sketsa bangunan tua dan ngopi sore sambil diskusi filsafat ringan.',
    interests: ['Sketsa', 'Arsitektur', 'Filsafat', 'Kopi'],
  },
  {
    id: 'p05',
    name: 'Intan Maharani',
    age: 25,
    city: 'Jakarta Barat',
    bio: 'Content creator yang jujur banget soal healing itu penting, tapi kerja keras nomor satu.',
    interests: ['Konten', 'Yoga', 'Skincare', 'Podcast'],
  },
  {
    id: 'p06',
    name: 'Fajar Ramadhan',
    age: 30,
    city: 'Semarang',
    bio: 'Guru olahraga, tiap pagi lari 5K dan percaya banget sama filosofi konsisten kecil tiap hari.',
    interests: ['Lari', 'Basket', 'Motivasi', 'Alam'],
  },
  {
    id: 'p07',
    name: 'Clarissa Wijaya',
    age: 27,
    city: 'Tangerang',
    bio: 'Pekerja kreatif di bidang desain, suka pameran seni dan koleksi tanaman hias di apartemen.',
    interests: ['Desain', 'Seni', 'Tanaman', 'Film'],
  },
  {
    id: 'p08',
    name: 'Dimas Aditya',
    age: 31,
    city: 'Depok',
    bio: 'Software engineer yang di waktu luang malah lebih sering di dapur coba resep baru.',
    interests: ['Coding', 'Masak', 'Board game', 'Anime'],
  },
];

// Pesan pembuka otomatis untuk simulasi obrolan pertama
const AUTO_REPLIES = [
  'Halo! Seneng deh kita match 😄 Lagi sibuk apa hari ini?',
  'Eh kamu suka itu juga? Kita cocok nih kayaknya!',
  'Btw fotomu di profil bagus banget, difoto di mana itu?',
  'Wah menarik! Cerita dong lebih lanjut soal itu.',
  'Kapan-kapan ngopi bareng yuk, biar makin kenal :)',
  'Haha iya setuju banget, aku juga mikir gitu.',
  'Kamu tipe yang suka rencana dadakan atau harus terjadwal rapi?',
  'Weekend ini ada rencana seru nggak?',
];

function randomAutoReply() {
  return AUTO_REPLIES[Math.floor(Math.random() * AUTO_REPLIES.length)];
}
