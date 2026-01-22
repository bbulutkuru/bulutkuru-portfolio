# 🚀 Portfolio Projesi

Modern ve dinamik bir kişisel portfolio web sitesi. React, Tailwind CSS ve Vite ile geliştirilmiştir.

## 📋 İçindekiler

- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Proje Yapısı](#proje-yapısı)
- [Deployment](#deployment)
- [Lisans](#lisans)

## ✨ Özellikler

- 🎨 **Modern Tasarım**: Gradient efektler, animasyonlar ve responsive tasarım
- 🌟 **Dinamik İçerik**: Tüm veriler merkezi constants.js dosyasından yönetiliyor
- 📱 **Responsive**: Mobil, tablet ve desktop için optimize edilmiş
- ⚡ **Hızlı**: Vite build tool ile optimize edilmiş performans
- 🎭 **Animasyonlar**: Smooth scroll, hover efektleri ve loading animasyonları
- 🔄 **SPA Routing**: React Router ile sayfa geçişleri
- 🎯 **SEO Friendly**: .htaccess yapılandırması ile cPanel/Apache desteği
- 💼 **Proje Vitrin**: Detaylı proje sayfaları ile portfolyo sunumu
- 📧 **İletişim Formu**: Dinamik iletişim bölümü
- 🛠️ **60+ Teknoloji**: Skills bölümünde görsel teknoloji kartları

## 🛠️ Teknolojiler

### Frontend
- **React 19.2.0** - Modern UI framework
- **React Router DOM 7.12.0** - Client-side routing
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Vite 7.2.4** - Build tool ve dev server

### İkon Kütüphaneleri
- **Lucide React** - Modern UI ikonları
- **React Icons** - 60+ teknoloji logosu (Simple Icons)

### Geliştirme Araçları
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Git** - Version control

## 📦 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone https://github.com/bulutaraskuru/testportfolio.git
cd testportfolio
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açın.

## 🎯 Kullanım

### Geliştirme Modu
```bash
npm run dev
```
- Hot reload ile development server
- Port: 5173

### Production Build
```bash
npm run build
```
- `dist/` klasörüne optimize edilmiş dosyalar oluşturur
- Minified ve compressed

### Preview
```bash
npm run preview
```
- Production build'i lokal olarak test etme

### Linting
```bash
npm run lint
```

## 📁 Proje Yapısı

```
bulutkuru-portfolio/
├── public/                # Static dosyalar
├── src/
│   ├── components/
│   │   ├── animations/    # Animasyon componentleri
│   │   ├── backgrounds/   # Background efektleri
│   │   ├── layout/        # Navbar, Footer
│   │   ├── sections/      # Hero, About, Skills, Projects, Contact, ProjectDetail
│   │   └── ui/           # Card, ProjectCard, Loading
│   ├── data/             # Data dosyaları
│   ├── hooks/            # Custom hooks (useScrollSpy, useScrollReveal)
│   ├── utils/            # constants.js (merkezi veri yönetimi)
│   ├── assets/           # Resimler, ikonlar
│   ├── App.jsx           # Ana routing component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── dist/                 # Production build çıktısı
├── .htaccess            # Apache/cPanel config
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🎨 Özelleştirme

### 1. Kişisel Bilgileri Güncelleme
`src/utils/constants.js` dosyasını düzenleyin:

```javascript
export const PERSONAL_INFO = {
  name: "İsminiz",
  title: "Ünvanınız",
  email: "email@example.com",
  // ...
};
```

### 2. Projeler Ekleme/Düzenleme
```javascript
export const PROJECTS = [
  {
    id: 1,
    title: "Proje Adı",
    description: "Kısa açıklama",
    fullDescription: "Detaylı açıklama",
    image: "https://images.unsplash.com/...",
    technologies: ["React", "Node.js"],
    detailedTechnologies: {
      "Backend": ["Laravel", "PHP"],
      "Frontend": ["React", "Tailwind CSS"],
      // ...
    },
    features: ["Özellik 1", "Özellik 2"],
    challenges: ["Zorluk 1", "Zorluk 2"],
    outcomes: ["Sonuç 1", "Sonuç 2"],
    duration: "6 ay",
    role: "Full Stack Developer",
    teamSize: "5 kişi",
    liveUrl: "https://demo.com",
    githubUrl: "https://github.com/...",
    featured: true
  }
];
```

### 3. Yetenekler/Teknolojiler Güncelleme
```javascript
export const SKILLS = [
  {
    name: "Teknoloji Adı",
    icon: "SiReact", // react-icons/si'den icon adı
    color: "#61DAFB",
    level: "Expert",
    category: "Frontend"
  }
];
```

### 4. Renk Şeması Değiştirme
`src/index.css` dosyasında:
```css
@theme {
  --color-primary: #8dff69;
}
```

## 🚀 Deployment

### cPanel / Apache Deployment

1. **Build oluşturun**
```bash
npm run build
```

2. **dist/ içeriğini yükleyin**
- cPanel File Manager'ı açın
- `public_html/` klasörüne gidin
- `dist/` klasöründeki TÜM dosyaları yükleyin (klasörün kendisini değil)
- `.htaccess` dosyasının da yüklendiğinden emin olun

3. **Test edin**
- Ana sayfa: `https://domain.com`
- Proje detay: `https://domain.com/project/1`
- Responsive view (mobil/tablet)

### Vercel / Netlify Deployment

**Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**Netlify:**
- Repository'yi Netlify'a bağlayın
- Build command: `npm run build`
- Publish directory: `dist`

### Environment Variables
Gerekirse `.env` dosyası oluşturun:
```env
VITE_API_URL=https://api.example.com
```

## 🔧 Önemli Özellikler

### 1. Lazy Loading
`ProjectDetail` component'i lazy load edilir:
```javascript
const ProjectDetail = lazy(() => import("./components/sections/ProjectDetail"));
```

### 2. Loading States
- İlk yükleme: 1.5s loading ekranı
- Route geçişleri: 300ms loading animasyonu
- Scroll to top her route değişiminde

### 3. Responsive Grid
- Mobil: 3 sütun
- Tablet: 4 sütun
- Desktop: 6 sütun

### 4. SEO & Routing
`.htaccess` dosyası ile SPA routing desteği:
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## 📝 Notlar

- **Icon Import**: Her yeni teknoloji için `react-icons/si`'den import gerekli
- **Image URLs**: Unsplash CDN kullanılıyor (production için kendi resimlerinizi kullanın)
- **Font**: Google Fonts - Urbanist
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

## 🐛 Sorun Giderme

**Problem: Build başarısız**
```bash
npm run build
```
Hata varsa konsolu kontrol edin, genelde import veya syntax hataları

**Problem: Route çalışmıyor (404)**
- `.htaccess` dosyasının `public_html/` içinde olduğundan emin olun
- Apache `mod_rewrite` modülü aktif olmalı

**Problem: İkonlar görünmüyor**
- `react-icons` paketi yüklü mü kontrol edin
- Icon import'ları doğru mu kontrol edin

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👤 İletişim

- **GitHub**: [@bulutaraskuru](https://github.com/bulutaraskuru)
- **Repository**: [testportfolio](https://github.com/bulutaraskuru/testportfolio)

## 🙏 Teşekkürler

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)
- [Simple Icons](https://simpleicons.org/)
- [Unsplash](https://unsplash.com/) (demo resimleri için)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
