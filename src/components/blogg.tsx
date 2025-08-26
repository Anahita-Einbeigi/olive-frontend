"use client";
import ScrollingBanner from "../components/ScrollingBanner";


export default function Blogg() {
  // Lista med LinkedIn embed-länkar
  const linkedInPosts: string[] = [
    // "https://www.linkedin.com/embed/feed/update/urn:li:share:7337797078430932992?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7365779930086912001?collapsed=1" ,
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7365784343232798722?collapsed=1"

  ];

  return (
    <div
        className="container py-5"
        style={{
          backgroundColor: "#343230",
          color: "#dac5a7",
          minHeight: "100vh",
          minWidth: "100vw",
          padding: "4rem",
          overflowX: "hidden",
        }}
      >

      <h1 className="text-center mb-5" style={{ fontWeight: "700", letterSpacing: "1px" }}>
        Vår Blogg
      </h1>
      <p className="text-center mb-5" style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
        På vår blogg delar vi med oss av spännande ögonblick, resor och upplevelser från de platser vi besöker och evenemang vi deltar i. Här hittar du uppdateringar, inspiration och glimtar bakom kulisserna direkt från vår resa. Följ med och upptäck alla de stunder som gör vår resa unik!
      </p>

      {linkedInPosts.length === 0 ? (
        <p className="text-center" style={{ color: "#dac5a7", opacity: 0.7 }}>
          Vi har inga inlägg just nu.
        </p>
      ) : (
        <div className="row g-4">
          {linkedInPosts.map((url, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div
                className="card h-100 shadow-lg"
                style={{
                  border: "1px solid #dac5a7",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <div className="card-body text-center p-0">
                  <iframe
                    src={url}
                    allowFullScreen
                    title={`LinkedIn Post ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "400px",
                      border: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: "3rem" }}>
        <ScrollingBanner variant="dark" />
      </div>

    </div>
  );
}
