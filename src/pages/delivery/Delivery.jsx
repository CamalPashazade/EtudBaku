import { Link } from 'react-router-dom';
import styles from './delivery.module.css';

const Delivery = () => {
  return (
    <div className={styles.delivery}>
      <h1>Delivery page</h1>
      <img src="" alt="" />
      <Link to={`https://wolt.com/az/aze/baku/restaurant/etud-baku?srsltid=AfmBOopjZ8h88wXlKhC3tKhH3NhWZlpIAa5_EFHmoZBbpkQLu1tonWZy`}> delivery</Link>
    </div>
  )
}



export default Delivery
