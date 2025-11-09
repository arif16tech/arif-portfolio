import { useState } from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const initialDisplay = 3;

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features.',
      technologies: ['React', 'Firebase', 'CSS Modules'],
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      technologies: ['React', 'API Integration', 'Chart.js'],
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms.',
      technologies: ['React', 'D3.js', 'Express'],
      link: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support and user authentication.',
      technologies: ['React', 'Next.js', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 6,
      title: 'Portfolio Generator',
      description: 'Tool to generate customizable portfolio websites with drag-and-drop interface.',
      technologies: ['React', 'CSS Modules', 'Node.js'],
      link: '#'
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, initialDisplay);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="projects" className={styles.projects} data-fade>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.grid}>
          {displayedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {projects.length > initialDisplay && (
          <div className={styles.buttonContainer}>
            <button onClick={handleToggle} className={styles.viewAllBtn}>
              {showAll ? 'Show Less' : 'View All Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
