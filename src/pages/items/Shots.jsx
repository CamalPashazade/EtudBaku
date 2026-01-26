// import NavbarDemo from "@/components/NavbarDemo";
// import Footer from "@/components/Footer";
import './pagesStyles/menuItem.css'

export default function Shots() {
  return (
    <>
      {/* <NavbarDemo /> */}

      <div className="menu-item-page">

        <h1>Shots</h1>

        <div className="etud-line"></div>

        <div className="page-item no-description">
            <div className="item-title">
                <h3>DouDou</h3>
                <p>7.00</p>
            </div>
        </div>   

        <div className="page-item no-description">
            <div className="item-title">
                <h3>Snap, Crackle, Drop</h3>
                <p>9.00</p>
            </div>
        </div>   

        <div className="page-item no-description">
            <div className="item-title">
                <h3>B-52</h3>
                <p>10.00</p>
            </div>
        </div>   

        <div className="page-item no-description">
            <div className="item-title">
                <h3>B-55</h3>
                <p>12.00</p>
            </div>
        </div>   




      </div>

      {/* <Footer /> */}
    </>
  );
}
