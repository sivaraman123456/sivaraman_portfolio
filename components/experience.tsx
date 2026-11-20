import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  CalendarDays,
  Building2,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
} from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Pixel Mind IT Solutions",
      project: "Gymnago – Gym Management SaaS & E-commerce Platform",
      period: "Oct 2025 – Present",
      location: "Chennai, India",
      type: "Full-Time",
      current: true,
      points: [
        "Sales & POS: Built the shopping cart drawer, dynamic discounts, product variants, and tax/pricing calculations, including promo codes and multiple tax rates.",
        "Membership & Clients: Implemented single/edit membership lifecycle, dirty-checking hooks, bulk client import, and locker mapping.",
        "Reports & Diagnostics: Developed client/staff attendance reports with biometric device tracking, diagnostic event tables, and multi-branch filters.",
        "Dashboards & i18n: Built real-time KPI widgets (retention, visit trends, trainer schedules) and delivered full Arabic & English localization.",
        "75% API Optimization: Slashed repeated API calls by 75% through query optimization, request deduplication, and IndexedDB client-side caching.",
        "Backend REST APIs: Contributed to backend development for the Shop module using Node.js and Express.js, including payment REST API integration.",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "IndexedDB",
        'MongoDB'
      ],
    },
    {
      role: "Frontend Developer",
      company: "Talentship Pvt Ltd",
      project: "Enterprise Dashboards & Interactive Annotation",
      period: "2024 – Oct 2025",
      location: "Chennai, Tamil Nadu",
      type: "Full-Time",
      current: false,
      points: [
        "Developed web application interfaces using React.js, Next.js, Tailwind CSS, and Zustand.",
        "Built reusable UI components, server-side rendered pages, and responsive admin dashboards with full CRUD operations.",
        "Implemented KonvaJS-based interactive image annotation features with dynamic shapes, labels, and coordinate storage.",
        "Managed complex UI states, client caching, and integrated REST APIs seamlessly.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Zustand",
        "KonvaJS",
        "REST APIs",
        "SSR",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Talentship Pvt Ltd",
      project: "Keel HRMS Internal Platform",
      period: "Feb 2024 – Jul 2024",
      location: "Chennai, Tamil Nadu",
      type: "Internship",
      current: false,
      points: [
        "Worked on the Keel HRMS internal project, implementing employee form validation, document uploads, and REST API integration.",
        "Collaborated across a full-stack environment with Django, React.js, Tailwind CSS, and PostgreSQL.",
        "Ensured responsive layouts and error handling for critical employee onboarding workflows.",
      ],
      technologies: [
        "React.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Form Validation",
        "REST APIs",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Christ College of Engineering Technology",
      location: "Puducherry",
      period: "2022 – 2024",
      grade: "GPA: 9.1 / 10",
      honors: "First Class with Distinction",
    },
    {
      degree: "Bachelor of Science – Mathematics (B.Sc)",
      institution: "Arignar Anna Government Arts & Science College",
      location: "Villupuram",
      period: "2018 – 2021",
      grade: "GPA: 8.0 / 10",
      honors: "Strong foundation in Algorithms & Mathematical Logic",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-cyan-300 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            3 years of professional engineering experience delivering production software
            coupled with a strong academic background in Computer Applications and Mathematics.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-cyan-400" />
            <span>Professional Work Experience</span>
          </h3>

          <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                    exp.current
                      ? "bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50"
                      : "bg-slate-900 border-slate-700 group-hover:border-slate-500"
                  } transition-colors`}
                />

                <Card className="bg-slate-900/90 border-slate-800 hover:border-slate-700 shadow-lg transition-all duration-300">
                  <CardHeader className="p-6 pb-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <CardTitle className="text-xl sm:text-2xl font-bold text-white">
                            {exp.role}
                          </CardTitle>
                          {exp.current && (
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                              Current Role
                            </span>
                          )}
                          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                            {exp.type}
                          </span>
                        </div>

                        <CardDescription className="text-base font-medium text-cyan-400 flex items-center gap-1.5 mt-1">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-slate-400 font-normal text-sm">
                            {exp.project}
                          </span>
                        </CardDescription>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                        <div className="flex items-center gap-1.5">
                          <CalendarDays className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 pt-2 space-y-4">
                    <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                      {exp.technologies.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-xs rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            <span>Academic Background</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <Card
                key={idx}
                className="bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-md p-6 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      <Award className="w-3.5 h-3.5" />
                      {edu.grade}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-slate-300 mb-2 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {edu.location}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                  {edu.honors}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
