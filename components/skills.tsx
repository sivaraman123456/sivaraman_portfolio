import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Server,
  Database,
  Wrench,
  Palette,
  CheckCircle,
} from "lucide-react";

export function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      color: "border-cyan-500/20 bg-cyan-500/5",
      skills: [
        "React.js",
        "Next.js (App Router)",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Material UI",
        "Server-Side Rendering (SSR)",
        "Client-Side Hydration",
      ],
    },
    {
      title: "Backend & APIs",
      icon: <Server className="w-5 h-5 text-blue-400" />,
      color: "border-blue-500/20 bg-blue-500/5",
      skills: [
        "Node.js",
        "Express.js",
        "REST API Development",
        "API Integration & Webhooks",
        "Payment Gateway Integration",
        "Postman",
        "Authentication & JWT",
        "Error Handling & Validation",
      ],
    },
    {
      title: "State & Data Management",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      color: "border-emerald-500/20 bg-emerald-500/5",
      skills: [
        "Redux Toolkit",
        "Zustand",
        "Context API",
        "IndexedDB (Client Caching)",
        "MongoDB",
        "Data Dirty-Checking Hooks",
        "Query Optimization",
      ],
    },
    {
      title: "Testing & Build Tools",
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      color: "border-amber-500/20 bg-amber-500/5",
      skills: [
        "Jest",
        "Git",
        "GitHub",
        "Webpack",
        "ESLint",
        "Prettier",
        "Turbopack / Vite",
      ],
    },
    {
      title: "UI & Visualization",
      icon: <Palette className="w-5 h-5 text-purple-400" />,
      color: "border-purple-500/20 bg-purple-500/5",
      skills: [
        "Responsive Web Design",
        "Figma to Code",
        "React Flow (Digital Twins)",
        "i18n (Arabic & English RTL/LTR)",
        "Component-Driven UI",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-300 mb-4">
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Modern Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A comprehensive overview of the full stack languages, frameworks, state libraries,
            and developer tooling I use to deliver high-performance applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Card
              key={idx}
              className={`bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-lg transition-all duration-300 hover:translate-y-[-2px] flex flex-col`}
            >
              <CardHeader className="pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/90 border border-slate-700 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-white">
                    {cat.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/70 text-slate-200 border border-slate-700/60 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                      <CheckCircle className="w-3 h-3 text-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
