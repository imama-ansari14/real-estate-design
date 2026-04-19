import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import house from "../assets/house.png";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 21,  suffix: "+", label: "Years Experience",    desc: "Expert craftsmanship delivering timeless spaces across every project." },
  { value: 162, suffix: "+", label: "Projects Completed",  desc: "From concept to completion, every detail executed with precision." },
  { value: 256, suffix: "+", label: "Skilled Tradespeople",desc: "A curated network of specialists committed to quality and craft." },
  { value: 314, suffix: "+", label: "Client Satisfaction", desc: "Relationships built on trust, vision, and exceptional results." },
];

export default function StatsShowcase() {
  const sectionRef  = useRef(null);
  const houseRef    = useRef(null);
  const numbersRef  = useRef([]);
  const cardsRef    = useRef([]);
  const lineRef     = useRef(null);
  const headingRef  = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // heading line draw
      gsap.from(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      // heading fade
      gsap.from(headingRef.current, {
        y: 30, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      // cards stagger up
      gsap.from(cardsRef.current, {
        y: 50, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.13,
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });

      // count-up numbers
      numbersRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: stats[i].value,
            duration: 2,
            ease: "power2.out",
            delay: 0.15 * i,
            snap: { innerText: 1 },
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
            onUpdate() { el.innerText = Math.round(Number(el.innerText)); },
          }
        );
      });

      // house: parallax X on scroll
      gsap.fromTo(
        houseRef.current,
        { x: -80, opacity: 0, y: 30 },
        {
          x: 70,
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: houseRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0f0e0d] text-white overflow-hidden py-28 px-6 md:px-20"
    >
      {/* ── faint watermark ── */}
      <span className="absolute left-0 top-10 text-[clamp(80px,14vw,180px)] font-black leading-none select-none pointer-events-events-none tracking-tighter text-white/[0.03]">
        STATS
      </span>

      <div className="max-w-7xl mx-auto">

        {/* ── top label + heading ── */}
        <div className="mb-16">
          <p className="text-xs border border-white/20 px-4 py-1 inline-block rounded-full mb-6 tracking-widest text-white/60">
            BY THE NUMBERS
          </p>

          <div ref={headingRef} className="flex items-end gap-6 flex-wrap">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Trusted By <span className="text-yellow-400">Hundreds</span> of{" "}
              <br className="hidden md:block" />
              Happy Homeowners
            </h2>
            {/* decorative line */}
            <div
              ref={lineRef}
              className="hidden md:block flex-1 h-px bg-white/15 mb-4"
            />
          </div>
        </div>

        {/* ── stat cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`
                relative group py-10
                ${i === 0 ? "pr-8" : "px-8"}
                ${i !== 0 ? "border-l border-white/10" : ""}
              `}
            >
              {/* hover yellow top bar */}
              <span className="absolute top-0 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full" />

              {/* number */}
              <div className="flex items-end leading-none mb-5">
                <span
                  ref={(el) => (numbersRef.current[i] = el)}
                  className="text-[clamp(44px,5.5vw,72px)] font-black text-white leading-none tabular-nums"
                >
                  0
                </span>
                <span className="text-[clamp(36px,4.5vw,60px)] font-black text-yellow-400 leading-none pb-0.5">
                  {stat.suffix}
                </span>
              </div>

              {/* label */}
              <p className="text-[15px] font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                {stat.label}
              </p>

              {/* desc */}
              <p className="text-[13px] text-white/40 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── divider ── */}
        <div className="h-px w-full bg-white/10" />

        {/* ── house image: GSAP scrub X ── */}
        <div className="flex justify-center mt-4 relative">
          {/* glow behind house */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0f0e0d] to-transparent z-10 pointer-events-none" />
          <img
            ref={houseRef}
            src={house}
            alt="House"
            className="w-[82%] max-w-[960px] block opacity-0 drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}