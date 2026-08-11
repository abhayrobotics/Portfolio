import { CodeXml, Layers, CalendarCheck } from "lucide-react";
import type {LucideIcon} from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";


type Card = {
  icon: LucideIcon;
  time: string;
  desc: string;
};

const cards :Card[] = [
  {
    icon:CalendarCheck,
    time: "9+",
    desc:"Years of Engineering Experience"
  },
  {
    icon: Layers,
    time: "6+",
    desc:"Core Technologies"
  },
  {
    icon: CodeXml,
    time: "10+",
    desc:"Projects Completed"
  },
]

const About = () => {
  return (
    <>
      <section className="bg-surface text-content w-full py-2 " id="about">
        <div className="mx-auto max-w-280 items-center gap-16 p-4 grid  sm:px-6 lg:grid-cols-2 lg:px-8 ">
          {/* About me */}
          <div>
            <SectionHeading>About</SectionHeading>
            <div className="py-2">
              <p>
                I'm a Full Stack Developer focused on building production-ready
                web applications with React, TypeScript, Node.js and PostgreSQL.
              </p>
              <p className="py-2">
                I currently work as a Junior Engineer at WBSEDCL, bringing an
                engineering mindset of problem-solving, systems thinking and
                attention to detail into software development. Alongside my
                professional role, I've built and deployed full-stack
                applications covering frontend architecture, REST APIs,
                authentication, databases and AI-powered features.
              </p>
              <p>
                I enjoy turning complex requirements into clean, scalable and
                user-focused products.
              </p>
            </div>
          </div>

          {/* Data cards */}
          <div className="flex  flex-col   justify-between">
            {cards.map((item,index)=>{
              const Icon = item.icon;
            return(
              
            <div key={index} className="flex items-center ">
              <div className="bg-surface/20 p-3">
                <Icon size={45 } className=" p-2 text-primary  my-5 bg-primary/20 rounded-lg" />
              </div>
              <div>
                <p className="font-semibold">{item.time}</p>
                <p>{item.desc}</p>
              </div>
            </div>
            )}
            )}
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
