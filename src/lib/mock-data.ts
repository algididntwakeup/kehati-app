
export const userData = {
  name: "Bripda Algi",
  nrp: "12345678",
  rank: "Brigadir Polisi Dua",
  unit: "Ditreskrimum Polda Jabar",
  avatar: "https://placehold.co/150x150/0A2647/ffffff?text=BA",
}

export const newsData = [
  {
    id: 1,
    title: "Pentingnya Menjaga Kesehatan Mental di Lingkungan Polri",
    date: "15 Feb 2026",
    image: "https://placehold.co/600x400/1e3a8a/ffffff?text=Mental+Health",
    category: "Artikel",
    content: `
      <p>Kesehatan mental merupakan aspek krusial bagi setiap anggota Polri dalam menjalankan tugas sehari-hari. Tekanan kerja yang tinggi, jadwal yang padat, dan situasi lapangan yang tidak terduga dapat menjadi pemicu stres.</p>
      <p>Biro Psikologi SSDM Polri terus berkomitmen untuk menyediakan layanan konseling dan pendampingan psikologis bagi seluruh personel. Melalui aplikasi KEHATI, anggota dapat dengan mudah melakukan screening mandiri dan mengajukan jadwal konseling.</p>
      <p>Ingat, meminta bantuan bukan tanda kelemahan, melainkan langkah awal menuju kekuatan mental yang lebih baik.</p>
    `
  },
  {
    id: 2,
    title: "Jadwal Konseling Rutin Bulan Maret",
    date: "14 Feb 2026",
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=Jadwal",
    category: "Pengumuman",
    content: `
      <p>Diberitahukan kepada seluruh anggota Polda Jabar bahwa jadwal konseling rutin untuk bulan Maret telah dibuka.</p>
      <p>Silahkan melakukan pendaftaran melalui menu Booking pada aplikasi KEHATI. Pastikan anda memilih slot waktu yang sesuai dengan jadwal dinas anda.</p>
      <p>Konseling tersedia secara daring (online) maupun luring (tatap muka) di Biro Psikologi.</p>
    `
  },
  {
    id: 3,
    title: "Tips Mengelola Stres Saat Operasi Lapangan",
    date: "12 Feb 2026",
    image: "https://placehold.co/600x400/2c74b3/ffffff?text=Tips+Stres",
    category: "Tips & Trik",
    content: `
      <p>Operasi lapangan seringkali menuntut kesiapan fisik dan mental yang prima. Berikut adalah beberapa tips sederhana untuk mengelola stres saat bertugas:</p>
      <ul>
        <li>Lakukan teknik pernapasan dalam (deep breathing) saat merasa tegang.</li>
        <li>Jaga hidrasi dan pola makan yang teratur.</li>
        <li>Sempatkan istirahat sejenak jika memungkinkan.</li>
        <li>Komunikasi yang baik dengan rekan tim.</li>
      </ul>
    `
  }
]

export const historyData = [
  {
    id: "TIC-001",
    date: "20 Feb 2026",
    time: "09:00",
    type: "online",
    status: "upcoming", // upcoming, completed, cancelled
    counselor: "Psikolog Biro SDM"
  },
  {
    id: "TIC-002",
    date: "10 Jan 2026",
    time: "13:00",
    type: "offline",
    status: "completed",
    counselor: "Dr. Budi Santoso, M.Psi"
  }
]

export const mockMessages = [
  {
    id: "MSG-001",
    title: "Surat Rujukan Konseling Lanjutan - RS Bhayangkara",
    sender: "Psikolog Biro SDM",
    date: "23 Feb 2026",
    isRead: false,
    content: `Yth. Anggota,
    
Berdasarkan hasil screening dan sesi konseling awal pada tanggal 20 Februari 2026, kami merekomendasikan Saudara untuk melakukan sesi konseling lanjutan secara tatap muka.

Hal ini bertujuan untuk observasi lebih mendalam dan pemberian teknik relaksasi yang lebih terarah. Silahkan jadwalkan kunjungan anda di aplikasi pada menu Booking.

Tetap jaga kesehatan dan semangat bertugas.

Salam hormat,
Tim Psikologi Biro SDM`
  },
  {
    id: "MSG-002",
    title: "Rangkuman Sesi Konseling (10 Jan 2026)",
    sender: "Dr. Budi Santoso, M.Psi",
    date: "11 Jan 2026",
    isRead: true,
    content: `Catatan Evaluasi Sesi 1:

1. Kondisi Umum: Klien melaporkan tingkat stres yang menurun setelah menerapkan teknik pernapasan.
2. Area Fokus: Manajemen waktu jaga malam dan istirahat.
3. Rencana Tindak Lanjut: Menerapkan jurnal harian singkat sebelum tidur.

Sesi berjalan lancar. Evaluasi selanjutnya dapat dilakukan melihat perkembangan 1 bulan ke depan. Tidak ada indikasi rujukan medis mendesak.`
  },
  {
    id: "MSG-003",
    title: "Selamat Datang di Aplikasi KEHATI",
    sender: "Sistem Admin",
    date: "01 Jan 2026",
    isRead: true,
    content: `Selamat bergabung di aplikasi KEHATI (Layanan Psikologi Online SDM Polda Jabar).

Aplikasi ini didesain untuk menjadi pendamping setia anda dalam menjaga kesehatan mental selama bertugas. Silahkan eksplorasi fitur-fitur seperti E-Triase, Portal Berita, dan Jadwal Konseling.

Privasi dan kerahasiaan data anda adalah prioritas utama kami.`
  }
]
