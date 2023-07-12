import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  next,
  firebase,
  java,
  aschente,
  promptopia,
  going,
  flexibble,
  accenture,
  easygoing,
  servtec,
} from "../public/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Startup Owner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "NextJS",
    icon: next
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: 'Firebase',
    icon: firebase
  },
  {
    name: 'Java',
    icon: java
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Internship (Web Developer)",
    company_name: "ServTec Telecom",
    icon: servtec,
    iconBg: "#E6DEDD",
    date: "June 2020 - August 2020",
    points: [
      "Developed a fiber optic network mapping system for the city of Campina Grande.",
      "Project build using ReactJS, Leaflet, JavaScript, HTML, and CSS to make life easier for network operators.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Application Developer Associate",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#383E56",
    date: "September 2020- December 2021",
    points: [
      "Developing frontend and backend web applications using VueJS, webpack, Java and other technologies.",
      "Resolve bugs, performed continuous integration, and conducted application testing.",
      "Collaborated in a scrum development environment and successfully launched an application from scratch that is being used by millions of users.",
      "Participating in code reviews.",
    ],
  },
  {
    title: "Software Developer Analyst",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "December 2021 - Present",
    points: [
      "Rebuilt outdated bill installment portal with Java into a modern, performant, and responsive platform using Next.js, GraphQL and other modern technologies",
      "Contribute to technical and functional decisions for new products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Develop frontend and backend web applications used by millions of users.",
      "Restructured main applications, reducing testing and development time by 50%.",
      "Lead a team of high-performing 6 members.",
      "Restructured multiple applications to improve code readability and facilitate feature development."
    ],
  },
  {
    title: "Founder and Developer",
    company_name: "Easy Going",
    icon: easygoing,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    points: [
      "Successfully founded and led a startup focused on democratizing travel experiences. Developed and launched a mobile application using React Native for both iOS and Android platforms.",
      "Implemented Firebase services, including Firestore and Cloud Functions, to manage data storage, serverless backend logic, and user authentication. Utilized Google Cloud Services to optimize app performance and scalability.",
      "Utilized React Native framework to develop a feature-rich application, delivering seamless experiences to users on iOS and Android devices.",
      "Designed the application UI and UX using Figma.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Aschente",
    description:
      "Mobile application built to help people develop their discipline through challenges. Subscribe in challenges, check your progress and history.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: aschente,
    source_code_link: "https://github.com/JosiasBatista/aschente",
  },
  {
    name: "Promptopia",
    description:
      "Web application where people can share and discover powerful and creative prompts for multiple moderns AIs services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/JosiasBatista/promptopia",
  },
  {
    name: "Easy Going",
    description:
      "An mobile application for those who love to travel and want to make their experiences much easier and better when they are going to plan a trip whenever they wanna go.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "googlecloud",
        color: "pink-text-gradient",
      },
    ],
    image: going,
    source_code_link: "https://play.google.com/store/apps/details?id=com.going.goingapp",
  },
  {
    name: "Flexibble",
    description:
      "This application was create to let developers share their work and get inspired by others projects to create awesome applications and whatever they want",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "grafbase",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
      {
        name: "cloudinary",
        color: "green-text-gradient",
      },
    ],
    image: flexibble,
    source_code_link: "https://github.com/JosiasBatista/flexibble",
  },
];

export { services, technologies, experiences, testimonials, projects };
