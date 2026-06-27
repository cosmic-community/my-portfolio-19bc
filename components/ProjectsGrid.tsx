import type { Project } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import Link from 'next/link'

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        const title = getMetafieldValue(project.metadata?.title) || project.title
        const description = getMetafieldValue(project.metadata?.description)
        const screenshots = project.metadata?.screenshots || []
        const cover = screenshots[0]
        const techStack = project.metadata?.tech_stack || []
        const featured = project.metadata?.featured

        return (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group glass rounded-2xl border border-white/10 overflow-hidden hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-video overflow-hidden bg-ink-800">
              {cover ? (
                <img
                  src={`${cover.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
                  alt={title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-ink-600">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
              {featured && (
                <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium rounded-full bg-brand-600 text-white">
                  Featured
                </span>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-300 transition-colors">
                {title}
              </h3>
              {description && (
                <p className="text-sm text-ink-400 line-clamp-2 mb-4">{description}</p>
              )}
              {techStack.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs rounded bg-white/5 text-ink-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}