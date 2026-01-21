import React, { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    { title: "CRM System UI", desc: "Complete CRM interface to manage clients and sales.", link: "https://dashboard-weld-six.vercel.app/" },
    { title: "Business Services Company", desc: "Official website for Basma Business Solutions.", link: "https://alaamal-platform-eight.vercel.app/" },
    { title: "Zein Development", desc: "Smart solutions for sustainable future and growth.", link: "https://zein-store.vercel.app/" },
    { title: "Quiz Quest", desc: "Transform learning with interactive quiz experiences.", link: "https://quiz-quest-phi.vercel.app/" },
    { title: "Secure Scan", desc: "Advanced cybersecurity platform for business data.", link: "https://secure-scan-jade.vercel.app/" },
    { title: "SasaCart", desc: "Modern E-commerce UI for seamless shopping.", link: "https://sasacart.netlify.app/" },
    { title: "PTS Architecture", desc: "Architecture & Interior Design creative portfolio.", link: "https://pts-company.netlify.app/" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="portfolio-hero d-flex flex-column align-items-center justify-content-center text-center"
        style={{
          minHeight: "60vh",
          background: "radial-gradient(circle at top, #151515, #000)",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="hero-glow"></div>
        <h1 className="fw-bold display-5 mb-3">Our Portfolio</h1>
        <p className="lead" style={{ color: "#bcbcbc", maxWidth: "650px" }}>
          Explore our creative digital projects that blend design, innovation, and technology.
        </p>
      </section>

      {/* Portfolio Section */}
      <section
        className="portfolio-section py-5 position-relative"
        style={{ background: "#0b0b0b", color: "#fff" }}
      >
        <div className="container text-center">
          <h2
            className="fw-bold mb-5"
            style={{ color: "#56aeff", letterSpacing: "2px" }}
          >
            FEATURED PROJECTS
          </h2>

          <div className="row justify-content-center g-4">
            {projects.map((p, i) => (
              <div
                key={i}
                className="col-md-5 col-lg-4"
                data-aos="zoom-in-up"
                data-aos-delay={i * 100}
              >
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-card text-decoration-none d-block"
                >
                  <div className="card-overlay"></div>
                  <div className="card-body text-start">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                    <span className="visit">Visit Project →</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
