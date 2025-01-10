import React, { Suspense } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Description of project one.",
    image: "/example1.jpg",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of project two.",
    image: "/example2.jpg",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project three.",
    image: "/example3.jpg",
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Description of project four.",
    image: "/example4.jpg",
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Project Five",
    description: "Description of project five.",
    image: "/example5.jpg",
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "Project Six",
    description: "Description of project six.",
    image: "/example6.jpg",
    github: "#",
    live: "#",
  },
];

export default async function Portfolio() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative group overflow-hidden bg-gray-900 rounded-lg shadow-lg"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gray-800/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
            <h3 className="text-lg font-semibold text-gray-200">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
