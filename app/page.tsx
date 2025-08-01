"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, MapPin, Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const skills = {
    languages: ["C", "Java", "JavaScript", "C++", "TypeScript"],
    technologies: ["Git", "MongoDB", "MySQL", "Next.js", "Node.js", "Tailwind", "PostgreSQL"],
  }

  const projects = [
    {
      title: "Hotel Management System",
      description:
        "Real-time room booking with customer management and admin dashboard. Built with Angular for seamless user experience.",
     image: "/hotel.png",
      github: "https://github.com/harshitemp/LockTrip",
      live: "https://elegant-squirrel-d85f23.netlify.app/",
      tech: ["Angular", "TypeScript", "CSS"],
    },
    {
      title: "Kyara Beverages",
      description:
        "Modern beverage company website with hero section, product showcase, and responsive design across all devices.",
      image: "/kuber.png",
      github: "https://github.com/harshitemp/kyara-website",
      live: "https://harshitemp.github.io/kyara-website/#hero",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Role-Based Access Control",
      description:
        "RBAC system with different permission levels for Admin, Manager, and Employee roles with secure authentication.",
      image: "/rb.png",
      github: "https://github.com/harshitemp/rbac",
      live: "https://cute-pavlova-4f38da.netlify.app/signup-page",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Placement & Training Portal",
      description:
        "Campus placement system with drive registration, email notifications, and Excel integration for seamless management.",
      image: "/placement.jpg",
      github: "https://github.com/harshitemp/Domainproject",
      live: "#",
      tech: ["Angular", "Node.js", "MongoDB"],
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />
        <motion.div className="absolute inset-0 opacity-30" style={{ y }}>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" />
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Harshitha
          </motion.h1>

          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-white dark:bg-gray-900 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Harshitha
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              A fourth-year undergraduate engineering student at{" "}
              <strong>Centurion University of Technology and Management</strong>, Vizianagaram. Passionate about
              creating innovative web solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>

              <Button
  variant="outline"
  size="lg"
  className="hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 bg-transparent"
  asChild
>
  <a href="/MyCV.pdf" download>
    <Download className="mr-2 h-4 w-4" />
    Download CV
  </a>
</Button>

            </motion.div>

            <motion.div
              className="flex space-x-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/harshitha-poojari-110b78261/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-110 transition-all duration-200"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="https://github.com/harshitemp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transform hover:scale-110 transition-all duration-200"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                <img
                  src="/myimage.jpg?height=300&width=300"
                  alt="Harshitha Poojari"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400">My introduction</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-80 h-80 mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 to-blue-500 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                  <img
                    src="/about.jpg?height=300&width=300"
                    alt="About Harshitha"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm a Full Stack Web Developer and B.Tech Computer Science student with practical experience building
                interactive and user-centered applications. Skilled in problem solving and collaborating with teams to
                develop user-friendly applications and eager to keep learning new technologies.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                  <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">8.92+</h3>
                  <p className="text-gray-600 dark:text-gray-400">CGPA</p>
                </motion.div>

                <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
                  <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400">4+</h3>
                  <p className="text-gray-600 dark:text-gray-400">Projects</p>
                </motion.div>
              </div>

              <Button
                variant="outline"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
              >
 
  <a href="/Harshitha_CV.pdf" download>
    <Download className="mr-2 h-4 w-4" />
    Download CV
  </a>
</Button>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
            <p className="text-gray-600 dark:text-gray-400">My technical level</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                <CardContent>
                  <h3 className="text-2xl font-bold mb-6 text-center">Programming Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.languages.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm py-2 px-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-200"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                <CardContent>
                  <h3 className="text-2xl font-bold mb-6 text-center">Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.technologies.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm py-2 px-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 hover:from-green-200 hover:to-blue-200 dark:hover:from-green-800 dark:hover:to-blue-800 transition-all duration-200"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">Most recent work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 bg-transparent"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>

                      {project.live !== "#" && (
                        <Button
                          size="sm"
                          asChild
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-600 dark:text-gray-400">Get in touch</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">harshithapoojari123@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                    <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">Vizianagaram, Andhra Pradesh, India</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
  <CardContent>
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
          placeholder="Your message..."
        />
      </div>

      <a
        href="mailto:harshithapoojari123@gmail.com?subject=Portfolio Contact&body=Hi Harshitha,%0D%0A%0D%0AI saw your portfolio and wanted to get in touch with you."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
        >
          <Mail className="mr-2 h-4 w-4" />
          Send Message
        </Button>
      </a>
    </div>
  </CardContent>
</Card>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Harshitha
              </h3>
              <p className="text-gray-400">Full Stack Developer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Skills", "Projects", "Contact"].map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/harshitemp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/harshitha-poojari-110b78261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2025 Harshitha Poojari. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronDown className="h-5 w-5 rotate-180" />
      </motion.button>
    </div>
  )
}
