// import NavbarDemo from "@/components/NavbarDemo";
// import Footer from "@/components/Footer";
import './pagesStyles/menuItem.css'

export default function Sandwiches() {
  return (
    <>
      {/* <NavbarDemo /> */}

      <div className="menu-item-page">

        <h1>Sandwiches</h1>

        <div className="etud-line"></div>

        <div className="page-item">
            <div className="item-title">
                <h3>Salmon Sendwich / Qızıl balıq sendviç</h3>
                <p>14.90</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Smoken salmon, pesto sauce. lettuce</p>
            <span><p>Hisə verilmiş qızıl balıq, pesto sousu, kahı</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Steak sendwich / Steyk sendviç</h3>
                <p>13.90</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Beef tendertion steak, mozarella cheese, pickle, tomato, lettuce, tartar sauce</p>
            <span><p>Can əti steyk, mozarella pendiri, turşu xiyar, pomidor, kahı, tartar sousu</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Chicken pesto Sandwich / Pesto souslu Toyuq sendviç </h3>
                <p>12.90</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Chicken fillet, pesto sauce, mozarella cheese, tomato</p>
            <span><p>Toyuq filesi, pesto sousu, mozarella pendiri, pomidor</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Chicken Sandwich / Toyuq sendviç </h3>
                <p>11.90</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Chicken fillet, mozarella cheese, tomato, pickle, lettuce</p>
            <span><p>Toyuq filesi, mozarella pendiri, pomidor, turşu xiyar, kahı</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Club Sandwich / Klub sendviç</h3>
                <p>12.00</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Chicken fillet, egg, mozarella cheese, tomato, pickle, lettuce with french fries</p>
            <span><p>Toyuq filesi, yumurta, mozarella pendiri, pomidor, turşu xiyar, kahı, kartof fri ilə</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Caesar Roll / Sezar roll</h3>
                <p>12.00</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Tortilla, Caesar sauce, Chicken fillet, parmesan, tomato, iceberg with french fries</p>
            <span><p>Toyuq, xüsusi sous, çeder pendiri, turşu xiyar, pomidor, kahı, kartof fri ilə</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Vegetarian Sandwich / Vegetarian sendviç</h3>
                <p>10.90</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Mozzarella cheese, tartar sauce, tomato, pickle, lettuce</p>
            <span><p>Mozzarella pendiri, tartar sousu, pomidor, turşu xiyar, kahı</p></span>
        </div>

      </div>

      {/* <Footer /> */}
    </>
  );
}
