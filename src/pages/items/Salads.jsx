// import NavbarDemo from "@/components/NavbarDemo";
// import Footer from "@/components/Footer";
import './pagesStyles/menuItem.css'

export default function Salads() {
  return (
    <>
      {/* <NavbarDemo /> */}

      <div className="menu-item-page">

        <h1>Salads</h1>

        <div className="etud-line"></div>

        <div className="page-item">
            <div className="item-title">
                <h3>Smoked Salmon salad / Hisə verilmiş Qızıl balıq salatı</h3>
                <p>15.80</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Smoken salmon, mix salad, mix cheese, lemon sauce, cherry tomato, orange</p>
            <span><p>Hisə verilmiş qızıl balıq, göyərtilər, limon sousu, çerri pomidoru, portağal</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Beef salad / Can əti salatı</h3>
                <p>14.80</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Beef tendertion, mix salad, lemon sauce, cherry tomato, walnut, red kidney beans</p>
            <span><p>Can əti, göyərtilər, limon sousu, çerri pomidoru, qoz, qırmızı lobya</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Chicken popcorn salad / Toyuq popkorn salatı</h3>
                <p>12.80</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Chichken popcorn, avocado, cherry tomato, corn, mix salad, popcorn sauce</p>
            <span><p>Toyuq popkorn, avokado, çerri pomidoru qarğıdalı, göyərtilər, popkorn sousu</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Caesar Salad / Sezar salatı</h3>
                <p>12.80 / 14.80</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Caesar sauce, iceberg, parmesan, cherry tomato, croutons with chichken fillet or prawn</p>
            <span><p>Sezar sousu, aysberq, parmezan pendiri, çerri pomidoru, suxarı, toyuq filesi və ya krevet ilə</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Tuna salad / Tuna salatı</h3>
                <p>12.00</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Tuna, boiled egg, mix salad, corn, olive, cherry tomato</p>
            <span><p>Tuna balığı, qaynadılmış yumurta, göyərtilər, qarğıdalı, zeytun, çerri pomidoru</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Vegetarian salad / Vegeterian salatı</h3>
                <p>10.80</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Avocado, cucumber, cherry tomato, corn, olive, lemon sauce, white cheese, mix salad</p>
            <span><p>Avokado, xiyar, çerri pomidoru, qarğıdalı, zeytun, limon sousu, ağ pendir, göyərtilər</p></span>
        </div>

      </div>

      {/* <Footer /> */}
    </>
  );
}
