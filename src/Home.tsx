import type { ReactNode } from "react";

/**
 * Bakerwood · Monochrome Field Notes
 * Editorial field-guide page: white ground, charcoal structure, original flower photography in specimen plates.
 */
const products = [
  {
    number: "01",
    name: "Blue Sherbert",
    genetics: "18% 4%",
    description:
      "Our specially selected phenotype of the famous Blue Sherb was chosen for its extraordinary flavor. Out of 100 different variations, this specific cut stood above the rest to deliver a sweet, smooth-tasting, and mellow sativa experience. It is crafted for the relaxed hobbyist in need of unwinding after a long, stressful day",
    strengthLabel: "Strenght:",
    strength: "Strength : 3/5",
    image: "/images/01-bluesherbet.png",
  },
  {
    number: "02",
    name: "Zeze",
    genetics: "14%, 5%",
    description:
      "A Zkittlez-dominant hybrid bred from the Original Z cut and a Goliath male, carefully selected from regular, non-feminized seeds. This exceptional phenotype inherits the very best qualities of its mother, delivering that uniquely exquisite Zkittlez flavor. Thanks to its Goliath father, it also boasts significantly heavier yields and a stunning layer of frost.",
    strengthLabel: "Strenght:",
    strength: "3.5/5",
    image: "/images/02-zeze.png",
  },
  {
    number: "03",
    name: "Peachez",
    genetics: "18%, 6%",
    description:
      "Chosen for its distinct peach aroma, the BAKERWOOD phenotype of Peach Rings x Original Zkittlez boasts an exquisite flavour profile. It retains all the best characteristics of Original Zkittlez, enhanced by an extra layer of rich, ripe peaches that coats the palate with an unmistakably unique flavour.",
    strengthLabel: "Strength:",
    strength: "4/5",
    image: "/images/03-peachez.png",
  },
  {
    number: "04",
    name: "Dekapon",
    genetics: "19%, 8%",
    description:
      "Named after the world’s most desirable satsuma orange, our BAKERWOOD Dekapon clone (Capulator's MAC1 x Tropicana Cookies) is a truly standout phenotype. It combines the heavy, frost-coated trichome production of MAC1 with an intensely sweet orange citrus flavour. The resulting experience is a perfect harmony: a heavy-hitting couch-lock effect balanced by an uplifting citrus overtone that leaves the palate salivating after every single inhale.",
    strengthLabel: "Strength:",
    strength: "4.5/5",
    image: "/images/04-dekapon.png",
  },
] as const;

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="section-label" aria-hidden="true">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Primary navigation">
        <a
          href="index.html"
          className="home-button"
          style={{ borderBottom: "none" }}
          aria-label="Bakerwood home"
        >
          <img src="/images/button.webp" alt="" />
        </a>

        <nav className="site-nav" aria-label="Section navigation">
          <a href="#what-we-do">What We Do</a>
          <a href="#background">Background</a>
          <a href="#products">Products</a>
          <a href="#network">Network</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#top" className="brand-link" style={{ borderBottom: "none" }} aria-label="Bakerwood">
          <img id="main-logo" src="/images/bakerwood-logo.png" alt="Bakerwood" />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <h1 id="hero-title" className="sr-only">Bakerwood</h1>
            <img className="hero-wordmark" src="/images/bakerwood-logo.png" alt="Bakerwood" />
            <div className="hero-content">
              <p>
                We provide end-to-end solutions for the cannabis industry. Whether you are a cultivator looking to optimise your yield or a brand scaling for the open market, we offer comprehensive consulting across the entire product lifecycle.
              </p>
              <a className="text-link" href="#what-we-do">
                What We Do <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="hero-image-wrap reveal reveal-delay-1" aria-hidden="true">
            <img src="/images/bakerwood-hero.jpg" alt="" className="hero-image" />
          </div>
        </section>

        <section id="what-we-do" className="content-section services-section" aria-labelledby="what-we-do-title">
          <SectionLabel number="01">What We Do</SectionLabel>
          <div className="section-grid">
            <div className="section-heading reveal">
              <h2 id="what-we-do-title">What We Do</h2>
              <p>
                We provide end-to-end solutions for the cannabis industry. Whether you are a cultivator looking to optimise your yield or a brand scaling for the open market, we offer comprehensive consulting across the entire product lifecycle.
              </p>
            </div>
            <ul className="service-list" aria-label="Bakerwood services">
              <li className="reveal reveal-delay-1">
                <span className="service-index">01</span>
                <div>
                  <h3>Cultivation &amp; R&amp;D</h3>
                  <p>
                    We source premium strains from the open market, engineer exclusive genetics through dedicated R&amp;D, and work directly with cultivators to improve process efficiency and product quality.
                  </p>
                </div>
              </li>
              <li className="reveal reveal-delay-2">
                <span className="service-index">02</span>
                <div>
                  <h3>Market Strategy &amp; Distribution</h3>
                  <p>
                    We help cultivators confidently bring their products to market. We match products with the ideal pharmacies, build loyal client bases, and provide ongoing product support.
                  </p>
                </div>
              </li>
              <li className="reveal reveal-delay-3">
                <span className="service-index">03</span>
                <div>
                  <h3>Business Operations &amp; Growth</h3>
                  <p>
                    From the ground up, we build companies. We source strategic funding, design operational processes, implement tech solutions, and drive marketing campaigns that elevate your brand.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id="background" className="background-section" aria-labelledby="background-title">
          <div className="background-art" aria-hidden="true">
            <img src="/images/bakerwood-botanical-detail.jpg" alt="" />
          </div>
          <div className="background-copy reveal">
            <SectionLabel number="02">Background</SectionLabel>
            <h2 id="background-title">Background</h2>
            <p>
              We aren't just cannabis enthusiasts; we are experienced professionals. Our team brings together decades of cross-industry expertise, bridging the gap between legacy cultivation and modern corporate strategy. Our foundational experience spans programme management, corporate banking, engineering, and tech, combined seamlessly with hands-on cannabis cultivation, business development, marketing, and sales.
            </p>
          </div>
        </section>

        <section id="products" className="products-section" aria-labelledby="products-title">
          <SectionLabel number="03">Products</SectionLabel>
          <div className="products-heading reveal">
            <h2 id="products-title">Products</h2>
          </div>
          <div className="product-list">
            {products.map((product, index) => (
              <article className={`product-record product-${index + 1} reveal`} key={product.number}>
                <div className="specimen-plate">
                  <img src={product.image} alt={product.name} loading={index > 0 ? "lazy" : "eager"} />
                  <span className="plate-number">{product.number}</span>
                </div>
                <div className="product-details">
                  <p className="product-kicker">{product.number}</p>
                  <h3>{product.name}</h3>
                  <dl>
                    <div>
                      <dt>Genetic breakdown (THC / CBD):</dt>
                      <dd>{product.genetics}</dd>
                    </div>
                    <div>
                      <dt>Desciption:</dt>
                      <dd>{product.description}</dd>
                    </div>
                    <div className="product-strength">
                      <dt>{product.strengthLabel}</dt>
                      <dd>{product.strength}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-section" aria-label="Client and contact information">
          <div id="network" className="closing-panel reveal">
            <SectionLabel number="04">Network</SectionLabel>
            <h2>Network</h2>
            <p>[placeholder]</p>
          </div>
          <div id="contact" className="closing-panel closing-panel-dark reveal reveal-delay-1">
            <span className="contact-mark" aria-hidden="true">
              <img src="/images/button.webp" alt="" />
            </span>
            <SectionLabel number="05">Contact</SectionLabel>
            <h2>Contact</h2>
            <p>[placeholder]</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Bakerwood</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
