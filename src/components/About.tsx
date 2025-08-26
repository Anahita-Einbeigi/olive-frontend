// "use client";
// import Link from "next/link";
// import React from "react";
// import styles from "../styles/About.module.css";
// import Image from "next/image";

// const About: React.FC = () => {
//   return (
//     <main className={styles.page}>
//       <section
//         className={styles.hero}
//         style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
//       >
//         <div className={styles.heroOverlay}>
//           <div className={styles.heroContent}>
//             <h1>
//               Om <span className={styles.elegant}>BRILINO </span>
//             </h1>
//             <p>
//               BRILINO grundades med en passion för äkta smaker och
//               hantverksmässig kvalitet. Vi vill ge våra kunder premiumoliver och
//               ostar som är noggrant utvalda och omsorgsfullt tillverkade. Vår
//               vision är att kombinera tradition och innovation för att skapa
//               produkter som gör varje måltid minnesvärd.
//             </p>
//             <button
//               className={styles.primaryBtn}
//               onClick={() => {
//                 const element = document.getElementById("services");
//                 if (element) {
//                   const offset = element.offsetTop - 100; 
//                   window.scrollTo({ top: offset, behavior: "smooth" });
//                 }
//               }}
//             >
//               Läs mer om vår resa
//             </button>

//           </div>
//         </div>
//       </section>

//       <section id="services" className={styles.services}>
//         <div className={styles.serviceCard}>
//           <h3>Kvalitet</h3>
//           <p>
//             Vi väljer bara de finaste råvarorna och ser till att varje produkt
//             uppfyller högsta standard.
//           </p>
//         </div>
//         <div className={styles.serviceCard}>
//           <h3>Hantverk</h3>
//           <p>
//             Från olivlund till ostproduktion – varje steg utförs med omsorg och
//             precision.
//           </p>
//         </div>
//         <div className={styles.serviceCard}>
//           <h3>Hållbarhet</h3>
//           <p>
//             Vi strävar efter att minska vårt klimatavtryck och stötta hållbara
//             metoder i alla delar av vår produktion.
//           </p>
//         </div>
//       </section>

//       <section className={styles.preview}>
//         <div className={styles.previewMockup}>
//           <Image  src="/images/brilino.jpg" width={50} height={50} alt="LOGO"  unoptimized />
//           {/* <img src="/images/brilino.jpg" alt="LOGO" /> */}
//         </div>
//         <div className={styles.previewText}>
//           <h2>Vi är på plats nära dig</h2>
//           <p>
//             Brilino deltar aktivt på olika mässor och marknader runt om i hela
//             Sverige. Vill du veta var du kan träffa oss nästa gång? All
//             information om våra evenemang och platser hittar du under Kontakt –
//             vi ser fram emot att träffa dig!
//           </p>
//           <Link href="/contact">
//             <button className={styles.Btn}>Upptäck våra platser</button>
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default About;

'use client';
import React from "react";
import Image from "next/image";
import logo from "../assets/images/brilino.jpg";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
      >
        <div className="about-heroOverlay">
          <div className="about-heroContent">
            <h1>
              Om <span className="about-elegant">BRILINO</span>
            </h1>
            <p>
              BRILINO grundades med en passion för äkta smaker och
              hantverksmässig kvalitet. Vi vill ge våra kunder premiumoliver och
              ostar som är noggrant utvalda och omsorgsfullt tillverkade. Vår
              vision är att kombinera tradition och innovation för att skapa
              produkter som gör varje måltid minnesvärd.
            </p>
            <button
              className="about-primaryBtn"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  const offset = element.offsetTop - 100;
                  window.scrollTo({ top: offset, behavior: "smooth" });
                }
              }}
            >
              Läs mer om vår resa
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="about-services">
        <div className="about-serviceCard">
          <h3>Kvalitet</h3>
          <p>
            Vi väljer bara de finaste råvarorna och ser till att varje produkt
            uppfyller högsta standard.
          </p>
        </div>
        <div className="about-serviceCard">
          <h3>Hantverk</h3>
          <p>
            Från olivlund till ostproduktion – varje steg utförs med omsorg och
            precision.
          </p>
        </div>
        <div className="about-serviceCard">
          <h3>Hållbarhet</h3>
          <p>
            Vi strävar efter att minska vårt klimatavtryck och stötta hållbara
            metoder i alla delar av vår produktion.
          </p>
        </div>
      </section>

      {/* Preview Section */}
      <section className="about-preview">
        <div className="about-previewMockup">
          <Image
            src= {logo}
            alt="LOGO"
            style={{ width: "180px", height: "180px" }}
          />
        </div>
        <div className="about-previewText">
          <h2>Vi är på plats nära dig</h2>
          <p>
            Brilino deltar aktivt på olika mässor och marknader runt om i hela
            Sverige. Vill du veta var du kan träffa oss nästa gång? All
            information om våra evenemang och platser hittar du under Kontakt –
            vi ser fram emot att träffa dig!
          </p>
          <Link href="/contact">
            <button className="about-Btn">Upptäck våra platser</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
