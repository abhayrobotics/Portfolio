
import type { IconType } from "react-icons";
import {FaPhone,FaGithub, FaLinkedin,FaLocationDot } from "react-icons/fa6"

import { IoMdMailOpen } from "react-icons/io";
import { SectionHeading } from "./ui/SectionHeading";

type ContactItem = {
  icon: IconType;
  label: string;
  value: string;
  href: string;
};

const contactItems: ContactItem[] = [
  {
    icon: IoMdMailOpen,
    label: "Email",
    value: "abhay.gupta861@gmail.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91-7004744923",
    href: "#",
  },
  {
    icon: FaLocationDot,
    label: "Location",
    value: "West Bengal, India",
    href: "#",
  },
  {
    icon: FaGithub,
    label: "Github",
    value: "github.com/abhayrobotics",
    href: "https://github.com/abhayrobotics",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/developerabhay/",
    href: "https://www.linkedin.com/in/developerabhay/",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-surface py-20 text-content"
    >
      <div className="mx-auto w-full max-w-280 px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <SectionHeading>Contact Me</SectionHeading>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          
          {/* Left side */}
          <div>
            <h3 className="text-2xl ">
              Let&apos;s work together
            </h3>

            <p className="mt-4 max-w-lg leading-7 text-muted">
              I&apos;m currently open to software development opportunities
              where I can contribute my engineering experience and full-stack
              development skills to building meaningful products.
            </p>

            {/* Contact information */}
            <div className="mt-8 space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                     target="_blank"
                      rel="noopener noreferrer"
                    className="flex items-center gap-4 transition-colors duration-300 hover:text-primary"
                  >
                    <div className="rounded-lg bg-primary/10 p-3 text-primary">
                      <Icon size={21} />
                    </div>

                    <div>
                      <p className="text-xs text-muted">
                        {item.label}
                      </p>

                      <p className="text-sm font-medium">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

           
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Contact;