// ================= FOOTER.jsx =================
// Requires: @fontsource/cormorant-garamond  OR  Google Fonts link in index.html
// Add to index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />

import React, { useState } from "react";

const SERVICES = [
  "Residential Design",
  "Commercial Spaces",
  "Space Planning",
  "Furniture Curation",
  "Colour Consulting",
  "3D Visualization",
];

const STUDIO = ["Our Story", "Portfolio", "Process", "Journal", "Press", "Careers"];

function FooterLink({ children }) {
  return (
    <li>
      <a
        href="#"
        className="group flex items-center gap-2 text-[13px] text-[#8a8178] tracking-wide hover:text-[#e8e2d9] transition-colors duration-300"
      >
        <span className="w-0 h-px bg-[#c9a96e] opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" />
        {children}
      </a>
    </li>
  );
}

function SocialBtn({ children }) {
  return (
    <button className="w-[34px] h-[34px] border border-[#c9a96e]/25 rounded-full flex items-center justify-center hover:border-[#c9a96e] hover:bg-[#c9a96e]/10 transition-all duration-300 group">
      {children}
    </button>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      className="bg-[#0f0e0d] text-[#e8e2d9] relative overflow-hidden"
      style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
    >
      {/* Gold top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{ background: "linear-gradient(90deg, transparent, #c9a96e 30%, #c9a96e 70%, transparent)" }}
      />

      {/* Decorative vertical line */}
      <div
        className="hidden lg:block absolute right-16 top-20 w-px h-28 opacity-30"
        style={{ background: "linear-gradient(to bottom, transparent, #c9a96e, transparent)" }}
      />

      <div className="px-6 sm:px-10 lg:px-16 xl:px-20 pt-16 sm:pt-20 pb-10">

        {/* Brand header */}
        <p className="text-[10px] tracking-[0.3em] text-[#c9a96e] uppercase mb-3">
          Est. 2011 — Karachi &amp; Beyond
        </p>
        <h2
          className="text-[32px] sm:text-[42px] lg:text-[52px] font-light leading-none mb-2"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Maison <em className="italic text-[#c9a96e]">Intérieur</em>
        </h2>
        <p className="text-[11px] tracking-[0.15em] text-[#7a7068] uppercase mb-12 sm:mb-16">
          Crafting spaces that speak without words
        </p>

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-[#c9a96e]/20">

          {/* Brand / About col */}
          <div>
            <p className="text-[11px] tracking-[0.25em] text-[#c9a96e] uppercase mb-5">
              Our Philosophy
            </p>
            <p className="text-[13px] leading-[1.9] text-[#8a8178] max-w-[240px]">
              We believe every space holds a story waiting to be told. Through meticulous
              craft and a reverence for beauty, we transform environments into living works
              of art — for homes, offices, and beyond.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-7">
              {/* Instagram */}
              <SocialBtn>
                <svg className="w-3 h-3 fill-[#7a7068] group-hover:fill-[#c9a96e] transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialBtn>
              {/* Pinterest */}
              <SocialBtn>
                <svg className="w-3 h-3 fill-[#7a7068] group-hover:fill-[#c9a96e] transition-colors" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </SocialBtn>
              {/* Grid / Houzz-style */}
              <SocialBtn>
                <svg className="w-3 h-3 fill-[#7a7068] group-hover:fill-[#c9a96e] transition-colors" viewBox="0 0 24 24">
                  <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z" />
                </svg>
              </SocialBtn>
              {/* LinkedIn */}
              <SocialBtn>
                <svg className="w-3 h-3 fill-[#7a7068] group-hover:fill-[#c9a96e] transition-colors" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialBtn>
            </div>

            {/* Award pills */}
            <div className="flex gap-3 mt-6 flex-wrap">
              {["AD100 Listed", "IIDA Member"].map((award) => (
                <span
                  key={award}
                  className="border border-[#c9a96e]/20 rounded-sm px-3 py-1 text-[10px] tracking-[0.15em] text-[#5a5248] uppercase"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[11px] tracking-[0.25em] text-[#c9a96e] uppercase mb-5">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <FooterLink key={s}>{s}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <p className="text-[11px] tracking-[0.25em] text-[#c9a96e] uppercase mb-5">
              Studio
            </p>
            <ul className="flex flex-col gap-3">
              {STUDIO.map((s) => (
                <FooterLink key={s}>{s}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <p className="text-[11px] tracking-[0.25em] text-[#c9a96e] uppercase mb-5">
              Stay Inspired
            </p>
            <p className="text-[12px] text-[#5a5248] leading-[1.7] tracking-wide mb-4">
              Curated insights on design, materials, and the art of living well — delivered monthly.
            </p>

            {/* Email input */}
            <div className="flex border border-[#c9a96e]/30 rounded-sm overflow-hidden">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent outline-none px-3 py-2 text-[12px] text-[#e8e2d9] placeholder-[#4a4540] tracking-wide"
                style={{ fontFamily: "'Jost', sans-serif" }}
              />
              <button
                onClick={() => setEmail("")}
                className="bg-[#c9a96e] hover:bg-[#e0c088] transition-colors px-4 text-[11px] text-[#0f0e0d] tracking-[0.1em] font-medium flex-shrink-0"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Join
              </button>
            </div>
            <p className="text-[11px] text-[#4a4540] mt-2 tracking-wide">
              No noise. Unsubscribe anytime.
            </p>

            {/* Contact */}
            <div className="mt-8">
              <p className="text-[11px] tracking-[0.25em] text-[#c9a96e] uppercase mb-4">
                Contact
              </p>
              <p className="text-[12px] text-[#5a5248] leading-[2] tracking-wide">
                hello@maisoninterieur.com<br />
                +92 21 3456 7890<br />
                Block 5, Clifton, Karachi
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-7">
          <p className="text-[11px] text-[#4a4540] tracking-wide">
            © 2025 Maison Intérieur. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Preferences"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] text-[#4a4540] hover:text-[#c9a96e] tracking-wide transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}