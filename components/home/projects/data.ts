import { Project } from "./types";
import africaexchange from "../../../public/static/projects/africaexchange.png";
import afex from "../../../public/static/projects/afex.africa.png";
import payx from "../../../public/static/projects/pay-x.png";
import cudie from "../../../public/static/projects/cudie.png";
import globaladmin from "../../../public/static/projects/globaladmin.png";
import traceability from "../../../public/static/projects/traceability.png";
import sahelAi from "../../../public/static/projects/sahel.ai.png";
import scepterStore from "../../../public/static/LANDING PAGE.svg";
import arrowheadPharma from "../../../public/static/projects/arrowhead.svg";

import scepter360 from "../../../public/static/projects/scepter.png";

export const projects: Project[] = [
  {
    name: "Arrowhead Pharmaceuticals",
    paragraphs: [
      "Arrowhead Pharmaceuticals is a forward-thinking pharmaceutical company in Nigeria transforming how healthcare providers procure, manage, and pay for medicines. We import, manufacture, and distribute high-quality generic drugs, ensuring hospitals, pharmacies, and clinics have reliable access to essential medicines.",
      "With Arrowhead Pharmaceuticals, you get more than a supplier—you get a healthcare partner dedicated to improving operational efficiency.",
      "Our mission is to provide affordable and reliable pharmaceutical solutions that improve operational efficiency and ensure consistent availability of essential medications for better healthcare delivery. We operate with integrity, innovation, customer centricity, and excellence.",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Cypress",
      "Vitest",
      "React-Testing-Library",
      "Strapi",
      "PostgreSQL",
      "SQL",
    ],
    source: "",
    live: "https://arrowheadpharmaceuticals.ng/",
    image: arrowheadPharma,
  },
  {
    name: "Scepter360",
    paragraphs: [
      "Scepter360 is powering the next generation of healthcare systems. It is the world's first modular Electronic Medical Record platform, enabling healthcare providers and governments to modernize care delivery through intelligent, integrated, and infrastructure-independent solutions.",
      "From patient management to analytics, Scepter360 provides a comprehensive suite of healthcare modules engineered for flexibility and scale.",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Cypress",
      "Vitest",
      "React-Testing-Library",
      "Strapi",
      "PostgreSQL",
      "SQL",
    ],
    source: "",
    live: "https://scepter360.com/",
    image: scepter360,
  },
  {
    name: "Scepter360 Store",
    paragraphs: [
      "Scepter360 Store is an e-commerce platform providing a trusted source for quality pharmaceutical products with expert care. The platform is designed to ensure seamless transactions, reliable product delivery, and a user-friendly shopping experience.",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Cypress",
      "Vitest",
      "React-Testing-Library",
      "Strapi",
      "PostgreSQL",
      "SQL",
    ],
    source: "",
    live: "https://store.scepter360.com/",
    image: scepterStore,
  },
  {
    name: "Sahel AI",
    paragraphs: [
      "Sahel AI provides AI solutions for the Middle East and Africa, specifically for transactional lawyers. It helps draft and review contracts faster and more efficiently within Microsoft Word, potentially saving up to 10 hours per week. Sahel AI is also ISO 27001 certified. Please verify all details independently.",
    ],
    tech: [
      "Typescript",
      "Tailwindcss",
      "Nextjs",
      "Django",
      "Docker",
      "Cypress",
      "Vitest",
      "React-Testing-Library",
    ],
    source: "",
    live: "https://www.sahel.ai/",
    image: sahelAi,
  },
  {
    name: "Afex Blog Website",
    paragraphs: [
      "AFEX is a commodity trade solutions company that promotes efficient trade and wealth creation through the commodities market. You can also explore career opportunities there. Remember to double-check for the latest information.",
    ],
    tech: [
      "Typescript",
      "Tailwindcss",
      "Nextjs",
      "Django",
      "Docker",
      "Cypress",
      "Vitest",
      "React-Testing-Library",
    ],
    source: "",
    live: "https://www.afex.africa/",
    image: afex,
  },

  {
    name: "Africaexchange",
    paragraphs: [
      "AfricaExchange is a cutting-edge platform that offers seamless access to Africa's vibrant commodities market and connects users with the global physical and financial commodity marketplace. It provides advanced tools and real-time data to simplify trading, enabling users to explore a wide range of commodities and make informed investment decisions. The platform is designed to bridge the gap between local opportunities and global trading networks, making it easier to navigate and capitalize on market trends.",
    ],
    tech: [
      "Typescript",
      "Tailwindcss",
      "Nextjs",
      "Django",
      "Docker",
      "Cypress",
      "Vitest",
      "React-Testing-Library",
    ],
    source: "",
    live: "https://africaexchange.com",
    image: africaexchange,
  },
  {
    name: "Pay-X",

    paragraphs: [
      "Pay-X is an admin-based platform designed to facilitate both local and international transactions with ease. It offers streamlined processing for a range of financial activities, providing administrators with comprehensive tools to manage, monitor, and execute transactions efficiently. With a focus on user-friendly interfaces and robust security, Pay-X ensures that transactions are handled smoothly, whether they are domestic or cross-border.",
    ],
    tech: [
      "Nextjs",
      "Tailwindcss",
      "Typescript",
      "Django",
      "API",
      "Cypress",
      "Vitest",
      "React-Testing-Library",
    ],
    source: "",
    live: "https://payx.africaexchange.com",
    image: payx,
  },
  {
    name: "Cudie",
    paragraphs: [
      "CUDIE is an innovative payment platform developed by AFEX Commodities Exchange Limited (AFEX) that prioritizes the privacy and protection of user data. Complying with the Nigeria Data Protection Act (2023) and other relevant privacy regulations, CUDIE (referred to as 'us' 'we' or 'our') outlines its practices for collecting, using, disclosing, erasing, and restricting Personal Data. This policy ensures that your information is handled with the utmost care and is used solely for enhancing and providing the Platform. By using CUDIE, you consent to the collection and use of your data as described, with terms aligning with our overall terms and conditions.",
    ],
    tech: [
      "Reactjs",
      "Typescript",
      "Tailwindcss",
      "Nodejs",
      "API",
      "Cypress",
      "Vitest",
      "React-Testing-Library",
    ],
    source: "",
    live: "https://cudie-admin.afexnigeria.com",
    image: cudie,
  },
  {
    name: "Globaladmin",

    paragraphs: [
      "Globaladmin is an administrative platform exclusively accessible to senior staff members. It is designed to manage activities related to commodities and other operations across various regions. The platform allows senior staff to oversee and control the entire lifecycle of commodities, including tracking, storage, processing, and distribution. Additionally, Globaladmin facilitates the management of other regional activities, ensuring that all operations are efficiently coordinated and monitored. This system enhances organizational oversight, improves operational efficiency, and supports decision-making by providing senior staff with comprehensive tools and data for managing complex activities across different regions.",
    ],

    tech: ["Reactjs", "Typescript", "Tailwindcss", "API"],
    source: "",
    live: "https://global-admin.workbench.exchange/",
    image: globaladmin,
  },
  {
    name: "Traceability",

    paragraphs: [
      "Traceability system offers a comprehensive solution for tracking commodities from the farm to the consumer's plate. It ensures safety, transparency, and accountability by documenting each stage of the commodity's journey. This includes tracking the origins of commodities from the point of harvest, through warehouse storage, rebagging, and processing, as well as any intermediate distribution steps. This system helps in maintaining the quality and safety of the commodities, providing detailed information about their handling and movement, and fostering consumer trust by ensuring transparency.",
    ],

    tech: ["Reactjs", "Typescript", "Tailwindcss", "API"],
    source: "",
    live: "https://traceability.workbench.exchange",
    image: traceability,
  },
];

