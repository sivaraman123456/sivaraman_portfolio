import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Gymnago – Gym Management SaaS & E-commerce Platform",
      period: "Oct 2025 – Present",
      role: "Frontend & Backend REST APIs",
      badge: "Featured Production SaaS",
      description:
        "Comprehensive enterprise SaaS managing gym sales, memberships, staff/client attendance, biometric devices, and an e-commerce shop module with bi-directional Arabic/English localization.",
      highlights: [
        "Sales & POS: Built cart drawer, dynamic discounts, product variants, promo codes, and multi-tier tax calculations.",
        "Membership Lifecycle: Engineered dirty-checking form hooks, bulk client imports, and dynamic locker mapping.",
        "Reports & Biometrics: Developed attendance tracking syncing with physical biometric devices and multi-branch filters.",
        "Performance Win: Slashed repeated API calls by 75% by architecting IndexedDB client-side caching.",
        "Backend APIs: Contributed to Node.js & Express.js payment and order processing REST APIs.",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "REST APIs",
        "IndexedDB",
        "Jest",
        "i18n (Arabic/English)",
      ],
      featured: true,
    },
    {
      title: "Ucentrics – Industrial AR/VR Machine Training Platform",
      period: "2024 – Present",
      role: "Frontend Lead / Interactive UI",
      badge: "Interactive Graphics & Digital Twin",
      description:
        "An innovative industrial training web platform providing interactive 2D/3D machine handling simulations, admin workflow builders, and real-time equipment annotation.",
      highlights: [
        "Built interactive image annotation tools using KonvaJS with dynamic shapes, labels, and coordinate calculations.",
        "Constructed visual machine workflow editors leveraging React Flow for digital twin simulations.",
        "Created an intuitive admin suite for trainers to configure machine components and track student progress.",
        "Optimized client state and canvas rendering performance using Zustand and Next.js.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "KonvaJS",
        "React Flow",
        "Zustand",
        "SSR",
      ],
      featured: false,
    },
    {
      title: "Career Portal – Enterprise Admin Dashboard",
      period: "2024 – 2025",
      role: "Full Stack / Dashboard Engineering",
      badge: "Recruitment Management",
      description:
        "A secure, high-throughput administrative portal for managing recruitment pipelines, applicant tracking, and role-based permissions.",
      highlights: [
        "Engineered responsive applicant tracking tables with full CRUD functionality, sorting, and multi-filter queries.",
        "Implemented role-based access control (RBAC) protecting sensitive candidate records and salary details.",
        "Utilized Zustand for ultra-lean global state management and PostgreSQL for relational data storage.",
        "Delivered server-side rendered candidate overview pages for optimal load times.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Zustand",
        "PostgreSQL",
        "REST APIs",
      ],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-300 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Software & Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A selection of complex applications I have built and scaled, ranging from
            e-commerce SaaS and biometrics to AR/VR training tools.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className={`bg-slate-900/90 border-slate-800 hover:border-slate-700 shadow-xl overflow-hidden transition-all duration-300 ${
                project.featured
                  ? "ring-1 ring-cyan-500/30"
                  : ""
              }`}
            >
              {project.featured && (
                <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600" />
              )}
              <CardHeader className="p-6 sm:p-8 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {project.badge}
                    </span>
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {project.period}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60 w-fit">
                    {project.role}
                  </span>
                </div>

                <CardTitle className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base text-slate-300 mt-2 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 sm:p-8 pt-0 space-y-6">
                {/* Key Achievements Bullet points */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Architectural & Engineering Contributions
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIdx) => (
                      <Badge
                        key={tIdx}
                        variant="secondary"
                        className="bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700/80 text-xs px-2.5 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
