import "../styles/style2.css";

export default function Admission() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const enquiry = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      stream: form.stream.value,
      message: form.message.value,
    };

    if (!enquiry.name || !enquiry.email || !enquiry.phone || !enquiry.stream) {
      alert("Please fill all required fields");
      return;
    }

    if (!window.confirm("Do you want to submit the enquiry?")) return;

    localStorage.setItem("admissionEnquiry", JSON.stringify(enquiry));
    alert("Enquiry submitted successfully");
    form.reset();
  };

  return (
    <main className="container">
      {/* ADMISSION INTRO */}
      <section className="admission-intro">
        <h2 className="admission-title">Admission Process 2025–26</h2>

        <ol>
          <li>Check eligibility — minimum marks as per stream.</li>
          <li>Download & fill application form.</li>
          <li>Submit documents: SSLC marksheet, TC, Aadhaar, Photo.</li>
          <li>Attend counselling & seat allocation.</li>
        </ol>

        <a href="#apply" className="apply-btn">
          Apply Now
        </a>
      </section>

      {/* IMAGE GALLERY */}
      <section className="image-gallery">
        <h3>Campus Life & Facilities</h3>

        <div className="image-grid">
          <div className="img-card"><img src="/ad1.jpeg" alt="Campus" /></div>
          <div className="img-card"><img src="/ad2.webp" alt="Library" /></div>
          <div className="img-card"><img src="/ad4.jpeg" alt="Sports" /></div>
          <div className="img-card"><img src="/ad5.jpeg" alt="Lab" /></div>
          <div className="img-card"><img src="/clg.png" alt="Classroom" /></div>
          <div className="img-card"><img src="/fig6.webp" alt="Campus" /></div>
          <div className="img-card"><img src="/fig7.avif" alt="Campus" /></div>
          <div className="img-card"><img src="/fig9.jpeg" alt="Campus" /></div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section id="apply" className="form-section">
        <h3>Quick Enquiry / Pre-Registration</h3>

        <form className="form-card" onSubmit={handleSubmit}>
          <label>
            Student Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <label>
            Phone
            <input type="tel" name="phone" pattern="[0-9]{10}" required />
          </label>

          <label>
            Preferred Stream
            <select name="stream" required>
              <option value="">--Choose--</option>
              <option>PCMB</option>
              <option>PCMC</option>
              <option>Commerce</option>
              <option>Arts</option>
            </select>
          </label>

          <label>
            Message
            <textarea name="message" rows="3"></textarea>
          </label>

          <div className="form-actions">
            <button type="submit" className="btn">Submit</button>
            <button type="reset" className="btn ghost">Reset</button>
          </div>
        </form>
      </section>
    </main>
  );
}
