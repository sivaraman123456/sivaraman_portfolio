import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sivaraman | Full Stack Developer (React.js • Node.js)",
  description:
    "Full Stack Developer with 3 years of experience building scalable web applications with React.js, Next.js, TypeScript, Node.js, and Express.js across SaaS, e-commerce, and real-time dashboards.",
  keywords: [
    "Sivaraman",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "TypeScript",
    "MongoDB",
    "Redux Toolkit",
    "Tailwind CSS",
    "Frontend Developer",
  ],
  authors: [{ name: "Sivaraman" }],
  openGraph: {
    title: "Sivaraman | Full Stack Developer (React.js • Node.js)",
    description:
      "Full Stack Developer with 3 years of experience building scalable web applications, e-commerce platforms, and real-time dashboards.",
    url: "https://sivaraman-portfolio-2ty4.vercel.app/",
    siteName: "Sivaraman Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className="font-sans antialiased bg-slate-950 text-slate-100 min-h-screen selection:bg-blue-600 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
