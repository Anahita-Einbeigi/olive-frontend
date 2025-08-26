// 'use client';

// import { useState, useEffect } from 'react';
// import { fetchEntries } from '../lib/contentfulClient'; 
// import Image from 'next/image';
// import styles from '../styles/contact.module.css';
// import ScrollingBanner from "../components/ScrollingBanner";


// type Place = {
//   id: string;
//   title: string;
//   address: string;
//   date: string;
//   startdate: string;
//   link: string;
//   openingHours: string;
// };

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [status, setStatus] = useState<string | null>(null);
//   const [places, setPlaces] = useState<Place[]>([]);

//   useEffect(() => {
//     const loadPlaces = async () => {
//       const data = await fetchEntries(); 
//       setPlaces(data);
//     };
//     loadPlaces();
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // const res = await fetch('http://localhost:5000/api/contact', {
//       const res = await fetch('https://olive-backend-5.onrender.com/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       let data;
//       try {
//         data = await res.json();
//       } catch {
//         data = { message: 'Något gick fel, försök igen.' };
//       }

//       if (res.ok) {
//         setStatus(data.message || 'Tack för ditt meddelande!');
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         setStatus(data.message || 'Något gick fel, försök igen.');
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus('Något gick fel, försök igen.');
//     }
//   };

//   return (
//     <div className={styles['contact-wrapper']}>
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
//             <div className={styles['image-wrapper']}>
//               <Image
//                 src="/images/logo.png"
//                 alt="Contact Image"
//                 width={400}
//                 height={400}
//                 className="rounded-circle shadow-lg object-cover"
//                 unoptimized 
//               />
//             </div>
//           </div>

//           <div className="col-12 col-md-6">
//             <h2 className={styles['contact-title']}>Kontakta oss</h2>
//             <form onSubmit={handleSubmit} className={`p-4 ${styles['form-card']}`}>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Namn"
//                   className={`form-control ${styles['form-input']}`}
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="E-post"
//                   className={`form-control ${styles['form-input']}`}
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Meddelande"
//                   className={`form-control ${styles['form-input']}`}
//                   rows={5}
//                   required
//                 />
//               </div>
//               <button type="submit" className={`btn ${styles['send-btn']} w-100`}>
//                 Skicka
//               </button>
//               {status && <p className="mt-3">{status}</p>}
//             </form>
//           </div>
//         </div>

//         <div style={{ marginTop: "3rem" }}>
//           <ScrollingBanner variant="dark" />
//         </div>


//         <section className="container text-center my-5">
//           <h2 className={styles.contactTitle}>Vi finns på dessa platser</h2>
//           {places.length === 0 && <p>Inga platser uppdaterade ännu.</p>}
//           <div className="row justify-content-center g-4">
//             {places.map((place) => (
//               <div key={place.id} className="col-12 col-md-8 col-lg-6">
//                 <div className="mb-4 mt-5">
//                   <h4 className={styles.placeTitle}>{place.title}</h4>
//                   <p className={styles.placeInfo}>{place.address}</p>
//                   <p className={styles.placeInfo}>{place.startdate}  till  {place.date}</p>
//                   <p className={styles.placeInfo}>{place.openingHours}</p>
//                   <a href={place.link} target="_blank" rel="noopener noreferrer" className={styles.contactButton}
// >
//                     {place.link} 
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>


//       </div>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { fetchEntries } from '../lib/contentfulClient'; 
import ScrollingBanner from "../components/ScrollingBanner";

type Place = {
  id: string;
  title: string;
  address: string;
  date: string;
  startdate: string;
  link: string;
  openingHours: string;
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const loadPlaces = async () => {
      const data = await fetchEntries(); 
      setPlaces(data);
    };
    loadPlaces();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://olive-backend-5.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      let data;
      try {
        data = await res.json();
      } catch {
        data = { message: 'Något gick fel, försök igen.' };
      }
      if (res.ok) {
        setStatus(data.message || 'Tack för ditt meddelande!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.message || 'Något gick fel, försök igen.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Något gick fel, försök igen.');
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <div className="contact-image-wrapper">
              <img
                src="/images/logo.png"
                alt="Contact Image"
                className="img-fluid rounded-circle shadow-lg object-cover"
                style={{ width: '400px', height: 'auto', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <h2 className="contact-title">Kontakta oss</h2>
            <form onSubmit={handleSubmit} className="p-4 contact-form-card">
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Namn"
                  className="form-control contact-form-input"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-post"
                  className="form-control contact-form-input"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Meddelande"
                  className="form-control contact-form-input"
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="btn contact-send-btn w-100">
                Skicka
              </button>
              {status && <p className="mt-3">{status}</p>}
            </form>
          </div>
        </div>

        <div style={{ marginTop: "3rem" }}>
          <ScrollingBanner variant="dark" />
        </div>

        <section className="container text-center my-5">
          <h2 className="contact-contactTitle">Vi finns på dessa platser</h2>
          {places.length === 0 && <p>Inga platser uppdaterade ännu.</p>}
          <div className="row justify-content-center g-4">
            {places.map((place) => (
              <div key={place.id} className="col-12 col-md-8 col-lg-6">
                <div className="mb-4 mt-5 contact-place-card">
                  <h4 className="contact-placeTitle">{place.title}</h4>
                  <p className="contact-placeInfo">{place.address}</p>
                  <p className="contact-placeInfo">{place.startdate}  till  {place.date}</p>
                  <p className="contact-placeInfo">{place.openingHours}</p>
                  <a href={place.link} target="_blank" rel="noopener noreferrer" className="contact-button">
                    {place.link} 
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
