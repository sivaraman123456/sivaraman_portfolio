"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Send, Code2 } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3"
          : "bg-slate-950/60 backdrop-blur-sm border-b border-slate-800/40 py-4"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group text-white font-bold text-xl sm:text-2xl tracking-tight"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <span>
              Sivaraman<span className="text-cyan-400">.dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/Sivaraman_Full.pdf" download="Sivaraman_FullStack_Resume.pdf">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-white rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                Resume
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="sm"
                className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg shadow-md shadow-blue-600/20 transition-all hover:shadow-cyan-500/30"
              >
                <Send className="w-3.5 h-3.5" />
                Hire Me
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-2.5 py-1 rounded-md"
              >
                Hire Me
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-white hover:bg-slate-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-800 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/Sivaraman_Full.pdf"
                download="Sivaraman_FullStack_Resume.pdf"
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full justify-center gap-2 border-slate-700 bg-slate-900 text-slate-200"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  Download Resume
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
