// import React from "react";
// import Link from "next/link";
// import styles from "../styles/Home.module.css";
// import ScrollingBanner from "../components/ScrollingBanner";
// import Image from "next/image";


// type Props = {};

// const Home: React.FC<Props> = () => {
//   return (
//     <main className={styles.page}>

//       <section className={styles.hero}>
//         <div className={styles.heroInner}>
//           <h1 className={styles.heroTitle}>BRILINO</h1>
//           <p className={styles.heroText}>
//             Upptäck våra premiumoliver och hantverksostar, noggrant utvalda för att ge dig autentiska smaker. 
//             Varje produkt är omsorgsfullt tillverkad med kärlek och passion, perfekt för både vardag och fest. 
//             Låt oss inspirera dina måltider med naturliga och högkvalitativa delikatesser.
//           </p>
//           <Link href="/products">
//             <button className={styles.primaryBtn}>Utforska Produkter</button>
//           </Link>
//         </div>
//       </section>


//       <section className={styles.intro}>
//         <div className={styles.introText}>
//           <h2>Smak som gör <span className={styles.italic}>skillnad</span></h2>
//           <p>
//             Hos Brilino tror vi på kvalitet, tradition och njutning i varje tugga. Våra oliver och ostar kommer från noggrant utvalda producenter som delar vårt engagemang för smak och hållbarhet. 
//             <br></br>Perfekt för dig som vill ha något mer än bara mat, en upplevelse på tallriken.
//           </p>
//         </div>

//         <aside className={styles.collage}>
//           <div className={styles.collageGrid}>
//             <Image src="/images/01.jpg" width={50} height={50} alt="c1" unoptimized />
//             <Image src="/images/l2.jpg" width={50} height={50} alt="c2" unoptimized />
//           </div>
//         </aside>
//       </section>

//       <ScrollingBanner variant="light"/>

//       <section className={styles.feature}>
//         <div className={styles.featureImage}>
//           <Image src="/images/L3.jpg" alt="feature" width={50} height={50} unoptimized />
//         </div>
//         <div className={styles.featureContent}>
//           <h3>Smaker från naturen direkt till <span className={styles.big}>ditt bord.</span></h3>
//           <p>
//             Våra oliver plockas för hand och våra ostar tillverkas med kärlek och tradition. Varje produkt är noggrant utvald för att ge dig en autentisk smakupplevelse. Perfekt för allt från vardagsmåltider till festliga tillfällen – upptäck våra utsökta kombinationer som höjer varje stund.
//           </p>
//           <Link href="/products">
//             <button className={styles.primaryBtn2}>Utforska Produkter</button>
//           </Link>
//         </div>
//       </section>

//     </main>
//   );
// };

// export default Home;


'use client';
import React from "react";
import ScrollingBanner from "../components/ScrollingBanner";
import Link from "next/link";
import Image from "next/image";
import logo3 from "../assets/images/01.jpg";
import logo4 from "../assets/images/l2.jpg";
import logo5 from "../assets/images/L3.jpg";

const Home: React.FC = () => {
  return (
    <main className="home-page">

      <section className="home-hero">
        <div className="home-heroInner">
          <h1 className="home-heroTitle">BRILINO</h1>
          <p className="home-heroText">
            Upptäck våra premiumoliver och hantverksostar, noggrant utvalda för att ge dig autentiska smaker. 
            Varje produkt är omsorgsfullt tillverkad med kärlek och passion, perfekt för både vardag och fest. 
            Låt oss inspirera dina måltider med naturliga och högkvalitativa delikatesser.
          </p>
          <Link href="/products">
            <button className="home-primaryBtn">Utforska Produkter</button>
          </Link>
          
        </div>
      </section>

      <section className="home-intro">
        <div className="home-introText">
          <h2>Smak som gör <span className="home-italic">skillnad</span></h2>
          <p>
            Hos Brilino tror vi på kvalitet, tradition och njutning i varje tugga. Våra oliver och ostar kommer från noggrant utvalda producenter som delar vårt engagemang för smak och hållbarhet. 
            <br />Perfekt för dig som vill ha något mer än bara mat, en upplevelse på tallriken.
          </p>
        </div>

        <aside className="home-collage">
          <div className="home-collageGrid">
            <Image src={logo3} alt="c1" style={{ width: "100%", height: "auto" }} />
            <Image src={logo4} alt="c2" style={{ width: "100%", height: "auto" }} />
          </div>
        </aside>
      </section>

      <ScrollingBanner variant="light"/>

      <section className="home-feature">
        <div className="home-featureImage">
          <Image src={logo5} alt="feature" style={{ width: "100%", height: "auto" }} />
        </div>
        <div className="home-featureContent">
          <h3>Smaker från naturen direkt till <span className="home-big">ditt bord.</span></h3>
          <p>
            Våra oliver plockas för hand och våra ostar tillverkas med kärlek och tradition. Varje produkt är noggrant utvald för att ge dig en autentisk smakupplevelse. Perfekt för allt från vardagsmåltider till festliga tillfällen – upptäck våra utsökta kombinationer som höjer varje stund.
          </p>
          <Link href="/products">
            <button className="home-primaryBtn2">Utforska Produkter</button>
          </Link>          
        </div>
      </section>

    </main>
  );
};

export default Home;
