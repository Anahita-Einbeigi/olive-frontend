// "use client";
// import React from "react";
// import styles from "../styles/ScrollingBanner.module.css";

// export default function ScrollingBanner() {
//   return (
//     <section className={styles.banner}>
//       <div className={styles.marquee}>
//         <span>
//           BRILINO . BRILINO . BRILINO . BRILINO 
//         </span>
//         <span>
//           BRILINO . BRILINO . BRILINO . BRILINO 
//         </span>
//         <span>
//           BRILINO . BRILINO . BRILINO . BRILINO 
//         </span>
//         <span>
//           BRILINO . BRILINO . BRILINO . BRILINO 
//         </span>
//         <span>
//           BRILINO . BRILINO . BRILINO . BRILINO 
//         </span>
//         <span>
//           BRILINO . BRILINO . BRILINO . BRILINO 
//         </span>
//       </div>
//     </section>
//   );
// }

'use client';
import React from "react";

interface ScrollingBannerProps {
  variant?: "light" | "dark";
}

export default function ScrollingBanner({ variant = "light" }: ScrollingBannerProps) {
  const isDark = variant === "dark";

  return (
    <section className={`scrollingBanner-banner ${isDark ? 'scrollingBanner-dark' : 'scrollingBanner-light'}`}>
      <div className="scrollingBanner-marquee">
        <span>BRILINO . BRILINO . BRILINO . BRILINO </span>
        <span>BRILINO . BRILINO . BRILINO . BRILINO </span>
        <span>BRILINO . BRILINO . BRILINO . BRILINO </span>
        <span>BRILINO . BRILINO . BRILINO . BRILINO </span>
        <span>BRILINO . BRILINO . BRILINO . BRILINO </span>
        <span>BRILINO . BRILINO . BRILINO . BRILINO </span>
      </div>
    </section>
  );
}
