import styles from "./Header.module.css";
import Button from "../Button/button"
import LogoHeader from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import iconCloser from "../../assets/menu-closer.svg";
import iconBars from "../../assets/menu-togle.svg";
// Ícones de redes sociais (pode usar SVGs ou emojis)
const socialLinks = [
  { href: 'https://github.com/gargamelizado', label: 'GitHub', icon: '🐙' },
  { href: 'https://www.linkedin.com/in/marcelo-henrique-sarzedas-623690371/', label: 'LinkedIn', icon: '💼' },
  // Adicione mais se quiser
];
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

    return (
  <header className={`${styles.header} ${menuActive ? styles.active : ""}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
        <div className={styles.wrapperHeader}>
          <div>
            <button className={styles.logoButton}>
              <img src={LogoHeader} alt="logo" />
            </button>
          </div>
          <button onClick={toggleMenu} id={styles.buttonMobile}>
            <img src={menuActive ? iconCloser : iconBars} id={styles.menuIcon} alt="" />
          </button>
          <nav className={menuActive ? styles.active : ""}>
            <ul className={styles.ulMenu}>
              <li className={styles.navLi}>
                <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
              </li>
              <li className={styles.navLi}>
                <Link to="/about" style={{ margin: '0 1rem' }}>Sobre</Link>
              </li>
              <li className={styles.navLi}>
                <Link to="/projects" style={{ margin: '0 1rem' }}>Projetos</Link>
              </li>
              <li className={styles.navLi}>
                <Link to="/contact" style={{ margin: '0 1rem' }}>Contato</Link>
              </li>
              <li className={styles.navLiButton}> <Button>Comprar</Button>
              </li>
            </ul>
          </nav>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1.5rem' }}>
            {socialLinks.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" title={link.label} style={{ fontSize: '1.5rem', textDecoration: 'none' }}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </header>
    );
};

export default Header;
