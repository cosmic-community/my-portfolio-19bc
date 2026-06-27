// app/projects/[slug]/page.tsx
import { getProject } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  const title = getMetafieldValue(project.metadata?.title) || project.title
  const description = getMetafieldValue(project.metadata?.description)
  const screenshots = project.metadata?.screenshots || []
  const techStack = project.metadata?.tech_stack || []
  const liveUrl = project.metadata?.live_url
  const githubUrl = project.metadata?.github_url

  return (
    <div className="py-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-ink-400 hover:text-brand-400 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to projects
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-brand-500/10 text-brand-300 border border-brand-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {description && (
          <p className="text-lg text-ink-300 leading-relaxed mb-10">{description}</p>
        )}

        <div className="flex flex-wrap gap-4 mb-12">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-medium transition-colors"
            >
              View Live Site
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-white/20 text-ink-100 font-medium transition-colors"
            >
              View Source
            </a>
          )}
        </div>

        {screenshots.length > 0 && (
          <div className="space-y-8">
            {screenshots.map((shot, i) => (
              <img
                key={i}
                src={`${shot.imgix_url}?w=1600&h=1000&fit=crop&auto=format,compress`}
                alt={`${title} screenshot ${i + 1}`}
                width={800}
                height={500}
                className="w-full rounded-2xl border border-white/10 shadow-2xl"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}