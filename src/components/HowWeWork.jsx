import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "We begin by understanding your vision, goals, and needs to craft a tailored design roadmap.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  },
  {
    num: "02",
    title: "Design & Planning",
    desc: "We begin by understanding your vision, goals, and needs to craft a tailored design roadmap.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    num: "03",
    title: "Implementation",
    desc: "We begin by understanding your vision, goals, and needs to craft a tailored design roadmap.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
  {
    num: "04",
    title: "Project Handover",
    desc: "We begin by understanding your vision, goals, and needs to craft a tailored design roadmap.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
];

const cardOffsets = ["lg:mt-0", "lg:mt-16", "lg:mt-32", "lg:mt-48"];

export default function HowWeWork() {
  const sectionRef = useRef(null);
  const labelRef   = useRef(null);
  const headingRef = useRef(null);
  const subRef     = useRef(null);
  const linkRef    = useRef(null);
  const cardsRef   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // label drops from top
      gsap.from(labelRef.current, {
        y: -30, opacity: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
      });

      // heading slides from LEFT
      gsap.from(headingRef.current, {
        x: -120, opacity: 0, duration: 1.1, ease: "power3.out", delay: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
      });

      // sub text slides from RIGHT
      gsap.from(subRef.current, {
        x: 120, opacity: 0, duration: 1.1, ease: "power3.out", delay: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
      });

      // link fades up
      gsap.from(linkRef.current, {
        y: 20, opacity: 0, duration: 0.7, ease: "power2.out", delay: 0.4,
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
      });

      // each card has its OWN ScrollTrigger — fires one by one as they enter
      cardsRef.current.forEach((card) => {
        if (!card) return;

        // whole card rises up
        gsap.from(card, {
          y: 90, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });

        // image scales in
        gsap.from(card.querySelector(".card-img"), {
          scale: 1.18, opacity: 0, duration: 1.1, ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });

        // number slides from left
        gsap.from(card.querySelector(".card-num"), {
          x: -40, opacity: 0, duration: 0.65, ease: "power2.out", delay: 0.12,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });

        // title slides from left
        gsap.from(card.querySelector(".card-title"), {
          x: -35, opacity: 0, duration: 0.65, ease: "power2.out", delay: 0.22,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });

        // desc fades up
        gsap.from(card.querySelector(".card-desc"), {
          y: 18, opacity: 0, duration: 0.6, ease: "power2.out", delay: 0.34,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f2f0eb] py-28 px-6 md:px-20"
    >
      {/* architectural grid bg */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* warm glow top-right */}
      <div className="absolute top-[-80px] right-[-80px] w-[520px] h-[520px] rounded-full bg-yellow-200/40 blur-[140px] pointer-events-none z-0" />
      {/* cool glow bottom-left */}
      <div className="absolute bottom-[-60px] left-[-60px] w-[420px] h-[420px] rounded-full bg-stone-300/50 blur-[110px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── top: heading LEFT, text RIGHT ── */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">

          <div>
            <div
              ref={labelRef}
              className="inline-flex items-center gap-2 border border-black/20 text-[11px] tracking-[0.18em] uppercase text-black/50 px-4 py-1.5 rounded-full mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block" />
              How We Work
            </div>

            <h2
              ref={headingRef}
              className="text-[clamp(30px,4vw,52px)] font-black leading-[1.1] text-[#111]"
            >
              Description{" "}
              <span className="text-yellow-500">Architecture</span>
              <br />
              <span className="text-yellow-500">Process</span> For Exceptional
              <br />
              Results.
            </h2>
          </div>

          <div ref={subRef} className="lg:pl-8 flex flex-col justify-end">
            <p className="text-[15px] text-[#555] leading-relaxed mb-3">
              Our process is alive — adapting, refining, and growing with your vision. Always.
            </p>
            <p className="text-[15px] text-[#555] leading-relaxed">
              Like artists with a blank canvas, we transform rooms into living works of art.
            </p>

            <p ref={linkRef} className="mt-8 text-[13px] text-black/40">
              We've been working hard to impress you.{" "}
              <a
                href="#"
                className="text-yellow-600 underline underline-offset-4 hover:text-yellow-700 transition-colors duration-200"
              >
                Start yours today
              </a>
            </p>
          </div>
        </div>

        {/* ── cards — each fires on its own scroll position ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`group relative bg-white rounded-2xl overflow-hidden
                          shadow-md hover:shadow-2xl transition-shadow duration-500
                          ${cardOffsets[i]}`}
            >
              {/* yellow top bar slides in on hover */}
              <span className="absolute top-0 left-0 h-[3px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-full z-10" />

              {/* image */}
              <div className="overflow-hidden h-[190px]">
                <img
                  src={step.img}
                  alt={step.title}
                  className="card-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* card body */}
              <div className="relative p-6 pb-10">
                <p className="card-num text-[11px] font-black tracking-[0.2em] text-yellow-500 mb-2">
                  {step.num}.
                </p>
                <h3 className="card-title text-[16px] font-black text-[#111] mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="card-desc text-[13px] text-[#888] leading-relaxed">
                  {step.desc}
                </p>

                {/* ghost watermark number */}
                <span className="absolute bottom-1 right-4 text-[72px] font-black text-black/[0.05] leading-none select-none pointer-events-none">
                  {step.num}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}