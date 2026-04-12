import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // TITLE ANIMATION
      gsap.fromTo(
        titleRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // PARAGRAPH
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // CARDS
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Architectural Design",
      desc: "From concept to execution, we design spaces that inspire.",
    },
    {
      title: "Interior Design & Planning",
      desc: "Elegant interiors crafted with precision and creativity.",
    },
    {
      title: "Consulting Services",
      desc: "Expert guidance to bring your vision into reality.",
    },
    {
      title: "Project Management",
      desc: "Seamless execution from start to completion.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#f7f7f7] py-28 px-10 md:px-20 relative overflow-hidden"
    >
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-16">
        <p className="text-xs border border-gray-300 inline-block px-4 py-1 rounded-full mb-6">
          WHO WE ARE
        </p>

        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Experience{" "}
          <span className="text-yellow-500">The Art Of Interior</span>{" "}
          Design
        </h2>

        <p
          ref={textRef}
          className="mt-6 text-gray-600 max-w-xl"
        >
          We specialize in transforming visions into reality. Explore our
          portfolio of innovative architectural and interior design projects.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-500 relative overflow-hidden"
          >
            {/* HOVER GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>

            <h3 className="text-lg font-semibold mb-6">
              {service.title}
            </h3>

            <div className="h-[1px] bg-gray-200 mb-6"></div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {service.desc}
            </p>

            {/* HOVER EFFECT */}
            <div className="absolute bottom-4 right-4 w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}