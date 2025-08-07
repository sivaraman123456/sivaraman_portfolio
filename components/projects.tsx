import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: "Ucentrics - Industrial AR/VR Platform",
      description: "Built an AR/VR platform for interactive machine training with admin tools, digital twins, and annotation features for industrial applications.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["ReactJS", "NextJS", "TailwindCSS", "KonvaJS", "React Flow", "Zustand"],
      period: "Dec 2024 – Present"
    },
    {
      title: "Career Portal – Admin Dashboard",
      description: "Developed job and applicant management dashboard with full CRUD operations and role-based access control for efficient recruitment management.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["ReactJS", "NextJS", "TailwindCSS", "Zustand", "PostgreSQL"],
      period: "2024"
    },
    {
      title: "Talentship Community Event Website",
      description: "Created landing pages for AI & TypeScript events with SEO optimization and performance enhancements for better user engagement.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["NextJS", "TailwindCSS", "SSG", "Image Optimization"],
      period: "2024"
    }
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900">Featured Projects</h2>
          <p className="text-lg text-blue-700">
            Some of my recent work that showcases my technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg border border-blue-200 bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  {project.period}
                </div>
                <CardTitle className="text-xl text-blue-900">{project.title}</CardTitle>
                <CardDescription className="text-blue-700">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-blue-300 text-blue-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
               
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
