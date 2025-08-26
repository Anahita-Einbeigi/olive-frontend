'use client';

interface Product {
  sys: { id: string };
  fields: {
    name: string;
    price: number;
    description: string;
    image: { fields: { file: { url: string } } };
  };
}

interface ProductsProps {
  products: Product[];
  sweetProducts?: Product[];
}

export default function Products({ products, sweetProducts }: ProductsProps) {
  return (
    <div className="products-pageWrapper">
      {/* Hero Section */}
      <section className="products-heroSection d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3 mt-5" style={{ color: "#dac5a7" }}>
                Brilinos produkter
              </h1>
              <p className="opacity-75" style={{ maxWidth: "700px", color: "#dac5a7" }}>
                 På BRILINO hittar du ett noga utvalt sortiment av högkvalitativa produkter som förhöjer varje måltid. Vi erbjuder färska, smakrika oliver, utsökta ostar och akta delikatesser – perfekta för både vardag och fest. Vårt mål är att ge dig en kombination av kvalitet, smak och njutning i varje produkt. Utforska vårt sortiment och låt dina smaklökar resa till nya höjder!              
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="/images/brilino.jpg"
                alt="Hero Image"
                width={400}
                height={400}
                className="products-heroImage rounded-circle shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section container">
        <h2 className="text-center mb-5">Produkter</h2>
        <div className="products-productsGrid">
          {products.map((product) => (
            <div key={product.sys.id} className="products-productCard">
              <div className="card h-100 shadow-sm">
                <div className="p-3 text-center d-flex align-items-center justify-content-center">
                  <img
                    src={`https:${product.fields.image.fields.file.url}`}
                    alt={product.fields.name}
                    style={{ width: "100%", maxWidth: "160px", height: "auto", objectFit: "contain" }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.fields.name}</h5>
                  <p className="text-muted mb-0">{product.fields.price} kr/hg</p>
                  <p className="description">{product.fields.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sweet Products Grid */}
      {sweetProducts && sweetProducts.length > 0 && (
        <section className="products-section container">
          <h2 className="text-center mb-5">OrginalProdukter</h2>
          <div className="products-productsGrid">
            {sweetProducts.map((product) => (
              <div key={product.sys.id} className="products-productCard">
                <div className="card h-100 shadow-sm">
                  <div className="p-3 text-center d-flex align-items-center justify-content-center">
                    <img
                      src={`https:${product.fields.image.fields.file.url}`}
                      alt={product.fields.name}
                      style={{ width: "100%", maxWidth: "160px", height: "auto", objectFit: "contain" }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.fields.name}</h5>
                    <p className="text-muted mb-0">{product.fields.price} kr</p>
                    <p className="description">{product.fields.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="products-section bg-dark text-white">
        <div className="container text-center">
          <h2 className="mb-5">Varför välja oss</h2>
          <div className="row g-4">
            {[
              { img: "/images/order.png", title: "Beställ online", text: "Beställ oliver via mobilen" },
              { img: "/images/shipping.png", title: "Frakt inom Sverige", text: "Vid alla beställningar över 1200 kr" },
              { img: "/images/f.jpg", title: "Mer färskhet", text: "Färska produkter" }
            ].map((feature, idx) => (
              <div key={idx} className="col-12 col-md-4">
                <div className="products-featureBox d-flex flex-column align-items-center">
                  <img src={feature.img} alt={feature.title} width={80} height={80} className="products-roundImage" />
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Features */}
      <section className="products-section container text-center">
        <h2 className="mb-5">Du förtjänar det här</h2>
        <div className="row g-4">
          {[
            { img: "/images/l1.jpg", text: "Smakrika oliver, perfekta för varje måltid." },
            { img: "/images/l2.jpg", text: "Naturligt goda oliver från Medelhavet." },
            { img: "/images/L3.jpg", text: "Fräschhet du kan smaka direkt." }
          ].map((item, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <img src={item.img} alt={`Feature ${idx}`} width={220} height={220} className="products-featureImage mb-3 mx-auto d-block" />
              <p className="px-3">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="products-section container text-center">
        <h2 className="mb-5">Galleri</h2>
        <div className="row g-3 justify-content-center align-items-center">
          {["01.JPG", "02.JPG", "03.JPG", "04.JPG", "L1.JPG", "05.JPG"].map((img, idx) => (
            <div key={idx} className="col-4 col-sm-2">
              <img src={`/images/${img}`} alt={`Partner ${idx + 1}`} width={200} height={180} className="products-partnerLogo mx-auto d-block" style={{ width: "100%", height: "auto" }} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
