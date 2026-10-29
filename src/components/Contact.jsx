import FadeIn from './FadeIn'

const contacts = [
  {
    label: 'Email',
    value: 'riskaazizah0803@gmail.com',
    href: 'mailto:riskaazizah0803@gmail.com',
    logo: 'https://cdn.simpleicons.org/gmail',
    external: false,
  },
  {
    label: 'WhatsApp',
    value: '+62 812-2382-5324',
    href: 'https://wa.me/6281223825324',
    logo: 'https://cdn.simpleicons.org/whatsapp',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rnurazizah',
    href: 'https://linkedin.com/in/rnurazizah',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/riskazizah',
    href: 'https://github.com/riskazizah',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="pt-16 md:pt-20 pb-8 px-4 md:px-6" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-sage)' }}>
              Contact
            </p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-ink)' }}>
              Let's Connect Together!
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
          {contacts.map((contact, idx) => (
            <FadeIn key={contact.label} delay={idx * 0.08}>
              <a
                href={contact.href}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200"
                style={{ backgroundColor: 'var(--color-petal)', borderColor: 'var(--color-border-pink)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-sage-light)'
                  e.currentTarget.style.backgroundColor = 'var(--color-sage-light)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border-pink)'
                  e.currentTarget.style.backgroundColor = 'var(--color-petal)'
                }}
              >
                {/* Logo */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'var(--color-cream)' }}
                >
                  <img
                    src={contact.logo}
                    alt={contact.label}
                    width={24}
                    height={24}
                    style={{ width: 24, height: 24, objectFit: 'contain' }}
                    loading="lazy"
                    onError={e => { e.target.style.opacity = '0.4' }}
                  />
                </div>
                {/* Text */}
                <div className="min-w-0">
                  <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--color-ink-faint)' }}>
                    {contact.label}
                  </p>
                  <p className="text-sm font-medium truncate" style={{ color: 'var(--color-ink)' }}>
                    {contact.value}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.45}>
          <div />
        </FadeIn>
      </div>
    </section>
  )
}
