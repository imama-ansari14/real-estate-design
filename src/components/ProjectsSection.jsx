import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Luxury Skyline",
    location: "Berlin, Germany",
    year: "2025",
    tags: ["RESIDENTIAL", "SINGLE HOME"],
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=90",
    height: "h-[360px]",
  },
  {
    title: "Bohemian Rhapsody",
    location: "Milan, Italy",
    year: "2025",
    tags: ["RESIDENTIAL", "SINGLE HOME"],
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=90",
    height: "h-[520px]",
  },
  {
    title: "Vintage Glamour",
    location: "Paris, France",
    year: "2025",
    tags: ["RESIDENTIAL", "PENTHOUSE"],
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=90",
    height: "h-[400px]",
  },
  {
    title: "Titan Office Interior",
    location: "Dubai, UAE",
    year: "2025",
    tags: ["COMMERCIAL", "OFFICE"],
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=90",
    height: "h-[540px]",
  },
  {
    title: "Azure Penthouse",
    location: "New York, USA",
    year: "2025",
    tags: ["RESIDENTIAL", "PENTHOUSE"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=90",
    height: "h-[380px]",
  },
  {
    title: "Nordic Serenity",
    location: "Oslo, Norway",
    year: "2025",
    tags: ["RESIDENTIAL", "VILLA"],
    img: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=900&q=90",
    height: "h-[500px]",
  },
  {
    title: "Urban Minimalism",
    location: "Tokyo, Japan",
    year: "2025",
    tags: ["COMMERCIAL", "STUDIO"],
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=90",
    height: "h-[420px]",
  },
];

export default function ProjectsSection() {
  const sectionRef   = useRef(null);
  const labelRef     = useRef(null);
  const headingRef   = useRef(null);
  const descRef      = useRef(null);
  const watermarkRef = useRef(null);
  const cardsRef     = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // watermark scrolls horizontally scrubbed to scroll
      gsap.to(watermarkRef.current, {
        x: -300,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // label drops in
      gsap.from(labelRef.current, {
        y: -30, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });

      // heading words animate up one by one
      const words = headingRef.current.querySelectorAll(".word");
      gsap.from(words, {
        y: 70,
        opacity: 0,
        duration: 0.85,
        ease: "power4.out",
        stagger: 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
      });

      // desc slides in from right
      gsap.from(descRef.current, {
        x: 60, opacity: 0, duration: 1, ease: "power3.out", delay: 0.35,
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
      });

      // each card: own ScrollTrigger fires as IT enters viewport
      cardsRef.current.forEach((card) => {
        if (!card) return;

        // whole card rises
        gsap.from(card, {
          y: 110,
          opacity: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        });

        // image: curtain wipe from bottom + slight scale
        const img = card.querySelector(".proj-img");
        if (img) {
          gsap.from(img, {
            clipPath: "inset(100% 0% 0% 0%)",
            scale: 1.1,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          });
        }

        // tags slide from left staggered
        const tags = card.querySelectorAll(".proj-tag");
        if (tags.length) {
          gsap.from(tags, {
            x: -24, opacity: 0, duration: 0.55, ease: "back.out(2)",
            stagger: 0.1, delay: 0.55,
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          });
        }

        // title slides up
        const title = card.querySelector(".proj-title");
        if (title) {
          gsap.from(title, {
            y: 25, opacity: 0, duration: 0.65, ease: "power3.out", delay: 0.45,
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          });
        }

        // meta fades up last
        const meta = card.querySelector(".proj-meta");
        if (meta) {
          gsap.from(meta, {
            y: 14, opacity: 0, duration: 0.55, ease: "power2.out", delay: 0.58,
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f0ede8] overflow-hidden pt-24 pb-10"
    >
      {/* architectural line art bg */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='1000' height='700' viewBox='0 0 1000 700' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23999' stroke-width='0.5' fill='none' opacity='0.25'%3E%3Cpolygon points='500,40 900,220 900,520 500,680 100,520 100,220'/%3E%3Cpolygon points='500,100 840,260 840,480 500,620 160,480 160,260'/%3E%3Cpolygon points='500,160 780,295 780,440 500,560 220,440 220,295'/%3E%3Cpolygon points='500,220 720,330 720,400 500,500 280,400 280,330'/%3E%3Cline x1='500' y1='40' x2='500' y2='680'/%3E%3Cline x1='100' y1='220' x2='900' y2='520'/%3E%3Cline x1='900' y1='220' x2='100' y2='520'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "65% 10%",
          backgroundSize: "75%",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-14">

        {/* header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <div
              ref={labelRef}
              className="inline-flex items-center gap-2 border border-black/20 text-[11px] tracking-[0.18em] uppercase text-black/50 px-4 py-1.5 rounded-full mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block" />
              Our Projects
            </div>

            <h2
              ref={headingRef}
              className="text-[clamp(30px,4.2vw,58px)] font-black leading-[1.05] text-[#111]"
            >
              {[
                { text: "Creative", gold: false },
                { text: "Projects", gold: true },
                { text: "That",     gold: true },
              ].map((w, i) => (
                <span key={i} className={`word inline-block mr-[0.22em] ${w.gold ? "text-yellow-600" : "text-[#111]"}`}>
                  {w.text}
                </span>
              ))}
              <br />
              {[
                { text: "Define", gold: true  },
                { text: "Our",    gold: false },
                { text: "Style",  gold: false },
              ].map((w, i) => (
                <span key={i} className={`word inline-block mr-[0.22em] ${w.gold ? "text-yellow-600" : "text-[#111]"}`}>
                  {w.text}
                </span>
              ))}
            </h2>
          </div>

          <div ref={descRef} className="lg:pl-10 flex flex-col justify-end gap-6">
            <p className="text-[15px] text-[#666] leading-relaxed">
              Our portfolio showcases a diverse range of projects, from beautifully crafted
              residential spaces to functional and stylish commercial interiors.
            </p>
            <a href="#" className="inline-flex items-center gap-3 text-[13px] font-black text-[#111] group w-fit">
              <span className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              View All Projects
            </a>
          </div>
        </div>

        {/* cards track */}
        <div
          className="flex gap-5 items-end overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group flex-shrink-0 cursor-pointer"
              style={{ width: "clamp(230px, 25vw, 360px)" }}
            >
              {/* image */}
              <div className={`relative overflow-hidden rounded-2xl ${project.height}`}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="proj-img w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500 rounded-2xl" />

                {/* tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, t) => (
                    <span
                      key={t}
                      className="proj-tag text-[9px] font-black tracking-[0.13em] uppercase bg-white/90 backdrop-blur-sm text-[#111] px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* index */}
                <span className="absolute top-4 right-4 text-[11px] font-black text-white/50 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* bottom info inside image — always shown, more visible on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-0.5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    {project.location}
                  </p>
                </div>

                {/* arrow circle */}
                <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350 ease-out">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* below image */}
              <div className="pt-5">
                <h3 className="proj-title text-[17px] font-black text-[#111] mb-1.5 group-hover:text-yellow-600 transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>
                <div className="proj-meta flex items-center gap-2 text-[12px] text-[#999]">
                  <span>{project.location}</span>
                  <span className="w-1 h-1 rounded-full bg-yellow-400 inline-block flex-shrink-0" />
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* scrolling watermark */}
      <div className="relative overflow-hidden mt-14 pointer-events-none select-none">
        <div ref={watermarkRef} className="flex whitespace-nowrap will-change-transform">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="text-[clamp(60px,9vw,120px)] font-black tracking-tighter leading-none mx-5"
              style={{ color: i % 2 === 0 ? "rgba(0,0,0,0.055)" : "rgba(0,0,0,0.03)" }}
            >
              {i % 3 === 0 ? "Interior" : i % 3 === 1 ? "·" : "Design"}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}