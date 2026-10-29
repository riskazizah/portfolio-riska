import { useState, useEffect, useCallback } from 'react'
import { ExternalLink, Images, X, ChevronLeft, ChevronRight } from 'lucide-react'

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const projects = [
  {
    title: 'OCR-Based Document Management System',
    subtitle: 'Tugas Akhir',
    period: 'Mar 2026 - Sep 2026',
    badge: 'Repository Only',
    badgeColor: 'purple',
    tech: ['PRD', 'User Stories', 'SQL Query', 'Blackbox Testing', 'Tesseract OCR', 'MySQL', 'Laravel/PHP'],
    repoUrl: 'https://github.com/riskazizah/DMS-Arsip',
    images: [
      '/uiux/ocr-dms/dms-search-ocr.png?v=2',
      '/uiux/ocr-dms/dms-upload.png?v=2',
      '/uiux/ocr-dms/dms-detail-metadata.png?v=2',
    ],
    tabs: {
      Problem: 'Pengelolaan arsip fisik di instansi memerlukan waktu pencarian 15-30 menit per dokumen, rentan kehilangan, dan tidak ada sistem penelusuran digital yang efisien.',
      Solution: 'Membangun sistem berbasis OCR yang mengotomatiskan ekstraksi teks dari dokumen fisik, disimpan ke database MySQL yang dapat dicari. Dilengkapi PRD, User Stories, 30+ skenario Blackbox Testing, dan Query SQL tervalidasi.',
      Impact: 'Waktu pencarian arsip terpangkas lebih dari 80% - dari 15-30 menit menjadi kurang dari 10 detik. Blackbox Testing mencapai tingkat keberhasilan 100%.',
    },
  },
  {
    title: 'AI-Powered Knowledge Management System',
    subtitle: 'Proyek Kuliah',
    period: 'Jan 2026 - Feb 2026',
    badge: 'Academic Case Study',
    badgeColor: 'amber',
    tech: ['Model SECI', 'Google AI Studio', 'Chatbot AI', 'Blackbox Testing', 'UML'],
    images: [
      '/assets/uiux/kms/kms-swaraswarna.jpg',
    ],
    tabs: {
      Problem: 'Organisasi kesulitan mengkurasi dan mendistribusikan pengetahuan internal secara efektif, menyebabkan duplikasi kerja dan hilangnya institutional knowledge.',
      Solution: 'Merancang sistem berbasis model SECI (Socialization, Externalization, Combination, Internalization) dengan Chatbot AI via Google AI Studio untuk kategorisasi dan distribusi pengetahuan otomatis.',
      Impact: 'ROI simulasi mencapai 66.7%. Blackbox Testing menunjukkan tingkat keberhasilan 100% untuk seluruh skenario pengujian yang dirancang.',
    },
  },
  {
    title: 'ARENAtek: Perancangan Sistem Informasi Penyewaan Lapangan Olahraga tekMIRA',
    subtitle: 'Proyek Kerja Praktek (System Analyst & UI/UX Designer)',
    period: 'Agu 2025 - Sep 2025',
    badge: 'Government / Enterprise Project',
    badgeColor: 'emerald',
    tech: ['System Analysis', 'Use Case Diagram', 'Activity Diagram', 'SRS', 'ERD', 'Canva UI Mockup', 'SDLC Waterfall'],
    docBadge: 'Enterprise Documentation',
    images: [
      '/assets/uiux/arenatek/arenatek-booking.jpg',
      '/assets/uiux/arenatek/arenatek-checkout.jpg',
      '/assets/uiux/arenatek/arenatek-success.png',
    ],
    tabs: {
      Problem: 'Pengelolaan penyewaan fasilitas lapangan olahraga (tenis, futsal, basket) di BBPMB tekMIRA masih manual menggunakan Excel dan WhatsApp. Hal ini memicu keterlambatan konfirmasi, risiko jadwal bentrok antara pegawai internal dan penyewa umum, serta pencatatan bukti pembayaran transfer yang terfragmentasi.',
      Solution: 'Merancang sistem informasi ARENAtek berbasis web menggunakan metode SDLC Waterfall. Menyusun dokumen SRS komprehensif, merancang 11+ model alur sistem (Business & System Use Case, Activity Diagram untuk pemesanan, pembayaran, hingga pembatalan), merancang arsitektur database (ERD), serta mendesain prototipe UI mockup antarmuka pengguna di Canva.',
      Impact: 'Menghasilkan dokumentasi analisis dan perancangan sistem yang terstandar untuk memangkas waktu revisi komunikasi tim dev sebesar 30%, serta menyediakan fondasi arsitektur digital untuk otomatisasi penjadwalan dan laporan keuangan terintegrasi di tekMIRA.',
    },
  },
  {
    title: 'Interactive Expense & Budget Visualizer',
    subtitle: 'CodingCamp Project',
    period: '2026',
    badge: 'Web Application',
    badgeColor: 'indigo',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'Data Visualization'],
    liveUrl: 'https://riskazizah.github.io/CodingCamp-21Sep26-riskana/',
    repoUrl: 'https://github.com/riskazizah/CodingCamp-21Sep26-riskana',
    tabs: {
      Problem: 'Banyak pengguna kesulitan memantau pengeluaran harian dan mengalokasikan anggaran secara efisien tanpa visualisasi yang jelas, sehingga sering terjadi over-budget.',
      Solution: 'Membangun aplikasi web dengan fitur input transaksi, kategori pengeluaran, serta dashboard visualisasi grafis (pie chart & bar chart) yang memperlihatkan tren pengeluaran secara real-time.',
      Impact: 'Pengguna dapat memantau posisi anggaran secara langsung, mengidentifikasi kategori pengeluaran terbesar, dan mengambil keputusan keuangan lebih cepat.',
    },
  },
]

const TABS = ['Problem', 'Solution', 'Impact']

// ── Image Gallery Modal ─────────────────────────────────────────
function GalleryModal({ images, title, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)
  const safeLength = images?.length ?? 0

  const prev = useCallback(() => {
    if (!safeLength) return
    setCurrent(i => (i - 1 + safeLength) % safeLength)
  }, [safeLength])
  const next = useCallback(() => {
    if (!safeLength) return
    setCurrent(i => (i + 1) % safeLength)
  }, [safeLength])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  if (!safeLength) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(39,55,43,0.85)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: 'var(--color-cream)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-sm font-medium truncate" style={{ color: 'var(--color-ink)' }}>{title}</p>
          <div className="flex items-center gap-3">
            <span className="text-xs" style={{ color: 'var(--color-ink-faint)' }}>{current + 1} / {images.length}</span>
            <button
              onClick={onClose}
              aria-label="Close gallery"
              className="p-1.5 rounded-lg transition-colors"
              style={{ color: 'var(--color-ink-muted)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-petal)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Image — object-contain + intrinsic sizing so HD screenshots stay sharp */}
        <div className="relative flex items-center justify-center p-3 md:p-4" style={{ backgroundColor: 'var(--color-petal)', minHeight: '300px' }}>
          <img
            key={current}
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            className="screenshot max-h-[80vh] max-w-full w-auto h-auto object-contain"
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.removeAttribute('src')
              e.currentTarget.alt = 'Gambar belum tersedia'
              e.currentTarget.style.padding = '3rem'
              e.currentTarget.style.opacity = '0.3'
            }}
          />

          {/* Prev / Next arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-3 p-2 rounded-full shadow-sm transition-colors"
                style={{ backgroundColor: 'var(--color-cream)', color: 'var(--color-ink-muted)' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-sage-light)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-cream)'}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 p-2 rounded-full shadow-sm transition-colors"
                style={{ backgroundColor: 'var(--color-cream)', color: 'var(--color-ink-muted)' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-sage-light)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-cream)'}
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="flex gap-2 px-5 py-3 overflow-x-auto border-t" style={{ borderColor: 'var(--color-border)' }}>
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="shrink-0 w-14 h-10 rounded-md overflow-hidden border-2 transition-colors"
                style={{ borderColor: i === current ? 'var(--color-sage)' : 'transparent' }}
              >
                <img src={img} alt="" className="screenshot w-full h-full object-contain" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Project Card ────────────────────────────────────────────────
function ProjectCard({ project }) {
  const [activeTab, setActiveTab] = useState('Problem')
  const [galleryOpen, setGalleryOpen] = useState(false)
  const hasImages = project.images && project.images.length > 0

  return (
    <>
      <div
        className="rounded-xl overflow-hidden border transition-all flex flex-col hover:shadow-sm"
        style={{ backgroundColor: 'var(--color-cream)', borderColor: 'var(--color-border-pink)' }}
      >
        {/* Thumbnail — clickable if images exist */}
        {hasImages && (
          <button
            onClick={() => setGalleryOpen(true)}
            aria-label="Open image gallery"
            className="relative w-full aspect-[16/10] overflow-hidden group"
            style={{ backgroundColor: 'var(--color-petal)' }}
          >
            <img
              src={project.images[0]}
              alt={`${project.title} preview`}
              className="screenshot w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.style.display = 'none'
              }}
            />
            {/* Overlay on hover */}
            <div
              className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ backgroundColor: 'rgba(39,55,43,0.55)' }}
            >
              <Images size={18} color="#fff" />
              <span className="text-xs font-medium text-white">
                {project.images.length > 1 ? `${project.images.length} Screenshots` : 'View Screenshot'}
              </span>
            </div>
          </button>
        )}

        <div className="p-5 pb-4 flex-1">
          {/* Badge + period */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full border"
              style={{ backgroundColor: 'var(--color-petal)', color: 'var(--color-ink)', borderColor: 'var(--color-border-pink)' }}
            >
              {project.badge}
            </span>
            <span className="text-xs" style={{ color: 'var(--color-ink-faint)' }}>{project.period}</span>
          </div>

          <h3 className="text-base font-semibold mb-0.5 leading-snug" style={{ color: 'var(--color-ink)' }}>
            {project.title}
          </h3>
          <p className="text-xs mb-3" style={{ color: 'var(--color-ink-faint)' }}>{project.subtitle}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs rounded-md"
                style={{ backgroundColor: 'var(--color-sage-light)', color: 'var(--color-ink)', opacity: 0.85 }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Sub-tabs */}
          <div className="rounded-lg overflow-hidden border" style={{ borderColor: 'var(--color-border-pink)' }}>
            <div className="flex border-b" style={{ borderColor: 'var(--color-border-pink)' }}>
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex-1 py-2 text-xs font-medium transition-colors"
                  style={
                    activeTab === tab
                      ? { backgroundColor: 'var(--color-sage-light)', color: 'var(--color-ink)' }
                      : { backgroundColor: 'transparent', color: 'var(--color-ink-faint)' }
                  }
                  onMouseEnter={e => { if (activeTab !== tab) e.currentTarget.style.backgroundColor = 'var(--color-petal)' }}
                  onMouseLeave={e => { if (activeTab !== tab) e.currentTarget.style.backgroundColor = 'transparent' }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-4 min-h-[96px]" style={{ backgroundColor: 'var(--color-cream)' }}>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-ink-muted)' }}>
                {project.tabs[activeTab]}
              </p>
            </div>
          </div>
        </div>

        {/* Footer - links or doc badge */}
        {(project.liveUrl || project.repoUrl || project.docBadge || hasImages) && (
          <div
            className="px-5 py-3.5 flex flex-wrap items-center gap-3 border-t"
            style={{ borderColor: 'var(--color-border-pink)' }}
          >
            {hasImages && (
              <button
                onClick={() => setGalleryOpen(true)}
                className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                style={{ color: 'var(--color-sage)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-sage-dark)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-sage)'}
              >
                <Images size={13} />
                UI Gallery
              </button>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                style={{ color: 'var(--color-sage)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-sage-dark)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-sage)'}
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium transition-colors"
                style={{ color: 'var(--color-ink-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-ink)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-ink-muted)'}
              >
                <GithubIcon />
                Repository
              </a>
            )}
            {project.docBadge && (
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border"
                style={{ backgroundColor: 'var(--color-sage-light)', color: 'var(--color-ink)', borderColor: 'var(--color-border)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-sage)' }} />
                {project.docBadge}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {galleryOpen && (
        <GalleryModal
          images={project.images}
          title={project.title}
          startIndex={0}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-sage)' }}>
            Projects
          </p>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-ink)' }}>
            Selected Work
          </h2>
          <p className="mt-3 text-sm" style={{ color: 'var(--color-ink-muted)' }}>
            Klik tab <span className="font-medium" style={{ color: 'var(--color-ink)' }}>Problem / Solution / Impact</span> untuk detail, atau thumbnail untuk galeri UI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
