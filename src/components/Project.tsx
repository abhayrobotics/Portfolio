import { ExternalLink, ArrowRight } from "lucide-react"; 
import { FaGithub ,FaPlay} from "react-icons/fa6";
import { SectionHeading } from "./ui/SectionHeading"

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  liveLink?:string;
  demo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Expense Tracker",
    description:
      "A full-stack personal finance application with dashboard analytics, authentication, expense management and category-based tracking.",
    image: "/expense-tracker.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    github: "https://github.com/abhayrobotics/ExpenseTracker",
    liveLink: "https://expense-tracker-ib9g.onrender.com/",
    // demo:"#",
    featured: true,
  },

  {
    title: "Netflix AI Clone",
    description:
      "A Netflix-inspired streaming platform with AI-powered movie recommendations and a modern responsive interface.",
    image: "/netflix.png",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Firebase",
      "TMDB API",
      "GeminiAI",
    ],
    github: "#https://github.com/abhayrobotics/netflix-gpt",
    liveLink:"https://movieflix-abhay.netlify.app/",
    demo: "https://www.youtube.com/watch?v=AxVFj37paQM",
  },

  {
    title: "Social Networking Platform",
    description:
      "A social platform with user authentication, posts, likes, comments and real-time user interactions.",
    image: "/linkedin.png",
    technologies: [
      "React",
      "Firebase Authentication",
      "Tailwind CSS",
      "Firebase FireStore",
    //   "MongoDB",
    ],
   github: "https://github.com/abhayrobotics/linkedIn-clone",
    liveLink:"https://linked-in-abhay.netlify.app/",
    demo: "https://youtu.be/CeDQwx9YlsE",
  },
];

const Projects = () => {
  return (
     <section id="projects" className=" bg-surface text-content py-20 w-full">
      <div className="  border-t border-outline  mx-auto w-full max-w-[1120px] px-4 py-2 sm:px-6 lg:px-8">
   
        <SectionHeading>Featured Projects</SectionHeading>
        {/* Section heading */}
        <div className="mb-8 flex  justify-end ">

          <a
            href="#projects"
            className="group hidden items-center gap-1 text-sm font-medium text-primary sm:flex"
          >
            View all projects

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Project grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Project image */}
              <div className="relative aspect-video overflow-hidden bg-background">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {project.featured && (
                  <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white shadow-md">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-lg font-semibold text-content">
                  {project.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-sm font-medium text-content transition-colors hover:text-primary"
                    >
                      <FaGithub size={17} />

                      <span>GitHub</span>

                      <ExternalLink
                        size={13}
                        className="opacity-60 transition-transform group-hover/link:translate-x-0.5 "
                      />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium  text-content transition-colors hover:text-primary"
                    >

                      <span className="text-nowrap">Live Link</span>
                      <ExternalLink size={17}  />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex  items-center gap-2 text-sm font-medium text-content transition-colors hover:text-primary"
                    >

                      <span className="text-nowrap">Demo</span>
                      <FaPlay size={17} />
                    </a>
                  )}

                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile "View all" */}
        <div className="mt-6 flex justify-center sm:hidden">
          <a
            href="#projects"
            className="flex items-center gap-1 text-sm font-medium text-primary"
          >
            View all projects
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;