import projectsData from "./projectsData";
import CardProject from "./components/CardProject";

// src/components/CardProject.jsx
export default function CardProject({ title, description, link }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-medium hover:underline"
      >
        Ver Projeto
      </a>
    </div>
  );
}
