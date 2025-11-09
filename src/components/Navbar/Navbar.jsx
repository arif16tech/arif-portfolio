import styles from './Navbar.module.css';

const Navbar = ({ onNavigate }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>Portfolio</div>
        <ul className={styles.navLinks}>
          <li><a href="#home" onClick={(e) => onNavigate(e, 'home')}>Home</a></li>
          <li><a href="#projects" onClick={(e) => onNavigate(e, 'projects')}>Projects</a></li>
          <li><a href="#skills" onClick={(e) => onNavigate(e, 'skills')}>Skills</a></li>
          <li><a href="#contact" onClick={(e) => onNavigate(e, 'contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
