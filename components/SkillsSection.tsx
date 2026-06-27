import type { Skill } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

const proficiencyWidth: Record<string, string> = {
  beginner: 'w-1/4',
  intermediate: 'w-1/2',
  advanced: 'w-3/4',
  expert: 'w-full',
}

function getProficiencyWidth(proficiency: string): string {
  const key = proficiency.toLowerCase()
  return proficiencyWidth[key] || 'w-1/2'
}

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  if (!skills || skills.length === 0) {
    return null
  }

  // Group skills by category
  const grouped: Record<string, Skill[]> = {}
  skills.forEach((skill) => {
    const category = getMetafieldValue(skill.metadata?.category) || 'Other'
    if (!grouped[category]) {
      grouped[category] = []
    }
    grouped[category].push(skill)
  })

  const categories = Object.keys(grouped)

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => {
        const items = grouped[category]
        if (!items || items.length === 0) {
          return null
        }

        return (
          <div
            key={category}
            className="glass rounded-2xl border border-white/10 p-6"
          >
            <h3 className="text-lg font-semibold mb-5 text-brand-300">{category}</h3>
            <div className="space-y-4">
              {items.map((skill) => {
                const name = getMetafieldValue(skill.metadata?.name) || skill.title
                const proficiency = getMetafieldValue(skill.metadata?.proficiency)
                return (
                  <div key={skill.id}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-ink-200">{name}</span>
                      {proficiency && (
                        <span className="text-xs text-ink-500 capitalize">{proficiency}</span>
                      )}
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full ${getProficiencyWidth(proficiency)}`}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}