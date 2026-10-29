import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import FadeIn from './components/FadeIn'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-cream)', color: 'var(--color-ink)' }}>
      <Navbar />

      <main>
        <Hero />
        <FadeIn><About /></FadeIn>
        <FadeIn><Experience /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Skills /></FadeIn>
        <FadeIn><Certifications /></FadeIn>
        <FadeIn><Contact /></FadeIn>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6" style={{ borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-cream)' }}>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-xl font-bold" style={{ color: 'var(--color-sage)' }}>RN</span>
          <p className="text-xs" style={{ color: 'var(--color-ink-faint)' }}>
            © 2026 · All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  )
}
