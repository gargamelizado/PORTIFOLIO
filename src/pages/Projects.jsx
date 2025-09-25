
import React from 'react';
import CardProject from '../components/CardProject/CardProject';
import projectsData from '../projectsData/projectsData';


const Projects = () => (
  <section style={{ padding: '2rem' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Projetos</h2>
    <p style={{ textAlign: 'center', color: '#555', marginBottom: '2rem' }}>
      Aqui você encontrará alguns dos meus principais projetos desenvolvidos.
    </p>
    <div style={{
      display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem',
      maxWidth: '1100px', margin: '0 auto'
    }}>
      {projectsData.map((project) => (
        <CardProject key={project.title} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
