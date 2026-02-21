import {
  Gamepad2,
  Briefcase,
  Monitor,
  Laptop,
  Tv,
  MonitorCheck,
  BarChart2,
  RefreshCw,
} from "lucide-react";

export const navLinks = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "monitors",
    label: "Monitors",
    href: "/monitors",
  },
  {
    id: "compare",
    label: "Compare",
    href: "/compare",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
];

export const quickSearchLinks = [
  {
    id: "oled",
    label: "OLED Gaming",
    href: "/",
  },
  {
    id: "4k",
    label: "4K Design",
    href: "/",
  },
  {
    id: "1440p",
    label: "Budget 1440p",
    href: "/",
  },
  {
    id: "ultra",
    label: "Ultrawide",
    href: "/",
  },
];

export const monitors = [
  {
    id: "lg-27gn950-b",
    brand: "LG",
    name: "LG 27GN950-B",
    price: 799,
    imageUrl:
      "https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?q=80&w=571&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    screenSize: 22,
    resolution: "3840x2160",
    refreshRate: 144,
    panelType: "Nano IPS",
    certification: "calman",
    slug: "lg-27gn950-b",
    deltaE: 0.83,
    srgb: 99.3,
  },
  {
    id: "samsung-odyssey-g7",
    brand: "Samsung",
    name: "Samsung Odyssey G7",
    price: 599,
    imageUrl:
      "https://images.unsplash.com/photo-1763905180930-892ee8d37ea6?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    screenSize: 27,
    resolution: "2560x1440",
    refreshRate: 240,
    panelType: "VA",
    certification: null,
    slug: "samsung-odyssey-g7",
    deltaE: 2.1,
    srgb: 97.8,
  },
  {
    id: "lg-27gp850-b",
    brand: "LG",
    name: "LG 27GP850-B",
    price: 449,
    imageUrl:
      "https://dlcdnwebimgs.asus.com/gain/08D0960B-D5F3-4411-B8C3-D6D875E40C54/w717/h525/fwebp",
    screenSize: 24,
    resolution: "2560x1440",
    refreshRate: 180,
    panelType: "Nano IPS",
    certification: "calman",
    slug: "lg-27gp850-b",
    deltaE: 1.24,
    srgb: 98.6,
  },
  {
    id: "asus-vg27aq",
    brand: "ASUS",
    name: "ASUS TUF Gaming VG27AQ",
    price: 329,
    imageUrl:
      "https://www.asus.com/media/global/products/vu6dtkhyjqxf93km/P_setting_xxx_0_90_end_500.png",
    screenSize: 34,
    resolution: "2560x1440",
    refreshRate: 165,
    panelType: "IPS",
    certification: "spyder",
    slug: "asus-tuf-vg27aq",
    deltaE: 0.96,
    srgb: 96.4,
  },
  {
    id: "dell-s2721dgf",
    brand: "Dell",
    name: "Dell S2721DGF",
    price: 399,
    imageUrl:
      "https://dlcdnwebimgs.asus.com/gain/f6967c1e-727e-4a04-95f2-1004163ead14/w800/fwebp",
    screenSize: 27,
    resolution: "2560x1440",
    refreshRate: 165,
    panelType: "IPS",
    certification: null,
    slug: "dell-s2721dgf",
    deltaE: 1.87,
    srgb: 95.2,
  },
  {
    id: "benq-sw270c",
    brand: "BenQ",
    name: "BenQ SW270C",
    price: 549,
    imageUrl:
      "https://dlcdnwebimgs.asus.com/gain/0cfb9d23-cc35-428f-86c3-d122377f4711/w800/fwebp",
    screenSize: 27,
    resolution: "2560x1440",
    refreshRate: 60,
    panelType: "IPS",
    certification: "calman",
    slug: "benq-sw270c",
    deltaE: 0.71,
    srgb: 99.7,
  },
  {
    id: "asus-pa279cv",
    brand: "ASUS",
    name: "ASUS ProArt PA279CV",
    price: 429,
    imageUrl:
      "https://www.asus.com/media/global/gallery/fycywnzcmin80eds_setting_xxx_0_90_end_800.png",
    screenSize: 27,
    resolution: "3840x2160",
    refreshRate: 75,
    panelType: "IPS",
    certification: "spyder",
    slug: "asus-proart-pa279cv",
    deltaE: 1.12,
    srgb: 99.5,
  },
  {
    id: "acer-predator-xb273u",
    brand: "Acer",
    name: "Acer Predator XB273U",
    price: 649,
    imageUrl:
      "https://dlcdnwebimgs.asus.com/gain/f2d6b4c3-5b34-41bb-aca1-a2df27b1a2d7/w800/fwebp",
    screenSize: 27,
    resolution: "2560x1440",
    refreshRate: 170,
    panelType: "IPS",
    certification: null,
    slug: "acer-predator-xb273u",
    deltaE: 2.43,
    srgb: 94.1,
  },
  {
    id: "gigabyte-m27q",
    brand: "Gigabyte",
    name: "Gigabyte M27Q",
    price: 329,
    imageUrl:
      "https://dlcdnwebimgs.asus.com/gain/08D0960B-D5F3-4411-B8C3-D6D875E40C54/w717/h525/fwebp",
    screenSize: 27,
    resolution: "2560x1440",
    refreshRate: 170,
    panelType: "IPS",
    certification: "calman",
    slug: "gigabyte-m27q",
    deltaE: 1.56,
    srgb: 97.1,
  },
  {
    id: "viewsonic-vp2768a",
    brand: "ViewSonic",
    name: "ViewSonic VP2768a",
    price: 449,
    imageUrl:
      "https://www.asus.com/media/global/gallery/fycywnzcmin80eds_setting_xxx_0_90_end_800.png",
    screenSize: 27,
    resolution: "2560x1440",
    refreshRate: 60,
    panelType: "IPS",
    certification: "spyder",
    slug: "viewsonic-vp2768a",
    deltaE: 1.03,
    srgb: 98.9,
  },
  {
    id: "msi-mag274qrf-qd",
    brand: "MSI",
    name: "MSI MAG274QRF-QD",
    price: 499,
    imageUrl:
      "https://dlcdnwebimgs.asus.com/gain/e5be58aa-a7b8-4a4d-a6a4-51807cba4f68/w800/fwebp",
    screenSize: 27,
    resolution: "2560x1440",
    refreshRate: 165,
    panelType: "IPS",
    certification: null,
    slug: "msi-mag274qrf-qd",
    deltaE: 2.78,
    srgb: 93.4,
  },
  {
    id: "lg-27up850-w",
    brand: "LG",
    name: "LG 27UP850-W",
    price: 549,
    imageUrl:
      "https://dlcdnwebimgs.asus.com/gain/0cfb9d23-cc35-428f-86c3-d122377f4711/w800/fwebp",
    screenSize: 27,
    resolution: "3840x2160",
    refreshRate: 60,
    panelType: "IPS",
    certification: "calman",
    slug: "lg-27up850-w",
    deltaE: 0.94,
    srgb: 99.1,
  },
  {
    id: "benq-pd2700u",
    brand: "BenQ",
    name: "BenQ PD2700U",
    price: 479,
    imageUrl:
      "https://dlcdnwebimgs.asus.com/gain/599dc7e1-1a75-4ea2-9f8d-78d68728a8d9/w800/fwebp",
    screenSize: 27,
    resolution: "3840x2160",
    refreshRate: 60,
    panelType: "IPS",
    certification: "spyder",
    slug: "benq-pd2700u",
    deltaE: 1.31,
    srgb: 98.2,
  },
  {
    id: "asus-rog-swift-pg279qm",
    brand: "ASUS",
    name: "ASUS ROG Swift PG279QM",
    price: 699,
    imageUrl:
      "https://www.asus.com/media/global/products/vu6dtkhyjqxf93km/P_setting_xxx_0_90_end_500.png",
    screenSize: 27,
    resolution: "2560x1440",
    refreshRate: 240,
    panelType: "IPS",
    certification: "calman",
    slug: "asus-rog-swift-pg279qm",
    deltaE: 1.08,
    srgb: 98.7,
  },
  {
    id: "dell-u2723de",
    brand: "Dell",
    name: "Dell UltraSharp U2723DE",
    price: 529,
    imageUrl:
      "https://dlcdnwebimgs.asus.com/gain/599dc7e1-1a75-4ea2-9f8d-78d68728a8d9/w800/fwebp",
    screenSize: 27,
    resolution: "2560x1440",
    refreshRate: 60,
    panelType: "IPS",
    certification: null,
    slug: "dell-ultrasharp-u2723de",
    deltaE: 1.74,
    srgb: 96.8,
  },
];

export const categories = [
  {
    id: "gaming",
    icon: Gamepad2,
    title: "Gaming",
    description: "Fast panels, low latency",
    gradient: "from-purple-500/10 to-pink-500/10",
    hoverGradient: "hover:from-purple-500/20 hover:to-pink-500/20",
    image:
      "https://images.unsplash.com/photo-1588626082526-e858d0109d94?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "professional",
    icon: Briefcase,
    title: "Professional",
    description: "Color critical work",
    gradient: "from-blue-500/10 to-cyan-500/10",
    hoverGradient: "hover:from-blue-500/20 hover:to-cyan-500/20",
    image:
      "https://images.unsplash.com/photo-1693773852578-65cf594b62dd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "ultrawide",
    icon: Monitor,
    title: "Ultrawide",
    description: "Immersive 21:9+",
    gradient: "from-orange-500/10 to-red-500/10",
    hoverGradient: "hover:from-orange-500/20 hover:to-red-500/20",
    image:
      "https://images.unsplash.com/photo-1723882620559-96bc6eef6603?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "laptops",
    icon: Laptop,
    title: "Laptops",
    description: "Built-in displays",
    gradient: "from-green-500/10 to-emerald-500/10",
    hoverGradient: "hover:from-green-500/20 hover:to-emerald-500/20",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "tvs",
    icon: Tv,
    title: "TVs",
    description: "Big screen accuracy",
    gradient: "from-indigo-500/10 to-violet-500/10",
    hoverGradient: "hover:from-indigo-500/20 hover:to-violet-500/20",
    image:
      "https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// how it works sections data
export const stepsData = [
  {
    id: 1,
    step: "01",
    title: "Search & Browse",
    desc: "Find monitors by brand, model, or use case across our database of professionally tested displays. Filter by panel type, resolution, refresh rate, price range, or color accuracy rating to narrow down exactly what fits your workflow.",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    step: "02",
    title: "View Verified Data",
    desc: "Every monitor page shows real Calman test results — Delta E averages, sRGB and DCI-P3 gamut coverage, gamma tracking, and white point accuracy. No manufacturer claims, no estimated specs. Just what the colorimeter measured.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    step: "03",
    title: "Compare Side-by-Side",
    desc: "Add up to four monitors to the comparison tool and see their color accuracy scores, specs, and prices lined up against each other. Spot the real differences that spec sheets hide — like which monitor actually covers more of the P3 gamut.",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    step: "04",
    title: "Get AI Recommendation",
    desc: "Tell us your use case, budget, and priorities — photo editing, gaming, video production, or general creative work. Our AI cross-references verified Calman data to recommend the best-matched display for your specific needs, not just the most popular one.",
    image:
      "https://images.unsplash.com/photo-1669723008642-b00fa9d10b76?w=600&auto=format&fit=crop",
  },
];

// latest calman tests data
export const calmanTests = [
  {
    id: "dell-u2723qe",
    brand: "Dell",
    model: "U2723QE",
    category: "Studio Display",
    testDate: "2026-02-12T00:00:00.000Z",
    metrics: {
      deltaE: 0.83,
      sRGB: 99.9,
    },
    image:
      "https://images.unsplash.com/photo-1543336472-fcf478c443db?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "apple-studio-display",
    brand: "Apple",
    model: "Studio Display",
    category: "Creative Monitor",
    testDate: "2026-02-08T00:00:00.000Z",
    metrics: {
      deltaE: 0.95,
      sRGB: 99.7,
    },
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "asus-proart-pa279crv",
    brand: "ASUS",
    model: "ProArt PA279CRV",
    category: "ProArt Monitor",
    testDate: "2026-02-05T00:00:00.000Z",
    metrics: {
      deltaE: 1.12,
      sRGB: 99.5,
    },
    image:
      "https://images.unsplash.com/photo-1528109901743-12b16e05eedf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const trustFeatures = [
  {
    icon: MonitorCheck,
    title: "Industry Standard Testing",
    description:
      "Every monitor is measured using Portrait Displays Calman — the industry standard for display calibration used by Hollywood studios and broadcast facilities.",
  },
  {
    icon: BarChart2,
    title: "Transparent Methodology",
    description:
      "Our full testing process is documented and publicly available. We measure Delta E, color gamut coverage, gamma accuracy, and white point consistency.",
  },
  {
    icon: RefreshCw,
    title: "Regularly Updated",
    description:
      "Monitors are retested after firmware updates that affect image processing. Our data stays current so your decisions are based on the latest performance.",
  },
];
