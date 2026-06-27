import type { WorkExperience } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { formatDate } from '@/lib/utils'

export default function ExperienceTimeline({ experiences }: { experiences: WorkExperience[] }) {
  if (!experiences || experiences.length === 0) {
    return null
  }

  return (
    <div className="relative">
      <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-white/10" />
      <div className="space-y-10">
        {experiences.map((exp) => {
          const jobTitle = getMetafieldValue(exp.metadata?.job_title) || exp.title
          const company = getMetafieldValue(exp.metadata?.company)
          const location = getMetafieldValue(exp.metadata?.location)
          const description = getMetafieldValue(exp.metadata?.description)
          const logo = exp.metadata?.company_logo
          const isCurrent = exp.metadata?.current_role
          const startDate = formatDate(exp.metadata?.start_date)
          const endDate = isCurrent ? 'Present' : formatDate(exp.metadata?.end_date)

          return (
            <div key={exp.id} className="relative pl-12 md:pl-16">
              <div className="absolute left-0 md:left-2 top-1">
                {logo ? (
                  <img
                    src={`${logo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                    alt={company}
                    width={40}
                    height={40}
                    className="w-9 h-9 rounded-lg object-cover border border-white/10 bg-white"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-lg bg-brand-600/20 border border-brand-500/30 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-brand-400" />
                  </div>
                )}
              </div>

              <div className="glass rounded-2xl border border-white/10 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold">{jobTitle}</h3>
                  {(startDate || endDate) && (
                    <span className="text-sm text-ink-400 whitespace-nowrap">
                      {startDate}{startDate && endDate ? ' — ' : ''}{endDate}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-300 mb-3">
                  {company && <span className="font-medium">{company}</span>}
                  {location && (
                    <span className="text-ink-500">· {location}</span>
                  )}
                  {isCurrent && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/15 text-emerald-300">
                      Current
                    </span>
                  )}
                </div>
                {description && (
                  <p className="text-sm text-ink-400 leading-relaxed">{description}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}