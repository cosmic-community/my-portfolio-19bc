import { getSkills } from '@/lib/cosmic'
import SkillsSection from '@/components/SkillsSection'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
  title: 'Skills | My Portfolio',
}

export default async function SkillsPage() {
  const skills = await getSkills()

  return (
    <div className="py-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="What I Work With" title="Skills & Expertise" />
        {skills.length > 0 ? (
          <SkillsSection skills={skills} />
        ) : (
          <p className="text-center text-ink-400">No skills listed yet.</p>
        )}
      </div>
    </div>
  )
}