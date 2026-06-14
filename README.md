# Professional Portfolio Website

Website portfolio profesional yang dibangun menggunakan Python Flask berdasarkan data CV Fiqram Akmal.

## Fitur
- **Dynamic Data:** Seluruh informasi dikelola melalui `data/portfolio_data.json`.
- **Responsive Design:** Tampilan modern yang menyesuaikan dengan perangkat mobile dan desktop.
- **Elegant Dark Theme:** Nuansa dominan hitam dengan aksen pink dan layout yang lebih premium.
- **Photo Slots via JSON:** Foto profil, project, sertifikat, dan penghargaan cukup diisi lewat nama file gambar pada `static/img/` di `data/portfolio_data.json`.
- **Animations:** Reveal animation, staggered transitions, dan parallax ringan menggunakan Intersection Observer API dan JavaScript vanilla.

## Format Gambar di `data/portfolio_data.json`
Simpan file gambar Anda di folder `static/img/`, lalu isi JSON hanya dengan nama filenya.

```json
{
  "profile": {
    "photo_url": "profile.jpg",
    "photo_alt": "Foto profil Anda"
  },
  "projects": [
    {
      "image_url": "project-weathering.jpg",
      "image_alt": "Deskripsi foto project"
    }
  ],
  "certifications": [
    {
      "image_url": "certificate-ethical-hacker.jpg",
      "image_alt": "Deskripsi sertifikat"
    }
  ],
  "achievements": [
    {
      "image_url": "achievement-dkisp.jpg",
      "image_alt": "Deskripsi penghargaan"
    }
  ]
}
```

Contoh alurnya:
- simpan `profile.jpg` ke `static/img/profile.jpg`
- simpan `project-weathering.jpg` ke `static/img/project-weathering.jpg`
- isi nama file itu di JSON

Jika `photo_url` atau `image_url` dikosongkan, kartu tetap tampil tanpa gambar.

> Catatan: sekarang field gambar dibaca dari `static/img/<nama-file>`.

## Struktur Folder
```
project/
├── app.py
├── requirements.txt
├── README.md
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── img/
│   └── files/
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── about.html
│   ├── experience.html
│   ├── education.html
│   ├── projects.html
│   ├── certificates.html
│   ├── skills.html
│   └── contact.html
└── data/
    └── portfolio_data.json
```

## Cara Instalasi & Menjalankan

1. **Pastikan Python terinstall** di sistem Anda.
2. **Install dependensi:**
   ```bash
   pip install -r requirements.txt
   ```
3. **Jalankan aplikasi:**
   ```bash
   python app.py
   ```
4. **Buka di browser:**
   Akses `http://127.0.0.1:5000`

## Teknologi yang Digunakan
- **Backend:** Python Flask
- **Template Engine:** Jinja2
- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (Vanilla)
- **Icons:** Font Awesome
- **Animations:** Animate.css
