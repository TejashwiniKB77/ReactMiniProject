import "../styles/style.css";

export default function Counseling() {
  return (
    <main className="container">
      <h2>Request Counseling</h2>

      <form className="form-card">
        <label>Name<input required /></label>
        <label>Class / Stream<input /></label>
        <label>Date<input type="date" required /></label>
        <label>Phone<input required /></label>
        <label>Notes<textarea /></label>
        <button className="btn">Request Session</button>
      </form>
    </main>
  );
}
