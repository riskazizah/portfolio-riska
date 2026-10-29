import FadeIn from './FadeIn'
import { CheckCircle2 } from 'lucide-react'

const hardSkills = [
  'Analisis Sistem',
  'Dokumentasi IT (BRD, SRS, PRD)',
  'User Stories & Acceptance Criteria',
  'System Testing (SIT & Blackbox)',
  'User Manuals & SOPs',
  'Pemetaan Proses Bisnis (Flowmap, DFD, Flowchart, UML & BPMN)',
  'Perancangan Basis Data (ERD)',
  'SQL Querying & Validation',
  'SDLC (Waterfall, Prototype, Agile)',
]

const softSkills = [
  'Komunikasi Teknis',
  'Kolaborasi Lintas Tim',
  'Pemecahan Masalah (Problem Solving)',
  'Ketelitian Tinggi (Attention to Detail)',
  'Berpikir Kritis & Analitis',
  'Manajemen Waktu & Adaptabilitas',
]

const tools = [
  { name: 'Canva',           logo: '/canva.png' },
  { name: 'Balsamiq',        logo: '/balsamiq.png' },
  { name: 'Draw.io',         logo: 'https://cdn.simpleicons.org/diagramsdotnet/F08705' },
  { name: 'PlantUML',        logo: '/plantuml.png' },
  { name: 'Postman',         logo: 'https://cdn.simpleicons.org/postman/FF6C37' },
  { name: 'Git / GitHub',    logo: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'MS Excel',        logo: '/excel.png' },
  { name: 'MySQL',           logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
  { name: 'Google AI Studio',logo: 'https://cdn.simpleicons.org/google/4285F4' },
  { name: 'Gemini AI',       logo: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
  { name: 'React.js',        logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Tailwind CSS',    logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6" style={{ backgroundColor: 'var(--color-petal)' }}>
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Section header */}
        <FadeIn>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-sage)' }}>
              Skills
            </p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-ink)' }}>
              What I Bring
            </h2>
          </div>
        </FadeIn>

        {/* HARD SKILL */}
        <FadeIn delay={0.05}>
          <div className="rounded-xl p-6 border" style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-border-pink)' }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--color-sage-dark)' }}>
              Hard Skill
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink)' }}>
              {hardSkills.map((skill, i) => (
                <span key={skill}>
                  <span className="font-medium">{skill}</span>
                  {i < hardSkills.length - 1 && (
                    <span className="mx-2 select-none" style={{ color: 'var(--color-sage-light)' }}>•</span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </FadeIn>

        {/* SOFT SKILL + TOOLS 2-col */}
        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Soft Skill */}
            <div className="rounded-xl p-6 border" style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-border-pink)' }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--color-sage-dark)' }}>
                Soft Skill
              </p>
              <ul className="space-y-2.5">
                {softSkills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--color-ink-muted)' }}>
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: 'var(--color-sage)' }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Tech */}
            <div className="rounded-xl p-6 border" style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-border-pink)' }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--color-sage-dark)' }}>
                Tools & Tech
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-1.5 p-2.5 rounded-lg border text-center cursor-default transition-colors"
                    style={{ backgroundColor: 'transparent', borderColor: 'var(--color-border-pink)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-sage-light)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border-pink)'}
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-7 h-7 object-contain mx-auto"
                      loading="lazy"
                      onError={e => { e.target.style.opacity = '0.3' }}
                    />
                    <span className="text-xs font-medium leading-tight" style={{ color: 'var(--color-ink-muted)' }}>
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  )
}
