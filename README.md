# Portofolio Kamila Fazilatunisa

Website portofolio (Next.js + Tailwind).

---

## 1. Pertama kali buka di VS Code

1. **Install Node.js** dari https://nodejs.org (pilih tombol **LTS**), install seperti aplikasi biasa. Cukup sekali.
2. **Extract** file zip ini, misalnya ke `C:\milacode\`.
3. Buka VS Code → `File > Open Folder` → masuk ke folder **`portofolio-kamila-v2`** (folder yang di dalamnya langsung ada `package.json`), lalu klik **Select Folder**.
4. Buka terminal: `Terminal > New Terminal`.
   - Kalau terminalnya **PowerShell** dan muncul error *"running scripts is disabled"*, klik panah kecil `v` di sebelah tombol `+` pada panel terminal, pilih **Command Prompt**.
5. Ketik, lalu Enter (cukup sekali, tunggu sampai selesai):
   ```
   npm install
   ```
6. Jalankan websitenya:
   ```
   npm run dev
   ```
7. Buka browser ke **http://localhost:3000**

Selama `npm run dev` jalan, setiap kamu simpan file (Ctrl+S), halaman di browser langsung berubah. Untuk berhenti: klik terminal lalu tekan `Ctrl+C`.

> Kalau muncul error `Could not read package.json`, artinya folder yang dibuka salah (kamu membuka folder pembungkusnya). Ulangi langkah 3.

---

## 2. File mana yang diedit?

| Mau apa | Buka file ini |
| --- | --- |
| Ganti tulisan, pengalaman, FAQ, tambah/hapus proyek | `data/portfolio.ts` |
| Ganti gambar cover proyek | folder `public/projects/` |
| Ganti foto di bagian About | `public/me/kamila.webp` |
| Ganti CV yang di-download | `public/cv.pdf` (timpa dengan file baru, nama tetap `cv.pdf`) |
| Ganti warna & font | `app/globals.css` (bagian `:root`) |
| Ganti avatar (Memoji) | `public/me/memoji.png` (PNG latar transparan, nama tetap sama) |
| Tukar urutan bagian halaman | `app/page.tsx` |

**95% revisi cukup di `data/portfolio.ts`.** Semua bagian di file itu ada komentarnya.

---

## 3. Menambah proyek baru

1. Siapkan gambar cover (screenshot slide/dashboard, rasio 16:9, misal 1600×900). Simpan di `public/projects/`, misalnya `public/projects/proyek-baru.jpg`.
2. Buka `data/portfolio.ts`, cari bagian `export const projects`.
3. Copy satu blok `{ ... },` (dari `{` sampai `},`), paste di bawahnya, lalu ganti isinya:
   - `slug`: nama unik pakai huruf kecil dan tanda `-`, contoh `"analisis-kredit-umkm"`
   - `category`: salah satu dari `"Finance & Econometrics"`, `"Data Analytics"`, `"Data Science"`
   - `image`: `"/projects/proyek-baru.jpg"`
   - `link`: link Google Drive / GitHub / Tableau Public file itu. Kalau dikosongkan `""`, tombolnya mengarah ke folder Drive utama.
   - `featured: true` kalau mau ikut tampil di kartu bertumpuk paling atas.
4. Simpan. Proyek otomatis muncul di halaman depan **dan** dapat halaman detail sendiri.

> Supaya link Google Drive bisa dibuka recruiter: di Drive, klik kanan file → Share → *General access* → **Anyone with the link**.

---

## 4. Deploy ke Vercel (pertama kali)

**a. Upload ke GitHub**

1. Install Git dari https://git-scm.com (sekali saja), lalu tutup dan buka lagi VS Code.
2. Di https://github.com/new buat repository baru, misalnya `portfolio`. Jangan centang "Add README".
3. Di terminal VS Code (pastikan di folder proyek), jalankan satu per satu:
   ```
   git init
   git add .
   git commit -m "first version"
   git branch -M main
   git remote add origin https://github.com/kamilafzl/portfolio.git
   git push -u origin main
   ```
   Kalau diminta login GitHub, ikuti jendela login yang muncul.
   Kalau git minta nama/email, jalankan dulu:
   `git config --global user.name "Kamila"` dan `git config --global user.email "emailmu@gmail.com"`

**b. Hubungkan ke Vercel**

1. Buka https://vercel.com → **Sign up with GitHub**.
2. Klik **Add New… → Project** → pilih repo `portfolio` → **Import**.
3. Jangan ubah setting apa pun, klik **Deploy**. Tunggu ±1 menit, website kamu online.
4. Mau ganti alamatnya? Project → **Settings → Domains**, misalnya `kamila-fazilatunisa.vercel.app`.

---

## 5. Revisi setelah online

Edit file seperti biasa, cek di `npm run dev`, lalu di terminal:

```
git add .
git commit -m "revisi"
git push
```

Vercel otomatis memperbarui website dalam ±1 menit. Bisa diulang sesering apa pun.

---

## Kalau ada error

- Halaman merah setelah edit `data/portfolio.ts`: biasanya lupa tanda kutip `"` atau koma `,`. Lihat nomor baris yang disebut di pesan error.
- Sebelum `git push`, boleh cek dengan `npm run build`. Kalau di sini lolos, di Vercel juga lolos.
