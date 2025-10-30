// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import rankUpGlobalLogo from './assets/company_logo/rankup_global.jpg';

// Education Section Logo's
import rccalogo from './assets/education_logo/rcca_logo.webp';
import carmellogo from './assets/education_logo/carmel.png';
import presentationlogo from './assets/education_logo/presentation.jpg';

// Project Section images
import project1 from './assets/project1.png';
import project2 from './assets/project2.jpg';
import project3 from './assets/project3.jpg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: rankUpGlobalLogo,
      role: "WordPress Developer & Designer - Intern",
      company: "RankUp Global",
      date: "October 2024 - December 2025",
      desc: "Developed and Designed dynamic websites using the wordpress, handling both frontend and backend development. Collaborated with cross-functional teams to build and design responsive UI and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "PHP",
        "Figma",
      ],
    },
    {
      id: 1,
      img: rankUpGlobalLogo,
      role: "Social Media Manager - Part Time Job",
      company: "RankUp Global",
      date: "January 2025 - June 2025",
      desc: "Contributed to impactful digital campaigns as a Social Media Manager, overseeing content creation, strategy, trend research and audience engagement across multiple platforms. Utilized skills in content planning using AI tools and promt writing, copywriting, Canva design, analytics tracking, social media advertising, SEO, and community management to enhance brand visibility, boost follower engagement, and drive online growth.",
      skills: [
        "Canva",
        "Photopea",
        "Inshot",
        "Microsoft ClipChamp",
        "Social Media Apps",
        "ChatGPT Plus",
        "Perplexity",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: rccalogo,
      school: "Rosary College of Commerce & Arts, Navelim, Goa",
      date: "July 2023 - Present",
      grade: "9.15 SGPA",
      desc: "I am pursuing my Bachelor's degree (BCA) in Computer Applications from Rosary College of Commerce & Arts, Navelim, Goa. During my time at Rosary College, I gained a strong foundation in programming, software development, and computer applications principles. I have studied courses such as Python Programming, Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, Agile Methodologies, Full Stack Development, UI/UX development, Cloud Computing and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Rosary College has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Computer Applications - BCA",
    },
    {
      id: 1,
      img: carmellogo,
      school: "Carmel Higher Secondary School, Nuvem, Goa",
      date: "June 2021 - Apr 2023",
      grade: "74%",
      desc: "I completed my class 12 education from Carmel Higher Secondary School, Nuvem, Goa, under the Goa board, where I studied Accounting, Business Studies, Economics, Secretarial Practice and Information Technology",
      degree: "Commerce",
    },
    {
      id: 2,
      img: presentationlogo,
      school: "Presentation Convent High School, Fatorda, Goa",
      date: "Jun 2015 - March 2021",
      grade: "84%",
      desc: "I completed my class 10 education from Late Shri Vinayak Gopal SHenvi High School School, Rawanfond, Navelim, Goa, under the Goa board, where I studied Mathematics, Geography, History and Computer.",
      degree: "Class 10",
    },
  ];


  export const projects = [
  {
    id: 0,
    title: 'Event Company Website',
    description:
      'An Event Company Website built using React and CSS for managing and showcasing event services.',
    image: project2,
    tags: ['React', 'CSS', 'JavaScript', 'HTML', 'Vite'],
    github: '#', // Add your GitHub repo link
    webapp: '#', // Add your live demo link
  },
  {
    id: 1,
    title: 'E-Commerce Website: Gym Equipments',
    description:
      'A e-commerce website for buying all Gym Equipments. Has features like cart and checkout.',
    image: project1,
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP'],
    github: '#',
    webapp: '#',
  },
  {
    id: 2,
    title: 'Johns Highland Comfort',
    description:
      'A guest house website built and designed during my internship using WordPress, offering booking and e-commerce features like cart and checkout.',
    image: project3,
    tags: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
    github: '',
    webapp: '#',
  },
  
];

  
