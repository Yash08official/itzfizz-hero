'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    num: '01',
    title: 'Web Development',
    desc: 'Custom websites and web apps built for performance and scale.',
  },
  {
    num: '02',
    title: 'E-Commerce',
    desc: 'Shopify & WooCommerce stores that drive conversions.',
  },
  {
    num: '03',
    title: 'UI/UX Design',
    desc: 'Interfaces that delight users and meet business goals.',
  },
  {
    num: '04',
    title: 'SEO & Growth',
    desc: 'Data-driven strategies to grow your digital presence.',
  },
]

export default function AboutSection() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    let ctx
    const init = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        gsap.fromTo(
          headingRef.current,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        )

        const cards = cardsRef.current.querySelectorAll('.service-card')
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
            },
          }
        )
      }, sectionRef)
    }
    init()
    return () => ctx && ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen px-8 md:px-16 py-32 flex flex-col justify-center"
      style={{ background: 'var(--bg)', borderTop: '1px solid #1a1a1a' }}
    >
      {/* Background text */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none font-display"
        style={{
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          color: '#ffffff05',
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
        }}
      >
        SERVICES
      </div>

      <div ref={headingRef} className="mb-16" style={{ opacity: 0 }}>
        <p
          className="text-xs tracking-widest mb-4"
          style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', letterSpacing: '0.3em' }}
        >
          WHAT WE DO
        </p>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            color: 'var(--fg)',
            lineHeight: 0.95,
            letterSpacing: '0.04em',
          }}
        >
          DIGITAL
          <br />
          <span style={{ color: 'var(--accent)' }}>CRAFT</span>
        </h2>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="service-card group cursor-pointer p-8 rounded-2xl border transition-all duration-500"
            style={{
              background: 'var(--card-bg)',
              borderColor: '#1e1e1e',
              opacity: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#c8f54240'
              e.currentTarget.style.background = '#141414'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1e1e1e'
              e.currentTarget.style.background = 'var(--card-bg)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div className="flex items-start justify-between mb-6">
              <span
                className="font-display text-5xl"
                style={{ color: '#1e1e1e', letterSpacing: '0.05em' }}
              >
                {s.num}
              </span>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                style={{ border: '1px solid #2a2a2a' }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  style={{ color: '#444' }}
                >
                  <path
                    d="M2 12 L12 2 M12 2 H6 M12 2 V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <h3
              className="font-display mb-3"
              style={{
                fontSize: '1.8rem',
                letterSpacing: '0.08em',
                color: 'var(--fg)',
              }}
            >
              {s.title.toUpperCase()}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: '#555', fontFamily: 'var(--font-body)' }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 flex items-center gap-6">
        <button
          className="font-display tracking-widest px-10 py-4 rounded-full text-sm transition-all duration-300"
          style={{ background: 'var(--accent)', color: '#000', letterSpacing: '0.15em' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.04)'
            e.currentTarget.style.boxShadow = '0 0 40px #c8f54240'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          VIEW ALL WORK
        </button>
        <div className="flex items-center gap-3">
          <div style={{ width: '40px', height: '1px', background: '#333' }} />
          <span
            className="text-xs tracking-widest"
            style={{ color: '#444', fontFamily: 'var(--font-body)' }}
          >
            200+ PROJECTS
          </span>
        </div>
      </div>
    </section>
  )
}
