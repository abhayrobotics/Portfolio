import {
  Code2,
  Server,
  Database,
  Wrench,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  Si1001Tracklists
 
} from "react-icons/si";

import type { IconType } from "react-icons";

import { SectionHeading } from "../components/ui/SectionHeading";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

type SkillCategory = {
  icon: IconType;
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: SiCss,
        color: "#1572B6",
      
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "Redux Toolkit",
        icon: SiRedux,
        color: "#764ABC",
      },
    ],
  },

  {
    title: "Backend",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#000000",
      },
      {
        name: "REST APIs",
        icon: Si1001Tracklists,
        color: "#0EA5E9",
      },
      {
        name: "JWT Authentication",
        icon: SiJsonwebtokens,
        color: "#000000",
      },
    ],
  },

  {
    title: "Database",
    icon: Database,
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        color: "#2D3748",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
      {
        name: "Firebase Firestore",
        icon: SiFirebase,
        color: "#FFCA28",
      },
    ],
  },

  {
    title: "Tools & Others",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#181717",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "#000000",
      },
      {
        name: "Render",
        icon: SiRender,
        color: "#46E3B7",
      },
    ]
  },
];

const Skills = () => {
  return (
    <section id="skills" className=" bg-surface text-content py-20 w-full">
      <div className="  border-t border-outline  mx-auto w-full max-w-280 px-4 py-2 sm:px-6 lg:px-8">
   
        <SectionHeading>Skills</SectionHeading>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category,index) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title+index}
                className="rounded-xl border border-primary/40  hover:border-content bg-surface p-6 transition-all duration-300 hover:-translate-y-1 "
              >
                {/* Category heading */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <h3 className="font-semibold text-content">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) =>{
                    const IconSmall = skill.icon;

                   return(
                    <span
                      key={skill.name}
                      className="flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-sm text-content"
                    >
                      <IconSmall color={skill.color}/>
                      <div className="pl-2">{skill.name}</div>
                    </span>
                  )})}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;