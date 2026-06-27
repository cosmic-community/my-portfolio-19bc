import { getProjects } from '@/lib/cosmic'
import ProjectsGrid from '@/components/ProjectsGrid'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
  title: 'Projects | My Portfolio',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="py-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="My Work" title="All Projects" />
        {projects.length > 0 ? (
          <ProjectsGrid projects={projects} />
        ) : (
          <p className="text-center text-ink-400">No projects yet. Check back soon.</p>
        )}
      </div>
    </div>
  )
}