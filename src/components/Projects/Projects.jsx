import { useState } from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const initialDisplay = 3;

  const projects = [
    {
      id: 1,
      title: 'StyleStore – Clothing E-Commerce App',
      description: 'Full-stack clothing e-commerce application with product management, cart functionality, and role-based admin access.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/yourusername/stylestore',
      live: 'https://stylestore-demo.vercel.app'
    },
    {
      id: 2,
      title: 'AuthPortal – Secure User Dashboard',
      description: 'Authentication system with JWT-based login, protected routes, and a personalized user dashboard.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/yourusername/authportal',
      live: 'https://authportal-demo.vercel.app'
    },
    {
      id: 3,
      title: 'Developer Portfolio',
      description: 'Responsive personal portfolio built with React to showcase projects, skills, and contact information.',
      technologies: ['React', 'CSS Modules'],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://your-portfolio.vercel.app'
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, initialDisplay);

  const handleToggle = () => {
    setShowAll(!showAll);
    
    // Smooth scroll to projects section when collapsing
    if (showAll) {
      document.getElementById('projects')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <section id="projects" className={styles.projects} data-fade>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionSubtitle}>
          A collection of projects showcasing my development skills
        </p>
        
        <div className={styles.grid}>
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {projects.length > initialDisplay && (
          <div className={styles.buttonContainer}>
            <button 
              onClick={handleToggle} 
              className={styles.viewAllBtn}
              aria-expanded={showAll}
              aria-label={showAll ? 'Show fewer projects' : 'Show all projects'}
            >
              {showAll ? '← Show Less' : `View All Projects (${projects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;