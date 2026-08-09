import { ArrowRight, Download, Mail, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-background w-full p-0 text-content">
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-62px)] max-w-[1120px] items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT */}
        <div>
          <p className="mb-4 text-lg">Hi, I'm</p>

          <h1 className="text-4xl font-bold tracking-tight   sm:text-5xl    ">
            Abhay Kumar Gupta
          </h1>

          <h2 className="mt-2 text-3xl font-bold sm:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-content-muted">
            I build scalable, modern and user-friendly web applications using
            React, TypeScript, Node.js, Express and PostgreSQL.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-medium text-white transition-transform duration-300 hover:scale-105"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-outline px-6 py-3 font-medium transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              Contact Me
              <Mail size={18} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-6">
            <a
              href="https://github.com/abhayrobotics"
              aria-label="GitHub" target="_blank" rel="noopener noreferrer"
              className="text-content-muted transition-colors hover:text-primary"
            >
              {/* <Github size={23} /> */}
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/developerabhay/"
              aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"
              className="text-content-muted transition-colors hover:text-primary"
            >
              {/* <Linkedin size={23} /> */}
              Linkedin
            </a>

            <a
              href="mailto:abhay.gupta861@example.com"
              aria-label="Email"
              className="text-content-muted transition-colors hover:text-primary"
            >
              <Mail size={23} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex flex-col items-center">
            {/* Background glow */}
          <div className="absolute inset-0 -z-0">
            <div className="absolute right-[8%] top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-[5%] top-40 h-40 w-40 rounded-full bg-primary/50 blur-3xl" />
          </div>

          {/* Profile image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl" />

            <img
              src="../../public/profile5.png"
              alt="AK"
              className="relative h-56 w-56 rounded-full border-2 border-primary object-cover sm:h-65 sm:w-65"
            />

            {/* Small decorative dot */}
            <span className="absolute bottom-20 right-0 h-5 w-5 rounded-full border-2 border-primary bg-primary" />
          </div>

          {/* Status card */}
          <div className="mt-6 flex w-full max-w-sm items-center gap-4 rounded-lg border border-outline bg-surface/80 p-5 shadow-xl backdrop-blur-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center  bg-primary rounded-lg">
              <Rocket color="white" />
            </div>

            <div>
              <p className="font-semibold">Building</p>

              <p className="mt-1 text-sm text-content-muted">
                Production ready full stack applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BriefcaseIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6 text-primary"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
};

export default Hero;
