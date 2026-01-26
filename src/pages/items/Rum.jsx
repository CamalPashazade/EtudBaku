// import NavbarDemo from "@/components/NavbarDemo";
// import Footer from "@/components/Footer";
import './pagesStyles/menuItem.css'

export default function Rum() {
  return (
    <>
      {/* <NavbarDemo /> */}

      <div className="menu-item-page">

        <h1>Rum</h1>

        <div className="etud-line"></div>

        <div className="page-item no-description">
            <div className="item-title">
                <h3>Captain Morgan gold</h3>
                <p>8.00</p>
            </div>
        </div>     


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Captain Morgan Jamaica</h3>
                <p>8.00</p>
            </div>
        </div>       


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Bacardi</h3>
                <p>8.00</p>
            </div>
        </div>      




      </div>

      {/* <Footer /> */}
    </>
  );
}
