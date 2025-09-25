
import React from 'react';
import Skills from '../components/Skills/Skills';


const Home = () => (
  <main>
    <section style={{
      padding: '3rem 1rem 2rem 1rem',
      textAlign: 'center',
      background: 'linear-gradient(90deg, #e3ffe8 0%, #f9f9f9 100%)',
      borderRadius: '0 0 24px 24px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1a1a1a', marginBottom: '1rem' }}>
        Olá, eu sou Marcelo 👋
      </h1>
      <p style={{ fontSize: '1.3rem', color: '#444', marginBottom: '0.5rem' }}>
        Desenvolvedor Front-end apaixonado por criar experiências incríveis na web.
      </p>
      <p style={{ color: '#666' }}>
        React | JavaScript | CSS | UI/UX
      </p>
    </section>
    <Skills />
  </main>
);

export default Home;
