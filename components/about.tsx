import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900">
            About Me
          </h2>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto">
          I am a passionate MERN stack developer with nearly 2 years of hands-on experience in building dynamic, responsive, and user-friendly web applications. I hold a Master of Computer Applications, which provided me with a strong foundation in software development and problem-solving.
My expertise lies in React.js, Next.js, and modern frontend technologies, and I have recently expanded my skill set to include Node.js, Express.js, and MongoDB for full-stack development. I have worked on diverse projects, including AR/VR solutions, which strengthened my ability to deliver innovative and scalable solutions.
I thrive in collaborative environments, adapt quickly to new challenges, and stay updated with the latest industry trends. I am now seeking opportunities as a MERN stack developer to leverage my frontend expertise and growing backend knowledge to contribute to impactful, end-to-end solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border border-blue-200 shadow-lg bg-white hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                Clean Code
              </h3>
              <p className="text-blue-600">
                Writing maintainable, scalable code with ReactJS, NextJS, and
                TypeScript following best practices.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-blue-200 shadow-lg bg-white hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                UI/UX Focus
              </h3>
              <p className="text-blue-600">
                Creating intuitive interfaces with TailwindCSS and building
                complex UI modules like Image Annotation tools.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-blue-200 shadow-lg bg-white hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">
                Performance
              </h3>
              <p className="text-blue-600">
                Optimizing applications through lazy loading, code splitting,
                and efficient state management with Zustand.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg border border-blue-200">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">
            My Journey
          </h3>
          <p className="text-blue-700 leading-relaxed">
            I have completed my
            Master of Computer Applications from Christ College of Engineering
            Technology and have been working as a MERN Stack Developer at
            Talentship Pvt Ltd since August 2024. My journey includes developing
            dynamic user interfaces with reusable components, implementing
            server-side rendering (SSR), and contributing to innovative projects
            such as AR/VR platforms and admin dashboards with CRUD
            operations.
          </p>
        </div>
      </div>
    </section>
  );
}
