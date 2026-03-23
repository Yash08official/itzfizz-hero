"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "98%", label: "Client Retention" },
  { value: "200+", label: "Projects Delivered" },
  { value: "5×", label: "Avg. ROI Boost" },
  { value: "12+", label: "Years in Market" },
];

const letters = "W E L C O M E   T O   I T Z F I Z Z".split("");

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── LOAD ANIMATIONS ────────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Nav slides in
      if (navRef.current) {
        tl.fromTo(
          navRef.current,
          { y: -60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 }
        );
      }

      // Letters stagger in
      tl.fromTo(
        ".letter",
        { y: 80, opacity: 0, rotateX: -60 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.025,
        },
        "-=0.4"
      );

      // Tagline
      if (taglineRef.current) {
        tl.fromTo(
          taglineRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.3"
        );
      }

      // Stats stagger
      tl.fromTo(
        ".stat-item",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 },
        "-=0.4"
      );

      // Orb entrance
      if (orbRef.current) {
        tl.fromTo(
          orbRef.current,
          { scale: 0.4, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.6)" },
          "-=1.0"
        );
      }

      if (ring2Ref.current && ringRef.current) {
        tl.fromTo(
          [ring2Ref.current, ringRef.current],
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
          "-=0.8"
        );
      }

      // ── SCROLL-BASED ANIMATIONS ────────────────────────────────────
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1.5,
          pin: pinRef.current,
          pinSpacing: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      // Main orb: moves across screen + grows
      if (orbRef.current) {
        scrollTl.to(orbRef.current, {
          x: () => window.innerWidth * 0.35,
          y: -60,
          scale: 2.8,
          opacity: 0.6,
          ease: "none",
        }, 0);
      }
      
      if (ring2Ref.current) {
        scrollTl.to(ring2Ref.current, {
          x: () => window.innerWidth * 0.35,
          y: -60,
          scale: 2.8,
          opacity: 0,
          ease: "none",
        }, 0);
      }

      if (ringRef.current) {
        scrollTl.to(ringRef.current, {
          x: () => window.innerWidth * 0.38,
          y: -55,
          scale: 3.5,
          opacity: 0,
          ease: "none",
        }, 0);
      }

      // Orb 2: moves opposite
      if (orb2Ref.current) {
        scrollTl.to(orb2Ref.current, {
          x: () => -window.innerWidth * 0.3,
          y: 100,
          scale: 2,
          opacity: 0.3,
          ease: "none",
        }, 0);
      }

      // Orb 3: drifts up
      if (orb3Ref.current) {
        scrollTl.to(orb3Ref.current, {
          y: -200,
          x: 80,
          scale: 1.5,
          opacity: 0.15,
          ease: "none",
        }, 0);
      }

      // Headline letters scatter
      scrollTl.to(
        ".letter",
        {
          y: (i: number) => (i % 3 === 0 ? -120 : i % 3 === 1 ? -60 : -90),
          x: (i: number) => (i % 2 === 0 ? -30 : 30),
          opacity: 0,
          stagger: 0.015,
          ease: "none",
        },
        0.1
      );

      // Tagline fades
      if (taglineRef.current) {
        scrollTl.to(taglineRef.current, { y: -80, opacity: 0, ease: "none" }, 0);
      }

      // Stats slide out
      scrollTl.to(
        ".stat-item",
        { y: 60, opacity: 0, stagger: 0.08, ease: "none" },
        0
      );

      // Mask reveal — a new layer slides up
      if (maskRef.current) {
        scrollTl.fromTo(
          maskRef.current,
          { scaleY: 0, transformOrigin: "bottom center" },
          { scaleY: 1, ease: "none" },
          0.5
        );
      }

      // ── FLOATING AMBIENT LOOP ──────────────────────────────────────
      if (orbRef.current) {
        gsap.to(orbRef.current, {
          y: "+=18",
          x: "+=10",
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          y: "-=22",
          x: "+=15",
          duration: 4.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.2,
        });
      }

      if (orb3Ref.current) {
        gsap.to(orb3Ref.current, {
          y: "+=14",
          x: "-=12",
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.7,
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} style={{ height: "300vh" }}>
      <div
        ref={pinRef}
        className="relative w-full h-screen overflow-hidden flex flex-col"
        style={{ background: "var(--bg)" }}
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] z-50"
          style={{ background: "var(--border)" }}>
          <div
            ref={progressRef}
            className="h-full transition-none"
            style={{ width: "0%", background: "var(--accent)" }}
          />
        </div>

        {/* NAV */}
        <nav
          ref={navRef}
          className="relative z-30 flex items-center justify-between px-8 md:px-16 pt-8 opacity-0"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              IF
            </div>
            <span
              className="text-sm tracking-widest uppercase"
              style={{ color: "var(--fg)", fontFamily: "'Space Mono', monospace", opacity: 0.6 }}
            >
              Itzfizz
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-10">
            {["Work", "Services", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm tracking-wider uppercase hover:opacity-100 transition-opacity"
                  style={{
                    color: "var(--fg)",
                    opacity: 0.45,
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.7rem",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="text-xs tracking-widest px-4 py-2 rounded-full border cursor-pointer"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            Let&apos;s Talk ↗
          </div>
        </nav>

        {/* ORBs */}
        <div
          ref={orb2Ref}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 320,
            height: 320,
            left: "5%",
            top: "55%",
            background:
              "radial-gradient(circle at 40% 40%, #ff4d1c44, #ff4d1c11, transparent 70%)",
            filter: "blur(40px)",
            opacity: 0.5,
          }}
        />
        <div
          ref={orb3Ref}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 200,
            height: 200,
            right: "8%",
            bottom: "15%",
            background:
              "radial-gradient(circle, #d4f20022, transparent 70%)",
            filter: "blur(30px)",
            opacity: 0.4,
          }}
        />

        {/* MAIN ORB */}
        <div
          ref={orbRef}
          className="absolute pointer-events-none"
          style={{
            width: 420,
            height: 420,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0,
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, #d4f200cc, #d4f20066 40%, #d4f20011 70%, transparent)",
              filter: "blur(2px)",
              boxShadow: "0 0 80px 20px #d4f20033, 0 0 160px 60px #d4f20011",
            }}
          />
        </div>

        {/* RINGS */}
        <div
          ref={ring2Ref}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 480,
            height: 480,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid rgba(212,242,0,0.2)",
            opacity: 0,
          }}
        />
        <div
          ref={ringRef}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 560,
            height: 560,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid rgba(212,242,0,0.08)",
            opacity: 0,
          }}
        />

        {/* CONTENT */}
        <div className="relative z-20 flex flex-col items-center justify-center flex-1 px-4 text-center">
          {/* Tagline above */}
          <div
            ref={taglineRef}
            className="mb-6 opacity-0"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            <span
              className="text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full"
              style={{
                color: "var(--accent)",
                border: "1px solid rgba(212,242,0,0.3)",
                background: "rgba(212,242,0,0.05)",
              }}
            >
              ✦ Digital Agency · Est. 2012
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <div
            ref={headlineRef}
            className="overflow-hidden"
            style={{ perspective: "800px" }}
            aria-label="WELCOME TO ITZFIZZ"
          >
            <div className="flex flex-wrap justify-center gap-x-[0.15em] gap-y-2">
              {letters.map((char, i) => (
                <span
                  key={i}
                  className="letter inline-block"
                  style={{
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: "clamp(2.4rem, 7vw, 7rem)",
                    lineHeight: 1,
                    color: char === " " ? "transparent" : "var(--fg)",
                    opacity: 0,
                    willChange: "transform, opacity",
                    width: char === " " ? "0.4em" : "auto",
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* Sub headline */}
          <p
            className="mt-5 text-sm md:text-base max-w-md mx-auto leading-relaxed"
            style={{
              color: "rgba(240,236,228,0.45)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
            }}
          >
            We craft digital experiences that don&apos;t just look good —
            they perform, convert, and leave a lasting impression.
          </p>

          {/* STATS */}
          <div
            ref={statsRef}
            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="stat-item flex flex-col items-center opacity-0"
                style={{ minWidth: 80 }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    color: i === 0 ? "var(--accent)" : "var(--fg)",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    color: "rgba(240,236,228,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginTop: 4,
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="relative z-20 flex items-center justify-between px-8 md:px-16 pb-8"
          style={{ color: "rgba(240,236,228,0.25)", fontFamily: "'Space Mono', monospace", fontSize: "0.65rem" }}
        >
          <span className="tracking-widest uppercase">Scroll to explore ↓</span>
          <span className="tracking-widest uppercase">Pune · India</span>
        </div>

        {/* Mask overlay (scroll reveal layer) */}
        <div
          ref={maskRef}
          className="absolute inset-0 z-25 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #d4f200 0%, #a8c200 100%)",
            transformOrigin: "bottom center",
            transform: "scaleY(0)",
          }}
        >
          <div className="text-center">
            <p
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "clamp(3rem, 10vw, 9rem)",
                color: "#080808",
                lineHeight: 1,
                letterSpacing: "0.05em",
              }}
            >
              Let&apos;s Build
            </p>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.8rem",
                color: "rgba(8,8,8,0.5)",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                marginTop: 12,
              }}
            >
              Something extraordinary
            </p>
          </div>
        </div>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,236,228,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(240,236,228,0.015) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
    </div>
  );
}
