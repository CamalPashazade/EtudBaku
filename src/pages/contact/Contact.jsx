import Banner from '../../components/banner/Banner'
import styles from  './contact.module.css'
import bannerImg from '../../assets/contact_us_banner.webp'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Banner image={bannerImg}/>

      <div className={styles.info}>
        <p>For reservations, private events, collaborations, or general questions</p>
        <p>Feel free to reach out.</p>

        <p>Phone: +994 50 766 66 90 (17:00 – 21:00)</p>
        <p>Email: mail@etudbaku.com</p>

<p>Events: events@etudbaku.com (for bookings, collaborations, or if you'd like us to be part of your event)</p>


<p>Telegram: t.me/etudbaku</p>



<p>We typically respond to emails within one day.</p>



      </div>
     
     
    </div>
  )
}

export default Contact
