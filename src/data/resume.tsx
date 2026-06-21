import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Angular } from "@/components/ui/svgs/angular";
import { Cpp } from "@/components/ui/svgs/cpp";
import { Java } from "@/components/ui/svgs/java";
import { Sql } from "@/components/ui/svgs/sql";
import { Azure } from "@/components/ui/svgs/azure";
import { NextjsLogoLight } from "@/components/ui/svgs/nextjsLogoLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";

export const DATA = {
  name: "Xining Schmidt-Chen",
  initials: "XC",
  url: "https://dillion.io",
  location: "Portland, OR",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full-stack Web Application Developer. I love learning and I have a fluffy puppy (Cornflake) and a fluffy cat (Ruby).",
  summary:
    "I got my master's degree in Computer Science in 2024 with a thesis on [detecting brain vulnerability using network neuroscience](https://hdl.handle.net/1880/120335). During my master's, I created a [mini python library](https://github.com/xiningchen/Towlson-Group-Code) for efficiently analyzing large brain images. Since graduating, I've been working at [Tandem Studios](https://www.tandemstudios.ca/) as a full-stack web application developer.",
  avatarUrl: "/me.jpg",
  primarySkills: [
    { name: "ASP.NET (C#)", icon: Csharp },
    { name: "SQL", icon: Sql },
    { name: "Angular", icon: Angular },
    { name: "Azure", icon: Azure },
    { name: "JavaScript", icon: Typescript }, // FIX
  ],
  otherSkills: [
    { name: "Python", icon: Python },
    { name: "C++", icon: Cpp },
    { name: "Java", icon: Java },
    { name: "Flutter", icon: Java }, // FIX
    { name: "Next.js", icon: NextjsIconDark }, // FIX - switch between light and dark? How did original do it?
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "chenxshining@gmail.com",
    tel: "+18254491687",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/xiningchen",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/xining-chen/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:chenxshining@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Tandem Studios",
      href: "https://www.tandemstudios.ca/",
      badges: [],
      location: "Remote",
      title: "Full-stack Developer",
      logoUrl: "/work_in_tandem_logo.jpg",
      start: "October 2023",
      end: "Present",
      description:
        "At Tandem Studios, I develop and maintain full-stack web applications using ASP.NET, Angular, Razor Pages, EF Core, SQL Server, and Azure. I lead the development of a legacy system from architecture through production deployment while also building new features for a mature enterprise application, giving me experience in both end-to-end product development and enhancing complex existing systems.",
    },
    {
      company: "Dynamik",
      badges: [],
      href: "https://dynamik.fi/en/",
      location: "Finland",
      title: "Summer Intern",
      logoUrl: "/dynamik_logo.jpg",
      start: "June 2022",
      end: "September 2022",
      description:
        "At Dynamik, I collaborated on the development of a supply chain optimization platform, rapidly learning ASP.NET while building REST APIs, data pipelines, and database-driven backend services that automated operational workflows.",
    },
    {
      company: "University of Calgary",
      badges: [],
      href: "",
      location: "Calgary, Canada",
      title: "Graduate Research Assistant",
      logoUrl: "/uoc_logo.webp",
      start: "October 2021",
      end: "December 2024",
      description:
        "As part of my thesis-based Master’s degree in Computer Science, I applied computational methods and network neuroscience techniques to analyze experimental neuroimaging data. My research focused on developing Python-based data processing and analysis pipelines to study brain connectivity across different physiological and clinical conditions, utilizing scientific computing, statistical analysis, and data visualization tools. In addition to conducting research, I founded and led the development of a GitHub-based software infrastructure for a newly established research lab, creating standardized and reproducible analysis workflows while collaborating closely with interdisciplinary researchers to translate scientific objectives into computational solutions.",
    },
    {
      company: "University of Calgary",
      badges: [],
      href: "",
      location: "Calgary, Canada",
      title: "Operating Systems Teaching Assistant",
      logoUrl: "/uoc_logo.webp",
      start: "September 2020",
      end: "April 2023",
      description:
        "Taught data structures and time complexity to improve time and memory efficiency. Taught remote connection using SSH and Vim. Wrote and debugged multi-threaded C++ code for optimizing program runtime.",
    },
  ],
  education: [
    {
      school: "University of Calgary",
      href: "https://www.ucalgary.ca/",
      degree: "M.S. in Computer Science",
      logoUrl: "/uoc_logo.webp",
      start: "2020",
      end: "2024",
    },
    {
      school: "University of Calgary",
      href: "https://www.ucalgary.ca/",
      degree: "B.S. in Computer Science",
      logoUrl: "/uoc_logo.webp",
      start: "2013",
      end: "2020",
    },
    {
      school: "University of Calgary",
      href: "https://www.ucalgary.ca/",
      degree: "B.S. in Physics (Honors)",
      logoUrl: "/uoc_logo.webp",
      start: "2013",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Enterprise Data Manager",
      slug: "data-manager",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Transformed a legacy data management platform into a modern, scalable web application.",
      technologies: [
        "ASP.NET (C#)",
        "Angular",
        "TypeScript",
        "Azure SQL Database",
        "Angular Material",
        "Stripe",
      ],
      links: [],
      image: "/project-assets/enterprise-data-manager/product_summary.png",
      video: "",
    },
    {
      title: "Liquid Software",
      slug: "liquid",
      dates: "Sep 2024 - Present",
      active: true,
      description:
        "Feature development on a large-scale ERP platform for a multi-year contracting engagement.",
      technologies: [
        "ASP.NET (C#)",
        "Razor Pages",
        "jQuery",
        "JavaScript",
        "Azure SQL Database",
        "Telerik Kendo UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://thinkliquid.ca/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Changing Tides Psychiatry",
      slug: "changing-tides",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Designed and launched a marketing website for a local psychiatry business.",
      technologies: [
        "Squarespace",
        "DNS config",
        "Form + Email routing",
        "SEO",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.changingtidespsychiatry.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "/project-assets/changing-tides-psychiatry-website/ctp-mockup-2-scaled.webp",
      video: "",
    },
    // {
    //   title: "M.S. Thesis: Detecting Brain Vulnerability",
    //   slug: "masters-thesis",
    //   dates: "XX",
    //   active: false,
    //   description: "Master's Thesis work...",
    //   technologies: ["Python"],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/xiningchen/Towlson-Group-Code",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image:
    //     "/project-assets/changing-tides-psychiatry-website/ctp-mockup-2-scaled.webp",
    //   video: "",
    // },
  ],
  hackathons: [
    {
      title: "",
      dates: "",
      location: "",
      description: "",
      image: "",
      links: [],
    },
  ],
} as const;
