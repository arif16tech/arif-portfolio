import styles from './Projects.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDescription}>{project.description}</p>
      <div className={styles.technologies}>
        {project.technologies.map((tech, index) => (
          <span key={index} className={styles.tech}>{tech}</span>
        ))}
      </div>
      <a href={project.link} className={styles.cardLink}>View Project →</a>
    </div>
  );
};

export default ProjectCard;
