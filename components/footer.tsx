import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-white">Sivaraman N</h3>
            <p className="text-blue-200">
              Frontend Developer crafting digital experiences
            </p>
            <p className="text-blue-300 text-sm mt-1">Chennai, Tamil Nadu</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/sivaraman123456"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-200 hover:bg-blue-900 hover:text-white"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/siva-raman-a13333242/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-200 hover:bg-blue-900 hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
          <p>&copy; 2024 Sivaraman N. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
