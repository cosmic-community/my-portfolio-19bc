import Link from 'next/link'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  action?: {
    href: string
    label: string
  }
}

export default function SectionHeading({ eyebrow, title, action }: SectionHeadingProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
      <div>
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-widest text-brand-400 mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>
      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-brand-400 transition-colors whitespace-nowrap"
        >
          {action.label}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      )}
    </div>
  )
}