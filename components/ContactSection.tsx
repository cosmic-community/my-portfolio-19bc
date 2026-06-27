import type { Profile } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ContactSection({ profile }: { profile: Profile | null }) {
  const email = getMetafieldValue(profile?.metadata?.email)
  const githubUrl = profile?.metadata?.github_url
  const linkedinUrl = profile?.metadata?.linkedin_url

  return (
    <section id="contact" className="py-24 px-6 bg-ink-900/40">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-400 mb-3">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let&apos;s build something <span className="text-gradient">together</span>
        </h2>
        <p className="text-ink-400 mb-10 max-w-xl mx-auto">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
        </p>

        {email && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {email}
          </a>
        )}

        {(githubUrl || linkedinUrl) && (
          <div className="flex items-center justify-center gap-4 mt-8">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-400 hover:text-brand-400 transition-colors text-sm"
              >
                GitHub
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-400 hover:text-brand-400 transition-colors text-sm"
              >
                LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}