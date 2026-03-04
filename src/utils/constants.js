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
    certification: "calman",
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
    certification: "calman",
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
    certification: "spyder",
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
    title: "Multi-Source Verified Data",
    description:
      "We collect test results from multiple trusted reviewers who use Calman and Spyder. The same tools used in professional display calibration workflows.",
  },
  {
    icon: BarChart2,
    title: "Real Measurements Only",
    description:
      "Every Delta-E, color gamut and gamma value comes from published calibration tests. Never from manufacturer spec sheets or estimated figures.",
  },
  {
    icon: RefreshCw,
    title: "Sourced & Attributed",
    description:
      "Each result links back to its original test source. You can verify the data yourself. We don't ask you to take our word for it.",
  },
];
