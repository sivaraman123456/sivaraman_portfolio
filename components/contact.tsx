"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Database,
  ShieldCheck,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botField: "", // Honeypot spam protection
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setFeedbackMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFeedbackMessage(
          "Thank you! Your message has been stored in MongoDB and a notification has been dispatched."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          botField: "",
        });
      } else {
        setStatus("error");
        setFeedbackMessage(
          data.message || "Failed to deliver message. Please try again or email directly."
        );
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setFeedbackMessage(
        "Network connection error. Please email me directly at sivaraman93440@gmail.com"
      );
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-300 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Impactful
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Have a project in mind, an engineering role, or want to discuss full-stack architecture?
            Send me a message below or reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Contact</h3>

              <div className="space-y-4">
                <a
                  href="mailto:sivaraman93440@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors break-all">
                      sivaraman93440@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+919344043151"
                  className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Phone</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      +91 9344043151
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/50 border border-slate-700/60">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-white">
                      Chennai, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend & Security verification note */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <Database className="w-4 h-4" />
                  <span>MongoDB Atlas Connected API</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-cyan-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Instant Email Notification & Spam Protection</span>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs uppercase font-semibold text-slate-400 tracking-wider mb-3">
                  Connect on Social
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/siva-raman-a13333242/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-slate-700 bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700"
                    >
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      LinkedIn
                    </Button>
                  </a>

                  <a
                    href="https://github.com/sivaraman123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-slate-700 bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700"
                    >
                      <Github className="w-4 h-4 text-slate-300" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <Card className="bg-slate-900/90 border-slate-800 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-sm text-slate-400 mb-6">
                  Your message will be securely stored in MongoDB and an automated notification will be sent immediately.
                </p>

                {/* Form Alert States */}
                {status === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-300 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-400" />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot hidden input */}
                  <input
                    type="text"
                    name="botField"
                    value={formData.botField}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold text-slate-300 uppercase tracking-wider"
                      >
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-slate-950/80 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500 h-11"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-slate-300 uppercase tracking-wider"
                      >
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-slate-950/80 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500 h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="text-xs font-semibold text-slate-300 uppercase tracking-wider"
                    >
                      Subject / Project Scope
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Full Stack Opportunity / Web App Project"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-slate-950/80 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500 h-11"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-slate-300 uppercase tracking-wider"
                    >
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Hi Sivaraman, I would like to discuss..."
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-slate-950/80 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    size="lg"
                    className="w-full gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-3 shadow-lg shadow-blue-500/20 rounded-xl"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Saving & Dispatching...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
