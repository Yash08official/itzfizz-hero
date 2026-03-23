"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Custom websites & web apps built for speed, accessibility, and conversion.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Human-centered design that balances beauty with usability at every touchpoint.",
  },
  {
    num: "03",
    title: "E-Commerce",
    desc: "Shopify & WooCommerce stores engineered to maximise revenue per visitor.",
  },
  {
    num: "04",
    title: "Performance SEO",
    desc: "Technical audits, Core Web Vitals, and content strategies that rank.",
  },
];

export default function BelowFold() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".service-item");
      if (items) {
        gsap.fromTo(
          items,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      gsap.fromTo(
        sectionRef.current?.querySelector(".section-title"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen px-8 md:px-16 py-24"
      style={{ background: "var(--bg)" }}
    >
      {/* Section header */}
      <div className="section-title mb-20 opacity-0">
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            marginBottom: 16,
          }}
        >
          ✦ What we do
        </p>
        <h2
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            color: "var(--fg)",
            lineHeight: 1,
            maxWidth: 600,
          }}
        >
          Services that move
          <br />
          <span style={{ color: "var(--accent)" }}>the needle</span>
        </h2>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px"
        style={{ border: "1px solid var(--border)", borderRadius: 2 }}>
        {services.map((s) => (
          <div
            key={s.num}
            className="service-item group relative p-10 opacity-0 cursor-pointer overflow-hidden"
            style={{ borderRight: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
          >
            {/* Hover fill */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "rgba(212,242,0,0.04)" }}
            />

            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                color: "var(--accent)",
                opacity: 0.6,
                letterSpacing: "0.2em",
              }}
            >
              {s.num}
            </span>
            <h3
              className="mt-4 mb-3"
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "2.2rem",
                color: "var(--fg)",
                letterSpacing: "0.03em",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                color: "rgba(240,236,228,0.45)",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {s.desc}
            </p>

            <div
              className="mt-8 inline-flex items-center gap-2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              Explore ↗
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-8 py-16"
        style={{ borderTop: "1px solid var(--border)" }}>
        <p
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            color: "var(--fg)",
            lineHeight: 1.1,
            maxWidth: 500,
          }}
        >
          Ready to build something{" "}
          <span style={{ color: "var(--accent)" }}>remarkable?</span>
        </p>

        <a
          href="mailto:yashwasankar008@gmail.com"
          className="group flex items-center gap-4 px-8 py-4 rounded-full transition-all duration-300"
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            textDecoration: "none",
          }}
        >
          Start a project
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>

      {/* Footer bar */}
      <div
        className="flex items-center justify-between pt-8"
        style={{
          borderTop: "1px solid var(--border)",
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.6rem",
          color: "rgba(240,236,228,0.2)",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
        }}
      >
        <span>© 2025 Itzfizz Digital</span>
        <span>Crafted with precision</span>
      </div>
    </section>
  );
}
