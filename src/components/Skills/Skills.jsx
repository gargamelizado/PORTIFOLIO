import React from 'react';
import styles from './Skills.module.css';

const skills = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Git', icon: '🔧' },
  { name: 'Figma', icon: '🎴' },
  // Adicione mais skills conforme necessário
];

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h2>Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillCard}>
            <span className={styles.icon}>{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
