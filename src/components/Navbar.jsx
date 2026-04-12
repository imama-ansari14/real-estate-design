import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add("bg-black/60", "backdrop-blur-md");
      } else {
        navRef.current.classList.remove("bg-black/60", "backdrop-blur-md");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-5 text-white"
    >
      {/* Logo */}
      <div className="text-xl font-semibold flex items-center gap-2">
        <span className="text-yellow-400">⬢</span> antra
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-sm">
        {["Home", "Services", "Portfolio", "Pages", "Blog", "Contact"].map(
          (item) => (
            <a key={item} href="#" className="hover:text-yellow-400 transition">
              {item}
            </a>
          )
        )}
      </div>

      {/* Right */}
      <div className="hidden md:flex items-center gap-6">
        <div className="text-xs opacity-80">(+480) 123 678 900</div>

        <button className="bg-yellow-400 text-black px-5 py-2 rounded-full hover:scale-110 transition">
          Get In Touch
        </button>

        <div className="flex gap-3">
          <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
            🔍
          </div>
          <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
            ⋯
          </div>
        </div>
      </div>
    </nav>
  );
}