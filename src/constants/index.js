import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  webresearch,
  dataanalyst,
  dataentry,
  graphicdesign,
  admin,
  contentmod,
  ecommerce,
  taskus,
  photoshop,
  tableau,
  excel,
  sushi,
  promptopia,
  capstoneproject,
  salesDashboard,
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
    title: "Data Analyst",
    company_name: "TaskUs",
    icon: taskus,
    iconBg: "#383E56",
    date: "April 2021",
    points: [
      "Conducted in-depth data analysis, identifying key business trends. ",
      "Cleaned and processed large datasets, ensuring data integrity.",
      "Created visualizations and reports for effective communication of insights.",
    ],
  },
  {
    title: "Content Moderator",
    company_name: "TaskUs",
    icon: taskus,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "Moderated user-generated content, ensuring compliance with guidelines",
      "Identified and addressed content issues promptly and effectively",
      "Collaborated with cross-functional teams to enhance content moderation processes.",
    ],
  },
  {
    title: "Data Entry Specialist",
    company_name: "TaskUs",
    icon: taskus,
    iconBg: "#383E56",
    date: "April 2018 - Present",
    points: [
      "Entered and verified data with a focus on maintaining high accuracy levels.",
      "Efficiently processed large volumes of data within established timelines",
      "Collaborated with team members to ensure data consistency.",
    ],
  },
  {
    title: "Production operator",
    company_name: "Emi Yazaki",

    iconBg: "#E6DEDD",
    date: "2013 - 2014",
    points: [
      "Assembling products, maintaining workstations clean, cleaning equipment, tagging products and following safety guidelines.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Having instructed this web development student at the Zuitt Coding Bootcamp, I confidently endorse him for his commendable dedication, exceptional work ethic, and impressive skills, showcasing a remarkable commitment to excellence in the field.",
    name: "Riza",
    designation: "IT Instructor",
    company: "Zuitt Coding Bootcamp",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXq3nFLGTs_KByA1WwlD1rW9N6G1bStpkXWEXvWuucinA=s88-w88-h88-c-k-no",
  },
  {
    testimonial:
      "Rafael is a hard working person, resiliet and always willing to go above and beyond to improve himself that would be beneficial as well to the company.",
    name: "Ira P",
    designation: "ICU Nurse",
    company: "Surrey Memorial Hospital",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXCM5XocaF2mexfdH5kkPvAfeGS4oaklPNonyQFdP0INg=s58-p-k-rw-no",
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
    name: "Sales Dasboard",
    description:
      "Visualize key sales metrics, track performance trends, and gain actionable intelligence at a glance. With interactive charts, graphs, and customizable filters, we can easily analyze sales data, identify opportunities, and make informed decisions. ",
    tags: [
      {
        name: "Power BI Developer",
        color: "green-text-gradient",
      },
      {
        name: "Power BI Data Model",
        color: "pink-text-gradient",
      },
    ],
    image: salesDashboard,
    source_code_link:
      "https://app.powerbi.com/view?r=eyJrIjoiM2E2MDkyZTEtMmQ4Yi00YmNhLWE4NDYtNmE0YTM1MjYyZjJmIiwidCI6Ijk1YjgxMmU5LWQ5MzYtNGFjYy05NjIzLWU1OGIzZTM5YmY3MSIsImMiOjEwfQ%3D%3D",
    app_link:
      "https://app.powerbi.com/view?r=eyJrIjoiM2E2MDkyZTEtMmQ4Yi00YmNhLWE4NDYtNmE0YTM1MjYyZjJmIiwidCI6Ijk1YjgxMmU5LWQ5MzYtNGFjYy05NjIzLWU1OGIzZTM5YmY3MSIsImMiOjEwfQ%3D%3D",
  },
];

export { services, technologies, experiences, testimonials, projects };
