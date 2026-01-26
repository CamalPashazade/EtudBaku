// import NavbarDemo from "@/components/NavbarDemo";
// import Footer from "@/components/Footer";
import './pagesStyles/menuItem.css'

export default function FresgAdditions() {
  return (
    <>
      {/* <NavbarDemo /> */}

      <div className="menu-item-page">

        <h1>Fresh Additions</h1>

        <div className="etud-line"></div>

        <div className="page-item">
            <div className="item-title">
                <h3>Spring rolls / Tərəvəz rolları</h3>
                <p>12.00</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>Noodles, mushroom, cabbage, carrot, ginger, onion</p>
            <span><p>Əriştə, göbələk, kələm, kök, zəncəfil, soğan</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Mixed sea food / Qarışıq dəniz məhsulları</h3>
                <p>14.00</p>
            </div>

            <div className="page-item-line"></div>

            <p>Mussel, calamari, shrimp, octopus, corn, lemon sauce</p>
            <span><p>Midye, kalmar, krevetka, osminoq, qarğıdalı, limpn sousu</p></span>
        </div>


        <div className="page-item">
            <div className="item-title">
                <h3>Quesadilla / Kesadila</h3>
                <p>15.00</p>
            </div>

            <div className="page-item-line"></div>
            
            <p>tortilla, beef tenderloin, cheese mix, special sauce</p>
            <span><p>Tortilla lavaşı, can əti, qarışıq pendirlər, xüsusi sous</p></span>
        </div>

      </div>

      {/* <Footer /> */}
    </>
  );
}
