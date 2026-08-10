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
  SiCss3,
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
  SiVisualstudiocode,
} from "react-icons/si";

import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

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
    icon: Code2,
    title: "Frontend",
    skills: [
      
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Middleware",
      "CORS",
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: [
      "PostgreSQL",
      "Prisma",
      "SQL",
      "MongoDB",
      "Firebase Firestore",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Others",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Render",
      "VS Code",
      
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-background text-content py-20 w-full">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8">

        <SectionHeading>Skills</SectionHeading>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
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
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-primary/10 px-3 py-1.5 text-sm text-content"
                    >
                      {skill}
                    </span>
                  ))}
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