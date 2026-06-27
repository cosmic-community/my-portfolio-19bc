import type { Profile } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { getInitials } from '@/lib/utils'

export default function Hero({ profile }: { profile: Profile | null }) {
  const name = getMetafieldValue(profile?.metadata?.full_name) || profile?.title || 'Your Name'
  const tagline = getMetafieldValue(profile?.metadata?.tagline)
  const bio = getMetafieldValue(profile?.metadata?.bio)
  const location = getMetafieldValue(profile?.metadata?.location)
  const photo = profile?.metadata?.profile_photo
  const githubUrl = profile?.metadata?.github_url
  const linkedinUrl = profile?.metadata?.linkedin_url
  const websiteUrl = profile?.metadata?.website_url

  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 animate-fade-up">
        <div className="flex-1 text-center md:text-left">
          {location && (
            <p className="inline-flex items-center gap-2 text-sm text-ink-400 mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Hi, I&apos;m <span className="text-gradient">{name}</span>
          </h1>
          {tagline && (
            <p className="text-xl md:text-2xl text-ink-300 mb-6">{tagline}</p>
          )}
          {bio && (
            <p className="text-ink-400 leading-relaxed max-w-2xl mb-8">{bio}</p>
          )}

          <div className="flex items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium transition-colors"
            >
              View My Work
            </a>
            <div className="flex items-center gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 flex items-center justify-center rounded-xl glass border border-white/10 hover:border-brand-500/40 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.62-5.48 5.92.43.37.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.825.576C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                  </svg>
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 flex items-center justify-center rounded-xl glass border border-white/10 hover:border-brand-500/40 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {websiteUrl && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                  className="w-11 h-11 flex items-center justify-center rounded-xl glass border border-white/10 hover:border-brand-500/40 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          {photo ? (
            <img
              src={`${photo.imgix_url}?w=640&h=640&fit=crop&auto=format,compress`}
              alt={name}
              width={320}
              height={320}
              className="w-56 h-56 md:w-72 md:h-72 rounded-3xl object-cover border-2 border-white/10 shadow-2xl"
            />
          ) : (
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center text-6xl font-bold text-white border-2 border-white/10 shadow-2xl">
              {getInitials(name)}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}