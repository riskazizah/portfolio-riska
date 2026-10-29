import { ExternalLink, Award, Calendar } from 'lucide-react'
import FadeIn from './FadeIn'

const certifications = [
  {
    title: 'BNSP Certified System Analyst (CSA)',
    issuer: 'LSP Informatika / BNSP',
    period: 'Feb 2026 - Feb 2029',
    type: 'Professional Certification',
    color: 'sage',
    pdfPath: '/certificates/bnsp-system-analyst.pdf',
  },
  {
    title: 'Gemini Certified Student',
    issuer: 'Google for Education',
    period: 'Aug 2026 - Aug 2029',
    type: 'Google Certification',
    color: 'blue',
    pdfPath: '/certificates/gemini-certified.pdf',
  },
  {
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    period: 'Aug 2024',
    type: 'Networking',
    color: 'teal',
    pdfPath: '/certificates/cisco-ccna-srwe.pdf',
  },
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    period: 'Feb 2024',
    type: 'Networking',
    color: 'teal',
    pdfPath: '/certificates/cisco-ccna-itn.pdf',
  },
  {
    title: 'Intro to Software Engineering',
    issuer: 'RevoU',
    period: 'Sep 2026',
    type: 'Course Completion',
    color: 'pink',
    pdfPath: '/certificates/revou-intro-se.pdf',
  },
  {
    title: 'English Proficiency Test (TOEFL Score: 440)',
    issuer: 'UNIKOM Language Center',
    period: 'May 2026 - May 2028',
    type: 'Language Proficiency',
    color: 'amber',
    pdfPath: '/certificates/unikom-toefl.pdf',
  },
]

const colorMap = {
  sage: {
    card: 'var(--color-sage-light)',
    border: 'var(--color-border)',
    icon: 'var(--color-sage)',
    badge: { bg: 'var(--color-sage-light)', border: 'var(--color-border)', text: 'var(--color-ink)' },
  },
  blue: {
    card: '#dbeafe',
    border: '#bfdbfe',
    icon: '#3b82f6',
    badge: { bg: '#dbeafe', border: '#bfdbfe', text: '#1e40af' },
  },
  teal: {
    card: '#ccfbf1',
    border: '#99f6e4',
    icon: '#0d9488',
    badge: { bg: '#ccfbf1', border: '#99f6e4', text: '#0f766e' },
  },
  pink: {
    card: 'var(--color-petal)',
    border: 'var(--color-border-pink)',
    icon: '#ec4899',
    badge: { bg: 'var(--color-petal)', border: 'var(--color-border-pink)', text: '#be185d' },
  },
  amber: {
    card: '#fef3c7',
    border: '#fde68a',
    icon: '#d97706',
    badge: { bg: '#fef3c7', border: '#fde68a', text: '#92400e' },
  },
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 px-4 md:px-6" style={{ backgroundColor: 'var(--color-petal)' }}>
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <FadeIn>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-sage)' }}>
              Certifications
            </p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-ink)' }}>
              Licenses & Certificates
            </h2>
            <p className="mt-3 text-sm" style={{ color: 'var(--color-ink-muted)' }}>
              Klik <span className="font-medium" style={{ color: 'var(--color-ink)' }}>View Certificate</span> untuk membuka dokumen sertifikat di tab baru.
            </p>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => {
            const c = colorMap[cert.color]
            return (
              <FadeIn key={cert.title} delay={idx * 0.07}>
                <div
                  className="rounded-xl border flex flex-col overflow-hidden transition-shadow hover:shadow-sm h-full"
                  style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-border-pink)' }}
                >
                  {/* Color accent strip + icon */}
                  <div
                    className="flex items-center gap-3 px-5 py-4 border-b"
                    style={{ backgroundColor: c.card, borderColor: c.border }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'var(--color-cream)' }}
                    >
                      <Award size={18} style={{ color: c.icon }} />
                    </div>
                    <span
                      className="px-2 py-0.5 text-xs font-medium rounded-full border"
                      style={{ backgroundColor: c.badge.bg, borderColor: c.badge.border, color: c.badge.text }}
                    >
                      {cert.type}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-1 gap-2">
                    <h3 className="text-sm font-semibold leading-snug" style={{ color: 'var(--color-ink)' }}>
                      {cert.title}
                    </h3>
                    <p className="text-xs font-medium" style={{ color: 'var(--color-ink-muted)' }}>
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs mt-auto pt-2" style={{ color: 'var(--color-ink-faint)' }}>
                      <Calendar size={11} />
                      {cert.period}
                    </div>
                  </div>

                  {/* Footer - CTA */}
                  <div className="px-5 py-3 border-t" style={{ borderColor: 'var(--color-border-pink)' }}>
                    <a
                      href={cert.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                      style={{ color: 'var(--color-sage)' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-sage-dark)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-sage)'}
                    >
                      <ExternalLink size={12} />
                      View Certificate
                    </a>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
