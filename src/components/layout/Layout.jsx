import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>

      <main className={styles.main}>
        {children}
      </main>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
