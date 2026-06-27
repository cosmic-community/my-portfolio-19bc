import { getProfile, getSkills, getProjects, getWorkExperience } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import SkillsSection from '@/components/SkillsSection'
import ProjectsGrid from '@/components/ProjectsGrid'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import ContactSection from '@/components/ContactSection'
import SectionHeading from '@/components/SectionHeading'

export default async function HomePage() {
  const [profile, skills, projects, experiences] = await Promise.all([
    getProfile(),
    getSkills(),
    getProjects(),
    getWorkExperience(),
  ])

  const featuredProjects = projects.filter((p) => p.metadata?.featured).slice(0, 3)
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 3)

  return (
    <div>
      <Hero profile={profile} />

      {skills.length > 0 && (
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="What I Work With"
              title="Skills & Expertise"
            />
            <SkillsSection skills={skills} />
          </div>
        </section>
      )}

      {displayProjects.length > 0 && (
        <section id="projects" className="py-20 px-6 bg-ink-900/40">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="Selected Work"
              title="Featured Projects"
              action={{ href: '/projects', label: 'View all projects' }}
            />
            <ProjectsGrid projects={displayProjects} />
          </div>
        </section>
      )}

      {experiences.length > 0 && (
        <section id="experience" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Career Path"
              title="Work Experience"
            />
            <ExperienceTimeline experiences={experiences} />
          </div>
        </section>
      )}

      <ContactSection profile={profile} />
    </div>
  )
}