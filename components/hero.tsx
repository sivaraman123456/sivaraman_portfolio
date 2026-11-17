import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Sparkles,
  Zap,
  TrendingUp,
  Layers,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export function Hero() {
  const highlights = [
    {
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      label: "3 Years Experience",
      sub: "Full Stack Web Apps",
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
      label: "75% API Optimization",
      sub: "IndexedDB & Caching",
    },
    {
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      label: "SaaS, POS & E-Com",
      sub: "Production Deployed",
    },
  ];

  const quickTechs = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux Toolkit",
    "Tailwind CSS",
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial gradients for subtle modern glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-indigo-600/20 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full Stack Opportunities</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 ml-1" />
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Sivaraman
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span>Full Stack Developer</span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-400 font-mono text-lg sm:text-xl">
                  React.js • Node.js
                </span>
              </h2>
            </div>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Full Stack Developer with{" "}
              <strong className="text-white font-semibold">3 years of experience</strong>{" "}
              building scalable web applications. Strong frontend foundation and hands-on
              backend experience developing and integrating REST APIs with{" "}
              <span className="text-slate-100 font-medium">React.js, Next.js, Node.js, and Express.js</span>.
              Proven track record across e-commerce, POS workflows, real-time KPI dashboards, and
              cutting API latency by <strong className="text-emerald-400">75%</strong>.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Chennai, India</span>
              </div>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>sivaraman93440@gmail.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a href="#contact">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30 transition-all rounded-xl"
                >
                  <Mail className="w-4 h-4" />
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>

              <a
                href="/Sivaraman_Full.pdf"
                download="Sivaraman_FullStack_Resume.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white rounded-xl transition-colors"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  Download CV
                </Button>
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/sivaraman123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-xl"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </a>

                <a
                  href="https://www.linkedin.com/in/siva-raman-a13333242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 rounded-xl"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Quick Tech Badges */}
            <div className="pt-4 border-t border-slate-800/80">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Core Stack
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5">
                {quickTechs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image & Highlight Cards (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            {/* Profile Avatar Card with Glow */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 opacity-60 blur-lg group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl">
                <Image
                  src="/sivaraman.jpg"
                  alt="Sivaraman - Full Stack Developer"
                  width={300}
                  height={300}
                  priority
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Badge Overlay */}
              <div className="absolute bottom-2 -right-2 bg-slate-900/95 border border-slate-700 text-xs font-mono text-cyan-300 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Full Stack React & Node
              </div>
            </div>

            {/* Metrics cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-md">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center hover:border-slate-700 transition-colors"
                >
                  <div className="flex justify-center mb-1.5">{item.icon}</div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
