import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero} data-fade aria-label="Introduction section">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Arif</span>
          </h1>
          <p className={styles.subtitle}>Full Stack Developer & Creative Problem Solver</p>
          <p className={styles.description}>
            Turning ideas into seamless, interactive web experiences using modern full-stack technologies — from responsive frontends to reliable, scalable backends.
          </p>
          
          <div className={styles.ctaGroup}>
            <a href="#projects" className={styles.cta} aria-label="Navigate to projects section">
              View My Projects
            </a>
            <a 
              href="/Mohammad_Arif_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.cta} ${styles.ctaSecondary}`}
              aria-label="View resume in new tab"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;