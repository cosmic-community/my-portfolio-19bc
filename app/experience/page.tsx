import { getWorkExperience } from '@/lib/cosmic'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
  title: 'Experience | My Portfolio',
}

export default async function ExperiencePage() {
  const experiences = await getWorkExperience()

  return (
    <div className="py-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Career Path" title="Work Experience" />
        {experiences.length > 0 ? (
          <ExperienceTimeline experiences={experiences} />
        ) : (
          <p className="text-center text-ink-400">No experience listed yet.</p>
        )}
      </div>
    </div>
  )
}