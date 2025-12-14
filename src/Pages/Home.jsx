import "../styles/style.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <img src="/clg.png" alt="Campus Photo" />
        <div className="hero-text">
          <h2>Welcome to Infomatics National PU College</h2>
          <p>Providing value-based education, modern facilities, and a bright future.</p>
          <a href="/admission" className="btn">Apply Now</a>
        </div>
      </section>

      {/* Announcement Bar (Marquee Replacement) */}
      <div className="announcement-bar">
        <div className="marquee">
          <span>
            TALENT SEARCH EXAMINATION (ITSE) Will Be Conduct On 1/1/2026
          </span>
        </div>
      </div>

      <section className="features">
        <div className="card">
          <h3>Digital Classrooms</h3>
          <p>Fully equipped smart classrooms with advanced learning tools.</p>
        </div>

        <div className="card">
          <h3>Experienced Faculty</h3>
          <p>Highly qualified teachers dedicated to student development.</p>
        </div>

        <div className="card">
          <h3>Sports & Activities</h3>
          <p>Focus on physical fitness and extracurricular growth.</p>
        </div>
      </section>
    </>
  );
}
