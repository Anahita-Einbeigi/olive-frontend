// 'use client';

// import Link from 'next/link';
// import styles from '../styles/footer.module.css';
// import { FaYoutube, FaLinkedin,  FaInstagram } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className={`${styles.footerContainer} bg-light text-dark pt-5 pb-3 border-top`}>
//       <div className="container">
//         <div className="row">
//           {/* Sociala länkar */}
//           <div className="col-12 col-md-4 mb-4 mb-md-0">
//             <h5>Följ oss</h5>
//             <ul className="list-unstyled">
//               <li className="mb-2 d-flex align-items-center gap-2">
//                 <FaYoutube />
//                 <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
//                   YouTube
//                 </a>
//               </li>
//               <li className="mb-2 d-flex align-items-center gap-2">
//                 <FaLinkedin />
//                 <a href="http://linkedin.com/in/homa-ghasemi-14990220b" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
//                   LinkedIn
//                 </a>
//               </li>
//               <li className="mb-2 d-flex align-items-center gap-2">
//                 <FaInstagram />
//                 <a
//                   href="https://www.instagram.com/olivernrilino?igsh=a2U0ZHFwYm9ra2Nq"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-dark text-decoration-none"
//                 >
//                   Instagram
//                 </a>
//               </li>

//             </ul>
//           </div>

//           {/* Kontakt info */}
//           <div className="col-12 col-md-4 mb-4 mb-md-0">
//             <h5>Kontakt</h5>
//             <p className="mb-1">Tel: <a href="tel:+46739501730" className="text-dark text-decoration-none">+46 73 950 1730</a></p>
//             <p className="mb-1">Email: <a href="mailto:info@brilino.se" className="text-dark text-decoration-none">info@brilino.se</a></p>
//             {/* <p className="mb-0">Adress: Storgatan 1, 111 22 Stockholm</p> */}
//           </div>

//           {/* Snabblänkar */}
//           <div className="col-12 col-md-4">
//             <h5>Snabblänkar</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <Link href="/" className="text-dark text-decoration-none">Hem</Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-dark text-decoration-none">Om oss</Link>
//               </li>
//               <li>
//                 <Link href="/products" className="text-dark text-decoration-none">Produkter</Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-dark text-decoration-none">Kontakt</Link>
//               </li>
//               {/* <li>
//                 <Link href="/faq" className="text-dark text-decoration-none">FAQ</Link>
//               </li> */}
//             </ul>
//           </div>
//         </div>

//         <div className="text-center mt-4">
//           <p className="mb-0">© 2025 BRILINO</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

'use client';

import Link from 'next/link';
import { FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-footerContainer bg-light text-dark pt-5 pb-3 border-top">
      <div className="container">
        <div className="row">
          {/* Sociala länkar */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5>Följ oss</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center gap-2">
                <FaYoutube />
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                  YouTube
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <FaLinkedin />
                <a href="http://linkedin.com/in/homa-ghasemi-14990220b" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                  LinkedIn
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <FaInstagram />
                <a href="https://www.instagram.com/olivernrilino?igsh=a2U0ZHFwYm9ra2Nq" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt info */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5>Kontakt</h5>
            <p className="mb-1">Tel: <a href="tel:+46739501730" className="text-dark text-decoration-none">+46 73 950 1730</a></p>
            <p className="mb-1">Email: <a href="mailto:info@brilino.se" className="text-dark text-decoration-none">info@brilino.se</a></p>
          </div>

          {/* Snabblänkar */}
          <div className="col-12 col-md-4">
            <h5>Snabblänkar</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-dark text-decoration-none">Hem</Link>
              </li>
              <li>
                <Link href="/about" className="text-dark text-decoration-none">Om oss</Link>
              </li>
              <li>
                <Link href="/products" className="text-dark text-decoration-none">Produkter</Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark text-decoration-none">Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">© 2025 BRILINO</p>
        </div>
      </div>
    </footer>
  );
}
