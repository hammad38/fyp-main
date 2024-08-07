import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Explore",
    url: "explore",
  },
  {
    id: "5",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },

  {
    id: "6",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Collection of 30+ screens",
  "150+ hand-crafted widgets",
  "No external libraries",
  "100% flexible"
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Development of MVP",
    text: "Define and build the Minimum Viable Product (MVP) of Widget World, focusing on core features essential for initial release.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Iterative Improvement",
    text: "Prioritize enhancements based on user needs and market trends to ensure product-market fit.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Community Engagement and Growth",
    text: "Build a community around Widget World through effective marketing, outreach, and engagement efforts.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Widget World: Fast-track Development with Smart Automation for Enhanced Team Collaboration.";

export const collabContent = [
  {
    id: "0",
    title: "Rapid Development",
    text: collabText,
  },
  {
    id: "1",
    title: "High Performance",
  },
  {
    id: "2",
    title: "Automated Workflows",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Access to free widgets.",
    price: "0",
    features: [
      "Widget Freedom: Access Free Tools for Your Needs",
      "Explore Diverse Design Styles for Creative Expression",
      "Unlimited Storage for Your Digital Assets"
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced UI's, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced UI that can build complex Apps",
      "A User dashboard to manage your templates",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom UI Pages, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI-Powered Widget Assistant for Seamless Queries",
      "Personalized Widget Recommendations Tailored to Your Preferences",
      "Explore Widget Functionality and Features",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Pre-built Widgets",
    text: "Access a diverse range of ready-to-use widgets tailored for various UI elements, accelerating your development process and ensuring design consistency.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Publish Widgets",
    text: "Share your custom widgets with the Widget World community, contributing to the ecosystem and gaining recognition for your creations.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Clone Widgets",
    text: "Effortlessly duplicate existing widgets, saving time and effort when creating similar UI elements for different projects.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Clone Templates",
    text: "Quickly replicate entire UI templates, including layouts, styles, and functionalities, for rapid prototyping and project bootstrapping.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Organize",
    text: "Keep your projects tidy and well-structured with powerful organization features, allowing you to categorize and manage widgets and templates efficiently for enhanced productivity.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Easy Access",
    text: "Navigate Widget World's interface seamlessly with intuitive controls and straightforward organization, ensuring a hassle-free experience for developers.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
