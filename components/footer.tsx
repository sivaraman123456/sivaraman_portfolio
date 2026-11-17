import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-900">
          {/* Brand Info */}
          <div className="md:col-span-6 text-center md:text-left space-y-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white font-bold text-xl tracking-tight"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Code2 className="w-4 h-4" />
              </div>
              <span>
                Sivaraman<span className="text-cyan-400">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-md">
              Full Stack Developer specializing in React.js, Next.js, Node.js, and Express.js.
              Building high-performance e-commerce SaaS, interactive graphics, and resilient REST APIs.
            </p>
            <p className="text-xs text-slate-500">Chennai, India</p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider mb-3">
              Navigation
            </h4>
            <div className="flex flex-col space-y-1.5 text-sm">
              <Link href="#about" className="hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link href="#skills" className="hover:text-cyan-400 transition-colors">
                Technical Skills
              </Link>
              <Link href="#projects" className="hover:text-cyan-400 transition-colors">
                Featured Projects
              </Link>
              <Link href="#experience" className="hover:text-cyan-400 transition-colors">
                Work Experience
              </Link>
              <Link href="#contact" className="hover:text-cyan-400 transition-colors">
                Contact Me
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end space-y-3">
            <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider">
              Follow & Connect
            </h4>
            <div className="flex gap-2">
              <a
                href="https://github.com/sivaraman123456"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
                >
                  <Github className="w-4 h-4" />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/siva-raman-a13333242/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </a>

              <a href="mailto:sivaraman93440@gmail.com" aria-label="Email">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg"
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {currentYear} Sivaraman. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js 15, TypeScript, Tailwind CSS & MongoDB
          </p>
        </div>
      </div>
    </footer>
  );
}
