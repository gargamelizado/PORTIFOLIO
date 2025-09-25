// src/components/Project/Project.jsx
import CardProject from "../CardProject/projectsData/CardProject";
import projectsData from "../../projectsData/projectsData";

export default function Project() {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">🚀 Projetos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <CardProject
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}