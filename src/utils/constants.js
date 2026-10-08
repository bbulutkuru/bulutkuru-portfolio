// Site içeriği — tek kaynak. Metin/işi değiştirmek için yalnız bu dosyayı düzenle.
// Canlı siteden (bulutkuru.com, Nisan 2026) taşındı; ExtraNetwork kaydı 2026-10-07'de eklendi.

export const SITE = {
  url: "https://bulutkuru.com",
  title: "Bulut Kuru - Software Development Coordinator & Senior Backend Architect",
  shortTitle: "Bulut Kuru",
  description:
    "15+ yıllık deneyimle 400+ kurumsal proje, 65 Laravel backend API, 17 Node.js servisi ve 300+ React/Next.js ön yüz geliştirdim. Teknik liderlik, mentorluk ve DevOps alanlarında da deneyimliyim.",
  ogImage: "https://bulutkuru.com/og-image.png",
};

export const EMAILJS = {
  serviceId: "service_y1qq7ga",
  templateId: "template_6sf0yq8",
  publicKey: "u6cBB1CKi0IXL02n9",
};

export const PERSONAL_INFO = {
  name: "Bulut Kuru",
  title: "Software Development Coordinator · Senior Backend Architect · Full Stack Developer · DevOps",
  email: "bbulutkuru@gmail.com",
  location: "Küçükçekmece, İstanbul",
  phone: "+90 531 673 3010",
  github: "https://github.com/bbulutkuru",
  linkedin: "https://linkedin.com/in/bulut-kuru",
  whatsapp: "+905316733010",
  instagram: "https://instagram.com/bulutkuru.php"
};

export const NAV_LINKS = [
  {
    id: "hero",
    label: "Ana Sayfa",
    href: "#hero"
  },
  {
    id: "about",
    label: "Hakkımda",
    href: "#about"
  },
  {
    id: "skills",
    label: "Yetenekler",
    href: "#skills"
  },
  {
    id: "experience",
    label: "Deneyim",
    href: "#experience"
  },
  {
    id: "projects",
    label: "Projeler",
    href: "#projects"
  },
  {
    id: "contact",
    label: "İletişim",
    href: "#contact"
  }
];

export const STATS = [
  {
    label: "Yıl Deneyim",
    value: "15+"
  },
  {
    label: "Tamamlanan Proje",
    value: "400+"
  },
  {
    label: "Kurum Danışmanlığı",
    value: "17"
  },
  {
    label: "Özel Sektör Projesi",
    value: "150+"
  }
];

export const EXPERIENCE = [
  {
    title: "Software Development Coordinator & Technical Lead",
    company: "ExtraNetwork",
    location: "İstanbul",
    period: "2026 – Günümüz",
    duration: "",
    highlights: [
      "Otel teknolojileri platformunun (kanal yönetimi, extranet, rezervasyon ve otel web siteleri) teknik sahipliği ve mimari kararları",
      "Legacy PHP uygulamalarının çok sunuculu altyapıda paralel yayın ve cutover süreçlerinin planlanması ve yürütülmesi",
      "Drone CI tabanlı yayın zinciri, Docker altyapısı ve ortamlar arası tutarlılık denetimleri",
      "Google Search Console, Bing ve Yandex entegrasyonlarıyla çok sayıda otel domain'i için arama görünürlüğü altyapısı",
      "Ürün, muhasebe ve geliştirici ekipleriyle koordinasyon; iş dağıtımı, kod inceleme ve yayın onayı"
    ],
    projects: []
  },
  {
    title: "Software Development Coordinator & Full Stack Team Lead",
    company: "İstanbul Büyükşehir Belediyesi (İBB)",
    location: "İstanbul",
    period: "2017 – 2026",
    duration: "9 Yıl",
    highlights: [
      "186 kurumsal web sitesi ve 250+ web uygulamasından oluşan kamu dijital altyapısının uçtan uca teknik ve mimari liderliği",
      "Laravel MVC ve API-first mimarileri kurum genelinde standartlaştırma; Repository/Service/DTO/Action katmanlı mimari yapısı",
      "8 Linux sunucusunu sıfırdan kurulum; Rancher + Kubernetes, GitLab, Docker, CI/CD pipeline ve Grafana + Loki monitoring",
      "Milyon+ kayıt alan vatandaş başvuru sistemleri ve canlı yayın altyapılarında Redis cache, queue ve event-driven yapılar",
      "10–25 kişilik geliştirici ekiplerinin teknik yönlendirmesi, kod standartları belirleme ve junior/mid-level mentörlük"
    ],
    projects: [
      "Otel Yönetim & Rezervasyon Sistemi",
      "Envanter & Stok Yönetim Sistemi",
      "Task Management Sistemi",
      "Project Management Tools",
      "BYSY — Belediye Yönetim, Proje Yönetim ve İş Yönetim Sistemi",
      "İBB Vatandaş Başvuru Sistemleri — 1000+ başvuru tipi, milyon+ kayıt",
      "Wowza Streaming Server tabanlı yüksek trafikli canlı yayın altyapısı",
      "İtfaiye Uzaktan Eğitim Platformu (LMS)",
      "İstanbul Senin Haber Otomasyonu & İBB Anıt Ağaç Projesi"
    ]
  },
  {
    title: "Senior Full Stack Developer & DevOps Danışmanı",
    company: "Freelance & Kurumsal Danışmanlık",
    location: "",
    period: "2015 – Günümüz",
    duration: "",
    highlights: [
      "5 İlçe Belediyesi — Sunucu altyapısı (Docker + Gitea + Drone CI + Grafana + Loki), CI/CD pipeline ve çok sayıda uygulama geliştirme",
      "Eğitim Kurumu Danışmanlığı (Holding Bünyesi) — yazılım mimarisi, sistem altyapısı ve geliştirme süreçleri danışmanlığı",
      "WhatsApp Lead Otomasyon Sistemi — otomatik lead yönetimi, yönlendirme ve takip sistemi",
      "Gelir/Gider Uygulaması (Multi-tenant + DDD) — kurumun iş akışlarının %40'ını dijitalleştirme",
      "45+ kurumsal web sitesi, 4 e-ticaret sistemi, 3 LMS platformu geliştirme",
      "8 adet sunucu için kurulum, güvenlik hardening ve yedekleme süreçleri"
    ],
    projects: []
  },
  {
    title: "Web Developer & IT Sorumlusu",
    company: "Dora Hospital · Özel Çapa Hastanesi",
    location: "",
    period: "2015 – 2018",
    duration: "",
    highlights: [
      "Hastane bilgi yönetim sistemleri (HBYS) ve hasta içerik yönetim panellerinin geliştirilmesi",
      "Sunucu güvenliği, ağ yönetimi ve uygulama performans iyileştirmeleri"
    ],
    projects: []
  },
  {
    title: "Web Developer",
    company: "Aspera Projeksiyon",
    location: "",
    period: "2010 – 2012",
    duration: "",
    highlights: [
      "PHP tabanlı kurumsal web uygulamaları ve özel yönetim panelleri geliştirilmesi"
    ],
    projects: []
  }
];

export const EDUCATION = [
  {
    degree: "Web Tasarımı ve Kodlama",
    school: "İstanbul Üniversitesi",
    year: "2024"
  },
  {
    degree: "Bilgisayar Programcılığı",
    school: "İstanbul Aydın Üniversitesi",
    year: "2014"
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "İBB Müdürlük Web Siteleri & Admin Panel",
    description: "İstanbul Büyükşehir Belediyesi bünyesinde 185 müdürlük için özel admin panel ve kurumsal web siteleri. 16 milyon vatandaşa hizmet veren dijital altyapı.",
    fullDescription: "İstanbul Büyükşehir Belediyesi bünyesinde 185 müdürlük için geliştirilmiş kurumsal web siteleri ve merkezi yönetim paneli. Modüler yapısı sayesinde her müdürlük kendi içeriğini bağımsız yönetebilirken, merkezi admin panel tüm sitelerin tek noktadan kontrolünü sağlar. 16 milyon vatandaşa ve 100.000+ personele hizmet veren bu platform, yüksek trafiğe dayanıklı ve ölçeklenebilir bir mimaride inşa edilmiştir.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    technologies: [
      "Laravel",
      "React.js",
      "MySQL",
      "Redis",
      "Docker"
    ],
    detailedTechnologies: [
      {
        category: "Backend",
        items: [
          "Laravel",
          "RESTful API",
          "Laravel Sanctum",
          "Laravel Queue",
          "Event/Queue Tabanlı Akışlar"
        ]
      },
      {
        category: "Frontend",
        items: [
          "React.js",
          "Next.js",
          "TailwindCSS",
          "SEO Uyumlu SSR"
        ]
      },
      {
        category: "Database",
        items: [
          "MySQL",
          "Redis Cache",
          "Index/Query Optimizasyonu"
        ]
      },
      {
        category: "DevOps",
        items: [
          "Docker",
          "Nginx",
          "Drone CI",
          "Gitea"
        ]
      }
    ],
    features: [
      "Merkezi admin panel ile 185 site yönetimi",
      "Modüler ve domain bazlı mimari",
      "SEO uyumlu kurumsal web siteleri",
      "İçerik yönetim sistemi (CMS)",
      "Rol ve yetki bazlı erişim kontrolü (RBAC)",
      "Çok dilli içerik desteği",
      "Medya ve dosya yönetimi",
      "Arama ve filtreleme altyapısı",
      "Raporlama ve analitik dashboard",
      "Responsive ve mobil uyumlu tasarım"
    ],
    challenges: [
      "185 farklı müdürlük için ölçeklenebilir mimari tasarımı",
      "Yüksek trafikte performans optimizasyonu",
      "Merkezi yönetim ile bağımsız içerik kontrolü dengesi",
      "Kurumsal güvenlik standartlarına uyumluluk"
    ],
    outcomes: [
      "185 müdürlük sitesi canlıda",
      "16M+ vatandaşa hizmet",
      "100K+ personel kullanımı",
      "99.9% uptime"
    ],
    duration: "Devam ediyor",
    role: "Senior Backend Architect & Team Lead",
    teamSize: "Ekip liderliği",
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 2,
    title: "İBB Proje Siteleri & Yönetim Paneli",
    description: "İstanbul Büyükşehir Belediyesi için 45 proje sitesi ve admin paneli. Kurumsal projelerin tanıtımı, takibi ve yönetimi için geliştirilen platform.",
    fullDescription: "İBB bünyesindeki 45 farklı proje için geliştirilen kurumsal web siteleri ve merkezi yönetim paneli. Her proje sitesi özel tasarımla oluşturulmuş olup, component tabanlı UI, form/wizard akışları ve dashboard özellikleri içerir. Reusable modüller ve Service/Repository yaklaşımı ile sürdürülebilir ve bakımı kolay bir yapı kurulmuştur.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: [
      "Laravel",
      "Vue.js",
      "Svelte",
      "MySQL",
      "Docker"
    ],
    detailedTechnologies: [
      {
        category: "Backend",
        items: [
          "Laravel",
          "RESTful API",
          "Service/Repository Pattern",
          "API Versioning"
        ]
      },
      {
        category: "Frontend",
        items: [
          "Vue/Nuxt",
          "Svelte/SvelteKit",
          "Component Tabanlı UI",
          "Form/Wizard Akışları"
        ]
      },
      {
        category: "Database",
        items: [
          "MySQL",
          "Redis Cache"
        ]
      },
      {
        category: "DevOps",
        items: [
          "Docker",
          "Docker Compose",
          "Nginx",
          "Drone CI"
        ]
      }
    ],
    features: [
      "45 proje sitesi merkezi yönetimi",
      "Component tabanlı UI mimarisi",
      "Form ve wizard akışları",
      "Dashboard ve raporlama",
      "SEO uyumlu kurumsal site geliştirme",
      "Proje ilerleme takibi",
      "Dosya ve medya yönetimi",
      "Dinamik sayfa oluşturucu",
      "API entegrasyonları",
      "Mobil responsive tasarım"
    ],
    challenges: [
      "Farklı proje tiplerini tek altyapıda yönetme",
      "Reusable component ve modül tasarımı",
      "Çoklu frontend framework desteği",
      "Teknik borç azaltma ve sürdürülebilirlik"
    ],
    outcomes: [
      "45 proje sitesi + admin panel",
      "Geliştirme süresi %50 azaldı",
      "Modüler ve yeniden kullanılabilir altyapı",
      "Sıfır kesinti ile yayına alma"
    ],
    duration: "Devam ediyor",
    role: "Senior Full Stack Developer & Team Lead",
    teamSize: "Ekip liderliği",
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 3,
    title: "Kurumsal Otomasyon Sistemleri",
    description: "9 farklı kurumsal otomasyon sistemi: envanter/stok, sipariş/operasyon, başvuru sistemleri. Full stack olarak uçtan uca hayata geçirildi.",
    fullDescription: "İBB bünyesinde geliştirilen 9 kurumsal otomasyon sistemi. Envanter ve stok yönetimi, sipariş ve operasyon takibi, başvuru ve onay süreçleri gibi farklı iş alanlarını kapsayan bu sistemler, PHP/Laravel odağında API-first yaklaşımla geliştirilmiştir. Modüler mimari, veritabanı/Redis performans katmanı ve ölçeklenebilir altyapılarla yüksek trafikte stabil çalışan sistemler kurulmuştur.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    technologies: [
      "Laravel",
      "React.js",
      "MySQL",
      "Redis",
      "Docker"
    ],
    detailedTechnologies: [
      {
        category: "Backend",
        items: [
          "Laravel",
          "API-First Yaklaşım",
          "RBAC/Permission",
          "Event/Queue Tabanlı Akışlar",
          "SOAP/3rd Party Entegrasyonlar"
        ]
      },
      {
        category: "Frontend",
        items: [
          "React.js",
          "Admin Panel",
          "Dashboard",
          "Raporlama UI"
        ]
      },
      {
        category: "Database",
        items: [
          "MySQL",
          "Redis Cache/Queue",
          "Index/Query Optimizasyonu"
        ]
      },
      {
        category: "DevOps",
        items: [
          "Docker",
          "Nginx",
          "Drone CI",
          "Gitea"
        ]
      }
    ],
    features: [
      "Envanter ve stok yönetim sistemi",
      "Sipariş ve operasyon takibi",
      "Başvuru ve onay süreçleri",
      "JWT/OAuth2 authentication",
      "Rol ve yetki yönetimi (RBAC)",
      "Entegrasyon servisleri (SOAP/3rd party)",
      "Raporlama ve analitik dashboard",
      "Queue tabanlı arka plan işlemleri",
      "Global exception handling",
      "API dokümantasyonu (Swagger/OpenAPI)"
    ],
    challenges: [
      "Farklı iş süreçlerinin modüler mimariyle yönetimi",
      "Yüksek trafikte performans ve ölçeklenebilirlik",
      "Üçüncü parti servis entegrasyonları",
      "Karmaşık yetkilendirme ve onay akışları"
    ],
    outcomes: [
      "9 kurumsal otomasyon sistemi",
      "100K+ personel kullanımı",
      "İş süreçlerinde %60 verimlilik artışı",
      "Sıfır veri kaybı ile güvenli operasyon"
    ],
    duration: "Devam ediyor",
    role: "Senior Backend Architect & Team Lead",
    teamSize: "Ekip liderliği",
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 4,
    title: "Yüksek Trafikli API & Performans Altyapısı",
    description: "16 milyon vatandaş ve 100K+ personele hizmet veren yüksek trafikli API altyapısı. MySQL optimizasyonu, Redis cache/queue ve performans katmanı.",
    fullDescription: "İBB ölçeğinde hizmet veren dijital servislerin API altyapısı ve performans optimizasyonu. MySQL index/query tuning, Redis cache ve queue stratejileri, raporlama optimizasyonları ile yüksek trafikte stabil ve hızlı yanıt veren sistemler tasarlandı. API-first yaklaşım, versiyonlama ve standartlar ile uzun ömürlü, sürdürülebilir bir backend mimarisi kuruldu.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    technologies: [
      "Laravel",
      "MySQL",
      "Redis",
      "Nginx",
      "Docker"
    ],
    detailedTechnologies: [
      {
        category: "Backend",
        items: [
          "Laravel",
          "RESTful API",
          "API Versioning & Standards",
          "Global Exception Handling"
        ]
      },
      {
        category: "Performans",
        items: [
          "Redis Cache",
          "Redis Queue",
          "Laravel Horizon",
          "Query Optimization"
        ]
      },
      {
        category: "Database",
        items: [
          "MySQL",
          "Index Tuning",
          "Raporlama Optimizasyonu",
          "Database Modeling"
        ]
      },
      {
        category: "Altyapı",
        items: [
          "Nginx Reverse Proxy",
          "Docker",
          "Load Balancing",
          "SSL/TLS"
        ]
      }
    ],
    features: [
      "MySQL index ve query optimizasyonu",
      "Redis caching stratejileri",
      "Queue tabanlı asenkron işlemler",
      "API rate limiting ve throttling",
      "Raporlama ve analitik performans iyileştirmesi",
      "Database modeling ve normalizasyon",
      "JWT/OAuth2 authentication",
      "API versioning ve standartlar",
      "Ölçeklenebilir mimari tasarım",
      "Performans monitoring ve alerting"
    ],
    challenges: [
      "16M vatandaş ölçeğinde performans",
      "Büyük veri setlerinde raporlama hızı",
      "Cache invalidation stratejileri",
      "Zero-downtime deployment"
    ],
    outcomes: [
      "Response time %70 iyileşti",
      "Database query süreleri %80 azaldı",
      "99.9% uptime",
      "Ölçeklenebilir ve stabil altyapı"
    ],
    duration: "Devam ediyor",
    role: "Senior Backend Architect",
    teamSize: "Ekip liderliği",
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: 5,
    title: "DevOps & CI/CD Altyapısı",
    description: "Docker tabanlı çalışma kültürü, Gitea + Drone CI ile CI/CD pipeline, Nginx ve Linux altyapısı ile kurumsal DevOps süreçleri.",
    fullDescription: "Docker tabanlı containerized deployment, Gitea ile self-hosted Git yönetimi ve Drone CI ile otomatik CI/CD pipeline kurulumu. Nginx reverse proxy, SSL/TLS (Let's Encrypt), security headers (HSTS, CSP) ve backup/restore süreçlerini kapsayan kapsamlı DevOps altyapısı. Güvenli, hızlı ve sürdürülebilir bir dağıtım kültürü oluşturuldu.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    technologies: [
      "Docker",
      "Nginx",
      "Linux",
      "Drone CI",
      "Gitea"
    ],
    detailedTechnologies: [
      {
        category: "Containerization",
        items: [
          "Docker",
          "Docker Compose",
          "Containerized Laravel Deployments"
        ]
      },
      {
        category: "CI/CD",
        items: [
          "Drone CI",
          "Gitea",
          "Automated Testing",
          "Auto Deploy"
        ]
      },
      {
        category: "Altyapı",
        items: [
          "Nginx Reverse Proxy",
          "Linux System Administration",
          "SSL/TLS (Certbot)"
        ]
      },
      {
        category: "Güvenlik",
        items: [
          "Security Headers (HSTS, CSP)",
          "DNS & Cloudflare",
          "Backup/Restore"
        ]
      }
    ],
    features: [
      "Containerized Laravel deployment",
      "Otomatik CI/CD pipeline",
      "Self-hosted Git yönetimi (Gitea)",
      "Nginx reverse proxy konfigürasyonu",
      "SSL/TLS sertifika yönetimi",
      "Security headers implementasyonu",
      "Otomatik backup/restore süreçleri",
      "DNS ve Cloudflare yönetimi",
      "Portainer ile container yönetimi",
      "Güvenli ve hızlı deployment kültürü"
    ],
    challenges: [
      "Çoklu proje için Docker orchestration",
      "Zero-downtime deployment stratejisi",
      "Güvenlik standartlarına tam uyum",
      "Self-hosted altyapı bakım ve izleme"
    ],
    outcomes: [
      "Deployment süresi %90 azaldı",
      "Sıfır kesinti ile güncelleme",
      "Tüm projeler containerized",
      "Otomatik ve güvenli CI/CD"
    ],
    duration: "Devam ediyor",
    role: "DevOps & Backend Architect",
    teamSize: "Ekip liderliği",
    liveUrl: "",
    githubUrl: "",
    featured: false
  },
  {
    id: 6,
    title: "Merkezi Loglama & Monitoring Sistemi",
    description: "Grafana, Loki ve Prometheus ile merkezi loglama, izleme ve alarm sistemi. Tüm servislerin sağlık durumu tek panelden takip.",
    fullDescription: "Tüm kurumsal servislerin merkezi olarak loglandığı, izlendiği ve alarmlandığı monitoring altyapısı. Grafana dashboard'ları ile görsel izleme, Loki ile log aggregation, Prometheus ile metrik toplama ve alert kuralları ile proaktif sorun tespiti sağlanmaktadır.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: [
      "Grafana",
      "Prometheus",
      "Loki",
      "Docker",
      "Nginx"
    ],
    detailedTechnologies: [
      {
        category: "Monitoring",
        items: [
          "Grafana",
          "Prometheus",
          "Alert Manager"
        ]
      },
      {
        category: "Logging",
        items: [
          "Loki",
          "Log Aggregation",
          "Structured Logging"
        ]
      },
      {
        category: "Error Tracking",
        items: [
          "Sentry",
          "Performance Monitoring"
        ]
      },
      {
        category: "Altyapı",
        items: [
          "Docker",
          "Nginx",
          "Linux"
        ]
      }
    ],
    features: [
      "Merkezi log toplama ve analiz",
      "Gerçek zamanlı dashboard'lar",
      "Otomatik alarm ve bildirim sistemi",
      "Performans metrikleri izleme",
      "Error tracking ve raporlama (Sentry)",
      "Servis sağlık kontrolü",
      "Kaynak kullanımı izleme",
      "Özel dashboard tasarımları",
      "Log arama ve filtreleme",
      "Trend analizi ve kapasite planlama"
    ],
    challenges: [
      "Yüksek hacimli log verisi yönetimi",
      "Anlamlı alarm kuralları oluşturma",
      "Çoklu servisten veri toplama",
      "Performans etkisi minimize etme"
    ],
    outcomes: [
      "Sorun tespit süresi %80 azaldı",
      "Proaktif sorun önleme",
      "Tüm servisler merkezi izleme altında",
      "Detaylı performans görünürlüğü"
    ],
    duration: "Devam ediyor",
    role: "DevOps & Backend Architect",
    teamSize: "Ekip liderliği",
    liveUrl: "",
    githubUrl: "",
    featured: false
  },
  {
    id: 7,
    title: "Kurumsal Yetkilendirme & Auth Sistemi",
    description: "JWT/OAuth2 tabanlı authentication, RBAC/Permission sistemi. Tüm kurumsal uygulamalar için merkezi kimlik doğrulama ve yetkilendirme altyapısı.",
    fullDescription: "Tüm kurumsal uygulamaların kimlik doğrulama ve yetkilendirme ihtiyaçlarını karşılayan merkezi auth sistemi. JWT ve OAuth2 protokolleri ile güvenli authentication, RBAC (Role-Based Access Control) ile esnek permission yönetimi, entegrasyon servisleri ile 3rd party sistemlere bağlanma imkanı sunar.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    technologies: [
      "Laravel",
      "Redis",
      "MySQL",
      "Docker"
    ],
    detailedTechnologies: [
      {
        category: "Authentication",
        items: [
          "JWT",
          "OAuth2",
          "Laravel Sanctum",
          "Token Management"
        ]
      },
      {
        category: "Authorization",
        items: [
          "RBAC",
          "Permission Systems",
          "Policy-Based Access"
        ]
      },
      {
        category: "Entegrasyon",
        items: [
          "SOAP Servisleri",
          "3rd Party Auth",
          "SSO"
        ]
      },
      {
        category: "Güvenlik",
        items: [
          "Rate Limiting",
          "Brute Force Protection",
          "Audit Logging"
        ]
      }
    ],
    features: [
      "JWT/OAuth2 authentication",
      "Role-Based Access Control (RBAC)",
      "Dinamik permission yönetimi",
      "Merkezi kullanıcı yönetimi",
      "SOAP ve 3rd party entegrasyonlar",
      "Token refresh ve revoke mekanizması",
      "Audit log ve güvenlik raporları",
      "Rate limiting ve brute force koruması",
      "Multi-tenant desteği",
      "API bazlı erişim kontrolü"
    ],
    challenges: [
      "Çoklu uygulama için merkezi auth",
      "Karmaşık rol hiyerarşisi yönetimi",
      "Legacy sistem entegrasyonları (SOAP)",
      "Güvenlik standartlarına tam uyum"
    ],
    outcomes: [
      "Tüm uygulamalar merkezi auth altında",
      "Güvenlik açığı sıfır",
      "Esnek ve ölçeklenebilir yetki sistemi",
      "Audit trail ile tam izlenebilirlik"
    ],
    duration: "Devam ediyor",
    role: "Senior Backend Architect",
    teamSize: "Ekip liderliği",
    liveUrl: "",
    githubUrl: "",
    featured: false
  },
  {
    id: 8,
    title: "Teknik Liderlik & Mentorluk",
    description: "Kod standartları (PSR-12), code review, mentorluk, teknik planlama ve ekip koordinasyonu. Ekip içi best practices ve kalite kültürü oluşturma.",
    fullDescription: "Yazılım ekibinin teknik liderliği, kod kalitesi standartlarının belirlenmesi ve uygulanması, code review süreçlerinin yönetimi, junior/mid-level geliştiricilere mentorluk ve teknik roadmap planlaması. PSR-12 standartları, clean code prensipleri ve SOLID principles odağında ekip genelinde kalite kültürü oluşturulması.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    technologies: [
      "Git",
      "Gitea",
      "Code Review",
      "PSR-12",
      "SOLID"
    ],
    detailedTechnologies: [
      {
        category: "Kod Kalitesi",
        items: [
          "PSR-12 Standards",
          "Clean Code",
          "SOLID Principles",
          "Design Patterns"
        ]
      },
      {
        category: "Süreç Yönetimi",
        items: [
          "Code Review",
          "Git Flow",
          "Technical Planning",
          "Roadmap"
        ]
      },
      {
        category: "Mentorluk",
        items: [
          "Pair Programming",
          "Knowledge Sharing",
          "Technical Workshops"
        ]
      },
      {
        category: "Araçlar",
        items: [
          "Gitea",
          "Drone CI",
          "Portainer",
          "Postman"
        ]
      }
    ],
    features: [
      "Kod standartları belirleme ve uygulama (PSR-12)",
      "Code review süreçleri yönetimi",
      "Junior/mid-level geliştiricilere mentorluk",
      "Teknik planlama ve roadmap oluşturma",
      "Refactoring ve teknik borç yönetimi",
      "Best practices dokümantasyonu",
      "Ekip içi teknik eğitimler",
      "Mimari karar süreçleri",
      "Performance review ve feedback",
      "Agile/Scrum süreç koordinasyonu"
    ],
    challenges: [
      "Farklı seviyedeki geliştiricileri aynı standartta tutma",
      "Teknik borç ile yeni özellik dengesini sağlama",
      "Bilgi paylaşımı ve dokümantasyon kültürü",
      "Hızlı teslimat ile kalite arasındaki denge"
    ],
    outcomes: [
      "Kod kalitesi ve okunabilirlik arttı",
      "Ekip verimliliği %40 yükseldi",
      "Bug oranı %50 azaldı",
      "Sürdürülebilir geliştirme kültürü"
    ],
    duration: "Devam ediyor",
    role: "Team Lead & Mentor",
    teamSize: "Ekip liderliği",
    liveUrl: "",
    githubUrl: "",
    featured: false
  }
];

export const SKILLS = [
  {
    name: "PHP",
    level: "Expert",
    category: "Backend",
    icon: "SiPhp",
    color: "#777BB4"
  },
  {
    name: "Laravel",
    level: "Expert",
    category: "Backend",
    icon: "SiLaravel",
    color: "#FF2D20"
  },
  {
    name: "Node.js",
    level: "Advanced",
    category: "Backend",
    icon: "SiNodedotjs",
    color: "#339933"
  },
  {
    name: "Express.js",
    level: "Advanced",
    category: "Backend",
    icon: "SiExpress",
    color: "#FFFFFF"
  },
  {
    name: "NestJS",
    level: "Advanced",
    category: "Backend",
    icon: "SiNestjs",
    color: "#E0234E"
  },
  {
    name: "OOP & SOLID Principles",
    level: "Expert",
    category: "Backend",
    color: "#3B82F6"
  },
  {
    name: "Design Patterns",
    level: "Advanced",
    category: "Backend",
    color: "#8B5CF6"
  },
  {
    name: "RESTful API Design",
    level: "Expert",
    category: "Backend",
    color: "#EC4899"
  },
  {
    name: "API Versioning & Standards",
    level: "Advanced",
    category: "Backend",
    color: "#10B981"
  },
  {
    name: "Global Exception Handling",
    level: "Advanced",
    category: "Backend",
    color: "#F59E0B"
  },
  {
    name: "Queue & Jobs (Laravel Queues)",
    level: "Advanced",
    category: "Backend",
    color: "#EF4444"
  },
  {
    name: "Caching Strategies (Redis)",
    level: "Advanced",
    category: "Backend",
    color: "#06B6D4"
  },
  {
    name: "Microservice Architecture",
    level: "Advanced",
    category: "Backend",
    color: "#84CC16"
  },
  {
    name: "Authentication & Authorization (Sanctum, JWT)",
    level: "Expert",
    category: "Backend",
    color: "#F97316"
  },
  {
    name: "Role & Permission Systems",
    level: "Advanced",
    category: "Backend",
    color: "#6366F1"
  },
  {
    name: "API Documentation (Swagger / OpenAPI)",
    level: "Advanced",
    category: "Backend",
    color: "#14B8A6"
  },
  {
    name: "JavaScript (ES6+)",
    level: "Advanced",
    category: "Frontend",
    icon: "SiJavascript",
    color: "#F7DF1E"
  },
  {
    name: "React.js",
    level: "Advanced",
    category: "Frontend",
    icon: "SiReact",
    color: "#61DAFB"
  },
  {
    name: "Next.js",
    level: "Advanced",
    category: "Frontend",
    icon: "SiNextdotjs",
    color: "#FFFFFF"
  },
  {
    name: "HTML5",
    level: "Advanced",
    category: "Frontend",
    icon: "SiHtml5",
    color: "#E34F26"
  },
  {
    name: "CSS3",
    level: "Advanced",
    category: "Frontend",
    icon: "SiCss3",
    color: "#1572B6"
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    category: "Frontend",
    icon: "SiTailwindcss",
    color: "#06B6D4"
  },
  {
    name: "Bootstrap",
    level: "Advanced",
    category: "Frontend",
    icon: "SiBootstrap",
    color: "#7952B3"
  },
  {
    name: "UI Component Integration (Metronic)",
    level: "Advanced",
    category: "Frontend",
    color: "#A855F7"
  },
  {
    name: "MySQL",
    level: "Expert",
    category: "Database",
    icon: "SiMysql",
    color: "#4479A1"
  },
  {
    name: "PostgreSQL",
    level: "Advanced",
    category: "Database",
    icon: "SiPostgresql",
    color: "#4169E1"
  },
  {
    name: "Redis",
    level: "Advanced",
    category: "Database",
    icon: "SiRedis",
    color: "#DC382D"
  },
  {
    name: "Database Modeling",
    level: "Expert",
    category: "Database",
    color: "#3B82F6"
  },
  {
    name: "Database Optimization",
    level: "Advanced",
    category: "Database",
    color: "#8B5CF6"
  },
  {
    name: "Indexing & Query Tuning",
    level: "Advanced",
    category: "Database",
    color: "#EC4899"
  },
  {
    name: "Linux System Administration",
    level: "Expert",
    category: "DevOps",
    icon: "SiLinux",
    color: "#FCC624"
  },
  {
    name: "Nginx Reverse Proxy",
    level: "Expert",
    category: "DevOps",
    icon: "SiNginx",
    color: "#009639"
  },
  {
    name: "SSL/TLS (Let's Encrypt, Certbot)",
    level: "Expert",
    category: "DevOps",
    color: "#10B981"
  },
  {
    name: "Security Headers (HSTS, CSP, etc.)",
    level: "Advanced",
    category: "DevOps",
    color: "#F59E0B"
  },
  {
    name: "Docker & Docker Compose",
    level: "Expert",
    category: "DevOps",
    icon: "SiDocker",
    color: "#2496ED"
  },
  {
    name: "Containerized Laravel Deployments",
    level: "Expert",
    category: "DevOps",
    color: "#EF4444"
  },
  {
    name: "CI/CD (DroneCI, GitHub Actions)",
    level: "Advanced",
    category: "DevOps",
    icon: "SiGithubactions",
    color: "#2088FF"
  },
  {
    name: "Log Monitoring (Grafana, Loki)",
    level: "Advanced",
    category: "DevOps",
    icon: "SiGrafana",
    color: "#F46800"
  },
  {
    name: "Error Monitoring (Sentry)",
    level: "Advanced",
    category: "DevOps",
    icon: "SiSentry",
    color: "#362D59"
  },
  {
    name: "Performance Monitoring",
    level: "Advanced",
    category: "DevOps",
    color: "#06B6D4"
  },
  {
    name: "DNS & Cloudflare Management",
    level: "Advanced",
    category: "DevOps",
    color: "#84CC16"
  },
  {
    name: "Git / GitFlow",
    level: "Expert",
    category: "Tools",
    icon: "SiGit",
    color: "#F05032"
  },
  {
    name: "Gitea / GitLab",
    level: "Advanced",
    category: "Tools",
    icon: "SiGitlab",
    color: "#FC6D26"
  },
  {
    name: "Portainer",
    level: "Advanced",
    category: "Tools",
    color: "#13BEF9"
  },
  {
    name: "Postman",
    level: "Advanced",
    category: "Tools",
    icon: "SiPostman",
    color: "#FF6C37"
  },
  {
    name: "Software Architecture",
    level: "Expert",
    category: "Architecture",
    color: "#3B82F6"
  },
  {
    name: "MVC & Layered Architecture",
    level: "Expert",
    category: "Architecture",
    color: "#8B5CF6"
  },
  {
    name: "Domain-Driven Design (DDD) Basics",
    level: "Advanced",
    category: "Architecture",
    color: "#EC4899"
  },
  {
    name: "Code Quality & Standards (PSR-12)",
    level: "Expert",
    category: "Architecture",
    color: "#10B981"
  },
  {
    name: "Refactoring & Clean Code",
    level: "Expert",
    category: "Architecture",
    color: "#F59E0B"
  },
  {
    name: "Svelte / SvelteKit",
    level: "Advanced",
    category: "Frontend",
    icon: "SiSvelte",
    color: "#FF3E00"
  },
  {
    name: "TypeScript",
    level: "Advanced",
    category: "Frontend",
    icon: "SiTypescript",
    color: "#3178C6"
  },
  {
    name: "shadcn/ui",
    level: "Advanced",
    category: "Frontend",
    color: "#FFFFFF"
  },
  {
    name: "MongoDB",
    level: "Advanced",
    category: "Database",
    icon: "SiMongodb",
    color: "#47A248"
  },
  {
    name: "Kubernetes & Rancher",
    level: "Advanced",
    category: "DevOps",
    icon: "SiKubernetes",
    color: "#326CE5"
  },
  {
    name: "Wowza Streaming Server",
    level: "Advanced",
    category: "Streaming",
    color: "#F97316"
  },
  {
    name: "UI Asset Preparation (Web)",
    level: "Advanced",
    category: "Design",
    color: "#EF4444"
  },
  {
    name: "Team Leadership & Coordination",
    level: "Senior",
    category: "Management",
    color: "#3B82F6"
  },
  {
    name: "Code Review & Mentorship",
    level: "Expert",
    category: "Management",
    color: "#8B5CF6"
  },
  {
    name: "Technical Planning & Roadmaps",
    level: "Advanced",
    category: "Management",
    color: "#EC4899"
  }
];

export const ABOUT_STATS = [{ label: "Yıllık Deneyim", value: "15+" }];

export const SERVICES = [
  {
    title: "Backend Mimarisi & API Tasarımı",
    description: "Laravel/PHP ve NestJS/Node.js ile REST API, JWT/OAuth2 authentication, RBAC yetkilendirme, SOAP/3rd party entegrasyonlar ve event/queue tabanlı ölçeklenebilir backend çözümleri.",
    icon: "server"
  },
  {
    title: "Yüksek Trafikli Sistemler & Performans",
    description: "MySQL index/query optimizasyonu, Redis cache/queue stratejileri, raporlama performans iyileştirmeleri. 16 milyon vatandaş ölçeğinde stabil ve hızlı çalışan altyapılar.",
    icon: "gauge"
  },
  {
    title: "Kurumsal Uygulamalar & Admin Paneller",
    description: "185 müdürlük sitesi, 45 proje sitesi ve 9 otomasyon sistemi deneyimi. Envanter/stok, sipariş/operasyon ve başvuru süreçleri için uçtan uca kurumsal çözümler.",
    icon: "layout"
  },
  {
    title: "Frontend Geliştirme & Kurumsal Web",
    description: "React/Next.js, Vue/Nuxt ve Svelte/SvelteKit ile yönetim paneli, dashboard ve SEO uyumlu kurumsal site geliştirme. Component tabanlı UI, form/wizard akışları.",
    icon: "monitor"
  },
  {
    title: "DevOps & CI/CD Altyapısı",
    description: "Docker containerized deployment, Gitea + Drone CI ile otomatik pipeline, Nginx reverse proxy, SSL/TLS, güvenlik header'ları ve Grafana/Loki/Sentry ile merkezi izleme.",
    icon: "cloud"
  },
  {
    title: "Teknik Liderlik & Mentorluk",
    description: "PSR-12 kod standartları, code review süreçleri, junior/mid-level geliştiricilere mentorluk, teknik planlama ve roadmap oluşturma. Ekip genelinde kalite kültürü.",
    icon: "users"
  }
];
