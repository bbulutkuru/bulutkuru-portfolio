export const PERSONAL_INFO = {
  name: "Bulut Kuru",
  title:
    "Senior Full Stack Developer | PHP & Laravel Expert | React.js Specialist | Team Leader",
  email: "info@bulutkuru.com",
  location: "Turkey/İstanbul",
  phone: "+90 531 673 3010",
  github: " ",
  linkedin: "https://linkedin.com/in/bulutkuru",
  instagram: "",
};

export const NAV_LINKS = [
  { id: "hero", label: "Ana Sayfa", href: "#hero" },
  { id: "about", label: "Hakkımda", href: "#about" },
  { id: "skills", label: "Yetenekler", href: "#skills" },
  { id: "projects", label: "Projeler", href: "#projects" },
  { id: "contact", label: "İletişim", href: "#contact" },
];

export const STATS = [
  { label: "Tecrübe", value: "12+" },
  { label: "Tamamlanan Proje", value: "260+" },
  { label: "Teknoloji", value: "15+" },
  { label: "Müşteri Memnuniyeti", value: "95%" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Laravel ve React.js kullanılarak geliştirilmiş modern e-ticaret platformu. Ödeme entegrasyonları, stok yönetimi, sipariş takibi ve admin paneli içerir.",
    fullDescription:
      "Bu proje, B2C ve B2B müşterilere hizmet veren kapsamlı bir e-ticaret platformudur. Mikroservis mimarisi kullanılarak geliştirilmiş olup, yüksek trafiğe dayanıklı ve ölçeklenebilir bir yapıya sahiptir. Platform, ödeme entegrasyonları, gelişmiş stok yönetimi, sipariş takibi, müşteri yönetimi ve güçlü bir admin paneli içermektedir.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["Laravel", "React.js", "MySQL", "Redis", "Docker"],
    detailedTechnologies: [
      {
        category: "Backend",
        items: [
          "Laravel 10",
          "RESTful API",
          "Laravel Queue",
          "Laravel Sanctum",
        ],
      },
      {
        category: "Frontend",
        items: ["React.js 18", "Redux Toolkit", "TailwindCSS", "React Query"],
      },
      {
        category: "Database",
        items: ["MySQL 8", "Redis Cache", "Elasticsearch"],
      },
      {
        category: "DevOps",
        items: ["Docker", "Docker Compose", "Nginx", "GitHub Actions"],
      },
      {
        category: "Entegrasyonlar",
        items: ["Stripe Payment", "PayPal", "Cargo API", "SMS Gateway"],
      },
    ],
    features: [
      "Çok dilli destek (TR, EN, DE)",
      "Gelişmiş ürün filtreleme ve arama",
      "Sepet ve favori listesi yönetimi",
      "Çoklu ödeme yöntemleri",
      "Gerçek zamanlı stok takibi",
      "Sipariş durum bildirimleri",
      "Kullanıcı yorumları ve puanlama sistemi",
      "Admin paneli ile kapsamlı yönetim",
      "Kupon ve kampanya sistemi",
      "Detaylı raporlama ve analitik dashboard",
    ],
    challenges: [
      "Yüksek trafikte performans optimizasyonu",
      "Gerçek zamanlı stok senkronizasyonu",
      "Çoklu ödeme gateway entegrasyonu",
      "SEO optimizasyonu ve sayfa hızı iyileştirmeleri",
    ],
    outcomes: [
      "260K+ aktif kullanıcı",
      "Sayfa yükleme süresi %65 azaldı",
      "Aylık 1.5M+ işlem hacmi",
      "99.9% uptime garantisi",
    ],
    duration: "8 ay",
    role: "Senior Full Stack Developer & Team Lead",
    teamSize: "6 kişi",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Real-time Chat Application",
    description:
      "WebSocket teknolojisi kullanılarak geliştirilmiş gerçek zamanlı sohbet uygulaması. Grup sohbetleri, dosya paylaşımı ve bildirim sistemi.",
    fullDescription:
      "Kurumsal kullanım için tasarlanmış gerçek zamanlı mesajlaşma platformu. WebSocket protokolü ile anlık mesajlaşma, grup sohbetleri, dosya paylaşımı ve bildirim sistemi sunmaktadır. End-to-end şifreleme ile güvenli iletişim sağlar.",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
    technologies: ["Laravel", "Vue.js", "WebSocket", "PostgreSQL"],
    detailedTechnologies: [
      {
        category: "Backend",
        items: [
          "Laravel 10",
          "Laravel WebSockets",
          "Pusher",
          "Laravel Broadcasting",
        ],
      },
      {
        category: "Frontend",
        items: ["Vue.js 3", "Vuex", "Socket.io Client", "Element Plus UI"],
      },
      {
        category: "Database",
        items: ["PostgreSQL 14", "Redis Pub/Sub"],
      },
      {
        category: "Infrastructure",
        items: ["WebSocket Server", "Load Balancer", "CDN"],
      },
    ],
    features: [
      "Gerçek zamanlı mesajlaşma",
      "Grup sohbetleri (max 500 kişi)",
      "Dosya ve medya paylaşımı",
      "Sesli ve görüntülü arama",
      "Mesaj arama ve filtreleme",
      "Okundu bilgisi ve yazıyor göstergesi",
      "Emoji ve GIF desteği",
      "Bildirim sistemi (push, email, SMS)",
      "Mesaj silme ve düzenleme",
      "Admin paneli ile kullanıcı yönetimi",
    ],
    challenges: [
      "Binlerce eşzamanlı bağlantı yönetimi",
      "Mesaj sıralama ve senkronizasyon",
      "Dosya yükleme ve optimizasyon",
      "WebSocket sunucu ölçeklendirme",
    ],
    outcomes: [
      "50K+ aktif kullanıcı",
      "100ms altında mesaj iletimi",
      "500+ eşzamanlı grup sohbeti",
      "15M+ günlük mesaj trafiği",
    ],
    duration: "5 ay",
    role: "Lead Backend Developer",
    teamSize: "4 kişi",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Project Management System",
    description:
      "Agile metodolojisini destekleyen proje yönetim sistemi. Sprint planlama, task yönetimi, zaman takibi ve raporlama özellikleri.",
    fullDescription:
      "Agile ve Scrum metodolojisini tam anlamıyla destekleyen kurumsal proje yönetim platformu. Ekiplerin işbirliğini artıran, sprint planlama, task yönetimi, zaman takibi ve detaylı raporlama özellikleri içeren kapsamlı bir çözüm.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    technologies: ["Laravel", "React.js", "PostgreSQL", "Redis"],
    detailedTechnologies: [
      {
        category: "Backend",
        items: [
          "Laravel 10",
          "RESTful API",
          "Laravel Sanctum",
          "Laravel Events",
        ],
      },
      {
        category: "Frontend",
        items: ["React.js 18", "Zustand", "Ant Design", "React DnD"],
      },
      { category: "Database", items: ["PostgreSQL 14", "Redis Cache"] },
      { category: "DevOps", items: ["Docker", "GitLab CI/CD", "Nginx"] },
    ],
    features: [
      "Sprint planlama ve yönetimi",
      "Kanban board ile görsel task takibi",
      "Drag & drop ile task taşıma",
      "Zaman takibi ve timesheet",
      "Gantt chart ile proje timeline",
      "Ekip üyelerine task atama",
      "Yorum ve dosya ekleme",
      "Bildirim sistemi",
      "Burndown chart ve velocity raporları",
      "Dashboard ve analytics",
    ],
    challenges: [
      "Real-time data synchronization",
      "Karmaşık izin ve rol yönetimi",
      "Drag & drop performansı",
      "Çoklu proje yönetimi",
    ],
    outcomes: [
      "80+ kurumsal müşteri",
      "Proje teslim süresi %40 azaldı",
      "Team collaboration %60 arttı",
      "5000+ günlük aktif kullanıcı",
    ],
    duration: "6 ay",
    role: "Full Stack Developer",
    teamSize: "5 kişi",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "CRM & Sales Dashboard",
    description:
      "Satış ekipleri için özel geliştirilmiş CRM sistemi. Müşteri yönetimi, satış takibi, raporlama ve analitik dashboard.",
    fullDescription:
      "B2B satış ekipleri için optimize edilmiş müşteri ilişkileri yönetim sistemi. Lead yönetimi, satış hunisi takibi, müşteri analizi ve kapsamlı raporlama özellikleri ile satış süreçlerini kolaylaştırır.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["Laravel", "Svelte", "MySQL", "Docker"],
    detailedTechnologies: [
      {
        category: "Backend",
        items: ["Laravel 10", "RESTful API", "Laravel Excel", "Laravel PDF"],
      },
      {
        category: "Frontend",
        items: ["Svelte 4", "SvelteKit", "Chart.js", "TailwindCSS"],
      },
      { category: "Database", items: ["MySQL 8", "Redis"] },
      { category: "DevOps", items: ["Docker", "Docker Compose", "Nginx"] },
    ],
    features: [
      "Lead ve opportunity yönetimi",
      "Satış hunisi (pipeline) görselleştirme",
      "Müşteri profili ve etkileşim geçmişi",
      "Email ve telefon entegrasyonu",
      "Görev ve randevu yönetimi",
      "Teklif ve fatura oluşturma",
      "Satış raporları ve forecast",
      "Dashboard ile KPI takibi",
      "Müşteri segmentasyonu",
      "Mobil responsive tasarım",
    ],
    challenges: [
      "Karmaşık satış süreçleri modelleme",
      "Büyük veri setleri ile performans",
      "Email senkronizasyonu",
      "Çoklu pipeline yönetimi",
    ],
    outcomes: [
      "150+ satış ekibi kullanıyor",
      "Satış döngüsü %35 kısaldı",
      "Lead dönüşüm oranı %25 arttı",
      "100K+ müşteri kaydı",
    ],
    duration: "5 ay",
    role: "Lead Developer",
    teamSize: "4 kişi",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "API Gateway & Microservices",
    description:
      "Mikroservis mimarisi ile geliştirilmiş ölçeklenebilir API Gateway. Rate limiting, authentication ve monitoring özellikleri.",
    fullDescription:
      "Yüksek trafikli uygulamalar için tasarlanmış ölçeklenebilir API Gateway. Mikroservis mimarisi, rate limiting, authentication, load balancing ve monitoring özellikleri ile güvenli ve performanslı API yönetimi sağlar.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    technologies: ["Laravel", "Docker", "Nginx", "Redis", "PostgreSQL"],
    detailedTechnologies: [
      {
        category: "Backend",
        items: [
          "Laravel 10",
          "API Gateway Pattern",
          "Service Mesh",
          "Event Sourcing",
        ],
      },
      {
        category: "Cache & Queue",
        items: ["Redis", "RabbitMQ", "Laravel Horizon"],
      },
      { category: "Database", items: ["PostgreSQL 14", "MongoDB"] },
      {
        category: "DevOps",
        items: ["Docker Swarm", "Kubernetes", "Nginx", "Grafana", "Prometheus"],
      },
    ],
    features: [
      "API Gateway yönetimi",
      "Rate limiting ve throttling",
      "JWT authentication",
      "Request/response transformation",
      "Load balancing",
      "Circuit breaker pattern",
      "Service discovery",
      "API versioning",
      "Monitoring ve logging",
      "Auto-scaling",
    ],
    challenges: [
      "Mikroservis orchestration",
      "Distributed tracing",
      "Service health monitoring",
      "Zero-downtime deployment",
    ],
    outcomes: [
      "10M+ günlük request",
      "99.99% uptime",
      "Response time < 50ms",
      "20+ mikroservis entegrasyonu",
    ],
    duration: "7 ay",
    role: "Senior Backend Developer",
    teamSize: "6 kişi",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Learning Management System",
    description:
      "Online eğitim platformu. Video dersleri, quiz sistemi, sertifika yönetimi ve öğrenci takip sistemi içerir.",
    fullDescription:
      "Kurumsal ve bireysel eğitimler için tasarlanmış kapsamlı öğrenme yönetim sistemi. Video tabanlı dersler, interaktif quiz'ler, sertifika yönetimi, öğrenci performans takibi ve detaylı raporlama özellikleri sunar.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    technologies: ["Laravel", "React.js", "MySQL", "Docker"],
    detailedTechnologies: [
      {
        category: "Backend",
        items: ["Laravel 10", "RESTful API", "FFmpeg", "Laravel Jobs"],
      },
      {
        category: "Frontend",
        items: ["React.js 18", "Redux", "Video.js", "Material-UI"],
      },
      { category: "Database", items: ["MySQL 8", "Redis"] },
      { category: "Storage", items: ["AWS S3", "CDN", "HLS Streaming"] },
    ],
    features: [
      "Video tabanlı kurs yönetimi",
      "Interaktif quiz ve sınavlar",
      "Sertifika oluşturma ve yönetimi",
      "Öğrenci performans takibi",
      "Canlı ders özelliği",
      "Tartışma forumları",
      "Ödev ve proje yönetimi",
      "Gelişim raporları",
      "Mobil uyumlu tasarım",
      "Çoklu ödeme yöntemleri",
    ],
    challenges: [
      "Video streaming optimizasyonu",
      "Büyük dosya yükleme",
      "Quiz zamanlama ve değerlendirme",
      "Çoklu kullanıcı eş zamanlı erişim",
    ],
    outcomes: [
      "30K+ öğrenci",
      "500+ online kurs",
      "95% kullanıcı memnuniyeti",
      "2M+ video görüntüleme",
    ],
    duration: "6 ay",
    role: "Full Stack Developer",
    teamSize: "5 kişi",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Mobile Banking Application",
    description:
      "Güvenli ve hızlı mobil bankacılık uygulaması. Para transferleri, fatura ödemeleri, yatırım takibi ve QR kod ile ödeme özellikleri.",
    fullDescription:
      "Yeni nesil mobil bankacılık deneyimi sunan uygulama. Güvenli para transferleri, fatura ödemeleri, yatırım portföyü takibi, QR kod ile ödeme ve biyometrik kimlik doğrulama özellikleri ile modern bankacılık hizmetleri.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    technologies: ["Laravel", "React Native", "PostgreSQL", "Redis"],
    detailedTechnologies: [
      {
        category: "Backend",
        items: ["Laravel 10", "RESTful API", "OAuth 2.0", "Encryption"],
      },
      {
        category: "Mobile",
        items: [
          "React Native",
          "Redux Persist",
          "Biometric Auth",
          "Push Notifications",
        ],
      },
      { category: "Database", items: ["PostgreSQL 14", "Redis"] },
      { category: "Security", items: ["SSL Pinning", "AES Encryption", "2FA"] },
    ],
    features: [
      "Para transferi (EFT/HAVALE)",
      "QR kod ile ödeme",
      "Fatura ödeme",
      "Yatırım portföy takibi",
      "Biyometrik giriş",
      "Kart yönetimi",
      "Harcama analizi",
      "Bildirim yönetimi",
      "Offline işlemler",
      "Multi-language support",
    ],
    challenges: [
      "PCI-DSS compliance",
      "End-to-end şifreleme",
      "Offline data sync",
      "Biometric integration",
    ],
    outcomes: [
      "200K+ aktif kullanıcı",
      "5M+ aylık işlem",
      "4.8/5 store rating",
      "0 güvenlik açığı",
    ],
    duration: "9 ay",
    role: "Senior Mobile Developer",
    teamSize: "8 kişi",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 8,
    title: "IoT Device Management Platform",
    description:
      "IoT cihazları için merkezi yönetim platformu. Gerçek zamanlı veri izleme, uzaktan kontrol, alarm sistemi ve analytics dashboard.",
    fullDescription:
      "Endüstriyel IoT cihazları için geliştirilmiş merkezi yönetim ve izleme platformu. Binlerce cihazdan gerçek zamanlı veri toplama, uzaktan kontrol, otomatik alarm sistemi ve detaylı analytics özellikleri sunar.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    technologies: ["Laravel", "Vue.js", "MQTT", "InfluxDB", "Grafana"],
    detailedTechnologies: [
      {
        category: "Backend",
        items: ["Laravel 10", "MQTT Broker", "WebSocket", "Time Series DB"],
      },
      {
        category: "Frontend",
        items: ["Vue.js 3", "Pinia", "ECharts", "Vuetify"],
      },
      { category: "Database", items: ["InfluxDB", "PostgreSQL", "Redis"] },
      {
        category: "Monitoring",
        items: ["Grafana", "Prometheus", "Alert Manager"],
      },
    ],
    features: [
      "Gerçek zamanlı cihaz izleme",
      "Uzaktan cihaz kontrolü",
      "Otomatik alarm sistemi",
      "Veri görselleştirme",
      "Historical data analysis",
      "Cihaz grouping",
      "Rule engine",
      "API entegrasyonu",
      "Raporlama sistemi",
      "Dashboard customization",
    ],
    challenges: [
      "Binlerce cihaz ile skalabilite",
      "Real-time data processing",
      "MQTT broker optimization",
      "Time-series data storage",
    ],
    outcomes: [
      "5000+ bağlı cihaz",
      "1M+ veri noktası/gün",
      "99.95% uptime",
      "< 100ms response time",
    ],
    duration: "7 ay",
    role: "IoT Solutions Architect",
    teamSize: "5 kişi",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const SKILLS = [
  {
    name: "PHP",
    level: "Expert",
    category: "Backend",
    icon: "SiPhp",
    color: "#777BB4",
  },
  {
    name: "Laravel",
    level: "Expert",
    category: "Backend",
    icon: "SiLaravel",
    color: "#FF2D20",
  },
  {
    name: "OOP & SOLID Principles",
    level: "Expert",
    category: "Backend",
    color: "#3B82F6",
  },
  {
    name: "Design Patterns",
    level: "Advanced",
    category: "Backend",
    color: "#8B5CF6",
  },
  {
    name: "RESTful API Design",
    level: "Expert",
    category: "Backend",
    color: "#EC4899",
  },
  {
    name: "API Versioning & Standards",
    level: "Advanced",
    category: "Backend",
    color: "#10B981",
  },
  {
    name: "Global Exception Handling",
    level: "Advanced",
    category: "Backend",
    color: "#F59E0B",
  },
  {
    name: "Queue & Jobs (Laravel Queues)",
    level: "Advanced",
    category: "Backend",
    color: "#EF4444",
  },
  {
    name: "Caching Strategies (Redis)",
    level: "Advanced",
    category: "Backend",
    color: "#06B6D4",
  },
  {
    name: "Microservice Architecture",
    level: "Advanced",
    category: "Backend",
    color: "#84CC16",
  },
  {
    name: "Authentication & Authorization (Sanctum, JWT)",
    level: "Expert",
    category: "Backend",
    color: "#F97316",
  },
  {
    name: "Role & Permission Systems",
    level: "Advanced",
    category: "Backend",
    color: "#6366F1",
  },
  {
    name: "API Documentation (Swagger / OpenAPI)",
    level: "Advanced",
    category: "Backend",
    color: "#14B8A6",
  },

  {
    name: "JavaScript (ES6+)",
    level: "Advanced",
    category: "Frontend",
    icon: "SiJavascript",
    color: "#F7DF1E",
  },
  {
    name: "React.js",
    level: "Advanced",
    category: "Frontend",
    icon: "SiReact",
    color: "#61DAFB",
  },
  {
    name: "HTML5",
    level: "Advanced",
    category: "Frontend",
    icon: "SiHtml5",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    level: "Advanced",
    category: "Frontend",
    icon: "SiCss3",
    color: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    category: "Frontend",
    icon: "SiTailwindcss",
    color: "#06B6D4",
  },
  {
    name: "Bootstrap",
    level: "Advanced",
    category: "Frontend",
    icon: "SiBootstrap",
    color: "#7952B3",
  },
  {
    name: "UI Component Integration (Metronic)",
    level: "Advanced",
    category: "Frontend",
    color: "#A855F7",
  },

  {
    name: "MySQL",
    level: "Expert",
    category: "Database",
    icon: "SiMysql",
    color: "#4479A1",
  },
  {
    name: "PostgreSQL",
    level: "Advanced",
    category: "Database",
    icon: "SiPostgresql",
    color: "#4169E1",
  },
  {
    name: "Redis",
    level: "Advanced",
    category: "Database",
    icon: "SiRedis",
    color: "#DC382D",
  },
  {
    name: "Database Modeling",
    level: "Expert",
    category: "Database",
    color: "#3B82F6",
  },
  {
    name: "Database Optimization",
    level: "Advanced",
    category: "Database",
    color: "#8B5CF6",
  },
  {
    name: "Indexing & Query Tuning",
    level: "Advanced",
    category: "Database",
    color: "#EC4899",
  },

  {
    name: "Linux System Administration",
    level: "Expert",
    category: "DevOps",
    icon: "SiLinux",
    color: "#FCC624",
  },
  {
    name: "Nginx Reverse Proxy",
    level: "Expert",
    category: "DevOps",
    icon: "SiNginx",
    color: "#009639",
  },
  {
    name: "SSL/TLS (Let's Encrypt, Certbot)",
    level: "Expert",
    category: "DevOps",
    color: "#10B981",
  },
  {
    name: "Security Headers (HSTS, CSP, etc.)",
    level: "Advanced",
    category: "DevOps",
    color: "#F59E0B",
  },
  {
    name: "Docker & Docker Compose",
    level: "Expert",
    category: "DevOps",
    icon: "SiDocker",
    color: "#2496ED",
  },
  {
    name: "Containerized Laravel Deployments",
    level: "Expert",
    category: "DevOps",
    color: "#EF4444",
  },
  {
    name: "CI/CD (DroneCI, GitHub Actions)",
    level: "Advanced",
    category: "DevOps",
    icon: "SiGithubactions",
    color: "#2088FF",
  },
  {
    name: "Log Monitoring (Grafana, Loki)",
    level: "Advanced",
    category: "DevOps",
    icon: "SiGrafana",
    color: "#F46800",
  },
  {
    name: "Error Monitoring (Sentry)",
    level: "Advanced",
    category: "DevOps",
    icon: "SiSentry",
    color: "#362D59",
  },
  {
    name: "Performance Monitoring",
    level: "Advanced",
    category: "DevOps",
    color: "#06B6D4",
  },
  {
    name: "DNS & Cloudflare Management",
    level: "Advanced",
    category: "DevOps",
    color: "#84CC16",
  },

  {
    name: "Git / GitFlow",
    level: "Expert",
    category: "Tools",
    icon: "SiGit",
    color: "#F05032",
  },
  {
    name: "Gitea / GitLab",
    level: "Advanced",
    category: "Tools",
    icon: "SiGitlab",
    color: "#FC6D26",
  },
  { name: "Portainer", level: "Advanced", category: "Tools", color: "#13BEF9" },
  {
    name: "Postman",
    level: "Advanced",
    category: "Tools",
    icon: "SiPostman",
    color: "#FF6C37",
  },

  {
    name: "Software Architecture",
    level: "Expert",
    category: "Architecture",
    color: "#3B82F6",
  },
  {
    name: "MVC & Layered Architecture",
    level: "Expert",
    category: "Architecture",
    color: "#8B5CF6",
  },
  {
    name: "Domain-Driven Design (DDD) Basics",
    level: "Advanced",
    category: "Architecture",
    color: "#EC4899",
  },
  {
    name: "Code Quality & Standards (PSR-12)",
    level: "Expert",
    category: "Architecture",
    color: "#10B981",
  },
  {
    name: "Refactoring & Clean Code",
    level: "Expert",
    category: "Architecture",
    color: "#F59E0B",
  },

  {
    name: "UI Asset Preparation (Web)",
    level: "Advanced",
    category: "Design",
    color: "#EF4444",
  },

  {
    name: "Team Leadership & Coordination",
    level: "Senior",
    category: "Management",
    color: "#3B82F6",
  },
  {
    name: "Code Review & Mentorship",
    level: "Expert",
    category: "Management",
    color: "#8B5CF6",
  },
  {
    name: "Technical Planning & Roadmaps",
    level: "Advanced",
    category: "Management",
    color: "#EC4899",
  },
];

export const ABOUT_STATS = [{ label: "Yıllık Deneyim", value: "12+" }];

export const SERVICES = [
  {
    title: "Backend Development",
    description:
      "Laravel ve PHP tabanlı, ölçeklenebilir, güvenli ve yüksek performanslı API ve kurumsal yazılım çözümleri.",
    icon: "server",
  },
  {
    title: "Frontend Development",
    description:
      "React.js ve modern frontend teknolojileri ile kullanıcı deneyimi odaklı, hızlı ve sürdürülebilir arayüzler.",
    icon: "layout",
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Linux, Docker, NGINX ve CI/CD süreçleri ile güçlü, izlenebilir ve otomatik altyapı çözümleri.",
    icon: "cloud",
  },
  {
    title: "System Architecture",
    description:
      "MVC ve layered architecture prensiplerine uygun, uzun ömürlü ve kurumsal sistem mimarileri.",
    icon: "layers",
  },
  {
    title: "API & Integration Solutions",
    description:
      "Üçüncü parti servisler, ödeme sistemleri ve kurumsal entegrasyonlar için güvenilir API çözümleri.",
    icon: "link",
  },
  {
    title: "Technical Leadership",
    description:
      "Kod standartları, ekip koordinasyonu ve teknik karar süreçlerinde liderlik ve mentorluk.",
    icon: "users",
  },
];
