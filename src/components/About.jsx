import { GraduationCap, MapPin, Briefcase } from 'lucide-react'

const stats = [
  { value: '4+', label: 'Completed Projects' },
  { value: '30+', label: 'UML Models Designed' },
  { value: '100%', label: 'Accuracy in Data Processing' },
]

export default function About() {
  return (
    <section id="about" className="pt-6 md:pt-8 pb-16 md:pb-24 px-4 md:px-6" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-sage)' }}>
            About
          </p>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-ink)' }}>
            Who I Am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left - bio */}
          <div className="space-y-5 leading-relaxed" style={{ color: 'var(--color-ink-muted)' }}>
            <p>
              Saya adalah lulusan{' '}
              <span className="font-medium" style={{ color: 'var(--color-ink)' }}>
                Sistem Informasi Universitas Komputer Indonesia (UNIKOM)
              </span>{' '}
              dengan keahlian mendalam di bidang analisis sistem, pemodelan proses bisnis, dan penulisan dokumentasi teknis.
            </p>
            <p>
              Memiliki pengalaman nyata sebagai{' '}
              <span className="font-medium" style={{ color: 'var(--color-ink)' }}>
                System Analyst Intern
              </span>{' '}
              di BBPMB tekMIRA (lembaga pemerintah di bawah Kementerian ESDM) dan sebagai Teknisi Jaringan Intern di PT Citra Jelajah Informatika - CIFO.
            </p>
            <p>
              Terbiasa menerjemahkan kebutuhan bisnis menjadi spesifikasi teknis yang jelas dan terstruktur - mulai dari diagram UML, SRS dokumen, hingga UI mockup yang siap digunakan tim pengembang.
            </p>

            <div className="flex flex-col gap-2 pt-2">
              {[
                { icon: GraduationCap, text: 'S1 Sistem Informasi - Universitas Komputer Indonesia (UNIKOM) Bandung' },
                { icon: MapPin, text: 'Cimahi, Jawa Barat' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-ink-muted)' }}>
                  <Icon size={15} style={{ color: 'var(--color-sage)' }} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right - stats */}
          <div className="space-y-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-5 p-5 rounded-xl border transition-colors"
                style={{ backgroundColor: 'var(--color-petal)', borderColor: 'var(--color-border-pink)' }}
              >
                <span className="text-3xl font-bold min-w-[4rem]" style={{ color: 'var(--color-sage)' }}>
                  {s.value}
                </span>
                <span className="text-sm font-medium" style={{ color: 'var(--color-ink-muted)' }}>
                  {s.label}
                </span>
              </div>
            ))}

            <div className="pt-2 flex flex-wrap gap-2">
              {['BNSP Certified System Analyst', 'Gemini Certified', 'Fullstack Web Dev - CodingCamp'].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 text-xs font-medium rounded-full border"
                  style={{ backgroundColor: 'var(--color-sage-light)', color: 'var(--color-ink)', borderColor: 'var(--color-border)', opacity: 0.9 }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
