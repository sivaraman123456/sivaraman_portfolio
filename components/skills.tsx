import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      skills: ["ReactJS", "NextJS", "Zustand"]
    },
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"]
    },
    {
      title: "UI & Styling",
      skills: ["Tailwind CSS", "Responsive Design"]
    },
    {
      title: "State Management",
      skills: ["Zustand", "Context API"]
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub"]
    },
    {
      title: "Build Tools",
      skills: ["Webpack", "ESLint", "Prettier"]
    },
    {
      title: "Development Tools",
      skills: ["Visual Studio Code", "Postman"]
    },
    {
      title: "APIs",
      skills: ["RESTful APIs", "Axios"]
    }
  ]

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900">Skills & Technologies</h2>
          <p className="text-lg text-blue-700">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-blue-900 text-white">
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 bg-white">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
