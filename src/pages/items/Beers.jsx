// import NavbarDemo from "@/components/NavbarDemo";
// import Footer from "@/components/Footer";
import './pagesStyles/menuItem.css'

export default function Beers() {
  return (
    <>
      {/* <NavbarDemo /> */}

      <div className="menu-item-page">

        <h1>Beers</h1>

        <div className="etud-line"></div>

        <div className="page-item no-description">
            <div className="item-title">
                <h3>Blanc Kronenburg Draft</h3>
                <p>7.00</p>
            </div>
        </div>     


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Xırdalan Draft Filtered</h3>
                <p>5.00</p>
            </div>
        </div>       


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Xırdalan Draft Unfiltered</h3>
                <p>5.00</p>
            </div>
        </div>   

      </div>



      <div className="menu-item-page">
        <div className="etud-line"></div>
        <div className="extra-title"><h1>Bottled Beers</h1></div>
      </div>



      <div className="menu-item-page">

        <div className="page-item no-description">
            <div className="item-title">
                <h3>Erdinger</h3>
                <p>9.00</p>
            </div>
        </div>     


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Corona</h3>
                <p>8.00</p>
            </div>
        </div>       


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Heineken</h3>
                <p>8.00</p>
            </div>
        </div>   


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Xırdalan bottle</h3>
                <p>7.00</p>
            </div>
        </div>   


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Tuborg</h3>
                <p>8.00</p>
            </div>
        </div>   


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Efes Draft</h3>
                <p>7.00</p>
            </div>
        </div>   


        <div className="page-item no-description">
            <div className="item-title">
                <h3>Efes zero</h3>
                <p>6.00</p>
            </div>
        </div>   

      </div>



      {/* <Footer /> */}
    </>
  );
}
