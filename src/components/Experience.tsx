import { BriefcaseBusiness } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Junior Electrical Engineer",
    company:
      "West Bengal State Electricity Distribution Company Limited (WBSEDCL)",
    period: "2018 – Present",
    description:
      "Working in electrical engineering operations while independently developing production-style web applications and applying software engineering practices to solve real-world problems.",
    responsibilities: [
      "Managed engineering operations and coordinated activities with multiple stakeholders.",
      "Analyzed operational data and prepared technical reports for management.",
      "Worked with structured processes, troubleshooting and problem-solving in operational environments.",
      "Developed full-stack web applications using React, TypeScript, Node.js, Express and PostgreSQL alongside my professional role.",
    ],
  },
  {
    role: "Executive Engineer",
    company:
      "Pinnacle Infotech Solutions",
    period: "2016 – 2018",
    description:
      "Working in electrical engineering operations while independently developing production-style web applications and applying software engineering practices to solve real-world problems.",
    responsibilities: [
      "Managed engineering operations and coordinated activities with multiple stakeholders.",
      "Analyzed operational data and prepared technical reports for management.",
      "Worked with structured processes, troubleshooting and problem-solving in operational environments.",
      "Developed full-stack web applications using React, TypeScript, Node.js, Express and PostgreSQL alongside my professional role.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className=" bg-surface text-content py-20  w-full">
      <div className="  border-t border-outline  mx-auto w-full max-w-[1120px] px-4 py-2 sm:px-6 lg:px-8">
   
        <SectionHeading>Experience</SectionHeading>

        <div className="mt-8">
          {experiences.map((experience) => (
            <div
              key={`${experience.role}-${experience.company}`}
              className="relative grid gap-6 md:grid-cols-[32px_1fr] my-2"
            >
              {/* Timeline */}
              <div className="relative hidden md:block">
                <div className="absolute left-1/2 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-primary" />

                <div className="absolute left-1/2 top-4 h-[calc(100%)] w-px -translate-x-1/2 bg-primary/40" />
              </div>

              {/* Experience content */}
              <div className="rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className="hidden rounded-lg bg-primary/10 p-3 text-primary sm:flex">
                      <BriefcaseBusiness size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-content">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-primary">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  {/* Period */}
                  <span className="whitespace-nowrap text-sm text-muted">
                    {experience.period}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-6 text-muted">
                  {experience.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {experience.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-content"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;