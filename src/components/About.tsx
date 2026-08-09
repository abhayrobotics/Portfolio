import { CodeXml, Layers, CalendarCheck } from "lucide-react";

const cards = [
  {
    
  }
]

const About = () => {
  return (
    <>
      <section className="bg-surface text-content w-full" id="about">
        <div className=" border-t border-outline mx-auto max-w-280 items-center gap-16 p-4 grid  sm:px-6 lg:grid-cols-2 lg:px-8 ">
          {/* About me */}
          <div>
            <p className="text-2xl">About Me</p>
            <div className="w-5 h-1 text-content-muted mt-2 "></div>
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
            <div className="flex items-center ">
              <div className="bg-surface/20 p-3">
                <CalendarCheck color="blue" />
              </div>
              <div>
                <p className="font-semibold">9+</p>
                <p>Years Engineering</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-primary/10 p-3">
                <CodeXml color="blue" />
              </div>
              <div>
                <p className="font-bold">10+</p>
                <p>Project Completed</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-primary/10 p-3">
                <Layers color="blue" />
              </div>
              <div>
                <p className="font-bold">6+</p>
                <p>Core Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
