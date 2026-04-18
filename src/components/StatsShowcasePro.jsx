import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import houseImg from "../assets/house.png";

gsap.registerPlugin(ScrollTrigger);

export default function StatsShowcasePro() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    // 🧷 PIN IMAGE + PARALLAX ZOOM
    gsap.to(imageRef.current, {
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: imageRef.current,
      },
    });

    // 🎬 TEXT FADE UP ANIMATION
    statsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    // 🧠 COUNTING ANIMATION
    statsRef.current.forEach((el) => {
      const numberEl = el.querySelector(".count");

      const finalValue = parseInt(numberEl.innerText);

      gsap.fromTo(
        numberEl,
        { innerText: 0 },
        {
          innerText: finalValue,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          onUpdate: function () {
            numberEl.innerText = Math.floor(numberEl.innerText) + "+";
          },
        }
      );
    });
  }, []);

  const stats = [
    { number: 22, label: "Years Experience" },
    { number: 189, label: "Projects Completed" },
    { number: 265, label: "Skilled Tradespeople" },
    { number: 328, label: "Client Satisfaction" },
  ];

  return (
    <section ref={sectionRef} className="bg-[#0f0e0d] text-white relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
        {/* 🏠 PINNED IMAGE */}
        <div className="h-screen relative overflow-hidden">
          <img
            ref={imageRef}
            src={houseImg}
            alt="house"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-10 left-10 bg-black/60 px-6 py-3 rounded-lg backdrop-blur text-sm">
            Overhauling spaces with modern luxury design
          </div>
        </div>

        {/* 📊 SCROLL CONTENT */}
        <div className="py-32 px-6 md:px-16 space-y-24">
          {/* HEADER */}
          <div ref={(el) => (statsRef.current[0] = el)}>
            <p className="text-xs border border-white/20 px-4 py-1 inline-block rounded-full mb-6 tracking-widest">
              OUR IMPACT
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Numbers That Define{" "}
              <span className="text-yellow-400">Our Excellence</span>
            </h2>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-10">
            {stats.map((item, index) => (
              <div
                key={index}
                ref={(el) => (statsRef.current[index + 1] = el)}
                className="border border-white/10 p-8 rounded-xl hover:border-yellow-400 transition"
              >
                <h3 className="text-4xl font-bold text-yellow-400">
                  <span className="count">{item.number}</span>
                </h3>
                <p className="text-gray-400 mt-2 text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          {/* EXTRA TEXT FOR SCROLL LENGTH */}
          <div
            ref={(el) => (statsRef.current[6] = el)}
            className="space-y-6 text-gray-400 text-sm leading-relaxed"
          >
            <p>
              We craft timeless interiors blending luxury and functionality.
              Every space is designed to inspire and elevate your lifestyle.
            </p>

            <p>
              Our team ensures precision, innovation, and unmatched attention to
              detail in every project we undertake.
            </p>

            <p>
              With years of experience and hundreds of satisfied clients, we
              continue to redefine interior excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
