import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import sectionImg from "../assets/section.png";
import sectionImg2 from "../assets/section1.jpg";
export default function SectionLuxury() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      leftRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    ).fromTo(
      rightRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.6"
    );
  }, []);

  return (
    <section className="relative py-32 px-6 md:px-20 text-white overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <img
        src={sectionImg}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY (IMPORTANT) */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT */}
        <div ref={leftRef} className="max-w-xl">
          
          <p className="text-xs border border-white/20 px-4 py-1 inline-block rounded-full mb-6">
            STARTED IN 1991
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Where Spaces Inspire, And{" "}
            <span className="text-yellow-400">
              Design Comes Alive
            </span>
          </h2>

          {/* BULLETS */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-300">
            <p>✔ Latest technologies</p>
            <p>✔ High-Quality Designs</p>
            <p>✔ 5 Years Warranty</p>
            <p>✔ Residential Design</p>
          </div>

          {/* TEXT */}
          <p className="mt-6 text-gray-400 text-sm leading-relaxed">
            Whether it's your home, office, or a commercial project, we are
            always dedicated to bringing your vision to life. Our numbers speak
            better than words.
          </p>

          {/* BUTTON */}
          <button className="mt-8 flex items-center gap-3 border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            More About Us
            <span className="bg-yellow-400 text-black w-8 h-8 flex items-center justify-center rounded-full">
              →
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div
          ref={rightRef}
          className="rounded-[24px] overflow-hidden shadow-2xl"
        >
          <img
            src={sectionImg2}
            alt="interior"
            className="w-[520px] h-[520px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}