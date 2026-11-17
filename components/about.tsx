import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Server,
  Zap,
  Cpu,
  GraduationCap,
  Globe2,
  CheckCircle2,
} from "lucide-react";

export function About() {
  const pillars = [
    {
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      title: "Modern Frontend Engineering",
      description:
        "Building scalable, type-safe web applications using React.js, Next.js (App Router, SSR, SSG), TypeScript, and Tailwind CSS with responsive, accessible UI.",
    },
    {
      icon: <Server className="w-6 h-6 text-blue-400" />,
      title: "Backend & REST API Integration",
      description:
        "Architecting clean, modular REST APIs with Node.js and Express.js, integrating MongoDB and PostgreSQL, and handling payment flows and data validation.",
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      title: "75% Performance Optimization",
      description:
        "Specialized in slashing network overhead, query optimization, request deduplication, and leveraging client-side IndexedDB caching for near-instant rendering.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Complex Modules & Interactive Systems",
      description:
        "Hands-on expertise in KonvaJS canvas image annotations, React Flow digital twins, AR/VR machine handling tools, biometric attendance tracking, and Arabic/English i18n.",
    },
  ];

  const highlights = [
    "3 years of end-to-end full stack development experience",
    "Production work on e-commerce, POS systems, and gym management SaaS",
    "Real-time KPI dashboards, biometric tracking, and multi-branch filters",
    "Master of Computer Applications (MCA) graduate with a 9.1 GPA",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-cyan-300 mb-4">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Crafting Resilient, Scalable Web Applications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I am a Full Stack Developer with 3 years of hands-on experience bridging
            clean, modular frontend design with resilient Node.js backend APIs.
            With a solid mathematical background and an MCA with a 9.1 GPA, I focus on
            building performant, production-ready software that solves real business problems.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <Card
              key={idx}
              className="bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-md transition-all duration-300 hover:translate-y-[-2px]"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Highlights & Education Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Engineering Highlights & Proven Impact
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4 border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8">
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                <div className="flex items-center gap-2 text-cyan-400 mb-1">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    MCA Degree
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-white">9.1 GPA</div>
                <div className="text-xs text-slate-400 mt-1">
                  Christ College of Engineering & Tech
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <Globe2 className="w-5 h-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Languages
                  </span>
                </div>
                <div className="text-lg font-bold text-white">English, Tamil</div>
                <div className="text-xs text-slate-400 mt-1">
                  Arabic i18n localization experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
