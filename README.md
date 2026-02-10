# 📊 Scraping Harga Emas ANTAM

Web scraper sederhana untuk mengambil data harga emas batangan ANTAM secara real-time dari website [Logam Mulia](https://www.logammulia.com/id/harga-emas-hari-ini).

## ✨ Fitur

- 🔍 Scraping harga emas ANTAM otomatis
- 🚀 Menggunakan Puppeteer untuk bypass proteksi anti-bot
- 📈 Menampilkan 12 varian emas batangan (0.5gr - 1000gr)
- 🎯 Output data dalam format tabel yang rapi
- ⚡ Headless browser untuk scraping yang efisien

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Puppeteer** - Headless browser automation

## 📋 Prerequisites

- Node.js v14 atau lebih tinggi
- npm atau yarn

## 🚀 Instalasi

1. Clone repository ini:
```bash
git clone https://github.com/zaazacreative/scrapper-antam.git
cd scrapper-antam
```

2. Install dependencies:
```bash
npm install
```

## 💻 Cara Penggunaan

### Menggunakan npm scripts:

```bash
npm start
```

### Atau menjalankan langsung:

```bash
node scraper-antam-puppeteer.js
```

### Output Contoh

```
🚀 Membuka browser...
📡 Mengakses website...
📊 Mengambil data harga...

✅ Harga Emas ANTAM Hari Ini:

┌─────────┬───────────┬─────────────────┐
│ (index) │ berat     │ harga           │
├─────────┼───────────┼─────────────────┤
│ 0       │ '0.5 gr'  │ '1,520,000'     │
│ 1       │ '1 gr'    │ '2,940,000'     │
│ 2       │ '2 gr'    │ '5,820,000'     │
│ 3       │ '3 gr'    │ '8,705,000'     │
│ 4       │ '5 gr'    │ '14,475,000'    │
│ 5       │ '10 gr'   │ '28,895,000'    │
│ 6       │ '25 gr'   │ '72,112,000'    │
│ 7       │ '50 gr'   │ '144,145,000'   │
│ 8       │ '100 gr'  │ '288,212,000'   │
│ 9       │ '250 gr'  │ '720,265,000'   │
│ 10      │ '500 gr'  │ '1,440,320,000' │
│ 11      │ '1000 gr' │ '2,880,600,000' │
└─────────┴───────────┴─────────────────┘

🔒 Browser ditutup
```

## 📁 Struktur File

```
scrapper-antam/
├── scraper-antam-puppeteer.js  # Script scraper
├── package.json
├── LICENSE
├── .gitignore
└── README.md
```

## ⚙️ Konfigurasi

### Mengubah URL Target

Edit variabel `URL` di file `scraper-antam-puppeteer.js`:

```javascript
const URL = "https://www.logammulia.com/id/harga-emas-hari-ini";
```

### Mengubah Jumlah Data

Ubah limit counter di line 45:

```javascript
if (count >= 12) return; // Ganti 12 dengan jumlah yang diinginkan
```

## 🔧 Troubleshooting

### Error: Chromium not found

```bash
# Install ulang Puppeteer
npm install puppeteer --force
```

### Timeout Error

Tingkatkan timeout di konfigurasi:

```javascript
await page.goto(URL, {
  waitUntil: "networkidle2",
  timeout: 60000, // Dari 30000 ke 60000
});
```

## 📝 Catatan Penting

- ⚠️ Script ini dibuat untuk keperluan edukasi
- ⚠️ Pastikan mematuhi Terms of Service website target
- ⚠️ Gunakan dengan bijak dan jangan overload server
- ⚠️ Data harga dapat berubah sewaktu-waktu

## 🤝 Kontribusi

Kontribusi selalu welcome! Silakan:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Distributed under the ISC License. See `LICENSE` for more information.

## 👤 Author

**Deny Apriliansyah**

## 🌟 Show your support

Berikan ⭐️ jika project ini membantu Anda!

---

**Disclaimer:** Project ini dibuat untuk tujuan edukasi. Pengguna bertanggung jawab atas penggunaan script ini sesuai dengan hukum dan peraturan yang berlaku.