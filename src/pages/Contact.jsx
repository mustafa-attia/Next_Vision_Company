import React from "react";
import "../App.css";
import emailjs from "emailjs-com";

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_iulq1sd",    // ضع هنا Service ID من EmailJS
      "template_s2fcrb7",   // ضع هنا Template ID من EmailJS
      e.target,
      "SgUDmxOMYqjGGQPqL"   // ضع هنا Public Key من EmailJS
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        alert("Failed to send message. Try again later.");
        console.log(error.text);
      }
    );
  };

  return (
    <section className="contact-page py-5" style={{ background: "#0f0f0f", color: "#fff", minHeight: "100vh" }}>
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold" style={{ color: "#56aeff" }}>Get in Touch</h2>
          <p style={{ color: "#ccc", fontSize: "1.1rem" }}>Have a project in mind? Let's create something amazing together 🚀</p>
        </div>

        <div className="row justify-content-between align-items-start">
          {/* Contact Info */}
          <div className="col-md-5 mb-4">
            <div className="contact-info p-4 rounded-4" style={{ background: "#1a1a1a" }}>
              <h4 style={{ color: "#56aeff", marginBottom: "20px" }}>Contact Details</h4>
              <p><strong>Email:</strong> nextvision517@gmail.com</p>
              <p><strong>Phone:</strong> +20 101 704 8275</p>
              <p><strong>Location:</strong> Online</p>
              <p>We are ready to answer your questions and discuss your next big idea!</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <form onSubmit={sendEmail} className="p-4 rounded-4" style={{ background: "#1a1a1a" }}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" name="user_name" className="form-control bg-dark text-light border-0 rounded-3" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="tel" name="user_phone" className="form-control bg-dark text-light border-0 rounded-3" placeholder="Enter your phone" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Project Type</label>
                <select name="project_type" className="form-select bg-dark text-light border-0 rounded-3" required>
                  <option value="">Select Project Type</option>
                  <option value="website">Website</option>
                  <option value="app">App</option>
                  <option value="AI">AI Automation</option>


                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Project Budget</label>
                <input type="text" name="project_budget" className="form-control bg-dark text-light border-0 rounded-3" placeholder="Enter your project budget" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="project_message" className="form-control bg-dark text-light border-0 rounded-3" rows="5" placeholder="Tell us about your project" required></textarea>
              </div>
              <button type="submit" className="btn w-100 fw-bold py-2 mt-2" style={{ background: "#56aeff" , color: "white"}}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
