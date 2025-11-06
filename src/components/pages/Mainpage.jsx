import React, { useEffect } from "react";
import Relative from "../sections/Relative";
import About from "../sections/About";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

export default function Mainpage() {
  useEffect(() => {
    // برای اسکریپت‌های خاص (مثل انیمیشن‌ها یا sliderها)
  }, []);

  return (
    <main className="pt-20">
      <div className="overflow-x-hidden">
        <Relative/>
        <About/>
        <Services/>
        <Testimonials/>
        <Contact/>
      </div>
    </main>
  );
}