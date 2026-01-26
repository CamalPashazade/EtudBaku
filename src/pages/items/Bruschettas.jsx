// import NavbarDemo from "@/components/NavbarDemo";
// import Footer from "@/components/Footer";
import './pagesStyles/menuItem.css'

export default function Bruschettas() {
  return (
    <>
      {/* <NavbarDemo /> */}

      <div className="menu-item-page">

        <h1>Bruschettas</h1>

        <div className="etud-line"></div>

        <div className="page-item">
            <div className="item-title">
                <h3>Bruschetta Salmon /Qızıl balıq brusketta</h3>
                <p>16.00</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Ciabatta bread, smoked salmon, cherry tomato, red onion, capers</p>
            <span><p>Çiabatta çörəyi, hisə verilmiş qızıl balıq, çerri pomidoru, qırmızı soğan, kapers</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Bruschetta tomato / Pomidorlu brusketta</h3>
                <p>12.00</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Ciabatta bread, tomato balsamic sauce oregano</p>
            <span><p>Çiabatta çörəyi, pomidor, balzamik sous, kəklikotu</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Bruschetta Beef / Ətli Brusketta</h3>
                <p>15.00</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Ciabatta bread, smoked beef slice, tomato, capers</p>
            <span><p>Çiabatta çörəyi, hisə verilmiş mal əti, pomidor, kapers</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Bruschetta chichken / Toyuqlu Brusketta</h3>
                <p>14.00</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Ciabatta bread, smoked chichken, balsamic sauce, corn</p>
            <span><p>Çiabatta çörəyi, hisə verilmiş toyuq, balzamik sous, qarğıdalı</p></span>
        </div>

      </div>

      {/* <Footer /> */}
    </>
  );
}
