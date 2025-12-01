import styles from './header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Container from '../container/Container';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);



  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/menu", label: "Menu" },
    { path: "/location", label: "Location" },
    {  path: "https://wolt.com/az/aze/baku/restaurant/etud-baku", label: "Delivery" },
  ];

  //  Scroll zamanı header-in rəngini dəyişmək
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // 50px-dən çox scroll edilibsə
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Container>
        <Link to="/" className={styles.logo_img}>
          <img src="/logo/image.png" alt="Etud Cafe Bar Logo" />
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.activeNav : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {menuOpen ? (
          <FaTimes className={styles.menuIcon} size={30} onClick={() => setMenuOpen(false)} />
        ) : (
          <FaBars className={styles.menuIcon} size={30} onClick={() => setMenuOpen(true)} />
        )}
      </Container>
    </header>
  );
};

export default Header;
