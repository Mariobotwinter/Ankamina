import React from "react";
import "../styles/Services.css";

export default function Services() {
  const items = [
    {
      title: "Construcție cu gel",
      desc: "Structură corectă, apex echilibrat și rezistență reală. Ideal pentru lungimi medii sau extreme."
    },
    {
      title: "Întreținere",
      desc: "Refacere proporții și aspect fresh fără a compromite sănătatea unghiei."
    },
    {
      title: "Tips reutilizabili",
      desc: "Aplicare rapidă, confort sporit și rezultate curate, controlate."
    },
    {
      title: "Design personalizat",
      desc: "French modern, babyboomer, minimal sau artistic – adaptat stilului tău."
    }
  ];

  return (
    <section className="services" id="servicii">
      <div className="container">

        <div className="services-head">
          <span className="services-label">SERVICII</span>
          <h2 className="services-title">Eleganță în fiecare detaliu</h2>
          <p className="services-sub">
            Tehnică curată, produse premium și atenție reală la proporții.
          </p>
        </div>

        <div className="services-grid">
          {items.map((s, idx) => (
            <div className="service-card" key={idx}>
              <div className="service-number">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <h3 className="service-title">{s.title}</h3>

              <p className="service-desc">{s.desc}</p>

              <div className="service-hover-line" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}