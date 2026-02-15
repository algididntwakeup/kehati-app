# KEHATI - Layanan Psikologi Online SDM Polda Jabar

**KEHATI** (Kesehatan Hati) adalah aplikasi berbasis web yang dirancang khusus untuk anggota Polri di wilayah hukum Polda Jawa Barat. Aplikasi ini bertujuan untuk memudahkan personel dalam mengakses layanan kesehatan mental, melakukan screening mandiri, dan mendapatkan pendampingan psikologis secara profesional.

![Dashboard Preview](https://placehold.co/1200x600/0A2647/ffffff?text=KEHATI+Dashboard+Preview)

## 🌟 Fitur Utama

- **Otentikasi Aman**: Login khusus anggota dengan NRP dan verifikasi unit.
- **Screening Mandiri (E-Triase)**: Deteksi dini kesehatan mental menggunakan metode SRQ-20 dengan hasil instan (Risiko Tinggi/Rendah).
- **Booking Konseling**: Jadwalkan sesi konseling (Daring/Luring) dengan psikolog Biro SDM sesuai waktu luang dinas.
- **Portal Berita & Edukasi**: Artikel terkini seputar kesehatan mental dan tips psikologi praktis.
- **Riwayat Tiket**: Pantau status pengajuan konseling (Terjadwal, Selesai, Batal).

## 🛠️ Teknologi

Dibangun dengan teknologi web modern untuk performa tinggi dan pengalaman pengguna yang seamless:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State**: React Hooks & Context

## 🚀 Cara Menjalankan

Ikuti langkah-langkah berikut untuk menjalankan aplikasi di lingkungan lokal Anda:

1.  **Clone Repository**
    ```bash
    git clone https://github.com/username/kehati-app.git
    cd kehati-app
    ```

2.  **Instal Dependensi**
    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Jalankan Server Development**
    ```bash
    npm run dev
    ```

4.  **Buka Aplikasi**
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📱 Struktur Proyek

```
src/
├── app/                # Halaman & Routing (App Router)
│   ├── dashboard/      # Halaman Dashboard (Protected)
│   │   ├── booking/    # Halaman Booking
│   │   ├── history/    # Halaman Riwayat
│   │   ├── news/       # Halaman Berita
│   │   └── screening/  # Halaman Screening
│   ├── login/          # Halaman Login
│   └── layout.tsx      # Root Layout
├── components/         # Komponen UI Reusable
│   ├── dashboard/      # Komponen spesifik dashboard
│   ├── layout/         # Komponen layout (Header, BottomNav)
│   └── ui/             # Atomic Design Components (Button, Card, Input)
├── lib/                # Utilitas & Mock Data
└── types/              # Definisi Tipe TypeScript
```

## 🎨 Panduan Desain (Theme)

- **Warna Utama**: Police Blue (`#0A2647`), Soft Grey (`#F8FAFC`).
- **Filosofi**: Profesional, Terpercaya, Menenangkan.
- **Pendekatan**: Mobile-First Design.

---

**© 2026 Biro SDM Polda Jawa Barat**. Hak Cipta Dilindungi.
