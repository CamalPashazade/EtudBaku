import React from 'react';
import styles from './home.module.css'
import { Link } from 'react-router-dom';



const about = [
  { id: 1, title: "ETUD BAKU", text: "Jazz is our foundation – but it doesn’t stop there. At ETUD, we host an evolving lineup of live performances, from classic jazz to funk, soul, groove, rock, and experimental nights. Our musicians are some of the most respected players in the country – and when they take the stage, the room listens.", img: '/about/about_1.jpg' },
  { id: 2, title: "", text: "Tuesdays & Wednesdays – Jazz sessions with rotating artists Fridays & Saturdays – Live bands & genre nights Special Events – Debut shows, tribute nights & surprise guests Every set is live. Every moment is real.", img: '/about/about_2.jpeg' },
  { id: 3, title: "", text: "The focus has always been on doing things with care. From the music to the drinks, everything is chosen and served with intention. The bar offers a short but thoughtful menu, and the room is shaped for those who pay attention — to details, to feeling, to presence.", img: '/about/about_2.jpeg' },

];

const footer_image = '/home/drinks.avif';

const videoo = '/home/video/web...mp4';



const Home = () => {
  return (
    <div className={styles.home}>
      <video
        className={styles.customVideo}
        controls
        autoPlay
        loop
        muted
      >
        <source
          // src="https://player.vimeo.com/progressive_redirect/playback/1128273437/rendition/1080p/file.mp4?loc=external&signature=011db33322e2ef7f9996308d7389bb541671ea4be92ec4b685f112d9bfeb36a4"
          src={videoo}
          type="video/mp4"
        />
        <p>
          Download the
          <a href="/shared-assets/videos/flower.webm"> WEBM </a>
          or
          <a href="/shared-assets/videos/flower.mp4"> MP4 </a>
          video.
        </p>
      </video>




      {/* info */}

      <div className={styles.info}>

        <div className={styles.header}>
          <p>No Gimmicks. No Noise. Just Quality Sound</p>
          <p>Good Drinks Good Food, And A Vibe You Can't Fake.</p>

        </div>

        {/*  */}

        {about.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className={styles.text} >
              <div className={styles.frame}>
                <div className={styles.flame2}>
                  <div className={styles.title}>
                    {item.title && <h2>{item.title}</h2>}
                  </div>
                  {item.text}
                </div>
              </div>

              <div className={styles.image}>
                <img src={item.img} alt={item.title} />
              </div>
            </div>

          </React.Fragment>
        ))}


      </div>



      <div className={styles.footer}>

        <img src={footer_image} alt="footer_image" />

        <h2 className={styles.drinks_food}>Food & Drinks</h2>


        <div className={styles.view_menu}>
          <p> Click to see what we have to offer</p>

      <Link to={'/menu'}>    <button>View Menu</button></Link>
        </div>




      </div>
    </div>
  )
}

export default Home
