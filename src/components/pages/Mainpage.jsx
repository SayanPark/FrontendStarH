import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Relative from "../sections/Relative";
import About from "../sections/About";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

export default function Mainpage() {
  const location = useLocation();

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const refs = { about: aboutRef, services: servicesRef, testimonials: testimonialsRef, contact: contactRef };

  const scrollToSection = (name) => {
    const el = refs[name]?.current;
    if (!el) return;
    const navHeight = document.querySelector("nav")?.offsetHeight || 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("scroll");
    if (section) {
      setTimeout(() => scrollToSection(section), 50);
    }
  }, [location.search]);

  return (
    <>
      <main className="pt-20">
        <Relative />
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Testimonials ref={testimonialsRef} />
        <Contact ref={contactRef} />
      </main>
    </>
  );
}