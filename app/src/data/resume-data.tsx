import {
  Logo
} from "../images/logos";
import { GitHubIcon, LinkedInIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Muhammad Nouman",
  initials: "MN",
  location: "Lahore, Pakistan",
  locationLink: "https://www.google.com/maps/",
  about:
    "Computer Science student passionate about Generative AI and software development.",
  summary: (
    <>
      A highly motivated Computer Science student at UET Lahore with experience in Generative AI, AI-driven applications, and full-stack development. Skilled in multiple programming languages and frameworks, with a strong foundation in problem-solving and leadership.
    </>
  ),
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFTSR5Pe1gn_A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727197007505?e=1746662400&v=beta&t=7yS7TDSIUi9gKMc9XK1YiVxcR7pTkRshRKx5YWY7--0",
  personalWebsiteUrl: "https://nouman-dev-portfolio.vercel.app/",
  contact: {
    email: "2022cs49@student.uet.edu.pk",
    tel: "+923228429291",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Nouman-Usman",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nouman-usman/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Engineering and Technology, Lahore",
      degree: "Bachelor's Degree in Computer Science",
      start: "2022",
      end: "Present",
    },
  ],
  work: [
    {
      company: "Xavor Corporation",
      link: "about:blank",
      badges: ["Remote", "Gen-AI", "AI Agents", "RAG", "React", "TypeScript", "Node.js"],
      title: "Generative AI Intern",
      logo: Logo,
      start: "June 2024",
      end: "Sep 2024",
      description: (
        <>
          Recognized as a top performer in Generative AI, achieving 9/10 proficiency in Open Source LLMs.
          <ul className="list-inside list-disc">
            <li>Ranked 3rd in the batch based on expertise in Gen-AI applications.</li>
          </ul>
        </>
      ),
    },
    {
      company: "University of California, Irvine",
      link: "about:blank",
      badges: ["Remote", "AI", "Healthcare", "Flask", "Azure"],
      title: "Generative AI Developer",
      logo: Logo,
      start: "Aug 2024",
      end: "Sep 2024",
      description: (
        <>
          Developed an AI-driven healthcare application that outperformed 20+ competing projects.
          <ul className="list-inside list-disc">
            <li>Enhanced medical education through AI integration.</li>
          </ul>
        </>
      ),
    },
    {
      company: "UET Lahore",
      link: "about:blank",
      badges: ["Teaching", "Technical Guidance", "Leadership"],
      title: "Teaching Assistant",
      logo: Logo,
      start: "Sep 2023",
      end: "Present",
      description: (
        <>
          Providing technical guidance, leading to a 25% improvement in student test scores.
          <ul className="list-inside list-disc">
            <li>Designed and implemented better teaching strategies.</li>
          </ul>
        </>
      ),
    }
  ],
  skills: [
    "Python", "C++", "C#", "JavaScript", "TypeScript", "Java", "SQL", "Next.js", "ASP.NET", "Flask", "Azure", "Google Cloud Platform", "Leadership", "Problem Solving"
  ],
  projects: [
    {
      title: "ApnaWaqeel",
      techStack: ["Next.js", "Generative AI", "Azure", "Twilio"],
      description:
        "Building Pakistan’s first legal case management system for lawyers and clients with automated reminders.",
      logo: Logo,
      link: {
        label: "View Project",
        href: "about:blank",
      },
    },
    {
      title: "Legal Assistant",
      techStack: ["Flask", "Langchain", "Pinecone", "Azure"],
      description:
        "Developed an AI-based legal assistant focused on Pakistani law.",
      logo: Logo,
      link: {
        label: "View Project",
        href: "about:blank",
      },
    },
    {
      title: "BP-PAL",
      techStack: ["Flask", "Azure", "Generative AI"],
      description:
        "Engineered a chatbot to assist UC Irvine students with health management.",
      logo: Logo,
      link: {
        label: "View Project",
        href: "about:blank",
      },
    },
    {
      title: "E-Commerce Store",
      techStack: ["ASP.NET", "jQuery", "JavaScript", "HTML", "CSS"],
      description:
        "Developed an ASP.NET-based e-commerce store with a responsive and user-friendly interface.",
      logo: Logo,
      link: {
        label: "View Project",
        href: "about:blank",
      },
    },
  ],
} as const;
