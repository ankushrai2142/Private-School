import img1 from "../assets/images/p-1.jpeg";
import img2 from "../assets/images/p-2.jpeg";
import img3 from "../assets/images/p-3.jpeg";
import img4 from "../assets/images/p-4.jpeg";
import img5 from "../assets/images/p-5.jpeg";
import img6 from "../assets/images/p-6.jpeg";

export const schoolImages = {
  assembly: img1,
  campus: img2,
  morningAssembly: img3,
  students: img4,
  activities: img5,
  entrance: img6,
};

export const aboutImages = {
  campus: img2,
  students: img1,
  classroom: img3,
  library: img6,
  activities: img5,
};

export const galleryImages = [
  {
    src: img2,
    title: "School Campus",
    caption: "K.D Public School, Fazilnagar",
  },
  {
    src: img1,
    title: "Morning Assembly",
    caption: "Students gathered for daily assembly",
  },
  {
    src: img6,
    title: "School Entrance",
    caption: "Welcome to K.D Public School",
  },
  {
    src: img4,
    title: "Our Students",
    caption: "Disciplined and dedicated learners",
  },
  {
    src: img5,
    title: "Student Activities",
    caption: "Building character through discipline",
  },
  {
    src: img3,
    title: "Campus Life",
    caption: "A vibrant learning community",
  },
];

export const schoolInfo = {
  name: "K.D Public School",
  fullName: "K.D PUBLIC SCHOOL, FAZILNAGAR, KUSHINAGAR (U.P.)",
  alternateName: "K.D Public Intermediate College",
  tagline: "Nurturing Minds, Building Futures",
  description:
    "K.D Public School is a reputed educational institution located in Fazilnagar, Kushinagar, Uttar Pradesh. Committed to providing quality education and holistic development, the school serves students from Fazilnagar, Banbira, and surrounding villages in the Kushinagar district.",
  address: {
    line1: "Fazilnagar, Banbira",
    line2: "Kushinagar, Uttar Pradesh",
    pincode: "274401",
    full: "Fazilnagar, Banbira, Kushinagar, Uttar Pradesh 274401",
  },
  contact: {
    phone: "+91 74085 31545",
    phoneRaw: "917408531545",
    whatsapp: "917408531545",
  },
  rating: {
    score: 4.3,
    reviews: 4,
    label: "Rated 4.3 by parents & community",
  },
  rankings: {
    pincodeRank: "27 out of 174 schools in 274401",
    pincodePercentile: "Top 15.52% in PIN code area",
    popularityRank: "No. 14 in local popularity",
    indiaRank: "Top 23.54% schools in India",
  },
  serviceAreas: [
    "Banbira",
    "Fazilnagar",
    "Belwa Karkhana",
    "Bhatahi Khurd",
    "Bihar Buzurg",
    "Chandrauta",
    "Farendaha",
    "Gurwalia",
    "Koilasawa",
    "Lachhia",
    "Laxmipur Mishra",
    "Patherawa",
    "Pipra Kanak",
    "Sohang",
    "Sumahi Khurd",
  ],
  nearbySchools: [
    {
      name: "Glorious Academy Fazilnagar",
      address: "Fazilnagar, Uttar Pradesh 274401",
      rating: 4.5,
    },
    {
      name: "Sanskar Central Academy",
      address: "Durga Bhawan, NH 28, Fazilnagar, Uttar Pradesh 274401",
      rating: 4.2,
    },
    {
      name: "Intelligent Public School",
      address: "Lachhiya, Kushinagar District, Uttar Pradesh 274401",
      rating: 4.5,
    },
  ],
  googleMapsUrl:
    "https://www.google.com/search?kgmid=%2Fg%2F11g8nmc2c5&hl=en-IN&q=K.D+PUBLIC+SCHOOL+%2CFAZILNAGAR%2CKUSHINAGAR(U.P)",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=K.D+PUBLIC+SCHOOL+Fazilnagar+Kushinagar+Uttar+Pradesh+274401&hl=en&z=15&output=embed",
};

export const facilities = [
  {
    title: "Smart Classrooms",
    description:
      "Modern teaching aids and digital learning tools for an engaging classroom experience.",
    icon: "📚",
  },
  {
    title: "Experienced Faculty",
    description:
      "Dedicated teachers focused on academic excellence and character building.",
    icon: "👨‍🏫",
  },
  {
    title: "Holistic Development",
    description:
      "Balanced focus on academics, sports, arts, and moral values for complete growth.",
    icon: "🌱",
  },
  {
    title: "Safe Campus",
    description:
      "A secure and nurturing environment where every child feels valued and protected.",
    icon: "🛡️",
  },
  {
    title: "Quality Education",
    description:
      "Structured CBSE curriculum for strong foundational learning and academic excellence.",
    icon: "🎓",
  },
  {
    title: "Community Focus",
    description:
      "Serving Fazilnagar and nearby villages with accessible, community-centered education.",
    icon: "🏘️",
  },
];

export const academics = [
  {
    level: "Primary Education",
    grades: "Classes I – V",
    description:
      "Foundation years focused on literacy, numeracy, creativity, and social skills.",
  },
  {
    level: "Middle School",
    grades: "Classes VI – VIII",
    description:
      "Expanded curriculum with science, mathematics, languages, and co-curricular activities.",
  },
  // {
  //   level: "Secondary & Intermediate",
  //   grades: "Classes IX – XII",
  //   description:
  //     "Board examination preparation with emphasis on career readiness and life skills.",
  // },
];

export const stats = [
  { value: "4.3★", label: "Community Rating" },
  { value: "174+", label: "Schools in Area" },
  { value: "Top 16%", label: "PIN Code Ranking" },
  { value: "15+", label: "Villages Served" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Academics", href: "#academics" },
  { label: "Admission", href: "#admission" },
  { label: "Contact", href: "#contact" },
];
