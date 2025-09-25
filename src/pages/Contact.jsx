import React from 'react';


const socialLinks = [
  { href: 'https://github.com/gargamelizado', label: 'GitHub', icon: '🐙' },
  { href: 'https://www.linkedin.com/in/marcelo-henrique-sarzedas-623690371/', label: 'LinkedIn', icon: '💼' },
];

const Contact = () => (
  <section style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto', textAlign: 'center', background: '#f9f9f9', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
    <h2 style={{ marginBottom: '1rem' }}>Contato</h2>
    <p style={{ marginBottom: '1.5rem' }}>Entre em contato pelo e-mail:<br />
      <a href="mailto:seuemail@exemplo.com" style={{ color: '#0a7cff', fontWeight: 'bold' }}>seuemail@exemplo.com</a>
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem' }}>
      {socialLinks.map(link => (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" title={link.label} style={{ fontSize: '2rem', textDecoration: 'none' }}>
          {link.icon}
        </a>
      ))}
    </div>
  </section>
);

export default Contact;
