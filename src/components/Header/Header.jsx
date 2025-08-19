import styles from "./Header.module.css";
import Button from "../Button/button"
import LogoHeader from "../../assets/logo.png";
import { useState } from "react";
import iconCloser from "../../assets/menu-closer.svg";
import iconBars from "../../assets/menu-togle.svg";
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`${styles.header} ${menuActive ? styles.active : ""}`}>
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
              <a href="">inicio</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Sobre</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Projtos</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Contato</a>
            </li>
            <li className={styles.navLiButton}> <Button>Comprar</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
