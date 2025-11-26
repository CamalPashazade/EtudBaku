import { useState, useEffect } from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;

      if (scrollTop >= pageHeight - 5) {
        setVisible(true);   // sona çatıb → göstər
      } else {
        setVisible(false);  // geri yuxarı qalxanda gizlət
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.footer} ${visible ? styles.footerVisible : ""}`}>
      {/* burda sənin mövcud footer kontentin gəlir */}

      <div className={styles.mediaQuery}>
        <div className={styles.address}>
          <h2>ETUD BAKU</h2>
          <div className={styles.addres_info}>
            <p>Baku</p>
            <p>Islam Safarli 16</p>
            <p>Azerbaijan AZ1005</p>
          </div>
        </div>

        <div className={styles.address}>
          <h2>Organisers</h2>
          <p><Link className={styles.address} to="/contact">Contact us</Link></p>
        </div>

        <div className={styles.address}>
          <h2>Connect</h2>
          <div className={styles.socialLinks}>
            <div className={styles.addres_info}>
              <a href="https://www.instagram.com/etudbaku/" target="_blank"><FaInstagram /></a>
              <a href="https://www.facebook.com/etudbaku/" target="_blank"><FaFacebook /></a>
              <a href="https://www.youtube.com" target="_blank"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2025 ETUD BAKU, All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
