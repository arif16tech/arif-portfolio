import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'CSS/SASS', icon: '🎨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Git', icon: '📦' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'Express', icon: '📱' }
  ];

  return (
    <section id="skills" className={styles.skills} data-fade>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.icon}>{skill.icon}</div>
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
