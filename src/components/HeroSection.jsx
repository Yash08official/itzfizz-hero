'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '5x', label: 'Average ROI' },
  { value: '40+', label: 'Global Clients' },
]

const headline = 'W E L C O M E  I T Z F I Z Z'.split('')

export default function HeroSection() {
  const sectionRef = useRef(null)
  const orbRef = useRef(null)
  const glowRingRef = useRef(null)
  const headlineRef = useRef(null)
  const statsRef = useRef(null)
  const taglineRef = useRef(null)
  const navRef = useRef(null)
  const scrollHintRef = useRef(null)
  const gradientBlobRef = useRef(null)

  useEffect(() => {
    let ctx
    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // ─── INITIAL LOAD ANIMATIONS ───────────────────────────────────

        // Nav fade in
        gsap.fromTo(
          navRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.1 }
        )

        // Gradient blob entrance
        gsap.fromTo(
          gradientBlobRef.current,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 2, ease: 'power2.out', delay: 0.2 }
        )

        // Headline letters stagger
        const letters = headlineRef.current.querySelectorAll('.letter')
        gsap.fromTo(
          letters,
          { y: 80, opacity: 0, skewX: 6 },
          {
            y: 0,
            opacity: 1,
            skewX: 0,
            duration: 0.9,
            ease: 'expo.out',
            stagger: 0.03,
            delay: 0.4,
          }
        )

        // Tagline
        gsap.fromTo(
          taglineRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1.2 }
        )

        // Orb entrance
        gsap.fromTo(
          orbRef.current,
          { scale: 0.3, opacity: 0, rotationY: -45 },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 1.6,
            ease: 'expo.out',
            delay: 0.6,
          }
        )

        // Glow ring pulse
        gsap.fromTo(
          glowRingRef.current,
          { scale: 0.6, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.8,
            ease: 'expo.out',
            delay: 0.8,
          }
        )

        // Stats stagger
        const statItems = statsRef.current.querySelectorAll('.stat-item')
        gsap.fromTo(
          statItems,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.12,
            delay: 1.4,
          }
        )

        // Scroll hint
        gsap.fromTo(
          scrollHintRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, delay: 2.2 }
        )

        // ─── SCROLL ANIMATIONS ─────────────────────────────────────────

        // Orb: moves up, scales down, rotates as you scroll
        gsap.to(orbRef.current, {
          y: -220,
          scale: 0.55,
          rotation: 180,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        })

        // Glow ring: expands and fades
        gsap.to(glowRingRef.current, {
          scale: 2.2,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '60% top',
            scrub: 1,
          },
        })

        // Headline: stretches letter-spacing and fades slightly
        gsap.to(headlineRef.current, {
          letterSpacing: '0.35em',
          opacity: 0.15,
          y: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '70% top',
            scrub: 1,
          },
        })

        // Tagline fades out quickly
        gsap.to(taglineRef.current, {
          opacity: 0,
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '40% top',
            scrub: 0.8,
          },
        })

        // Stats slide sideways
        const statItems2 = statsRef.current.querySelectorAll('.stat-item')
        statItems2.forEach((el, i) => {
          const dir = i % 2 === 0 ? -120 : 120
          gsap.to(el, {
            x: dir,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: '50% top',
              scrub: 0.8 + i * 0.1,
            },
          })
        })

        // Gradient blob parallax
        gsap.to(gradientBlobRef.current, {
          y: 160,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        })

        // Scroll hint fades out immediately on scroll
        gsap.to(scrollHintRef.current, {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '15% top',
            scrub: 0.5,
          },
        })

        // ─── FLOATING ORB IDLE ANIMATION ──────────────────────────────
        gsap.to(orbRef.current, {
          y: '+=18',
          duration: 2.8,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      }, sectionRef)
    }

    initGSAP()
    return () => ctx && ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Gradient blob */}
      <div
        ref={gradientBlobRef}
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '720px',
          height: '720px',
          background:
            'radial-gradient(ellipse at 40% 40%, #c8f54222 0%, #ff4d2e11 40%, transparent 70%)',
          filter: 'blur(60px)',
          borderRadius: '50%',
        }}
      />

      {/* ── NAV ── */}
      <nav
        ref={navRef}
        className="relative z-20 flex items-center justify-between px-8 md:px-16 pt-8"
        style={{ opacity: 0 }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'var(--accent)', boxShadow: '0 0 20px #c8f54255' }}
          >
            <span className="text-black font-bold text-xs">IF</span>
          </div>
          <span
            className="font-display text-xl tracking-widest"
            style={{ color: 'var(--fg)', letterSpacing: '0.2em' }}
          >
            ITZFIZZ
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Work', 'Services', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm tracking-widest transition-colors duration-200"
              style={{ color: '#888', fontFamily: 'var(--font-body)' }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.target.style.color = '#888')}
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        <button
          className="text-xs tracking-widest px-5 py-2.5 rounded-full border transition-all duration-300"
          style={{
            borderColor: 'var(--accent)',
            color: 'var(--accent)',
            fontFamily: 'var(--font-body)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent)'
            e.currentTarget.style.color = '#000'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--accent)'
          }}
        >
          GET A QUOTE
        </button>
      </nav>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center pt-8 pb-16">

        {/* Glow ring behind orb */}
        <div
          ref={glowRingRef}
          className="absolute pointer-events-none"
          style={{
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            border: '1px solid #c8f54230',
            boxShadow: '0 0 80px #c8f54218, inset 0 0 80px #c8f54210',
            opacity: 0,
          }}
        />

        {/* Orb / Visual Element */}
        <div
          ref={orbRef}
          className="relative mb-10"
          style={{ opacity: 0 }}
        >
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #c8f54230 0%, transparent 70%)',
              filter: 'blur(24px)',
              transform: 'scale(1.4)',
            }}
          />

          {/* Main orb */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #c8f542, #ff4d2e, #c8f542, #0a0a0a, #c8f542)',
              padding: '2px',
              boxShadow: '0 0 60px #c8f54240, 0 0 120px #c8f54215',
            }}
          >
            <div
              className="w-full h-full rounded-full flex items-center justify-center flex-col gap-1"
              style={{ background: 'var(--bg)' }}
            >
              {/* Inner design */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #c8f542 0%, #ff4d2e 100%)',
                  boxShadow: '0 0 30px #c8f54260',
                }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M8 16 L16 8 L24 16 L16 24 Z"
                    fill="#0a0a0a"
                    stroke="#0a0a0a"
                    strokeWidth="1"
                  />
                  <circle cx="16" cy="16" r="3" fill="#0a0a0a" />
                </svg>
              </div>
              <div
                className="text-xs tracking-widest mt-1"
                style={{ color: '#888', fontFamily: 'var(--font-body)' }}
              >
                DIGITAL
              </div>
            </div>
          </div>

          {/* Orbiting dot */}
          <div
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              width: '260px',
              height: '260px',
              marginTop: '-130px',
              marginLeft: '-130px',
              animation: 'orbit 6s linear infinite',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 12px var(--accent)',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
          </div>

          {/* Second orbiting dot (opposite) */}
          <div
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              width: '300px',
              height: '300px',
              marginTop: '-150px',
              marginLeft: '-150px',
              animation: 'orbit 9s linear infinite reverse',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--accent2)',
                boxShadow: '0 0 10px var(--accent2)',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
          </div>
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="overflow-hidden mb-6" style={{ letterSpacing: '0.18em' }}>
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 7vw, 7rem)',
              color: 'var(--fg)',
              lineHeight: 1,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0',
            }}
          >
            {'W E L C O M E   I T Z F I Z Z'.split('').map((char, i) => (
              <span
                key={i}
                className="letter inline-block"
                style={{
                  opacity: 0,
                  color: char === 'I' && i > 12 ? 'var(--accent)' : 'inherit',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-sm md:text-base tracking-widest mb-14"
          style={{
            color: '#666',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.22em',
            opacity: 0,
          }}
        >
          WE BUILD DIGITAL EXPERIENCES THAT CONVERT
        </p>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-item flex flex-col items-center gap-2"
              style={{ opacity: 0 }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  color: i % 2 === 0 ? 'var(--accent)' : 'var(--fg)',
                  lineHeight: 1,
                  letterSpacing: '0.05em',
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs tracking-widest text-center"
                style={{ color: '#555', fontFamily: 'var(--font-body)', letterSpacing: '0.18em' }}
              >
                {stat.label.toUpperCase()}
              </div>
              <div
                style={{
                  width: '24px',
                  height: '1px',
                  background: i % 2 === 0 ? 'var(--accent)' : 'var(--muted)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        style={{ opacity: 0 }}
      >
        <span
          className="text-xs tracking-widest"
          style={{ color: '#444', fontFamily: 'var(--font-body)', letterSpacing: '0.2em' }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, #c8f542, transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
      </div>

      {/* Bottom horizontal rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, #c8f54230, transparent)' }}
      />

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
      `}</style>
    </section>
  )
}
