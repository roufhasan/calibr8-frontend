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
    href: "/monitors?panelType=oled&useCase=gaming",
  },
  {
    id: "4k",
    label: "4K Design",
    href: "/monitors?resolution=4k&useCase=content-creation",
  },
  {
    id: "1440p",
    label: "Budget 1440p",
    href: "/monitors?resolution=qhd&priceRange=0%2C40000",
  },
  {
    id: "ultra",
    label: "Ultrawide",
    href: "/monitors?resolution=uwqhd",
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

export const methodologies = [
  {
    label: "The standard",
    title: "CIE-based colour measurement",
    description:
      "Every value — ΔE2000, sRGB, DCI-P3, gamma — is grounded in CIE 1931 colorimetry. The same standard used by display manufacturers, film studios and calibration labs worldwide.",
  },
  {
    label: "The reviewers",
    title: "Measured, not just watched",
    description:
      "We only index data from reviewers who publish instrument-based results using Calman or Spyder. Opinion is theirs. The numbers are independently verifiable.",
  },
  {
    label: "The attribution",
    title: "Every number has a name behind it",
    description:
      "Each data point links back to its source review. Full credit, always. We exist because of the people who do the testing — that's not a footnote, it's the foundation.",
  },
];

export const processSteps = [
  {
    label: "Search",
    step: "01",
    title: "Filter by what actually matters",
    description:
      "Search by model, brand, use case or budget. Real filters — panel type, resolution, refresh rate and colour gamut coverage. Not marketing categories.",
  },
  {
    label: "Read",
    step: "02",
    title: "Read the numbers, not the claims",
    description:
      "Every monitor page shows verified ΔE2000, sRGB and DCI-P3 values from Calman and Spyder tests — sourced from reviewers who measured it, original review linked.",
  },
  {
    label: "Decide",
    step: "03",
    title: "Compare side by side, then decide",
    description:
      "Add any monitors to the comparison table. All their measured data in one place — choosing between numbers, not between which reviewer you watched last.",
  },
];
