
import './App.css'
import Layout from './components/layout/Layout'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Menu from './pages/menu/Menu';
import Contact from './pages/contact/Contact';
import Location from './pages/location/Location';
import Buy_Tickets from './pages/buy_tickets/Buy_Tickets';
import Delivery from './pages/delivery/Delivery';
import NotFound from './components/notFound/NotFound';





function App() {
 

  return (

    <>

        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/location" element={<Location/>} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/buytickets" element={<Buy_Tickets/>} /> */}
      <Route path="/delivery" element={<Delivery/>} />
         <Route path="*" element={<NotFound/>} />
      
    </Routes>
      <Layout>

      </Layout>
    </>

  )
}

export default App
