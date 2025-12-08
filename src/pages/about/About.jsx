import styles from './about.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, EffectCreative } from 'swiper/modules';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';


const swiperimages = [
  { id: 1, img: '/menu/etud-big-burger-etud-cafe-and-bar4.avif' },
  { id: 2, img: '/menu/etudbaku-music-food-drinks1.jpg' },
  { id: 3, img: '/menu/etudbaku-music-food-drinks2.jpg' },
  { id: 4, img: '/menu/etudbaku-music-food-drinks3.jpg' },
];


const images = [
  { id: 1, img: '/menu/etud-big-burger-etud-cafe-and-bar4.avif' },
  { id: 2, img: '/menu/etudbaku-music-food-drinks1.jpg' },
  { id: 3, img: '/menu/etudbaku-music-food-drinks2.jpg' },
  // { id: 4, img: '/menu/etudbaku-music-food-drinks3.jpg' },
];




const about = [
  { id: 1, title: "Live Music at ETUD", text: "Jazz is our foundation – but it doesn’t stop there. At ETUD, we host an evolving lineup of live performances, from classic jazz to funk, soul, groove, rock, and experimental nights. Our musicians are some of the most respected players in the country – and when they take the stage, the room listens.", img: '/about/about_1.jpg' },
  { id: 2, title: "Weekly Highlights:", text: "Tuesdays & Wednesdays – Jazz sessions with rotating artists Fridays & Saturdays – Live bands & genre nights Special Events – Debut shows, tribute nights & surprise guests Every set is live. Every moment is real.", img: '/about/about_2.jpeg' },

];

const About = () => {

  const [enableNavigation, setEnableNavigation] = useState(true);


  return (
    <div className={styles.about}>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade, EffectCreative]}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: { shadow: true, translate: [0, 0, -400] },
          next: { translate: ['100%', 0, 0] },
        }}
        slidesPerView={1}
        navigation={enableNavigation ? {
          nextEl: `.${styles.customNextButton}`,
          prevEl: `.${styles.customPrevButton}`,
        } : false}
        autoplay={{ delay: 3000 }}
        className={styles.swiper}
      >
        {swiperimages.map((item) => (
          <SwiperSlide key={item.id} className={styles.swiperslide}>
            <img src={item.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}

      {/* {enableNavigation && (
        <>
          <div className={styles.customPrevButton}><FaArrowLeft /></div>
          <div className={styles.customNextButton}><FaArrowRight /></div>
        </>
      )} */}



      {/* info */}

      <div className={styles.info}>
        <h1>Our Story</h1>

        {/*  */}

      {about.map((item, index) => (
  <React.Fragment  key={item.id}>
    <div className={styles.text}>
      <div className={styles.frame}>
        <div className={styles.flame2}>
          <div className={styles.title}>
            <h2>{item.title}</h2>
          </div>
          {item.text}
        </div>
      </div>

      <div className={styles.image}>
        <img src={item.img} alt={item.title} />
      </div>
    </div>

    {/* İKİ ELEMENT ARASINA ƏLAVƏ MƏTN */}
    {index === 0 && ( // məsələn, birinci və ikinci arasında olsun
      <div className={styles.middleText}>
        <p>  ETUD began in 2016 with one simple goal: to create a space where music isn’t just background, but it’s the main event. Built into the bones of the city, underground and dimly lit, ETUD feels like a secret you’re glad you found. We never tried to be everywhere — we just focused on getting it right here.</p>

        <p>Over the years, we’ve become a trusted stage for some of Azerbaijan’s finest musicians, as well as a stop for international talent. From time to time, we also open the stage to rising artists ready to prove themselves. And as the music grew, so did our audience — thoughtful listeners who come for more than just a night out.</p>

        <p>ETUD has also become a home for intimate private events — from birthdays and anniversaries to creative launches and cozy corporate gatherings. If it calls for atmosphere and great sound, it fits our space.</p>
        <p>Beyond our own walls, we proudly support and curate live music experiences at festivals, cultural events, and other venues, carrying the same spirit and attention to sound wherever we go. This is ETUD — for those who care about the craft. Who feel something when the lights go down and the first note hits.</p>
      </div>
    )}



  </React.Fragment>
))}

    <div className={styles.images}>

      {
        images.map((item) => (
     <img src={item.img} alt="" key={item.id} className={styles.images_img} />
        ))
      }

   

    </div>


        {/*  */}

      </div>


    </div>
  )
}

export default About
