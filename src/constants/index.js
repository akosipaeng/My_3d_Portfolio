import {
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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  webresearch,
  dataanalyst,
  dataentry,
  graphicdesign,
  admin,
  contentmod,
  ecommerce,
  taskus,
  freelancework,
  photoshop,
  tableau,
  excel,
  sushi,
  promptopia,
  capstoneproject,
} from "../assets";

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
    title: "Web Research",
    icon: webresearch,
  },
  {
    title: "Data Analyst",
    icon: dataanalyst,
  },
  {
    title: "Data Entry",
    icon: dataentry,
  },
  {
    title: "Graphic Design",
    icon: graphicdesign,
  },
  {
    title: "Admin Task",
    icon: admin,
  },
  {
    title: "Content Moderator",
    icon: contentmod,
  },
  {
    title: "Seller Central Management",
    icon: ecommerce,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "photoshop",
    icon: photoshop,
  },

  {
    name: "tableau",
    icon: tableau,
  },

  {
    name: "excel",
    icon: excel,
  },
];

const experiences = [
  {
    title: "Data Encoder",
    company_name: "TaskUs",
    icon: taskus,
    iconBg: "#383E56",
    date: "April 2018 - Present",
    points: [
      "Managing business location-related information on multiple directories.",
      "Maintaining accurate business data information - Business hours, products and services, etc.",
    ],
  },
  {
    title: "Content Moderator",
    company_name: "TaskUs",
    icon: taskus,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "Filtering private information and the like.",
      "Ensuring that the information displayed to the user is instructive and safe.",
    ],
  },
  {
    title: "Wedding Website - RSVP",
    company_name: "Freelance - Gig",
    icon: freelancework,
    iconBg: "#383E56",
    date: "March 2022",
    points: [
      "Create a visually appealing and user-friendly wedding website with a focus on the RSVP feature.",
      "Implement a robust RSVP system allowing guests to easily confirm their attendance.",
    ],
  },
  {
    title: "Wedding Invitation - Design",
    company_name: "Freelance - Gig",
    icon: freelancework,
    iconBg: "#E6DEDD",
    date: "Jan 2023",
    points: [
      "Develop unique and visually stunning wedding invitation designs that align with the couple's vision and theme.",
      "Use graphic design software and tools to create personalized and aesthetically pleasing invitations",
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
    name: "SushiMan - JSM",
    description:
      "Sushiman is a straightforward landing page project for a sushi business. Using solely HTML and CSS, with an emphasis on developing a visually appealing design and applying a well-structured layout.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: sushi,
    source_code_link: "https://github.com/akosipaeng/sushi",
    app_link: "https://sushi-jsm.vercel.app/",
  },
  {
    name: "Promptopia - JSM",
    description:
      "Promptopia is an innovative open-source AI prompting platform, revolutionizing creative exploration by facilitating the discovery, creation, and sharing of prompts in the modern digital landscape.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/akosipaeng/project_promptopiaJSM",
    app_link: "https://project-promptopia-jsm.vercel.app/",
  },
  {
    name: "Soap Online Store",
    description:
      "As the culmination of a web development boot camp, my capstone project showcases proficiency in React.js, frontend, and backend development, demonstrating a understanding of web development.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: capstoneproject,
    source_code_link:
      "https://gitlab.com/b282-vasquez/capstone/-/tree/master/vasquez-capstone-3/capstone-3-project",
    app_link: "https://capstone-3-vasquez.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
