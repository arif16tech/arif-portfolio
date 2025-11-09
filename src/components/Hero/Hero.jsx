import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero} data-fade>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.highlight}>Arif</span>
        </h1>
        <p className={styles.subtitle}>Full Stack Developer & Creative Problem Solver</p>
        <p className={styles.description}>
          Turning ideas into interactive web experiences with the power of the MERN stack — from sleek frontends to robust backends.
        </p>
        <a href="#projects" className={styles.cta}>View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
