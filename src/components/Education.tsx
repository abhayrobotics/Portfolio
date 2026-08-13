
import { SectionHeading } from "./ui/SectionHeading";
import { RiCertificate2Line ,RiGraduationCapFill } from "react-icons/ri";

import type { IconType } from "react-icons";
type EducationItem = {
  type: "education" | "certification";
  title: string;
  institution: string;
  period: string;
  credentialUrl?: string;
  icon:IconType
};

const education: EducationItem[] = [
  {
    type: "education",
    title: "Bachelor of Technology in Electrical Engineering",
    institution: "Techno India, Salt Lake",
    period: "2012 – 2016",
    icon:RiGraduationCapFill 
  },
  {
    type: "certification",
    title: "Namaste React",
    institution: "NamasteDev",
    period: "2026",
    credentialUrl: "#",
    icon:RiCertificate2Line
  },
];

const Education = () => {
  return (
      <section id="experience" className=" bg-surface text-content py-20  w-full">
      <div className="  border-t border-outline  mx-auto w-full max-w-[1120px] px-4 py-2 sm:px-6 lg:px-8">
        <SectionHeading>Education & Certifications</SectionHeading>
        <div className="mt-8" >
          {education.map((item) => {
            const Icon = item?.icon;
            return(
            <div
              key={`${item.title}-${item.institution}`}
              className="flex flex-col gap-5 rounded-xl border border-primary/40  hover:border-content bg-surface p-6 transition-all duration-300 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between my-2"
            >
              {/* Degree & Institution */}
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Icon size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-content">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-primary">
                    {item.institution}
                  </p>
                </div>
              </div>

              {/* Period */}
              <span className="whitespace-nowrap text-sm text-muted">
                {item.period}
              </span>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Education;