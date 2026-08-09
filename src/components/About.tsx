import {CodeXml,Layers,CalendarCheck} from "lucide-react"

const About = () => {
  return (
    <>
      <section className="bg-surface text-content w-full" id="about">
        <div className=" border-t border-outline mx-auto max-w-280 items-center gap-16 p-4 sm:px-6 lg:grid-cols-2 lg:px-8 ">
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
          <div>
            <CodeXml />
            <Layers />
            <CalendarCheck />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
