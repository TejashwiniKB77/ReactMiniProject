import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Admission from "./Pages/Admission";
import Courses from "./Pages/Courses";
import Events from "./Pages/Events";
import Contact from "./Pages/Contact";
import Career from "./Pages/Career";
import Counseling from "./Pages/Counseling";

export default function App() {
  useEffect(() => {
    if (!navigator.onLine) {
      alert("You are offline. Some features may not work.");
    }
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/counseling" element={<Counseling />} />
      </Routes>
      <Footer />
    </>
  );
}
