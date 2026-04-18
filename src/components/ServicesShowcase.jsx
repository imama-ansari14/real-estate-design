import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic1.png";
import pic5 from "../assets/pic5.jpg";

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef(null);

  const services = [
    { title: "Residential Interior Design", img: pic1 },
    { title: "Commercial Interior Design", img: pic2 },
    { title: "Interior Design Consultation", img: pic3 },
    { title: "Outdoor & Landscape Design", img: pic4 },
    { title: "Renovation and Remodeling", img: pic5 },
  ];

  // Smooth animation on change
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.08 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
    );
  }, [activeIndex]);

  return (
    <section className="bg-[#0f0e0d] text-white py-28 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            ref={imageRef}
            src={services[activeIndex].img}
            alt="service"
            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
          />

          <div className="absolute bottom-6 left-6 bg-black/60 px-5 py-3 rounded-lg text-sm backdrop-blur">
            Transforming spaces with luxury & precision
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-xs border border-white/20 px-4 py-1 inline-block rounded-full mb-6 tracking-widest">
            OUR SERVICES
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Explore Our{" "}
            <span className="text-yellow-400">
              Interior Design Expertise
            </span>
          </h2>

          <div className="space-y-2">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group flex justify-between items-center border-b border-white/10 py-5 cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                <span className="flex items-center gap-5">
                  <span className="text-sm opacity-40">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-lg tracking-wide">
                    {service.title}
                  </span>
                </span>

                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black transform group-hover:rotate-45 transition duration-300">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}