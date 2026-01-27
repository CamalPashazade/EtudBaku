import Buy_Tickets from './pages/buy_tickets/Buy_Tickets';
import './App.css';
import Layout from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Menu from './pages/menu/Menu';
import Contact from './pages/contact/Contact';
import Location from './pages/location/Location';
import Delivery from './pages/delivery/Delivery';
import NotFound from './components/notFound/NotFound';

// Item səhifələri
import Aperitif from './pages/items/Aperitif';
import Burgers from './pages/items/Burgers';
import Sandwiches from './pages/items/Sandwiches';
import Snacks from './pages/items/Snacks';
import SnackSets from './pages/items/SnackSets';
import Whiskey from './pages/items/Whiskey';
import Tequila from './pages/items/Tequila';
import Liquor from './pages/items/Liquor';
import Gin from './pages/items/Gin';
import Vodka from './pages/items/Vodka';
import Vermouth from './pages/items/Vermouth';
import Rum from './pages/items/Rum';
import Wine from './pages/items/Wine';
import Cocktails from './pages/items/Cocktails';
import Shots from './pages/items/Shots';
import ShotSets from './pages/items/ShotSets';
import NonAlcoholicCocktails from './pages/items/NonAlcoholicCocktails';
import JackDanielsCocktails from './pages/items/JackDanielsCocktails';
import Beers from './pages/items/Beers';
import SoftDrinks from './pages/items/SoftDrinks';
import Salads from './pages/items/Salads';
import Bruschettas from './pages/items/Bruschettas';
import FreshAdditions from './pages/items/FreshAdditions_temp';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delivery" element={<Delivery />} />

        {/* Item səhifələri */}
        <Route path="/items/Aperitif" element={<Aperitif />} />
        <Route path="/items/Burgers" element={<Burgers />} />
        <Route path="/items/Sandwiches" element={<Sandwiches />} />
        <Route path="/items/Snacks" element={<Snacks />} />
        <Route path="/items/SnackSets" element={<SnackSets />} />
        <Route path="/items/Whiskey" element={<Whiskey />} />
        <Route path="/items/Tequila" element={<Tequila />} />
        <Route path="/items/Liquor" element={<Liquor />} />
        <Route path="/items/Gin" element={<Gin />} />
        <Route path="/items/Vodka" element={<Vodka />} />
        <Route path="/items/Vermouth" element={<Vermouth />} />
        <Route path="/items/Rum" element={<Rum />} />
        <Route path="/items/Wine" element={<Wine />} />
        <Route path="/items/Cocktails" element={<Cocktails />} />
        <Route path="/items/Shots" element={<Shots />} />
        <Route path="/items/ShotSets" element={<ShotSets />} />
        <Route path="/items/NonAlcoholicCocktails" element={<NonAlcoholicCocktails />} />
        <Route path="/items/JackDanielsCocktails" element={<JackDanielsCocktails />} />
        <Route path="/items/Beers" element={<Beers />} />
        <Route path="/items/SoftDrinks" element={<SoftDrinks />} />
        <Route path="/items/Salads" element={<Salads />} />
        <Route path="/items/Bruschettas" element={<Bruschettas />} />
        <Route path="/items/FreshAdditions" element={<FreshAdditions />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
