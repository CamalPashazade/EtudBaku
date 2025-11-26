import styles from './menu.module.css';
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
  { id: 1, img: '/public/menu/etud-big-burger-etud-cafe-and-bar4.avif' },
  { id: 2, img: '/public/menu/etudbaku-music-food-drinks1.jpg' },
  { id: 3, img: '/public/menu/etudbaku-music-food-drinks2.jpg' },
  { id: 4, img: '/public/menu/etudbaku-music-food-drinks3.jpg' },
];

const tabs = [
  { id: 1, label: 'QR Menu', key: 'qr' },
  { id: 2, label: 'Tasty', key: 'tasty' },
  { id: 3, label: 'For The Table', key: 'table' },
  { id: 4, label: 'Alcoholic Drinks', key: 'alcohol' },
  { id: 5, label: 'Wines & Prosecco', key: 'wines' },
  { id: 6, label: 'Cocktails', key: 'cocktails' },
  { id: 7, label: 'Soft Drinks', key: 'soft' },
];


const menuItems = {
  tasty: [
    { name: 'Smoked Salmon Salad', description: "Smoked salmon, mix salad, mix cheese, lemon sauce, cherry tomato, orange ", price: '15.8 AZN' },
    { name: 'Tuna Salad', description: "Tuna, boiled egg, mix salad, corn, olive, cherry tomato ", price: '12 AZN' },
    { name: 'Vegetarian Salad', description: "Avocado, cucumber, cherry tomato, corn, olive, lemon sauce, white cheese, mix salad", price: '10.8 AZN' },
    { name: 'Caesar Salad (Chicken / Prawn)', description: "Caesar sauce, iceberg, parmesan, cherry tomato, croutons with chicken fillet or prawn", price: '12.80 / 14.80 AZN' },
    { name: 'Beef Salad', description: "Beef tenderloin, mix salad, lemon sauce, cherry tomato, walnut, red kidney beans ", price: '14.8 AZN' },
    { name: 'Chicken Popcorn Salad', description: "Chicken popcorn, avocado, cherry tomato, corn, mix salad, popcorn sauce", price: '12.8 AZN' },
    { name: 'Bruschetta Salmon', description: "Ciabatta bread, smoked salmon, cherry tomato, red onion, capers", price: '16 AZN' },
    { name: 'Bruschetta Tomato', description: "Ciabatta bread, tomato, balsamic sauce, oregano", price: '12 AZN' },
    { name: 'Bruschetta Chicken', description: "Ciabatta bread, smoked chicken, balsamic sauce, corn", price: '14 AZN' },
    { name: 'Bruschetta Beef', description: "Ciabatta bread, smoked beef slices, tomato, capers ", price: '15 AZN' },
  ],

  table: [
    { name: "ETUD's Special Set", description: "", price: '36 AZN' },
    { name: "Sausage Board", description: "", price: '17 AZN' },
    { name: "Cheese Board", description: "", price: '36 AZN' },
    { name: "Meat Board", description: "", price: '36 AZN' },
    { name: "Fruit Plate", description: "", price: '36 AZN' },
    { name: "Quesadilla", description: "", price: '36 AZN' },
    { name: "Nachos/Minced Meat", description: "", price: '36 AZN' },
    { name: "Fish & Chips", description: "", price: '36 AZN' },
    { name: "Panko Calamari", description: "", price: '36 AZN' },
    { name: "Chicken Pate", description: "", price: '36 AZN' },
    { name: "Mozzarella Sticks", description: "", price: '36 AZN' },
    { name: "Cheese Balls", description: "", price: '36 AZN' },
    { name: "Nuggets", description: "", price: '36 AZN' },
    { name: "Chicken Popcorn", description: "", price: '36 AZN' },
    { name: "BBQ Chicken Wings", description: "Chicken wings in BBQ sauce", price: '36 AZN' },
    { name: "Chicken Wings", description: "", price: '36 AZN' },
    { name: "Onion Rings", description: "", price: '36 AZN' },
    { name: "Pistachios", description: "", price: '7 AZN' },
    { name: "French Fries", description: "", price: '36 AZN' },
    { name: "Potato Wedges", description: "", price: '7 AZN' },
    { name: "Cheese Fries", description: "", price: '7 AZN' },
    { name: "Peanuts", description: "", price: '7 AZN' },
    { name: "Fried Dushbara", description: "", price: '7 AZN' },
    { name: "Fried String Cheese", description: "", price: '7 AZN' },
    { name: "String Cheese", description: "", price: '7 AZN' },
    { name: "Chips", description: "", price: '7 AZN' },
    { name: "Olive", description: "", price: '6 AZN' },

  ],
  drinks: [
    { name: "Jack Daniel's Old N.7", description: " ", price: '15.8 AZN' },
    { name: "Jack Daniel's Tennessee Apple", description: "", price: '8 AZN' },
    { name: "Jack Daniel's Tennessee Honey", description: "", price: '10.8 AZN' },
    { name: "Jack Daniel's Gentleman Jack", description: "", price: '10 AZN' },
    { name: 'Woodford Reserve', description: "", price: '10 AZN' },
    { name: 'Chivas Regal 12 Y.O.', description: "", price: '9 AZN' },
    { name: 'Chivas Regal 18 Y.O.', description: "", price: '14 AZN' },
    { name: 'Glenfiddich 12 Y.O.', description: "", price: '11 AZN' },
    { name: 'Singleton', description: "", price: '9 AZN' },
    { name: 'Jameson', description: "", price: '8.00 / 120.00 AZN' },
    { name: 'JW Black Label', description: "", price: '8 AZN' },
    { name: 'JW Red Label', description: "", price: '7 AZN' },
    { name: 'Sierra', description: "", price: '6 AZN' },
    { name: 'Olmeca Blanco', description: "", price: '6 AZN' },
    { name: 'Olmeca Gold', description: "", price: '7 AZN' },
    { name: 'Patron', description: "", price: '12 AZN' },
    { name: 'Aperol', description: "", price: '8 AZN' },
    { name: 'Campari', description: "", price: '8 AZN' },
    { name: 'Gin Mare', description: "", price: '10 AZN' },
    { name: "Gordon's", description: "", price: '7 AZN' },
    { name: 'Bombay Sapphire', description: "", price: '9 AZN' },
    { name: 'Jagermeister', description: "", price: '6 AZN' },
    { name: 'Baileys', description: "", price: '8 AZN' },
    { name: 'Cointreau', description: "", price: '8 AZN' },
    { name: 'Amaretto', description: "", price: '8 AZN' },
    { name: 'Kahlua', description: "", price: '8 AZN' },
    { name: 'Sambuca', description: "", price: '10 AZN' },
    { name: 'Xenta Absenta', description: "", price: '10 AZN' },
    { name: 'Martini Fiero', description: "", price: '8 AZN' },
    { name: 'Martini Bianco', description: "", price: '8 AZN' },
    { name: 'Martini Rosato', description: "", price: '8 AZN' },
    { name: 'Martini Rosso', description: "", price: '8 AZN' },
    { name: 'Nemiroff', description: "", price: '5.00 / 70.00 AZN' },
    { name: 'Absolut', description: "", price: '6.00 / 90.00 AZN' },
    { name: 'Finlandia', description: "", price: '6.00 / 90.00 AZN' },
    { name: 'Captain Morgan Gold', description: "", price: '7 AZN' },
    { name: 'Captain Morgan Jamaica', description: "", price: '7 AZN' },
    { name: 'Bacardi', description: "", price: '7 AZN' },
    { name: 'Blanc Kronenburg', description: "", price: '7 AZN' },
    { name: 'Xirdalan Draft (filtered)', description: "", price: '4.5 AZN' },
    { name: 'Xirdalan Draft (unfiltered)', description: "", price: '5 AZN' },
    { name: 'Xirdalan Bottle', description: "", price: '6 AZN' },
    { name: 'Guinness', description: "", price: '10 AZN' },
    { name: 'Erdinger', description: "", price: '9 AZN' },
    { name: 'Corona', description: "", price: '9 AZN' },
    { name: 'Heineken', description: "", price: '8 AZN' },
    { name: 'Tuborg', description: "", price: '7 AZN' },
    { name: 'Efes Draft', description: "", price: '7 AZN' },
    { name: 'Efes Zero', description: "", price: '5 AZN' },






  ],
  alcohol: [
  { name: "Jack Daniel's Old N.7", description: "", price: '8.00 / 120.00 AZN' },
{ name: "Jack Daniel's Tennessee Apple", description: "", price: '8 AZN' },
{ name: "Jack Daniel's Tennessee Honey", description: "", price: '8 AZN' },
{ name: "Jack Daniel's Gentleman Jack", description: "", price: '10 AZN' },
{ name: "Woodford Reserve", description: "", price: '10 AZN' },
{ name: "Chivas Regal 12 Y.O.", description: "", price: '9 AZN' },
{ name: "Chivas Regal 18 Y.O.", description: "", price: '14 AZN' },
{ name: "Glenfiddich 12 Y.O.", description: "", price: '11 AZN' },
{ name: "Singleton", description: "", price: '9 AZN' },
{ name: "Jameson", description: "", price: '8.00 / 120.00 AZN' },
{ name: "JW Black Label", description: "", price: '8 AZN' },
{ name: "JW Red Label", description: "", price: '7 AZN' },
{ name: "Jim Beam", description: "", price: '7 AZN' },
{ name: "Sierra", description: "", price: '6 AZN' },
{ name: "Olmeca Blanco", description: "", price: '6 AZN' },
{ name: "Olmeca Gold", description: "", price: '7 AZN' },
{ name: "Patron", description: "", price: '12 AZN' },
{ name: "Aperol", description: "", price: '8 AZN' },
{ name: "Campari", description: "", price: '8 AZN' },
{ name: "Gin Mare", description: "", price: '10 AZN' },
{ name: "Gordon's", description: "", price: '7 AZN' },
{ name: "Bombay Sapphire", description: "", price: '9 AZN' },
{ name: "Jagermeister", description: "", price: '6 AZN' },
{ name: "Baileys", description: "", price: '8 AZN' },
{ name: "Cointreau", description: "", price: '8 AZN' },
{ name: "Amaretto", description: "", price: '8 AZN' },
{ name: "Kahlua", description: "", price: '8 AZN' },
{ name: "Sambuca", description: "", price: '10 AZN' },
{ name: "Xenta Absenta", description: "", price: '10 AZN' },
{ name: "Martini Fiero", description: "", price: '8 AZN' },
{ name: "Martini Bianco", description: "", price: '8 AZN' },
{ name: "Martini Rosato", description: "", price: '8 AZN' },
{ name: "Martini Rosso", description: "", price: '8 AZN' },
{ name: "Nemiroff", description: "", price: '5.00 / 70.00 AZN' },
{ name: "Absolut", description: "", price: '6.00 / 90.00 AZN' },
{ name: "Finlandia", description: "", price: '6.00 / 90.00 AZN' },
{ name: "Captain Morgan Gold", description: "", price: '7 AZN' },
{ name: "Captain Morgan Jamaica", description: "", price: '7 AZN' },
{ name: "Bacardi", description: "", price: '7 AZN' },
{ name: "Blanc Kronenburg", description: "", price: '7 AZN' },
{ name: "Xirdalan Draft (filtered)", description: "", price: '4.5 AZN' },
{ name: "Xirdalan Draft (unfiltered)", description: "", price: '5 AZN' },
{ name: "Xirdalan Bottle", description: "", price: '6 AZN' },
{ name: "Guinness", description: "", price: '10 AZN' },
{ name: "Erdinger", description: "", price: '9 AZN' },
{ name: "Corona", description: "", price: '8 AZN' },
{ name: "Heineken", description: "", price: '8 AZN' },
{ name: "Tuborg", description: "", price: '7 AZN' },
{ name: "Efes Draft", description: "", price: '7 AZN' },
{ name: "Efes Zero", description: "", price: '6 AZN' },

  ],
};

const Menu = () => {
  const [enableNavigation, setEnableNavigation] = useState(true);
  const [activeTab, setActiveTab] = useState(2);

  return (
    <div className={styles.menu}>
      <h1>Menu Of ETUD BAKU</h1>

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

      {enableNavigation && (
        <>
          <div className={styles.customPrevButton}><FaArrowLeft /></div>
          <div className={styles.customNextButton}><FaArrowRight /></div>
        </>
      )}

      {/* Tabs */}
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className={styles.menuItems}>
        {menuItems[tabs.find(t => t.id === activeTab)?.key]?.map((item, index) => (
          <div key={index} className={styles.menuItem}>
            <h2>{item.name}</h2>

            <div>
              {item.description && <span className={styles.description}>{item.description}</span>}
              <span className={styles.price}>{item.price}</span>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Menu;
