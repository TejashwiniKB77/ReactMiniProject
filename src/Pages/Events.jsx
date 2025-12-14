import { useEffect, useState } from "react";
import "../styles/events.css";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setEvents([
        { title: "Annual Sports Day", date: "20 Feb 2025" },
        { title: "Science Exhibition", date: "05 Mar 2025" },
        { title: "Career Fair", date: "10 Apr 2025" },
      ]);
    }, 1000);
  }, []);

  return (
    <main className="container">
      <h2>Upcoming Events</h2>
      <section className="events-list">
        {events.map((e, i) => (
          <article className="event" key={i}>
            <h3>{e.title}</h3>
            <p>{e.date}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
