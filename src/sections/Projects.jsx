import { projects } from "../index";

const Projects = () => (
  <section id="projects" className="my-16 py-12">
    <div className="max-container px-4 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary underline ">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 bg-white"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity opacity-0 hover:opacity-100 flex items-center justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition"
              >
                View Project
              </a>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
              <p className=" mb-4 text-secondary">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.tech.map((tech, index) => (
                  <span
                    key={index}
                    className=" bg-bgclr text-primary text-sm font-medium px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
