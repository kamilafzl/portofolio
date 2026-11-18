/**
 * ============================================================
 *  ISI WEBSITE KAMU ADA DI SINI SEMUA
 * ============================================================
 *  Mau ganti tulisan, tambah proyek, ubah pengalaman, dll?
 *  Cukup edit file ini. Tidak perlu sentuh file lain.
 *
 *  Aturan kecil supaya tidak error:
 *  - Teks selalu di dalam tanda kutip: "seperti ini"
 *  - Setiap item dipisah koma ,
 *  - Kalau mau pakai tanda kutip di dalam teks, pakai ’ (kutip miring)
 *  - Simpan (Ctrl+S), halaman di browser langsung berubah
 * ============================================================
 */

// ------------------------------------------------------------
// 1. PROFIL
// ------------------------------------------------------------
export const profile = {
  name: "Kamila Fazilatunisa",
  firstName: "Kamila",
  // Kata besar di halaman depan + tulisan tangan di bawahnya
  bigWord: "data",
  scriptLine: "analyst & scientist",
  intro:
    "Islamic Economics student at Universitas Padjadjaran who turns financial and economic data into clear, useful answers. I work in Python, SQL, machine learning, Tableau and econometrics, and I’m looking for a data or finance internship.",
  location: "Bandung, Indonesia",
  status: "Open to internships",
  email: "kamilafzlll@gmail.com",
  linkedin: "https://www.linkedin.com/in/kamila-fazilatunisa",
  github: "https://github.com/kamilafzl",
  // Link folder Google Drive yang berisi semua file proyek
  drive: "https://drive.google.com/drive/folders/1Kzy6yjnBkZJSWue4YDsdUVrwxe2S2dcW?usp=sharing",
  // Taruh file CV kamu di folder public dengan nama cv.pdf, lalu tombol "Download CV" akan jalan
  cv: "/cv.pdf",
  // Foto untuk bagian About (ada di public/me/)
  photo: "/me/kamila.webp",
};

// ------------------------------------------------------------
// 2. KATEGORI PROYEK (dipakai untuk tombol filter)
//    Kalau mau tambah kategori, tambahkan di sini lalu pakai di proyek.
// ------------------------------------------------------------
export const categories = ["Finance & Econometrics", "Data Analytics", "Data Science"] as const;
export type Category = (typeof categories)[number];

// ------------------------------------------------------------
// 3. PROYEK
//    Satu blok { ... } = satu proyek. Copy-paste blok untuk menambah.
//    - slug    : nama untuk alamat halaman, huruf kecil pakai tanda -
//    - image   : gambar di folder public/projects/ (rasio 16:9 paling bagus)
//    - link    : link ke file/Drive/GitHub/Tableau Public. Kalau dikosongkan "",
//                halaman proyek menampilkan "File available on request" + tombol email.
//    - slides  : (boleh dihapus) link slide/PDF, muncul sebagai tombol kedua.
//                Bisa file di public/files/ atau link Canva.
//    - files   : (boleh dihapus) tombol tambahan, format { label: "...", href: "..." }
//    - featured: true = ikut tampil di bagian kartu bertumpuk paling atas
//    Urutan di sini = urutan tampil di website.
// ------------------------------------------------------------
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  tag: string;
  year: string;
  image: string;
  accent: string;
  link: string;
  linkLabel: string;
  slides?: string;
  files?: { label: string; href: string }[];
  featured: boolean;
  tools: string[];
  summary: string;
  question: string;
  steps: string[];
  findings: string[];
};

export const projects: Project[] = [
  {
    slug: "hotel-booking-cancellation",
    title: "Hotel Booking Cancellation Prediction",
    subtitle: "LightGBM model that saves 58% of cancellation cost",
    category: "Data Science",
    tag: "Machine learning classification",
    year: "2026",
    image: "/projects/hotel-booking-cancellation.jpg",
    accent: "#1F6FEB",
    link: "https://github.com/kamilafzl/Capstone-Module3-Hotel-Booking-Cancellation",
    linkLabel: "View code on GitHub",
    slides: "https://drive.google.com/file/d/1ijI1_O_fwSeU4fgZ0d-Z-6L5P-Kv5bYm/view?usp=drive_link",
    featured: true,
    tools: ["Python", "LightGBM", "scikit-learn", "imbalanced-learn", "SHAP", "pandas"],
    summary:
      "A classification model that flags hotel bookings likely to be cancelled, so revenue management can act before a room goes empty. Built on 83,573 bookings from a resort hotel and a city hotel in Portugal (2015–2017), as my Purwadhika Module 3 capstone.",
    question:
      "Which bookings will be cancelled, early enough for the hotel to resell the room without risking a walked guest?",
    steps: [
      "Put a price on each mistake: a missed cancellation (≈€349 empty room) costs about 1.7× a false alarm (≈€204 walked guest), so I optimized for F2-score.",
      "Explored the data with chi-square tests and Cramér’s V; deposit type and country were the strongest signals.",
      "Cleaned the data and tested encoders by experiment, choosing binary encoding for 163 countries and RobustScaler for skewed numbers.",
      "Benchmarked 8 models with 5-fold stratified cross-validation, tested resampling methods, and tuned the best with RandomizedSearchCV.",
      "Picked the decision threshold (0.51) by minimizing total cancellation cost instead of maximizing F2.",
      "Explained the model with SHAP and checked where its predictions can and can’t be trusted.",
    ],
    findings: [
      "Final model: LightGBM with RandomUnderSampler. F2 0.770 on the test set (target ≥ 0.75), recall 79.4%, precision 68.7%, ROC-AUC 0.891.",
      "Catches 4,886 of 6,156 cancellations across 16,715 test bookings.",
      "Cuts cancellation cost by 58.3% (about €1.25M) compared with no model, and stays positive in every sensitivity scenario.",
      "Non-refund deposits, domestic guests and past cancellations raise the risk; parking and special requests lower it.",
    ],
  },
  {
    slug: "pos-anomaly-analysis",
    title: "POS Anomaly & Promo Margin Analysis",
    subtitle: "300,000 minimarket transactions, cleaned and diagnosed",
    category: "Data Analytics",
    tag: "Data cleaning & diagnostic analysis",
    year: "2026",
    image: "/projects/alfamart-pos-anomaly.jpg",
    accent: "#D43B2F",
    link: "https://github.com/kamilafzl/alfamart_pos_anomaly_analysis",
    linkLabel: "View code on GitHub",
    slides: "/files/pos-anomaly-analysis-slides.pdf",
    featured: true,
    tools: ["Python", "pandas", "Matplotlib", "Data cleaning"],
    summary:
      "A case study of an Alfamart-style minimarket network: 1,000 stores, 500 products and 300,000 cashier (POS) transactions. I cleaned the data, found where reports were being distorted, and checked whether resellers were abusing the weekend JSM promo. My Purwadhika Module 2 capstone.",
    question:
      "How can the chain stop margin leaks from JSM promo abuse and clean up its POS data so sales reports can be trusted?",
    steps: [
      "Broke the problem into 6 business questions, from promo abuse to void transactions and missing member IDs.",
      "Found and handled 5 data anomalies: 10 spellings of 6 payment methods, empty member IDs, negative (void) quantities, sales dated before a store opened, and 999/9999 placeholder quantities.",
      "Kept 289,516 clean rows (96.5% of the raw data), flagging rather than deleting anything that was real behaviour.",
      "Used Friday–Sunday as the promo period and flagged stores with top-quartile volume plus a top-10% quantity-per-member ratio.",
      "Turned every finding into a prioritized action plan, with the team that should own it.",
    ],
    findings: [
      "81 stores show promo volume concentrated in a small group of members, but no single member dominates, so they’re candidates for a per-member quantity limit rather than proof of resellers.",
      "999/9999 scanning errors would inflate revenue by about Rp199 billion if left in, from just 0.51% of rows.",
      "9,000 transactions (about Rp4.67 billion) were recorded before their store opened, spread across every city, which points to a system or ETL bug.",
      "40% of transactions have no member ID, steady across categories and time, leaving CRM blind on customer lifetime value for that share.",
    ],
  },
  {
    slug: "hima-student-surveys",
    title: "Student Voice Surveys",
    subtitle: "3 surveys, 286 responses, one year of feedback",
    category: "Data Analytics",
    tag: "Survey research & reporting",
    year: "2024",
    image: "/projects/hima-student-surveys.jpg",
    accent: "#1E7A45",
    link: "https://drive.google.com/file/d/1nBKR1bV-5SHVzmQ06WbPIMt9qSRmoedp/view?usp=drive_link",
    linkLabel: "Read the end-of-term report",
    files: [
      { label: "Mid-year report", href: "https://drive.google.com/file/d/1PIDVsjGb8opx7WFLhrFbovmPtNQANmNm/view?usp=drive_link" },
      { label: "Start-of-term report", href: "https://drive.google.com/file/d/17ifAAJF1n0wJQN1v71dlnaUYGHgWNm3c/view?usp=drive_link" },
    ],
    featured: false,
    tools: ["Survey design", "Approval Rating", "Customer Satisfaction Index", "Importance-Performance Analysis"],
    summary:
      "As staff in the Data Research & Analysis department of the Islamic Economics student association (HIMA Ekis FEB Unpad), I helped run three surveys across the 2024 term and turned the results into reports the board and study program used to plan and evaluate their work.",
    question: "What do Islamic Economics students need from their association, and how satisfied are they with each program?",
    steps: [
      "Ran three surveys through the year: start-of-term (needs and interests), mid-year and end-of-term (evaluation of each directorate and the chair).",
      "Used simple random sampling so every Islamic Economics student had the same chance to respond.",
      "Measured support with Approval Ratings and satisfaction with the Customer Satisfaction Index (CSI), built from importance and satisfaction scores for every program.",
      "Placed each program on an Importance-Performance Analysis (IPA) grid to show what to keep, what to fix and what matters less.",
      "Turned the results into illustrated report booklets of 50–90 pages each.",
    ],
    findings: [
      "286 responses across the year: 86 at the start of term, 80 mid-year and 120 at the end.",
      "Mid-year satisfaction with the five directorates scored 82.89% on the CSI, in the ‘satisfied’ band.",
      "End-of-term approval ratings for the chair and vice chair ranged from 95.8% to 99.2%.",
      "The IPA grid gave each directorate a short list of programs students rated important but not yet satisfying.",
    ],
  },
  {
    slug: "indf-equity-research",
    title: "Indofood (INDF) Equity Research",
    subtitle: "BUY rating, Rp8,200 target price, 22% upside",
    category: "Finance & Econometrics",
    tag: "Equity research report",
    year: "2026",
    image: "/projects/indf-equity-research.jpg",
    accent: "#1F4E99",
    link: "https://drive.google.com/file/d/1aS1QNPMDRFNBHYuSzqtEMYbYxhQzk36O/view?usp=drive_link",
    linkLabel: "Read the full report",
    featured: true,
    tools: ["Financial statement analysis", "Sum-of-the-parts", "Relative valuation", "Macro & commodity analysis"],
    summary:
      "An 8-page equity research report on PT Indofood Sukses Makmur Tbk (INDF), written in a sell-side format: macro and commodity backdrop, competitive position, four years of financials, investment risks and valuation, ending in a BUY call.",
    question: "Is INDF worth buying at Rp6,725, given its fundamentals, its peers and Indonesia’s macro conditions?",
    steps: [
      "Read the macro and commodity backdrop: GDP growth, the BI rate, the rupiah, wheat and CPO prices, and consumer spending.",
      "Broke down revenue and operating profit by segment (Consumer Branded Products, Bogasari, Agribusiness, Distribution) and mapped the ownership structure.",
      "Assessed the moat: an instant-noodle duopoly with 87–90% combined share, Bogasari’s 48% share of flour, and a nationwide distribution network.",
      "Analyzed 2022–2025 financials: revenue growth, margins, leverage, interest coverage and working capital.",
      "Mapped operational, macro, regulatory and ESG risks, with how management mitigates each.",
      "Valued the company with sum-of-the-parts and relative valuation against ICBP and MYOR.",
    ],
    findings: [
      "BUY, with a Rp8,200 target price: 22% upside from Rp6,725 (19 June 2026).",
      "Revenue rose from Rp110.8T (2022) to Rp123.5T (2025), with growth accelerating to 6.7% and net margin climbing from 5.7% to 8.7%.",
      "Debt-to-equity fell from 1.23x to 0.81x while interest coverage rose to 5.93x, well above the 2.5x safety line.",
      "Trades at 5.41x P/E and 0.76x P/BV versus ICBP (9.32x, 1.67x) and MYOR (14.39x, 2.24x), a holding discount investors can buy into.",
    ],
  },
  {
    slug: "ipo-risk-management",
    title: "IPO Risk Management",
    subtitle: "Yupi and BTPN Syariah in the sharia capital market",
    category: "Finance & Econometrics",
    tag: "Group case study",
    year: "2026",
    image: "/projects/ipo-risk-management.jpg",
    accent: "#0E6C78",
    link: "https://drive.google.com/file/d/1g69tAhhwZbuA7Fc1cy-5LlSNiqP3JNJV/view?usp=drive_link",
    linkLabel: "Yupi case study",
    files: [{ label: "BTPN Syariah case study", href: "https://drive.google.com/file/d/1jvLm8kXvOKFivurCA5JF8WT6zDMtGiBD/view?usp=drive_link" }],
    featured: false,
    tools: ["Risk mapping", "IPO analysis", "Sharia capital market", "Mitigation planning"],
    summary:
      "Two group case studies for my Risk Management course on how companies and market players handle risk before, during and after an IPO in Indonesia’s sharia capital market: PT Yupi Indo Jelly Gum Tbk (IPO 2025) and PT Bank BTPN Syariah Tbk (IPO 2018).",
    question:
      "What risks do issuers, underwriters and secondary-market players face around an IPO, and how can they be managed within sharia principles?",
    steps: [
      "Framed systematic and unsystematic risk, and why conventional hedges like derivatives and short selling don’t fit sharia principles.",
      "Profiled each issuer: business, ownership, liquidity, dividend policy and IPO terms.",
      "Mapped risks across the pre-IPO, IPO and post-IPO stages for the issuer, primary-market players and secondary-market players.",
      "Matched every risk with a mitigation, from feasibility studies and book building to auto-rejection, disclosure rules and governance.",
      "Reviewed how each company performed after listing and what investors should keep watching.",
    ],
    findings: [
      "Yupi raised about Rp2.04 trillion by floating 10% of its shares at Rp2,390, and its market cap held around Rp10–11 trillion after listing.",
      "Yupi’s 66% market share is its strongest moat; a delayed new plant and a possible sugar excise are the risks to watch.",
      "BTPN Syariah’s 2018 IPO was 1.7× oversubscribed, keeping underwriter risk low and funding ultra-micro financing without more debt.",
      "BTPN Syariah manages compliance risk through layered oversight by its board, OJK rules and its Sharia Supervisory Board.",
    ],
  },
  {
    slug: "financial-statement-analysis",
    title: "Financial Statement Analysis",
    subtitle: "Bank Syariah Indonesia and a local micro business",
    category: "Finance & Econometrics",
    tag: "Group case study",
    year: "2026",
    image: "/projects/financial-statement-analysis.jpg",
    accent: "#B4235A",
    link: "https://drive.google.com/file/d/1p8r1zolvmprm7UelmJf9CKT1gLpjiL4g/view?usp=drive_link",
    linkLabel: "Bank Syariah Indonesia analysis",
    files: [{ label: "Micro business analysis", href: "https://drive.google.com/file/d/1PGYhQvK6YdnfO9sJfWFDmkOn9hkXeaO7/view?usp=drive_link" }],
    featured: false,
    tools: ["Horizontal & vertical analysis", "Islamic banking ratios", "Cash flow analysis", "Free cash flow"],
    summary:
      "Two group analyses at opposite ends of the scale: Bank Syariah Indonesia’s 2025 financial statements, including the zakat and benevolence fund reports unique to Islamic banks, and the financial health of Warung Jajanan Mihpi, a seblak stall whose books we rebuilt from an interview with the owner.",
    question: "Is each business financially healthy, and does BSI’s reporting hold up as sharia-compliant?",
    steps: [
      "Read BSI’s 2025 statements, including its zakat and benevolence (qardhul hasan) fund reports.",
      "Ran horizontal and vertical analysis, Islamic banking ratios (NPF, ROA, ROE, BOPO, FDR, CAR) and cash flow analysis for BSI.",
      "Interviewed the stall owner and rebuilt a balance sheet and 2023–2025 income statements from informal records.",
      "Ran common-size, trend, ratio and free cash flow analysis on the stall.",
      "Diagnosed the main problems and wrote recommendations for each business.",
    ],
    findings: [
      "BSI earned Rp7.57 trillion (+8.0%) with gross NPF down to 1.81% and CAR around 22%; we judged it sustainable and sharia-compliant.",
      "BSI’s non-halal income jumped 804% to Rp11.2 billion and BOPO rose to 71.57%, the two issues we flagged for follow-up.",
      "The stall’s revenue fell 40% while costs rose, so net margin dropped from 64.4% to 18.5% and free cash flow fell 83% in two years.",
      "For the stall we recommended new menu items and social media promotion, tighter cost records and separating personal from business money.",
    ],
  },
  {
    slug: "mi-education-dashboard",
    title: "MI Education Dashboard",
    subtitle: "Madrasah data for every province",
    category: "Data Analytics",
    tag: "Tableau dashboard",
    year: "2025",
    image: "/projects/mi-education-dashboard.jpg",
    accent: "#C2477F",
    link: "https://public.tableau.com/views/KamilaFazilatunisa_120410230109_Tableau/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link",
    linkLabel: "Open the dashboard on Tableau Public",
    featured: true,
    tools: ["Tableau", "BPS data", "Geographic mapping"],
    summary:
      "An interactive Tableau dashboard of Madrasah Ibtidaiyah (MI) schools, teachers and students in every Indonesian province, built from BPS data.",
    question: "Where are MI schools, teachers and students concentrated, and where are the gaps?",
    steps: [
      "Collected BPS data on MI schools, teachers and students by province (2023/2024).",
      "Built a map, distribution bars and ratio views in Tableau.",
      "Compared student-to-teacher ratios between regions to find the gaps.",
    ],
    findings: [
      "Java holds about 56% of all MI students nationally; East Java alone holds 24%.",
      "About 94% of MI schools are private, so private foundations carry most of the system.",
      "The national ratio is around 13 students per teacher, but some regions reach 20.",
    ],
  },
  {
    slug: "gold-oil-ihsg-var",
    title: "Gold, Oil and the IHSG",
    subtitle: "VAR, IRF and FEVD",
    category: "Finance & Econometrics",
    tag: "Time series econometrics",
    year: "2025",
    image: "/projects/var-time-series.jpg",
    accent: "#E0663C",
    link: "https://drive.google.com/file/d/1y57bZq3Qjsa3OKAYfJ3z85UzpWMI5O0Q/view?usp=drive_link",
    linkLabel: "See the slides",
    featured: false,
    tools: ["STATA", "VAR", "IRF", "FEVD"],
    summary:
      "A time series study of how shocks travel between gold prices, oil prices and Indonesia’s composite stock index (IHSG).",
    question: "Does a shock to gold or oil prices move the Indonesian stock market?",
    steps: [
      "Tested the series for stationarity and chose the lag length.",
      "Estimated a VAR model in STATA, then traced impulse responses (IRF).",
      "Used variance decomposition (FEVD) to see how much each variable explains the others.",
    ],
    findings: [
      "Each variable is driven mainly by its own past movements.",
      "Shocks between gold, oil and the IHSG are small and fade quickly.",
    ],
  },
  {
    slug: "islamic-finance-sem-pls",
    title: "What Drives Islamic Finance Adoption",
    subtitle: "SEM-PLS with 5 latent variables and 38 indicators",
    category: "Finance & Econometrics",
    tag: "Structural equation modeling",
    year: "2025",
    image: "/projects/sem-pls-islamic-finance.jpg",
    accent: "#6A4FD8",
    link: "https://drive.google.com/file/d/1t4ntiJ9hJgjNtyBLyBD-jyrB667Qlvk-/view?usp=sharing",
    linkLabel: "Read the full analysis",
    featured: false,
    tools: ["SmartPLS", "SEM-PLS", "Bootstrapping", "Mediation analysis"],
    summary:
      "A structural equation model (SEM-PLS) of why Indonesians want to use Islamic financial products, with Islamic financial literacy as the mediator. Built from four published studies for my Multivariate Analysis final exam.",
    question: "Do religiosity, social-cultural factors and Islamic fintech raise Islamic financial literacy, and does that literacy turn into intent to use Islamic financial products?",
    steps: [
      "Chose five constructs from four journal articles: religiosity, social-cultural factors, Islamic fintech, Islamic financial literacy (mediator) and intent to use Islamic financial products.",
      "Built the path diagram in SmartPLS with 38 reflective indicators.",
      "Tested the measurement model: outer loadings, Cronbach’s alpha, composite reliability, AVE and HTMT.",
      "Bootstrapped the structural model to test five hypotheses, the R² values and the mediation paths.",
      "Turned the results into recommendations for Islamic finance providers and regulators.",
    ],
    findings: [
      "Literacy is the main driver of intent to use Islamic financial products (β = 0.992, p < 0.001).",
      "Literacy is shaped most by Islamic fintech (β = 0.769) and then social-cultural factors (β = 0.211); religiosity was not significant (p = 0.720).",
      "Literacy significantly mediates the effect of fintech and social-cultural factors on intent. The model explains 98.7% of literacy and 98.5% of intent.",
      "All 38 indicators were valid and reliable (loadings 0.80–0.97, AVE above 0.81), but HTMT values above 0.90 mean the constructs overlap. I reported this as a limitation.",
    ],
  },
  {
    slug: "python-store-sales-system",
    title: "Store Sales System",
    subtitle: "Python CRUD app, no libraries",
    category: "Data Science",
    tag: "Python program",
    year: "2026",
    image: "/projects/python-crud.jpg",
    accent: "#1E7A5A",
    link: "https://drive.google.com/file/d/1hCvwryLkSPR865xtCzc7M6EQ27pVG0Z3/view?usp=drive_link",
    linkLabel: "See the project file",
    featured: false,
    tools: ["Python"],
    summary:
      "A command-line sales system for a makeup store, built at Purwadhika in plain Python: add, search, update and delete products, plus a store report.",
    question: "Can a small store manage its stock with a simple, error-proof program?",
    steps: [
      "Built full CRUD menus for product data.",
      "Added input validation and duplicate checks so bad data can’t get in.",
      "Added low-stock alerts and an inventory summary report.",
    ],
    findings: ["Runs with no external libraries, only the Python standard library."],
  },
];

// ------------------------------------------------------------
// 4. TOOLKIT (ikon kecil di bawah proyek)
//    icon: pilih dari daftar ini -> code, database, sheet, chart, sigma, network, layout, pie
// ------------------------------------------------------------
export const toolkit = [
  { name: "Python", icon: "code", color: "#2F6FDB" },
  { name: "SQL", icon: "database", color: "#0F766E" },
  { name: "Excel", icon: "sheet", color: "#1E7A45" },
  { name: "Tableau", icon: "chart", color: "#E0663C" },
  { name: "Looker Studio", icon: "pie", color: "#4F46E5" },
  { name: "STATA", icon: "sigma", color: "#1F4E99" },
  { name: "SPSS", icon: "layout", color: "#B4235A" },
  { name: "SmartPLS", icon: "network", color: "#6A4FD8" },
] as const;

// ------------------------------------------------------------
// 5. YANG AKU KERJAKAN (3 kartu)
// ------------------------------------------------------------
export const services = [
  {
    title: "Data analysis & dashboards",
    text: "Cleaning messy data, finding the pattern, and building dashboards in Tableau, Looker Studio or Excel that people can read in a minute.",
    art: "dashboard",
  },
  {
    title: "Data science & machine learning",
    text: "Python and SQL for wrangling data, plus classification and regression models, like the LightGBM cancellation model from my Purwadhika capstone.",
    art: "model",
  },
  {
    title: "Finance & economic research",
    text: "Equity valuation, time series econometrics and survey models, with the Islamic finance background to read the numbers in context.",
    art: "finance",
  },
] as const;

// ------------------------------------------------------------
// 6. CARA KERJA (4 langkah)
// ------------------------------------------------------------
export const process = [
  { title: "Start with the question", text: "What decision will this data help someone make?" },
  { title: "Clean the data", text: "Check, fix and document it before trusting it." },
  { title: "Analyze and model", text: "Pick the method that fits the question, not the fanciest one." },
  { title: "Tell the story", text: "A clear chart and three sentences beat a 40-page appendix." },
];

// ------------------------------------------------------------
// 7. PENGALAMAN
//    metric + metricLabel = angka besar di kartu
//    photo boleh dikosongkan ""
// ------------------------------------------------------------
export const experience = [
  {
    role: "Financing Administration",
    org: "Bank Syariah Indonesia (BSI)",
    period: "Jul – Aug 2026",
    metric: "100+",
    metricLabel: "murabahah documents processed",
    text: "Ran BI Checking and customer data input, and analyzed the utilization gap in BSI’s digital gold savings product with recommendations to lift engagement.",
    photo: "",
  },
  {
    role: "Assistant Reviewer, SROI",
    org: "Ministry of Environment (KLH)",
    period: "Dec 2025",
    metric: "4",
    metricLabel: "corporate SROI reports validated",
    text: "Checked impact data and financial proxies in Gold PROPER reports against their evidence in Excel, flagging discrepancies.",
    photo: "/experience/sroi.jpg",
  },
  {
    role: "Halal Compliance Facilitator",
    org: "Bank Indonesia & LP3H Salman ITB",
    period: "Oct – Dec 2025",
    metric: "100%",
    metricLabel: "submission approval rate",
    text: "Collected and verified compliance data for 4 MSMEs through NIB and halal certification, auditing gaps before every submission.",
    photo: "/experience/bank-indonesia.jpg",
  },
  {
    role: "Digital Administration Intern",
    org: "Career Center, Universitas Padjadjaran",
    period: "Apr 2025 – Mar 2026",
    metric: "4,000+",
    metricLabel: "job fair participants managed",
    text: "Built and kept participant databases for 10+ career events in Google Sheets and Excel, and handled registration on the day.",
    photo: "/experience/digital-admin.jpg",
  },
  {
    role: "Data Research & Analysis Staff",
    org: "HIMA Ekonomi Islam Unpad",
    period: "Feb – Dec 2024",
    metric: "3",
    metricLabel: "student surveys designed and analyzed",
    text: "Ran start, mid and end-of-term surveys (286 responses in total) and turned the results into reports for the board and study program.",
    photo: "",
  },
  {
    role: "Mathematics Tutor",
    org: "A Plus Study Center",
    period: "Aug – Sep 2026",
    metric: "",
    metricLabel: "",
    text: "Taught mathematics to students, explaining concepts step by step.",
    photo: "",
  },
];

// ------------------------------------------------------------
// 8. PENDIDIKAN
// ------------------------------------------------------------
export const education = [
  {
    school: "Universitas Padjadjaran",
    degree: "Bachelor of Islamic Economics · GPA 3.70/4.00",
    period: "2023 – 2027",
    note: "Data Science, Advanced Econometrics, Multivariate Analysis, Risk Analysis",
  },
  {
    school: "Purwadhika Digital Technology School",
    degree: "Data Science & Machine Learning",
    period: "Apr – Dec 2026",
    note: "Python, SQL, Tableau, Looker Studio, regression and classification",
  },
];

// ------------------------------------------------------------
// 9. ABOUT
//    Kata di dalam [kurung siku] akan diwarnai biru.
// ------------------------------------------------------------
export const about =
  "Hi, I’m Kamila, an economics student who fell in love with data. I like finding the pattern in [messy numbers] and turning it into [something a person can act on], whether that’s a stock rating, a dashboard or a survey report.";

// ------------------------------------------------------------
// 10. FAQ (pertanyaan yang sering ditanya recruiter)
// ------------------------------------------------------------
export const faq = [
  {
    q: "What kind of internship are you looking for?",
    a: "Data analyst, data science, or finance and research roles, especially where data meets banking, investment or Islamic finance.",
  },
  {
    q: "Which tools do you use?",
    a: "Python (pandas, scikit-learn, LightGBM, SHAP), SQL (MySQL), Excel and Google Sheets, Tableau, Looker Studio, STATA, SPSS and SmartPLS.",
  },
  {
    q: "When are you available?",
    a: "I’m studying at Unpad until mid-2027 and finishing Purwadhika in December 2026. Send me your dates and I’ll tell you what works.",
  },
  {
    q: "Remote, hybrid or on-site?",
    a: "All three. I’m based in Bandung and can work remotely or travel for on-site roles.",
  },
  {
    q: "Why economics and data together?",
    a: "Economics tells me which questions matter; data lets me answer them. Most finance problems need both.",
  },
  {
    q: "Can I see the full files?",
    a: "Yes. The complete reports, slides and dashboards are in my Google Drive, linked in the projects section.",
  },
];
