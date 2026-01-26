// import NavbarDemo from "@/components/NavbarDemo";
// import Footer from "@/components/Footer";
import './pagesStyles/menuItem.css'

export default function Gin() {
  return (
    <>
      {/* <NavbarDemo /> */}

      <div className="menu-item-page">

        <h1>GIN</h1>

        <div className="etud-line"></div>

        <div className="page-item no-description">
            <div className="item-title">
                <h3>Gin mare</h3>
                <p>10.00</p>
            </div>
        </div>     


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Bombay sapphire</h3>
                <p>10.00</p>
            </div>
        </div>     


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Gordon's</h3>
                <p>8.00</p>
            </div>
        </div>     




      </div>

      {/* <Footer /> */}
    </>
  );
}
