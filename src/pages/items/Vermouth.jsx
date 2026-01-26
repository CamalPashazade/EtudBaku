// import NavbarDemo from "@/components/NavbarDemo";
// import Footer from "@/components/Footer";
import './pagesStyles/menuItem.css'

export default function Vermouth() {
  return (
    <>
      {/* <NavbarDemo /> */}

      <div className="menu-item-page">

        <h1>Vermouth</h1>

        <div className="etud-line"></div>

        <div className="page-item no-description">
            <div className="item-title">
                <h3>Martini fiero</h3>
                <p>8.00</p>
            </div>
        </div>   

        <div className="page-item no-description">
            <div className="item-title">
                <h3>Martini bianco</h3>
                <p>8.00</p>
            </div>
        </div>   

        <div className="page-item no-description">
            <div className="item-title">
                <h3>Martini rosato</h3>
                <p>8.00</p>
            </div>
        </div>   

        <div className="page-item no-description">
            <div className="item-title">
                <h3>Martini rosso</h3>
                <p>8.00</p>
            </div>
        </div>   




      </div>

      {/* <Footer /> */}
    </>
  );
}
