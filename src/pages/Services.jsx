import React, { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      desc: "Modern, responsive, and high-performance websites that empower your business.",
    },
    {
      icon: "📱",
      title: "App Development",
      desc: "Smooth, scalable, and elegant mobile experiences for iOS & Android.",
    },
    {
      icon: "⚙️",
      title: "ERP Systems",
      desc: "Powerful ERP systems that organize your operations and boost productivity.",
    },
    {
      icon: "📊",
      title: "CRM Systems",
      desc: "Smart CRM tools to manage clients, track sales, and enhance engagement.",
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      desc: "We develop robust online stores with seamless shopping experiences.",
    },
    { 
      icon: "🤖", 
      title: "AI Automation", 
      desc: "Intelligent automation solutions using AI to optimize workflows and enhance efficiency." 
    }, 

  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="services-hero d-flex flex-column align-items-center justify-content-center text-center"
        style={{
          minHeight: "60vh",
          background: "radial-gradient(circle at top, #151515, #000)",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="hero-glow"></div>
        <h1 className="fw-bold display-5 mb-3">Our Services</h1>
        <p
          className="lead"
          style={{ color: "#bcbcbc", maxWidth: "650px", lineHeight: "1.8" }}
        >
          We craft digital solutions that combine technology, design, and strategy
          — building your brand’s success story.
        </p>
      </section>

      {/* Services Cards */}
      <section
        className="services-section py-5"
        style={{ background: "#0a0a0a", color: "#fff" }}
      >
        <div className="container">
          <h2
            className="text-center fw-bold mb-5"
            style={{ color: "#56aeff", letterSpacing: "2px" }}
          >
            WHAT WE DO
          </h2>

          <div className="row justify-content-center g-4">
            {services.map((srv, index) => (
              <div
                key={index}
                className="col-md-5 col-lg-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="service-card h-100 text-center">
                  <div className="icon-box mb-3">{srv.icon}</div>
                  <h4 className="fw-bold mb-2">{srv.title}</h4>
                  <p>{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
