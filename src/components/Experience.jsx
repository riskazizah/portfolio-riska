import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    role: 'System Analyst (Intern)',
    company: 'BBPMB tekMIRA - Kementerian ESDM',
    location: 'Bandung',
    period: 'Agu 2025 - Sep 2025',
    type: 'Internship',
    highlights: [
      'Menggali kebutuhan sistem melalui wawancara & observasi bersama pimpinan unit bisnis, mengidentifikasi 5+ kendala operasional, lalu menerjemahkannya ke spesifikasi sistem.',
      'Menyusun dokumen SRS komprehensif berbasis SDLC mencakup pemetaan data, kebutuhan fungsional/non-fungsional, dan batasan integrasi API.',
      'Merancang 11+ model alur kerja (Flowchart, Activity, Use Case, Class Diagram, ERD) yang memangkas waktu revisi komunikasi tim dev sebesar 30%.',
      'Merancang UI mockup di Canva secara iteratif dan memvalidasi spesifikasi fungsional sebelum pengembangan.',
    ],
  },
  {
    role: 'Teknisi Jaringan (Intern)',
    company: 'PT Citra Jelajah Informatika - CIFO',
    location: 'Bandung',
    period: 'Mar 2021 - Jun 2021',
    type: 'Internship',
    highlights: [
      'Menyusun dan mengelompokkan dokumentasi SOP IT serta panduan penanganan masalah teknis berdasarkan kategori kendala, meningkatkan efisiensi alur kerja teknisi lapangan sebesar 15%.',
      'Mengelola entri dan verifikasi lebih dari 100 data kinerja harian menggunakan MS Excel dengan akurasi 99%.',
    ],
  },
  {
    role: 'Administrator Layanan & Penjualan (Freelance)',
    company: 'Bisnis Keluarga',
    location: 'Cimahi',
    period: '2019 - Sekarang',
    type: 'Freelance',
    highlights: [
      'Mengelola administrasi harian, pencatatan transaksi digital (hingga 10 transaksi per hari), dan pelaporan alur kas dengan akurasi rekonsiliasi keuangan 100%.',
      'Menangani bantuan teknis dan penyelesaian kendala pada platform layanan digital dengan rata-rata waktu respon <10 menit dan kepuasan pelanggan >95%.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-6" style={{ backgroundColor: 'var(--color-petal)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-sage)' }}>
            Experience
          </p>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-ink)' }}>
            Work History
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px hidden md:block" style={{ backgroundColor: 'var(--color-border-pink)' }} />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative md:pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-5 w-10 h-10 rounded-full items-center justify-center hidden md:flex"
                  style={{ backgroundColor: 'var(--color-cream)', border: '2px solid var(--color-sage-light)' }}
                >
                  <Briefcase size={16} style={{ color: 'var(--color-sage)' }} />
                </div>

                {/* Card */}
                <div
                  className="rounded-xl p-6 border transition-colors"
                  style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-border-pink)' }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-semibold" style={{ color: 'var(--color-ink)' }}>
                        {exp.role}
                      </h3>
                      <p className="text-sm mt-0.5" style={{ color: 'var(--color-ink-faint)' }}>
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span
                        className="px-2.5 py-0.5 text-xs font-medium rounded-full border"
                        style={{ backgroundColor: 'var(--color-sage-light)', color: 'var(--color-ink)', borderColor: 'var(--color-border)' }}
                      >
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-ink-faint)' }}>
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--color-ink-muted)' }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--color-sage)' }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
