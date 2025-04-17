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
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Fonctionnalités",
    url: "/features",
  },
  {
    id: "1",
    title: "Tarifs",
    url: "/pricing",
  },
  {
    id: "2",
    title: "Guide",
    url: "/how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "/roadmap",
  },
  {
    id: "4",
    title: "S'inscrire",
    url: "/register",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Se connecter",
    url: "/login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [i1, i2, i3, i4, i5,i6,i7,i8];

export const brainwaveServices = [
  "Catalogue international",
  "Qualité d'image supérieure",
  "Intégration multi-appareils",
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
    title: "Contrôle vocal des chaînes",
    text: "Changez de chaîne, ajustez le volume ou recherchez un film en utilisant simplement votre voix. Compatible avec Alexa, Google Assistant et Siri.",
    date: "May 2025 ",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Statistiques de visionnage",
    text: "Découvrez combien d'heures vous avez passées sur vos séries préférées, vos genres les plus regardés, et recevez des recommandations basées sur vos habitudes.",
    date: "May 2025",
    status: " EN DÉVELOPPEMENT",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Profils personnalisés",
    text: "Créez des profils pour chaque membre de la famille, avec des recommandations, une interface personnalisée et un contrôle parental intégré.",
    date: "May 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Intégration multi-plateformes",
    text: "Regardez vos chaînes préférées sur mobile, tablette, Smart TV, box Android ou navigateur web. Synchronisation instantanée sur tous vos appareils.",
    date: "May 2025",
    status: "EN PRÉPARATION",
    imageUrl: roadmap4,
  },
];

export const collabText =["Avec une diffusion fluide et une sécurité de premier ordre, c'est la solution parfaite pour les amateurs de divertissement exigeants."];
export const collabText1 =["Accédez à des milliers de chaînes et contenus à la demande avec une qualité d'image exceptionnelle."];
export const collabText2 =["Naviguez en toute confiance grâce à notre système de protection avancé."];

export const collabContent = [
  {
    id: "0",
    title: "Intégration Transparente",
    text: collabText,
  },
  {
    id: "1",
    title: "Streaming Intelligent",
    text: collabText1,
  },
  {
    id: "2",
    title: " Sécurité Optimale",
    text: collabText2,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 100,
    height: 100,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 100,
    height: 100,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 100,
    height: 100,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 100,
    height:100,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 100,
    height: 100,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 100,
    height: 100,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 100,
    height: 100,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 100,
    ontSize: 12,
    height: 100,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Qualité HD/4K",
    text: "Profitez d'une qualité d'image exceptionnelle avec nos chaînes en HD et 4K. Une expérience visuelle incomparable. ",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Contenu Varié",
    text: "Plus de 24 000 chaînes et 90 000 films et séries. Sports, actualités, divertissement, tout y est! ",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Stabilité Garantie",
    text: "Serveurs ultra-performants garantissant une diffusion fluide sans coupures ni tamponnement. ",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Multi-Appareils",
    text: "Compatible avec tous vos appareils : Smart TV, Android, iOS, MAG, FireStick, et plus encore. ",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Support 24/7",
    text: "Une équipe de support technique disponible 24/7 pour vous assister en cas de besoin. ",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Installation Rapide",
    text: "Activation instantanée et installation simple. Commencez à regarder en quelques minutes! ",
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
