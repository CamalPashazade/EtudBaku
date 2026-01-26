// import NavbarDemo from "@/components/NavbarDemo";
// import Footer from "@/components/Footer";
import './pagesStyles/menuItem.css'

export default function Vodka() {
  return (
    <>
      {/* <NavbarDemo /> */}

      <div className="menu-item-page">

        <h1>Vodka</h1>

        <div className="etud-line"></div>

        <div className="page-item no-description">
            <div className="item-title">
                <h3>Nemiroff</h3>
                <p>5.00 / 70.00</p>
            </div>
        </div>     


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Absolut</h3>
                <p>6.00 / 90.00</p>
            </div>
        </div>     


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Finlandia</h3>
                <p>6.00 / 90.00</p>
            </div>
        </div>     




      </div>

      {/* <Footer /> */}
    </>
  );
}
