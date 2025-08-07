'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react'

export function Contact() {
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
  }
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-lg text-blue-200">
            Let`s discuss your next project or just say hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-100">Let`s work together</h3>
              <p className="text-blue-200 mb-6">
                I`m always interested in new opportunities and exciting projects. 
                Whether you have a project in mind or just want to chat about frontend development, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-blue-200">sivaraman9344@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-blue-200">+91 9344043151</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-blue-200">Chennai, Tamil Nadu</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h4 className="font-medium text-white">LinkedIn</h4>
                  <p className="text-blue-200">linkedin.com/in/sivaraman-a13333242</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h4 className="font-medium text-white">GitHub</h4>
                  <p className="text-blue-200">github.com/sivaraman123456</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="bg-blue-800 text-white rounded-t-lg">
              <CardTitle>Send me a message</CardTitle>
              <CardDescription className="text-blue-100">
                Fill out the form below and I`ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Your Name" className="border-blue-300 focus:border-blue-500" required/>
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="border-blue-300 focus:border-blue-500" required/>
                  </div>
                </div>
                <div>
                  <Input placeholder="Subject" className="border-blue-300 focus:border-blue-500" required/>
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    className="min-h-[120px] border-blue-300 focus:border-blue-500"
                  />
                </div>
                <Button className="w-full bg-blue-900 hover:bg-blue-800" type="submit" >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
