// import NavbarDemo from "@/components/NavbarDemo";
// import Footer from "@/components/Footer";
import { useEffect } from "react";
import './pagesStyles/menuItem.css'

export default function Salads() {



  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // və ya "smooth"
    });
  }, []);

  return (
    <>
      {/* <NavbarDemo /> */}

      <div className="menu-item-page">

        <h1>Salads</h1>
          <div className="page-item-line"></div>

        <div className="etud-line"></div>
<div className="page-item">
    <div className="item-title">
        <h3>Smoked Salmon Salad / Hisə verilmiş Qızıl balıq salatı</h3>
        <p>16.80</p>
    </div>

  

    <p>Smoked salmon, mix salad, mix cheese, lemon sauce, cherry tomato, orange</p>
    <span><p>Hisə verilmiş qızıl balıq, göyərtilər, limon sousu, çerri pomidoru, portağal</p></span>
</div>

<div className="page-item">
    <div className="item-title">
        <h3>Beef Salad / Can əti salatı</h3>
        <p>17.80</p>
    </div>

 

    <p>Beef tenderloin, mix salad, lemon sauce, cherry tomato, walnut, red kidney beans</p>
    <span><p>Can əti, göyərtilər, limon sousu, çerri pomidoru, qoz, qırmızı lobya</p></span>
</div>

<div className="page-item">
    <div className="item-title">
        <h3>Chicken Popcorn Salad / Toyuq popkorn salatı</h3>
        <p>13.80</p>
    </div>


    <p>Chicken popcorn, avocado, cherry tomato, corn, mix salad, popcorn sauce</p>
    <span><p>Toyuq popkorn, avokado, çerri pomidoru, qarğıdalı, göyərtilər, popkorn sousu</p></span>
</div>

<div className="page-item">
    <div className="item-title">
        <h3>Caesar Salad / Sezar salatı</h3>
        <p>13.80 / 16.80</p>
    </div>

  

    <p>Caesar sauce, iceberg, parmesan, cherry tomato, croutons with chicken fillet or prawn</p>
    <span><p>Sezar sousu, aysberq, parmezan pendiri, çerri pomidoru, suxarı, toyuq filesi və ya krevet ilə</p></span>
</div>

<div className="page-item">
    <div className="item-title">
        <h3>Tuna Salad / Tuna salatı</h3>
        <p>15.40</p>
    </div>

   

    <p>Tuna, boiled egg, mix salad, corn, olive, cherry tomato</p>
    <span><p>Tuna balığı, qaynadılmış yumurta, göyərtilər, qarğıdalı, zeytun, çerri pomidoru</p></span>
</div>

<div className="page-item">
    <div className="item-title">
        <h3>Vegetarian Salad / Vegeterian salatı</h3>
        <p>13.80</p>
    </div>

  

    <p>Avocado, cucumber, cherry tomato, corn, olive, lemon sauce, white cheese, mix salad</p>
    <span><p>Avokado, xiyar, çerri pomidoru, qarğıdalı, zeytun, limon sousu, ağ pendir, göyərtilər</p></span>
</div>



<div className='extra-title'>
   <p> 5% service charge not included</p>
   <p>5% xidmət haqqı qiymətlərə daxil deyildir</p>
</div>



      </div>

      {/* <Footer /> */}
    </>
  );
}
