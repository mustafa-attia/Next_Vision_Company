import React, { useState, useEffect } from "react";
import "../App.css";
import emailjs from "emailjs-com";

const Home = () => {
  const [typingText, setTypingText] = useState("");
  const textToType = "We Turn Ideas Into Digital Reality 💡";
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Typing Effect
  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTypingText(textToType.substring(0, index + 1));
      index++;
      if (index === textToType.length) clearInterval(typing);
    }, 100);
    return () => clearInterval(typing);
  }, []);

  // Professional Progress Counter
  useEffect(() => {
    if (progress < 100) {
      const timeout = setTimeout(() => {
        const increment = Math.floor(Math.random() * 5) + 1;
        setProgress(prev => Math.min(prev + increment, 100));
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setLoading(false), 800);
    }
  }, [progress]);

  const cards = [
    { icon: "💻", title: "Web Development", desc: "Modern, responsive, and high-performance websites that empower your business." },
    { icon: "📱", title: "App Development", desc: "Smooth, scalable, and elegant mobile experiences for iOS & Android." },
    { icon: "⚙️", title: "ERP Systems", desc: "Powerful ERP systems that organize your operations and boost productivity." },
    { icon: "📊", title: "CRM Systems", desc: "Smart CRM tools to manage clients, track sales, and enhance engagement." },
    { icon: "🛒", title: "E-commerce Solutions", desc: "We develop robust online stores with seamless shopping experiences." },
    { icon: "🤖", title: "AI Automation", desc: "Intelligent automation solutions using AI to optimize workflows and enhance efficiency." },
  ];

  const projects = [
    { title: "CRM System UI", desc: "Complete CRM interface to manage clients and sales.", link: "https://dashboard-weld-six.vercel.app/" },
    { title: "Business Services Company", desc: "Official website for Basma Business Solutions.", link: "https://alaamal-platform-eight.vercel.app/" },
    { title: "Zein Development", desc: "Smart solutions for sustainable future and growth.", link: "https://zein-store.vercel.app/" },
    { title: "Quiz Quest", desc: "Transform learning with interactive quiz experiences.", link: "https://quiz-quest-phi.vercel.app/" },
    { title: "Secure Scan", desc: "Advanced cybersecurity platform for business data.", link: "https://secure-scan-jade.vercel.app/" },
    { title: "SasaCart", desc: "Modern E-commerce UI for seamless shopping.", link: "https://sasacart.netlify.app/" },
    { title: "PTS Architecture", desc: "Architecture & Interior Design creative portfolio.", link: "https://pts-company.netlify.app/" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_iulq1sd",
      "template_s2fcrb7",
      e.target,
      "SgUDmxOMYqjGGQPqL"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        alert("Failed to send message.");
        console.error(error.text);
      }
    );
  };

  return (
    <>
      {/* 1. Creative Digital Loader */}
      {loading && (
        <div className={`creative-loader ${progress === 100 ? 'exit-active' : ''}`} role="alert" aria-busy="true">
          <div className="loader-bg-split-left"></div>
          <div className="loader-bg-split-right"></div>
          <div className="loader-main-content">
            <div className="glitch-wrapper">
              <h1 className="loader-logo-tech" data-text="NEXT VISION">NEXT VISION</h1>
            </div>
            <div className="loading-stats">
              <div className="stat-item">
                <span className="stat-label">SYSTEM:</span>
                <span className="stat-value">INITIALIZING...</span>
              </div>
              <div className="progress-number-wrapper">
                <span className="progress-number">{progress}</span>
                <span className="percent-sign">%</span>
              </div>
            </div>
            <div className="visual-bar">
              <div className="bar-fill" style={{ width: `${progress}%` }}></div>
              <div className="scanner-line"></div>
            </div>
            <div className="tech-footer">
                <div className="dot-flashing"></div>
                <span>ESTABLISHING SECURE CONNECTION</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Main Website Content */}
      <main className={`main-site-content ${loading ? 'content-hidden' : 'content-visible'}`}>
        
        {/* Hero Section */}
        <section className="hero-section d-flex align-items-center justify-content-center text-center">
          <video 
            autoPlay loop muted playsInline 
            className="hero-video"
            poster="/images/hero-poster.jpg"
            width="1920" height="1080"
          >
            <source src="/home_bg2.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <h1 className="display-3 fw-bold text-light mb-3 animate-fade-in">
              Welcome to <span style={{ color: "#56aeff" }}>Next Vision</span>
            </h1>
            <p className="lead fw-bold mb-4 animate-slide-up" style={{ color: "#e0e0e0" }}>
              {typingText}
            </p>
            <a href="#contact" className="btn px-4 py-2 fw-semibold hero-btn-main" aria-label="Scroll to contact form">Contact Us</a>
          </div>
        </section>

        {/* Who We Are */}
        <section className="who-we-are py-5" style={{ background: "#1e1e1e" }}>
          <div className="container d-flex flex-wrap justify-content-between align-items-center">
            <div className="about-text-box" style={{ flex: 1, minWidth: "300px", maxWidth: "500px" }}>
              <h2 className="aboutTitle mb-3" style={{ color: "#56aeff" }}>WHO WE ARE ?</h2>
              <p className="aboutHero" style={{ color: "#fff", lineHeight: "1.7" }}>
                Next Vision is a team of creative minds passionate about building modern digital experiences. We focus on innovation, design, and delivering exceptional results.
              </p>
              <a href="/about" className="discover-btn mt-3" aria-label="Learn more about us">Discover us &gt;</a>
            </div>
            <div className="about-img-box" style={{ flex: 1, minWidth: "300px", maxWidth: "500px" }}>
              <img 
                src="/images/who.webp" 
                alt="Our professional team working on a project" 
                className="img-fluid who-img rounded-4" 
                width="500" height="350"
                loading="lazy" 
              />
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="what-we-do text-center py-5 position-relative">
          <div className="animated-bg"></div>
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <h2 className="aboutTitle mb-3" style={{ color: "#56aeff" }}>WHAT WE DO</h2>
            <h5 className="mb-5" style={{ color: "#b6b6b6" }}>Empowering your business with smart solutions</h5>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              {cards.map((card, i) => (
                <article key={i} className="card-modern">
                  <div className="icon" aria-hidden="true">{card.icon}</div>
                  <h3 className="h4 mt-2">{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="portfolio-section text-center py-5">
          <div className="container">
            <h2 className="aboutTitle mb-4" style={{ color: "#56aeff" }}>OUR PROJECTS</h2>
            <div className="d-flex flex-wrap justify-content-center gap-5">
              {projects.map((p, i) => (
                <a 
                  key={i} href={p.link} 
                  target="_blank" rel="noopener noreferrer" 
                  className="card-pro text-decoration-none"
                  aria-label={`View project: ${p.title}`}
                >
                  <div className="card-glow"></div>
                  <div className="card-content">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                    <span className="visit">Visit Project →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form - High Accessibility Version */}
        <section id="contact" className="contact-page py-5" style={{ background: "#0f0f0f", color: "#fff" }}>
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold" style={{ color: "#56aeff" }}>Get in Touch</h2>
              <p style={{ color: "#ccc" }}>Have a project in mind? Let's create something amazing together 🚀</p>
            </div>
            <div className="row justify-content-between">
              <div className="col-md-5 mb-4">
                <div className="contact-info p-4 rounded-4" style={{ background: "#1a1a1a" }}>
                  <h4 style={{ color: "#56aeff" }}>Contact Details</h4>
                  <p><strong>Email:</strong> nextvision517@gmail.com</p>
                  <p><strong>Phone:</strong> +20 101 704 8275</p>
                  <p><strong>Location:</strong> Online / Egypt</p>
                </div>
              </div>
              <div className="col-md-6">
                <form onSubmit={sendEmail} className="p-4 rounded-4" style={{ background: "#1a1a1a" }}>
                  <div className="mb-3">
                    <label htmlFor="user_name" className="form-label">Full Name</label>
                    <input type="text" id="user_name" name="user_name" className="form-control bg-dark text-light border-0" placeholder="e.g. John Doe" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="user_phone" className="form-label">Phone Number</label>
                    <input type="tel" id="user_phone" name="user_phone" className="form-control bg-dark text-light border-0" placeholder="+20 123 456 7890" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="project_type" className="form-label">Service Required</label>
                    <select id="project_type" name="project_type" className="form-select bg-dark text-light border-0" required>
                      <option value="">Select a service</option>
                      <option value="website">Web Development</option>
                      <option value="app">Mobile App</option>
                      <option value="AI">AI Automation</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="project_budget" className="form-label">Budget Range</label>
                    <input type="text" id="project_budget" name="project_budget" className="form-control bg-dark text-light border-0" placeholder="e.g. $1000 - $3000" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="project_message" className="form-label">Project Details</label>
                    <textarea id="project_message" name="project_message" className="form-control bg-dark text-light border-0" rows="4" placeholder="Describe your project goals" required></textarea>
                  </div>
                  <button type="submit" className="btn w-100 fw-bold py-2 hero-btn-main" style={{color: '#000'}}>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;