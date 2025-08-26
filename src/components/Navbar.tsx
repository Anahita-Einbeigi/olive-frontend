
// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { useState, useRef, useEffect } from 'react';
// import styles from "../styles/navbar.module.css";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);

//   // Klick utanför stänger menyn
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setOpen(false);
//       }
//     };

//     if (open) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [open]);

//   return (
//     <nav className={`navbar navbar-expand-md navbar-light shadow-sm fixed-top ${styles['navbar-custom']}`}>
//   <div className="container">
//     <Link href="/" className="navbar-brand">
//       <Image src="/images/bl2.jpg" alt="BRILINO Logo" className={styles.navImage} width={120} height={60} unoptimized />
//     </Link>

//     <button
//       className="navbar-toggler"
//       type="button"
//       onClick={() => setOpen(!open)}
//       aria-controls="navbarNav"
//       aria-expanded={open ? 'true' : 'false'}
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>

//     <div
//       ref={menuRef}
//       className={`collapse navbar-collapse ${open ? 'show' : ''}`}
//       id="navbarNav"
//     >
//       <ul className="navbar-nav ms-auto">
//         <li className="nav-item">
//           <Link href="/" className="nav-link" onClick={() => setOpen(false)}>Hem</Link>
//         </li>
//         <li className="nav-item">
//           <Link href="/about" className="nav-link" onClick={() => setOpen(false)}>Om oss</Link>
//         </li>
//         <li className="nav-item">
//           <Link href="/products" className="nav-link" onClick={() => setOpen(false)}>Produkter</Link>
//         </li>
//         <li className="nav-item">
//           <Link href="/contact" className="nav-link" onClick={() => setOpen(false)}>Kontakt</Link>
//         </li>
//         <li className="nav-item">
//           <Link href="/blog" className="nav-link" onClick={() => setOpen(false)}>Blogg</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

//   );
// }

//------------------------------------------------------------------- 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { useState, useRef, useEffect } from 'react';
// import styles from '../styles/navbar.module.css';

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);

//   // Stäng menyn om man klickar utanför
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav className={`navbar navbar-expand-md shadow-sm fixed-top ${styles.navbarCustom}`}>
//       <div className="container">
//         <Link href="/" className="navbar-brand">
//           <Image
//             src="/images/bl2.jpg"
//             alt="BRILINO Logo"
//             width={120}
//             height={60}
//             unoptimized
//             className={styles.navImage}
//           />
//         </Link>

//         <button
//           className={`navbar-toggler ${styles.toggler}`}
//           type="button"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           ref={menuRef}
//           className={`collapse navbar-collapse ${open ? 'show' : ''} ${styles.navCollapse}`}
//         >
//           <ul className={`navbar-nav ms-auto ${styles.navList}`}>
//             <li className="nav-item">
//               <Link href="/" className="text-dark text-decoration-none" onClick={() => setOpen(false)}>
//                 Hem
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/about" className="text-dark text-decoration-none" onClick={() => setOpen(false)}>
//                 Om oss
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/products" className="text-dark text-decoration-none" onClick={() => setOpen(false)}>
//                 Produkter
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/contact" className="text-dark text-decoration-none" onClick={() => setOpen(false)}>
//                 Kontakt
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/blog" className="nav-link" onClick={() => setOpen(false)}>
//                 Blogg
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }




'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import logo6 from '../assets/images/bl2.jpg';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar-navbarCustom navbar navbar-expand-md shadow-sm fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image
            src={logo6}
            alt="BRILINO Logo"
            width={120}
            height={60}
            className="navbar-navImage"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          ref={menuRef}
          className={`navbar-navLinks ${open ? 'show' : ''}`}
        >
          <Link href="/" className="navbar-navLink" onClick={() => setOpen(false)}>Hem</Link>
          <Link href="/about" className="navbar-navLink" onClick={() => setOpen(false)}>Om oss</Link>
          <Link href="/products" className="navbar-navLink" onClick={() => setOpen(false)}>Produkter</Link>
          <Link href="/contact" className="navbar-navLink" onClick={() => setOpen(false)}>Kontakt</Link>
          <Link href="/blog" className="navbar-navLink" onClick={() => setOpen(false)}>Blogg</Link>
        </div>
      </div>
    </nav>
  );
}
