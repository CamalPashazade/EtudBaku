// import NavbarDemo from "@/components/NavbarDemo";
// import Footer from "@/components/Footer";
import './pagesStyles/menuItem.css'

export default function ShotSets() {
  return (
    <>
      {/* <NavbarDemo /> */}

      <div className="menu-item-page">

        <h1>Shot Sets</h1>

        <div className="etud-line"></div>

        <div className="page-item no-description">
            <div className="item-title">
                <h3>ETUD Shots</h3>
                <p>20.00</p>
            </div>
        </div>   

        <div className="page-item no-description">
            <div className="item-title">
                <h3>Jazzish Shots</h3>
                <p>24.00</p>
            </div>
        </div>   

        <div className="page-item no-description">
            <div className="item-title">
                <h3>Barman's Brain</h3>
                <p>24.00</p>
            </div>
        </div>   


      </div>

      {/* <Footer /> */}
    </>
  );
}
