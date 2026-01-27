import { useNavigate } from "react-router-dom";
import './menu.css';

// Şəkilləri import et
import burgersImg from "../../assets/menu_new/burgers.jpeg";
import sandwichImg from "../../assets/menu_new/sandwich.jpeg";
import snacksImg from "../../assets/menu_new/snacks.jpeg";
import snackSetsImg from "../../assets/menu_new/snack-set.jpeg";
import tequilaImg from "../../assets/menu_new/Tequila.jpeg";
import liquorImg from "../../assets/menu_new/liquor.jpeg";
import aperitifImg from "../../assets/menu_new/aperitif.jpeg";
import ginImg from "../../assets/menu_new/gin.jpeg";
import vodkaImg from "../../assets/menu_new/vodka.jpeg";
import vermouthImg from "../../assets/menu_new/vermouth.jpeg";
import whiskeyImg from "../../assets/menu_new/whiskey.jpeg";
import rumImg from "../../assets/menu_new/rum.jpeg";
import wineImg from "../../assets/menu_new/wine.jpeg";
import cocktailsImg from "../../assets/menu_new/cocktails.jpeg";
import shotsImg from "../../assets/menu_new/shots.jpeg";
import shotSetsImg from "../../assets/menu_new/shot_sets.jpeg";
import nonAlcoholicImg from "../../assets/menu_new/non_alcoholic_drinks.jpeg";
import jackDanielsImg from "../../assets/menu_new/jack_daniel_cocktails.jpeg";
import beersImg from "../../assets/menu_new/beers.jpeg";
import softDrinksImg from "../../assets/menu_new/soft_drinks.jpeg";
import saladsImg from "../../assets/menu_new/salads.jpeg";
import bruschettasImg from "../../assets/menu_new/bruschetta.jpeg";
import freshAdditionsImg from "../../assets/menu_new/fresh_additions.jpeg";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="main-menu">
      <h1 id="menu">ETUD BAKU</h1>
      <div className="etud-line"></div>

      <section className="pages">

        {/* FOODS */}
        <h2 id="foods">FOODS</h2>
        <div className="pages-menu" >
          <button className="pages-item" onClick={() => navigate("/items/Burgers")} style={{ backgroundImage: `url(${burgersImg})` }}>
            <div className="page-blur"><h3>Burgers</h3></div>
          </button>

          <button className="pages-item" onClick={() => navigate("/items/Sandwiches")} style={{ backgroundImage: `url(${sandwichImg})` }}>
            <div className="page-blur"><h3>Sandwiches</h3></div>
          </button>
        </div>

        <div className="etud-line"></div>

        {/* FAST FOODS */}
        <h2>FAST FOODS</h2>
        <div className="pages-menu">
          <button className="pages-item-full" onClick={() => navigate("/items/Snacks")} style={{ backgroundImage: `url(${snacksImg})` }}>
            <div className="page-blur-full"><h3>Snacks</h3></div>
          </button>

          <button className="pages-item-full" onClick={() => navigate("/items/SnackSets")} style={{ backgroundImage: `url(${snackSetsImg})` }}>
            <div className="page-blur-full"><h3>Snack Sets</h3></div>
          </button>
        </div>

        <div className="etud-line"></div>

        {/* ALCOHOLIC DRINKS */}
        <h2 id="drinks">ALCOHOLIC DRINKS</h2>
        <div className="pages-menu">
          <button className="pages-item" onClick={() => navigate("/items/Whiskey")} style={{ backgroundImage: `url(${whiskeyImg})` }}>
            <div className="page-blur"><h3>Whiskey</h3></div>
          </button>
          <button className="pages-item" onClick={() => navigate("/items/Tequila")} style={{ backgroundImage: `url(${tequilaImg})` }}>
            <div className="page-blur"><h3>Tequila</h3></div>
          </button>
          <button className="pages-item" onClick={() => navigate("/items/Liquor")} style={{ backgroundImage: `url(${liquorImg})` }}>
            <div className="page-blur"><h3>Liquor</h3></div>
          </button>
          <button className="pages-item" onClick={() => navigate("/items/Aperitif")} style={{ backgroundImage: `url(${aperitifImg})` }}>
            <div className="page-blur"><h3>Aperitif</h3></div>
          </button>
          <button className="pages-item" onClick={() => navigate("/items/Gin")} style={{ backgroundImage: `url(${ginImg})` }}>
            <div className="page-blur"><h3>Gin</h3></div>
          </button>
          <button className="pages-item" onClick={() => navigate("/items/Vodka")} style={{ backgroundImage: `url(${vodkaImg})` }}>
            <div className="page-blur"><h3>Vodka</h3></div>
          </button>
          <button className="pages-item" onClick={() => navigate("/items/Vermouth")} style={{ backgroundImage: `url(${vermouthImg})` }}>
            <div className="page-blur"><h3>Vermouth</h3></div>
          </button>
          <button className="pages-item" onClick={() => navigate("/items/Rum")} style={{ backgroundImage: `url(${rumImg})` }}>
            <div className="page-blur"><h3>Rum</h3></div>
          </button>
        </div>

        <div className="pages-menu">
          <div className="etud-line"></div>
          <button className="pages-item-full" onClick={() => navigate("/items/Wine")} style={{ backgroundImage: `url(${wineImg})` }}>
            <div className="page-blur-full"><h3>Wine</h3></div>
          </button>

          <div className="etud-line"></div>
          <button className="pages-item-full" onClick={() => navigate("/items/Cocktails")} style={{ backgroundImage: `url(${cocktailsImg})` }}>
            <div className="page-blur-full"><h3>Cocktails</h3></div>
          </button>

          <button className="pages-item-full" onClick={() => navigate("/items/Shots")} style={{ backgroundImage: `url(${shotsImg})` }}>
            <div className="page-blur-full"><h3>Shots</h3></div>
          </button>

          <button className="pages-item-full" onClick={() => navigate("/items/ShotSets")} style={{ backgroundImage: `url(${shotSetsImg})` }}>
            <div className="page-blur-full"><h3>Shot Sets</h3></div>
          </button>
        </div>

        <div className="etud-line"></div>

        {/* EXTRA */}
        <h2>EXTRA</h2>
        <div className="pages-menu">
          <button className="pages-item" onClick={() => navigate("/items/NonAlcoholicCocktails")} style={{ backgroundImage: `url(${nonAlcoholicImg})` }}>
            <div className="page-blur"><h3>Non Alcoholic Cocktails</h3></div>
          </button>

          <button className="pages-item" onClick={() => navigate("/items/JackDanielsCocktails")} style={{ backgroundImage: `url(${jackDanielsImg})` }}>
            <div className="page-blur"><h3>Jack Daniel's Cocktails</h3></div>
          </button>

          <button className="pages-item" onClick={() => navigate("/items/Beers")} style={{ backgroundImage: `url(${beersImg})` }}>
            <div className="page-blur"><h3>Beers</h3></div>
          </button>

          <button className="pages-item" onClick={() => navigate("/items/SoftDrinks")} style={{ backgroundImage: `url(${softDrinksImg})` }}>
            <div className="page-blur"><h3>Soft Drinks</h3></div>
          </button>
        </div>

        <div className="etud-line"></div>

        {/* FRESHS */}
        <h2>FRESHS</h2>
        <div className="pages-menu">
          <button className="pages-item" onClick={() => navigate("/items/Salads")} style={{ backgroundImage: `url(${saladsImg})` }}>
            <div className="page-blur"><h3>Salads</h3></div>
          </button>

          <button className="pages-item" onClick={() => navigate("/items/Bruschettas")} style={{ backgroundImage: `url(${bruschettasImg})` }}>
            <div className="page-blur"><h3>Bruschettas</h3></div>
          </button>

          <button className="pages-item-full" onClick={() => navigate("/items/Freshadditions")} style={{ backgroundImage: `url(${freshAdditionsImg})` }}>
            <div className="page-blur-full"><h3>Fresh Additions</h3></div>
          </button>
        </div>

      </section>
    </div>
  );
};

export default Menu;
