import * as React from "react";
import Reveal from "../component/Reveal";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

interface Project {
  id: string;
  title: string;
  description: string;
  tools: Array<{ name: string; icon: React.ReactNode }>;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio showcasing projects and skills with smooth animations and custom theme.",
    tools: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    link: "#",
    github: "#",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Full-stack application for managing tasks with real-time updates and user authentication.",
    tools: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
    github: "#",
  },
];

export default function Project() {
  return (
    <Reveal>
      <section id="projects" className="w-full py-16 md:py-24 px-4 bg-index/30">
        <div className="w-full max-w-screen-xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary-alt mb-3">
              Featured Projects
            </h2>
            <p className="text-secondary text-lg md:text-xl">
              A selection of my recent work and contributions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg border border-primary-alt/20 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-primary/20 to-primary-alt/20 p-6 md:p-8">
                  <h3 className="text-2xl md:text-2xl font-bold text-secondary-alt mb-2">
                    {project.title}
                  </h3>
                  <p className="text-secondary text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tools Section */}
                <div className="px-6 md:px-8 py-6 border-t border-primary-alt/10">
                  <p className="text-sm font-semibold text-secondary-alt mb-3">
                    Tools & Technologies
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary-alt/20 hover:border-primary-alt/50 transition-colors duration-200"
                        title={tool.name}
                      >
                        <span className="text-primary-alt text-lg">
                          {tool.icon}
                        </span>
                        <span className="text-xs md:text-sm font-medium text-secondary-alt">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 md:px-8 py-4 flex gap-3 border-t border-primary-alt/10 bg-gray-50/50">
                  {project.link && (
                    <Link
                      href={project.link}
                      className="flex-1 px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-alt transition-colors duration-200 text-center text-sm md:text-base"
                    >
                      View Project
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      className="flex-1 px-4 py-2 border-2 border-secondary-alt text-secondary-alt font-semibold rounded-md hover:bg-secondary-alt hover:text-white transition-colors duration-200 text-center text-sm md:text-base"
                    >
                      GitHub
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Link */}
          <div className="text-center mt-12 md:mt-16">
            <Link
              href="#"
              className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-alt transition-colors duration-200"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
