// ================= HERO.jsx (RESPONSIVE) =================
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

import cardImg1 from "../assets/hero2.jpg";
import cardImg2 from "../assets/hero3.jpg";
import cardImg3 from "../assets/hero1.png";

export default function Hero() {
  const images = [hero1, hero2, hero3];
  const [index, setIndex] = useState(0);

  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1.2 }
    );
  }, [index]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(titleRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(
          subRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.5"
        )
        .fromTo(
          btnRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1 },
          "-=0.5"
        )
        .fromTo(
          cardsRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 },
          "-=0.5"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen w-full relative overflow-hidden">
      {/* BG */}
      <img
        key={index}
        ref={bgRef}
        src={images[index]}
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="hero"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content wrapper — stacks vertically on mobile, side-by-side on xl */}
      <div className="relative z-20 min-h-screen flex flex-col justify-between px-6 py-16 sm:px-10 md:px-14 lg:px-20">

        {/* ── Hero text block ── */}
        <div className="text-white max-w-3xl">
          <p className="mb-5 text-xs border border-white/30 px-4 py-1 inline-block rounded-full tracking-widest uppercase">
            Fast and Reliable
          </p>

          <h1
            ref={titleRef}
            className="
              text-4xl leading-tight font-bold
              sm:text-5xl
              md:text-6xl
              lg:text-[72px] lg:leading-[1.05]
              xl:text-[80px]
            "
          >
            The Art Of Stunning <br className="hidden sm:block" /> Interior Design
          </h1>

          <p ref={subRef} className="mt-6 text-gray-300 max-w-md text-sm sm:text-base">
            Whether it's your home, office, or a commercial project, we bring
            your vision to life.
          </p>

          <button
            ref={btnRef}
            className="mt-8 px-6 py-3 border border-white rounded-full flex items-center gap-3 hover:bg-white hover:text-black transition text-sm sm:text-base w-fit"
          >
            Take Counsel
            <span className="bg-yellow-400 text-black w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">
              →
            </span>
          </button>
        </div>

        {/* ── Cards row ── */}
        {/*
          Mobile  : horizontal scroll, cards compact (w-36 h-48)
          md      : cards slightly bigger (w-40 h-56)
          lg+     : full size (w-44 h-60), pinned to bottom-right corner
        */}
        <div
          className="
            mt-10
            flex gap-4 overflow-x-auto pb-2
            sm:gap-5
            lg:absolute lg:bottom-16 lg:right-16 lg:mt-0 lg:overflow-visible lg:pb-0 lg:gap-6
          "
          style={{ scrollSnapType: "x mandatory" }}
        >
          {[cardImg1, cardImg2, cardImg3].map((img, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="
                relative flex-shrink-0
                w-36 h-48
                sm:w-40 sm:h-52
                md:w-44 md:h-60
                rounded-2xl overflow-hidden group
                cursor-pointer
              "
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Image */}
              <img
                src={img}
                alt="card"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Label */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-base sm:text-lg font-semibold">Interior</h3>
                <p className="text-xs text-gray-300">Design Project</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}