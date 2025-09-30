import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I`m <span className="text-blue-300">Sivaraman N</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-blue-200">
              MERN Stack Developer
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl">
                I have strong experience in MERN Stack development using ReactJS,
                NextJS, TailwindCSS, Expressjs, MongoDB and Zustand, focusing on building scalable,
                responsive applications. I`ve worked on complex  modules like Bulk Upload feature, CRUD Table operation,
                Image Annotation tools and admin dashboards.
              </p>
              <div className="flex items-center gap-2 text-blue-200">
                <MapPin className="w-4 h-4" />
                <span>Chennai, Tamil Nadu</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact">
              <Button
                size="lg"
                className="gap-2 bg-white text-blue-900 hover:bg-blue-50"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-blue-300 text-blue-600 hover:bg-blue-800"
              >
                <Download className="w-4 h-4" />
                <a href="/Sivaraman_Full.pdf" download>
                  Download CV
                </a>
              </Button>
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
                  className="text-blue-200 hover:bg-blue-800 hover:text-white"
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
                  className="text-blue-200 hover:bg-blue-800 hover:text-white"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-blue-800/50 flex items-center justify-center backdrop-blur-sm border border-blue-700">
                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-blue-300">
                  <Image
                    src="/sivaraman.jpg"
                    alt="Sivaraman N"
                    width={300}
                    height={300}
                    className="w-full h-[117%] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
