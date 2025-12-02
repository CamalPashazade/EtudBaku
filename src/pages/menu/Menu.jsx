import styles from './menu.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade, EffectCreative } from 'swiper/modules';
import React, { useState, useRef } from 'react';
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
{ name: "Smoked Salmon Salad", description: "Smoked salmon, mix salad, mix cheese, lemon sauce, cherry tomato, orange", price: "15.8 AZN" },
{ name: "Tuna Salad", description: "Tuna, boiled egg, mix salad, corn, olive, cherry tomato", price: "12 AZN" },
{ name: "Vegetarian Salad", description: "Avocado, cucumber, cherry tomato, corn, olive, lemon sauce, white cheese, mix salad", price: "10.8 AZN" },
{ name: "Caesar Salad", description: "Caesar sauce, iceberg, parmesan, cherry tomato, croutons with chicken fillet or prawn", price: "12.80 / 14.80 AZN" },
{ name: "Beef Salad", description: "Beef tenderloin, mix salad, lemon sauce, cherry tomato, walnut, red kidney beans", price: "14.8 AZN" },
{ name: "Chicken Popcorn Salad", description: "Chicken popcorn, avocado, cherry tomato, corn, mix salad, popcorn sauce", price: "12.8 AZN" },
{ name: "Bruschetta Salmon", description: "Ciabatta bread, smoked salmon, cherry tomato, red onion, capers", price: "16 AZN" },
{ name: "Bruschetta Tomato", description: "Ciabatta bread, tomato, balsamic sauce, oregano", price: "12 AZN" },
{ name: "Bruschetta Chicken", description: "Ciabatta bread, smoked chicken, balsamic sauce, corn", price: "14 AZN" },
{ name: "Bruschetta Beef", description: "Ciabatta bread, smoked beef slices, tomato, capers", price: "15 AZN" },

  ],
  table: [
    { name: "ETUD's Special Set", description: "", price: "36 AZN" },
{ name: "Sausage Board", description: "", price: "17 AZN" },
{ name: "Cheese Board", description: "", price: "22 AZN" },
{ name: "Meat Board", description: "", price: "24 AZN" },
{ name: "Fruit Plate", description: "", price: "16 AZN" },
{ name: "Nachos/Minced Meat", description: "", price: "14.00 / 17.00 AZN" },
{ name: "Quesadilla", description: "Tortilla, beef tenderloin, cheese mix, special sauce", price: "12 AZN" },
{ name: "Panko Prawns", description: "", price: "12 AZN" },
{ name: "Panko Calamari", description: "", price: "12 AZN" },
{ name: "Fish & Chips", description: "", price: "12 AZN" },
{ name: "Chicken Schnitzel", description: "", price: "12 AZN" },
{ name: "Chicken Pate", description: "Chicken Pâté, baguette bread, butter", price: "10 AZN" },
{ name: "Mozzarella Sticks", description: "", price: "8 AZN" },
{ name: "Cheese Balls", description: "", price: "8 AZN" },
{ name: "Nuggets", description: "", price: "8 AZN" },
{ name: "Chicken Popcorn", description: "", price: "8 AZN" },
{ name: "BBQ Chicken Wings", description: "Chicken wings in BBQ sauce", price: "8 AZN" },
{ name: "Chicken Wings", description: "", price: "8 AZN" },
{ name: "Onion Rings", description: "", price: "6 AZN" },
{ name: "Pistachios", description: "", price: "7 AZN" },
{ name: "French Fries", description: "", price: "5 AZN" },
{ name: "Cheese Fries", description: "", price: "6 AZN" },
{ name: "Potato Wedges", description: "", price: "5 AZN" },
{ name: "Peanuts", description: "", price: "5 AZN" },
{ name: "Fried Dushbara", description: "", price: "5 AZN" },
{ name: "Fried String Cheese", description: "", price: "5 AZN" },
{ name: "String Cheese", description: "", price: "5 AZN" },
{ name: "Chips", description: "", price: "5 AZN" },
{ name: "Olive", description: "", price: "6 AZN" },


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
  cocktails:[
    { name: "Aperol Spritz", description: "", price: "15 AZN" },
{ name: "Long Island (cola/energy drink)", description: "", price: "15.00 / 17.00 AZN" },
{ name: "Martini Tonic", description: "", price: "12 AZN" },
{ name: "Mimosa", description: "", price: "13 AZN" },
{ name: "Gin & Tonic", description: "", price: "11 AZN" },
{ name: "Cuba Libre", description: "", price: "12 AZN" },
{ name: "Mojito", description: "", price: "12 AZN" },
{ name: "Tequila Sunrise", description: "", price: "12 AZN" },
{ name: "Bloody Mary", description: "", price: "12 AZN" },
{ name: "Blue Lagoon", description: "", price: "12 AZN" },
{ name: "Sex on the Beach", description: "", price: "13 AZN" },
{ name: "Pina Colada", description: "", price: "13 AZN" },
{ name: "Dry Martini", description: "", price: "12 AZN" },
{ name: "Margarita", description: "", price: "13 AZN" },
{ name: "Cosmopolitan", description: "", price: "12 AZN" },
{ name: "Daiquiri", description: "", price: "12 AZN" },
{ name: "Negroni", description: "", price: "13 AZN" },
{ name: "Whiskey Sour", description: "", price: "13 AZN" },
{ name: "White Russian", description: "", price: "12 AZN" },
{ name: "Mai-Tai", description: "", price: "13 AZN" },
{ name: "Old Fashioned", description: "", price: "12 AZN" },
{ name: "Godfather", description: "", price: "12 AZN" },
{ name: "Americano", description: "", price: "12 AZN" },
{ name: "Amaretto Sour", description: "", price: "12 AZN" },
{ name: "Espresso Martini", description: "", price: "13 AZN" },
{ name: "Hunter's Sour", description: "", price: "12 AZN" },
{ name: "Jazzish Shots", description: "", price: "20 AZN" },
{ name: "Barman’s Brain", description: "", price: "24 AZN" },
{ name: "DouDou", description: "", price: "24 AZN" },
{ name: "Snap, Crackle, Drop", description: "", price: "7 AZN" },
{ name: "B-52", description: "", price: "9 AZN" },
{ name: "B-55", description: "", price: "9 AZN" },
{ name: "Hunter", description: "", price: "11 AZN" },
{ name: "Popping Jack", description: "Jack Daniel's Tennessee Old Nº7, Mandarin soda", price: "14 AZN" },
{ name: "Jackbread Collins", description: "Jack Daniel's Tennessee Old Nº7, Fresh Lemon juice, Gingerbread syrup, Tonic water", price: "14 AZN" },
{ name: "Apple Bergamot Fizz", description: "Jack Daniel's Tennesse Apple, Fresh lemon juice, Bergamot syrup, Sparkling water", price: "14 AZN" },
{ name: "Tennessee Spritz", description: "Jack Daniel's Tennessee Old Nº7, Jack Daniel's Tennessee Honey, Fresh lemon juice, Cinnamon syrup, Mandarin soda", price: "14 AZN" },
{ name: "Bitter Jack", description: "Jack Daniel's Tennessee Old Nº7, Amaretto liqueur, Fresh lemon juice, Angostura bitters", price: "14 AZN" },
{ name: "Jack Rikki", description: "Jack Daniel's Tennessee Honey, Angostura bitters, Tonic water", price: "14 AZN" },
{ name: "Apple Lynchburg", description: "Jack Daniel's Tennessee Old Nº7, Jack Daniel's Tennessee Apple, Fresh lemon juice, Sprite", price: "14 AZN" },
{ name: "Honey Boulevardier", description: "Jack Daniel's Tennessee Honey, Red sweet vermouth, Campari", price: "14 AZN" },

  ],
  wines:[
    { name: "Meysari Maxxani Premium (Red dry)", description: "red dry wine, premium", price: "39.9 AZN" },
{ name: "Meysari Marcan (Red dry)", description: "red dry wine", price: "34.9 AZN" },
{ name: "Meysari Safdar (White dry)", description: "white dry wine", price: "34.9 AZN" },
{ name: "Meysari Sanam (Rose dry)", description: "rose dry wine", price: "34.9 AZN" },
{ name: "Chabiant (Red dry)", description: "red dry wine", price: "6/26 AZN" },
{ name: "Chabiant (White dry)", description: "white dry wine", price: "6/26 AZN" },
{ name: "Chabiant Saperavi - Cabernet sauvignon", description: "Saperavi and Cabernet Sauvignon blend wine", price: "39.9 AZN" },
{ name: "Chabiant Vino Nuovo", description: "new wine, red", price: "39.9 AZN" },
{ name: "Savalan Merlot (Red semi)", description: "red semi wine, Merlot", price: "6/28 AZN" },
{ name: "Savalan Merlot (Red dry)", description: "red dry wine, Merlot", price: "6/28 AZN" },
{ name: "Hillside Prestige (White Dry)", description: "white dry wine, premium", price: "6/28 AZN" },
{ name: "Hillside Curve (Red dry)", description: "red dry wine", price: "6/28 AZN" },
{ name: "Hillside Prestige (Rose Dry)", description: "rose dry wine, premium", price: "28 AZN" },
{ name: "Aggo Red (Pomegranate)", description: "pomegranate-based red wine", price: "4/16 AZN" },
{ name: "Sangria Premium", description: "premium sangria, fruity mix", price: "6/16 AZN" },
{ name: "Astoria", description: "Italian sparkling wine, premium", price: "65 AZN" },
{ name: "Cinzano", description: "Italian sparkling wine, premium", price: "70 AZN" },

  ],
  soft:[
    { name: "Redbull", description: "", price: "6 AZN" },
{ name: "Tonic", description: "", price: "6 AZN" },
{ name: "Coca Cola", description: "", price: "5 AZN" },
{ name: "Juice / Fresh Juice", description: "", price: "4.00 / 8.00 AZN" },
{ name: "Ice Tea", description: "", price: "5 AZN" },
{ name: "Water / Su", description: "", price: "3 AZN" },
{ name: "Tea / Çay", description: "", price: "5 AZN" },
{ name: "Espresso", description: "", price: "5 AZN" },
{ name: "Americano", description: "", price: "6 AZN" },
{ name: "Cappuccino", description: "", price: "7 AZN" },

  ]
};


const Menu = () => {
  const [enableNavigation, setEnableNavigation] = useState(true);
  const [activeTab, setActiveTab] = useState(2);

  // Ref əlavə edirik
  const menuItemsRef = useRef(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);

    // Kliklədikdə aşağıya scroll
    if (menuItemsRef.current) {
      menuItemsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      {/* Tabs */}
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
            onClick={() => handleTabClick(tab.id)} // dəyişiklik burada
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className={styles.menuItems} ref={menuItemsRef}>
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