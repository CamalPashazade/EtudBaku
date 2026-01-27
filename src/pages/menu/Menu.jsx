
import { useNavigate } from "react-router-dom";
import './menu.css';
// Şəkilləri import et
import burgersImg from "../../assets/menu_new/burgers.jpeg";
// import sandwichImg from "../../assets/menu_new/sandwich.jpeg";
// import snacksImg from "../../assets/menu_new/snacks.jpeg";
// import snackSetsImg from "../../assets/menu_new/snack-set.jpeg";
// import tequilaImg from "../../assets/menu_new/Tequila.jpeg";
// import liquorImg from "../../assets/menu_new/liquor.jpeg";
// import aperitifImg from "../../assets/menu_new/aperitif.jpeg";
// import ginImg from "../../assets/menu_new/gin.jpeg";
// import vodkaImg from "../../assets/menu_new/vodka.jpeg";
// import vermouthImg from "../../assets/menu_new/vermouth.jpeg";
// import whiskeyImg from "../../assets/menu_new/whiskey.jpeg";
// import rumImg from "../../assets/menu_new/rum.jpeg";
// import wineImg from "../../assets/menu_new/wine.jpeg";
// import cocktailsImg from "../../assets/menu_new/cocktails.jpeg";
// import shotsImg from "../../assets/menu_new/shots.jpeg";
// import shotSetsImg from "../../assets/menu_new/shot_sets.jpeg";
// import nonAlcoholicImg from "../../assets/menu_new/non_alcoholic_drinks.jpeg";
// import jackDanielsImg from "../../assets/menu_new/jack_daniel_cocktails.jpeg";
// import beersImg from "../../assets/menu_new/beers.jpeg";
// import softDrinksImg from "../../assets/menu_new/soft_drinks.jpeg";
// import saladsImg from "../../assets/menu_new/salads.jpeg";
// import bruschettasImg from "../../assets/menu_new/bruschetta.jpeg";
// import freshAdditionsImg from "../../assets/menu_new/fresh_additions.jpeg";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="main-menu">
      <h1 id="menu">ETUD BAKU</h1>
      <div className="etud-line"></div>

      <section className="pages">

        {/* FOODS */}
        <h2 id="foods">FOODS</h2>
        <div className="pages-menu" style={{ backgroundImage: `url(${burgersImg})` }}>
          <button className="pages-item burgers" onClick={() => navigate("/items/Burgers")}>
            <div className="page-blur"><h3>Burgers</h3></div>
          </button>

          <button className="pages-item sandwich" onClick={() => navigate("/items/Sandwiches")}>
            <div className="page-blur"><h3>Sandwiches</h3></div>
          </button>
        </div>

        <div className="etud-line"></div>

        {/* FAST FOODS */}
        <h2>FAST FOODS</h2>
        <div className="pages-menu">
          <button className="pages-item-full snacks" onClick={() => navigate("/items/Snacks")}>
            <div className="page-blur-full"><h3>Snacks</h3></div>
          </button>

          <button id="sets" className="pages-item-full snack-sets" onClick={() => navigate("/items/SnackSets")}>
            <div className="page-blur-full"><h3>Snack Sets</h3></div>
          </button>
        </div>

        <div className="etud-line"></div>

        {/* ALCOHOLIC DRINKS */}
        <h2 id="drinks">ALCOHOLIC DRINKS</h2>
        <div className="pages-menu">
          <button className="pages-item whiskey" onClick={() => navigate("/items/Whiskey")}>
            <div className="page-blur"><h3>Whiskey</h3></div>
          </button>
          <button className="pages-item tequila" onClick={() => navigate("/items/Tequila")}>
            <div className="page-blur"><h3>Tequila</h3></div>
          </button>
          <button className="pages-item liquor" onClick={() => navigate("/items/Liquor")}>
            <div className="page-blur"><h3>Liquor</h3></div>
          </button>
          <button className="pages-item aperitif" onClick={() => navigate("/items/Aperitif")}>
            <div className="page-blur"><h3>Aperitif</h3></div>
          </button>
          <button className="pages-item gin" onClick={() => navigate("/items/Gin")}>
            <div className="page-blur"><h3>Gin</h3></div>
          </button>
          <button className="pages-item vodka" onClick={() => navigate("/items/Vodka")}>
            <div className="page-blur"><h3>Vodka</h3></div>
          </button>
          <button className="pages-item vermouth" onClick={() => navigate("/items/Vermouth")}>
            <div className="page-blur"><h3>Vermouth</h3></div>
          </button>
          <button className="pages-item rum" onClick={() => navigate("/items/Rum")}>
            <div className="page-blur"><h3>Rum</h3></div>
          </button>
        </div>

        <div className="pages-menu">
          <div className="etud-line"></div>
          <button className="pages-item-full wine" onClick={() => navigate("/items/Wine")}>
            <div className="page-blur-full"><h3>Wine</h3></div>
          </button>

          <div className="etud-line"></div>
          <button className="pages-item-full cocktails" onClick={() => navigate("/items/Cocktails")}>
            <div className="page-blur-full"><h3>Cocktails</h3></div>
          </button>

          <button className="pages-item-full shots" onClick={() => navigate("/items/Shots")}>
            <div className="page-blur-full"><h3>Shots</h3></div>
          </button>

          <button className="pages-item-full shot-sets" onClick={() => navigate("/items/ShotSets")}>
            <div className="page-blur-full"><h3>Shot Sets</h3></div>
          </button>
        </div>

        <div className="etud-line"></div>

        {/* EXTRA */}
        <h2>EXTRA</h2>
        <div className="pages-menu">
          <button className="pages-item non-alcoholic-cocktails" onClick={() => navigate("/items/NonAlcoholicCocktails")}>
            <div className="page-blur"><h3>non alcoholic cocktails</h3></div>
          </button>

          <button className="pages-item jack-daniels-cocktails" onClick={() => navigate("/items/JackDanielsCocktails")}>
            <div className="page-blur"><h3>jack Daniel's cocktails</h3></div>
          </button>

          <button className="pages-item beers" onClick={() => navigate("/items/Beers")}>
            <div className="page-blur"><h3>beers</h3></div>
          </button>

          <button className="pages-item soft-drinks" onClick={() => navigate("/items/SoftDrinks")}>
            <div className="page-blur"><h3>soft drinks</h3></div>
          </button>
        </div>

        <div className="etud-line"></div>

        {/* FRESHS */}
        <h2>FRESHS</h2>
        <div className="pages-menu">
          <button className="pages-item salads" onClick={() => navigate("/items/Salads")}>
            <div className="page-blur"><h3>salads</h3></div>
          </button>

          <button className="pages-item bruschettas" onClick={() => navigate("/items/Bruschettas")}>
            <div className="page-blur"><h3>bruschettas</h3></div>
          </button>

          <button className="pages-item-full freshadditions" onClick={() => navigate("/items/Freshadditions")}>
            <div className="page-blur-full"><h3>freshadditions</h3></div>
          </button>
        </div>

      </section>
    </div>
  );
};

export default Menu;

