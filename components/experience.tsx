import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Building } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "Talentship Pvt Ltd",
      location: "Chennai, Tamil Nadu",
      period: "August 2024 - Present",
      description: "Developed front-end applications using ReactJS, NextJS, TailwindCSS, and Zustand for state management. Built dynamic UIs with reusable components, server-side rendering (SSR), and optimized performance. Implemented KonvaJS for interactive image annotation with dynamic shapes and labels. Designed responsive dashboards with CRUD operations, reusable UI components, and managed complex UI states efficiently.",
      technologies: ["JavaScript","TypeScript","ReactJS", "NextJS", "TailwindCSS", "Zustand", "KonvaJS", "SSR"]
    }
  ]

  const education = [
    {
      degree: "Master of Computer Application",
      institution: "Christ College of Engineering Technology - Puducherry",
      period: "2024-09",
      grade: "9.1 CGPA"
    },
    {
      degree: "Bachelor of Science: Mathematics",
      institution: "Arignar Anna Govt. Arts & Science College - Villupuram",
      period: "2021-07",
      grade: ""
    }
  ]

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900">Experience & Education</h2>
          <p className="text-lg text-blue-700">
            My professional journey and academic background
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">Work Experience</h3>
          {experiences.map((experience, index) => (
            <Card key={index} className="border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-2 bg-blue-900"></div>
              <CardHeader className="bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-blue-900">{experience.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-700 flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center gap-1 text-sm text-blue-600">
                      <CalendarDays className="w-4 h-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-blue-600">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="bg-white">
                <p className="text-blue-700 mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">Education</h3>
          {education.map((edu, index) => (
            <Card key={index} className="border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-2 bg-blue-600"></div>
              <CardHeader className="bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-blue-900">{edu.degree}</CardTitle>
                    <CardDescription className="text-lg font-medium text-blue-700">
                      {edu.institution}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center gap-1 text-sm text-blue-600">
                      <CalendarDays className="w-4 h-4" />
                      {edu.period}
                    </div>
                    {edu.grade && (
                      <div className="text-sm font-medium text-blue-800 bg-blue-100 px-2 py-1 rounded">
                        {edu.grade}
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
