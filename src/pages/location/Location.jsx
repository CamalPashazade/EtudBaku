import styles from './location.module.css';
import Container from '../../components/container/Container';
import { useState } from 'react';
import Loading from '../../components/loading/Loading';

const Location = () => {


  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.location}>

      <Container className={styles.mediaQuery}>


        <div className={styles.info}>
          <h1>Hours & Location</h1>

          <address>
            Address: <br />
            İslam Safarli 16, Baku, Azerbaijan,

          </address>

          <div className={styles.hours}>
            Working Hours:
            <p> 17:00 – 01:00 (Sunday to Thursday)</p>
            <p>  18:00 – 02:00 (Friday & Saturday)</p>
          </div>

          <div className={styles.text}>
            <p>ETUD is located in the heart of Baku — tucked just enough out of sight to feel like a hidden spot.</p>
            <p>Live music usually starts after 21:00</p>
            <p>The entrance is half below street level. Look for the black door, the quiet steps, and the sound beneath.</p>
          </div>


        </div>




        <div className={styles.map}  style={{ position: 'relative' }}>



        {loading && (
            <div className={styles.loaderWrapper}>
              <Loading text="Xəritə yüklənir..." />
            </div>
          )}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.6331207181647!2d49.8351674!3d40.3726586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dba0db20913%3A0x83c12f5ba6f8a0ef!2sETUD%20BAKU!5e0!3m2!1sen!2saz!4v1762364457735!5m2!1sen!2saz"
            width="600"
            height="450"
        
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              border: 0,
              visibility: loading ? 'hidden' : 'visible',
            }}
            onLoad={() => setLoading(false)}

          ></iframe>

        </div>



      </Container>


    </div>
  )
}

export default Location
