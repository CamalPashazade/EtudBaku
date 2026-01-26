// import NavbarDemo from "@/components/NavbarDemo";
// import Footer from "@/components/Footer";
import './pagesStyles/menuItem.css'

export default function Tequila() {
  return (
    <>
      {/* <NavbarDemo /> */}

      <div className="menu-item-page">

        <h1>Tequila</h1>

        <div className="etud-line"></div>

        <div className="page-item no-description">
            <div className="item-title">
                <h3>Sierra</h3>
                <p>7.00</p>
            </div>
        </div>     


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Olmeca Blanco</h3>
                <p>7.00</p>
            </div>
        </div>     


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Olmeca Gold</h3>
                <p>7.00</p>
            </div>
        </div>     


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Patrom</h3>
                <p>12.00</p>
            </div>
        </div> 




      </div>

      {/* <Footer /> */}
    </>
  );
}
