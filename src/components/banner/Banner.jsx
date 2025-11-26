import styles from  './banner.module.css'

const Banner = ({ image }) => {
  return (
    <div className={styles.banner} >
       <img 
        src={image}  
        alt="Contact Banner"
        className={styles.bannerImage}
      />
    </div>
  )
}

export default Banner
