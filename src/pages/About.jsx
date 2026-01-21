// src/pages/AboutUs.js
import React from "react";
import "../App.css";

export default function AboutUs() {
  const sections = [
    {
      img: "/images/dev1.jpg",
      title: "Who We Are",
      text: "Next Vision is a leading software company specialized in building modern, high-performing web and mobile solutions. We help businesses grow by creating fast, secure, and scalable digital products."
    },
    {
      img: "/images/dev2.webp",
      title: "Our Mission",
      text: "Our mission is to push boundaries through creativity and technology. We aim to deliver solutions that combine smart design, powerful code, and smooth user experiences to make brands stand out."
    },
    {
      img: "/images/dev3.webp",
      title: "Our Vision",
      text: "We aim to become a global leader in digital innovation — empowering startups and enterprises to shape the future through cutting-edge technologies and inspiring ideas."
    }
  ];

  return (
    <>
      <section className="about-hero">
        <div className="overlay"></div>
        <h1 className="typing" aria-label="About Next Vision">
          About Next Vision
        </h1>
      </section>

      <section className="about-sections">
        {sections.map((sec, i) => (
          <div
            className={`about-block ${i % 2 === 0 ? "normal" : "reverse"}`}
            key={i}
          >
            <div className="about-img">
              <img src={sec.img} alt={sec.title} />
            </div>
            <div className="about-text">
              <h2>{sec.title}</h2>
              <p>{sec.text}</p>
            </div>
          </div>
        ))}
      </section>

      <style>{`
        body {
          background-color: #0d0d0d;
          color: #fff;
          font-family: "Poppins", sans-serif;
        }

        .about-hero {
          height: 60vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background: radial-gradient(circle at top left, #1a1a1a, #000);
          overflow: hidden;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: #181818ff;
          background-size: 200% 200%;
          animation: moveGrad 10s infinite alternate;
        }

        @keyframes moveGrad {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        .typing {
          font-weight: 700;
          color: #56aeff;
          font-size: 2.5rem;
          z-index: 2;
          white-space: nowrap;
          overflow: hidden;
          border-right: 3px solid #56aeff;
          width: 0;
          animation: typing 3s steps(30, end) forwards, blink 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 15ch }
        }

        @keyframes blink {
          50% { border-color: transparent }
        }

        .about-sections {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 100px 20px;
          background-color: #0d0d0d;
        }

        .about-block {
          display: flex;
          align-items: center;
          gap: 70px;
          margin-bottom: 100px;
          max-width: 1200px;
          width: 100%;
        }

        .about-block.reverse {
          flex-direction: row-reverse;
        }

        .about-img img {
          width: 480px;
          height: 350px;
          border-radius: 20px;
          object-fit: cover;
          box-shadow: 0 0 25px rgba(0, 255, 255, 0.15);
        }

        .about-text {
          max-width: 600px;
        }

        .about-text h2 {
          font-size: 1.8rem;
          margin-bottom: 20px;
          font-weight: bold;
          color: #56aeff;
        }

        .about-text p {
          font-size: 1.1rem;
          color: #ccc;
          line-height: 1.8;
        }

        @media (max-width: 992px) {
          .about-block {
            flex-direction: column !important;
            text-align: center;
            gap: 40px;
          }
          .about-img img {
            width: 100%;
            height: auto;
          }
          .typing {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
