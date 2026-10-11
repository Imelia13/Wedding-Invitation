# Wedding Invitation — Hani & Andi

Website undangan pernikahan digital untuk Hani & Andi, dibuat menggunakan HTML, CSS, dan JavaScript. Website menampilkan informasi pasangan, jadwal acara, lokasi, galeri foto, formulir RSVP, serta bagian ucapan untuk kedua mempelai.

## Fitur

- **Opening section** — nama pasangan, tanggal, logo, dan ornamen dekoratif.
- **Wedding quote** — kutipan dari QS. Ar-Rum ayat 21.
- **Informasi mempelai** — foto, nama, dan informasi keluarga.
- **Countdown acara** — hitung mundur menuju tanggal acara.
- **Lokasi dan jadwal** — informasi tempat acara serta tautan petunjuk arah Google Maps.
- **Galeri foto** — galeri dengan navigasi slider dan tampilan foto yang diperbesar.
- **Responsive layout** — tata letak yang menyesuaikan ukuran layar desktop dan perangkat seluler.
- **Animasi** — efek animasi saat elemen muncul di layar.
- **RSVP** — antarmuka formulir konfirmasi kehadiran.
- **Wedding wishes** — pengunjung dapat menuliskan nama dan ucapan yang ditampilkan pada halaman.

## Teknologi dan Library

- HTML5
- CSS3
- JavaScript
- [Bootstrap 4.6.2](https://getbootstrap.com/docs/4.6/)
- [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/)
- [jQuery 3.4.1](https://jquery.com/)
- [AOS 2.3.1](https://michalsnik.github.io/aos/)
- [Swiper 11](https://swiperjs.com/)
- [Fancybox 3.5.7](https://fancyapps.com/fancybox/)

Library dimuat melalui CDN, sehingga koneksi internet diperlukan agar library tersebut dapat dimuat.

## Struktur Folder

```text
.
├── index.html
├── style.css
├── script.js
└── assets/
    ├── fonts/
    │   ├── Baskerville_2.ttc
    │   ├── GARA.TTF
    │   ├── Helvetica_3.ttf
    │   ├── Madina.ttf
    │   └── Operetta18-Regular.ttf
    ├── Music/
    │   ├── Music.mp3
    └── images/
        ├── Logo.png
        ├── Background 1.png
        ├── Background 2.png
        ├── Background 3.png
        ├── ...
        └── foto dan ornamen lainnya
```

## Menjalankan Proyek

1. Clone atau unduh repository.
2. Pastikan `index.html`, `style.css`, `script.js`, serta folder `assets/` berada pada struktur yang sesuai.
3. Buka `index.html` di browser untuk melihat website.

Untuk pengalaman pengembangan yang lebih nyaman, proyek dapat dijalankan menggunakan ekstensi **Live Server** di Visual Studio Code.

Tidak diperlukan proses build atau instalasi package untuk versi statis ini.

## Catatan Fungsionalitas

- Formulir RSVP saat ini merupakan antarmuka di sisi frontend. Belum ada proses pengiriman atau penyimpanan data RSVP yang terhubung ke backend pada kode yang disertakan.
- Ucapan yang dikirim akan ditambahkan ke halaman menggunakan JavaScript. Ucapan tersebut belum disimpan ke database atau penyimpanan permanen, sehingga akan hilang ketika halaman dimuat ulang.
- Input foto/video pada bagian ucapan saat ini menampilkan nama file yang dipilih, tetapi belum mengunggah file ke server.
- Tautan navigasi **GIFT** dan **PERSONAL MESSAGES** pada HTML saat ini mengarah ke bagian `#wishes`.
