import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Reusable scroll-triggered fade-in wrapper.
 * Props:
 *   delay   — stagger delay in seconds (default 0)
 *   y       — vertical offset to animate from (default 24)
 *   once    — only animate once (default true)
 *   className — forwarded to wrapper div
 */
export default function FadeIn({
  children,
  delay = 0,
  y = 24,
  once = true,
  className = '',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '0px 0px -60px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
