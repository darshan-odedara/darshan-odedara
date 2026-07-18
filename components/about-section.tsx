"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Download, Github, Linkedin, Brain, Network, Workflow } from "lucide-react";
import { Ripple } from "@/components/magicui/ripple";
import Image from "next/image";
import Link from "next/link";

const experience = {
  company: "Greenway Health India",
  location: "India",
  roles: [
    {
      title: "Associate Software Engineer",
      period: "July 2026 - Present",
      description:
        "Continuing work on production-ready SDLC agents and AI-assisted healthcare engineering at enterprise scale.",
      highlights: [
        "Working toward a production agentic SDLC workflow for automating software delivery.",
        "Contributing to AI-assisted engineering practices as Greenway expands AI methodologies.",
        "Applying system design thinking across large-scale healthcare software workflows.",
      ],
      technologies: ["AI-assisted SDLC", "System Design", "Enterprise Automation"],
    },
    {
      title: "Trainee",
      period: "January 2026 - July   2026",
      description:
        "Worked across agile delivery, EHR product development, microservices, interoperability, and internal SDLC automation.",
      highlights: [
        "Worked on Novare, Greenway Health's AI-first, cloud-first EHR platform.",
        "Built front-end workflows with AI features and later moved into backend microservices.",
        "Handled interoperability challenges across Novare and legacy products like Intergy and PrimeSuite.",
        "Developed SDLC agents across multiple stations to automate parts of enterprise software delivery.",
      ],
      technologies: [".NET", "Microservices", "FHIR", "EHR", "Agile"],
    },
  ],
};

const education = [
  {
    degree: "Bachelor of Technology -  Computer Science & Engineering",
    institution: "Vellore Institute of Technology, Chennai",
    period: "2022 -2026",
    description: "Focused on software engineering and web development.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "RMG Maheshwari English School, Surat",
    period: "2020 - 2022",
    description: "Achieved 88.4% result in the final CBSE board exams.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "JNV Bharuch",
    period: "2015 - 2020",
    description: "Awarded 'Student Of The Year' in 7th grade for all-round performance. Achieved 95% result in the final CBSE board exams.",
  },
];

const interests = [
  "Problem Solving",
  "Agentic SDLC",
  "System Design",
  "Healthcare Technology",
  "Large-Scale Systems",
  "AI-Assisted Engineering",
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <Ripple
        className="absolute inset-0 opacity-5"
      />
      
      <div className="relative z-10 px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A software engineer interested in thoughtful systems, practical problem solving, and technology that makes work simpler.
          </p>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <Image
                src={"/profile.png"}
                alt="Profile Picture"
                width={200}
                height={200}
                className="mx-auto bg-white mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center"/>
                <CardTitle className="text-2xl">Darshan Odedara</CardTitle>
                <p className="text-muted-foreground"><code>A Curious Mind</code></p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Bengaluru</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span>Associate Software Engineer</span>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="flex-1" asChild>
                    <Link href="/resume.pdf" target="_blank" className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Resume
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-center gap-4 pt-4">
                  <motion.a
                    href="https://github.com/darshan-odedara"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/darshan-odedara"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About Text */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Who I Am</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I enjoy looking beyond individual lines of code to understand the people, systems, constraints, and decisions around a product.
                  My work is guided by clarity, curiosity, and a preference for useful, maintainable solutions.
                </p>
                <p>
                  I value deliberate problem solving: breaking down ambiguity, comparing trade-offs, and turning complex ideas into clear plans.
                  I am equally interested in the technical details and the collaboration needed to make software work well in practice.
                </p>
                <p>
                  I am drawn to software engineering, system design, automation, and AI-assisted workflows—especially where they can improve reliability and make everyday work easier.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Professional Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-[4rem_1fr] gap-x-4 gap-y-5 sm:gap-x-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-white p-2">
                  <Image
                    src="/greenway-health-logo.png"
                    alt="Greenway Health logo"
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0 space-y-1">
                  <h3 className="text-xl font-semibold">{experience.company}</h3>
                  <p className="text-sm text-muted-foreground">{experience.location}</p>
                </div>
                <div className="col-span-2 ml-8 space-y-6 md:col-span-1 md:col-start-2 md:ml-0">
                  {experience.roles.map((role, index) => (
                    <div key={role.title} className="relative pl-6">
                      <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-primary" />
                      {index < experience.roles.length - 1 && (
                        <div className="absolute left-[5px] top-5 h-[calc(100%-0.25rem)] w-px bg-border" />
                      )}
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <h4 className="font-semibold">{role.title}</h4>
                          <p className="text-sm text-muted-foreground">{role.period}</p>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{role.description}</p>
                        <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                          {role.highlights.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {role.technologies.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs bg-muted/50">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Areas of Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Problem Solving",
                description: "Approaching complex questions with structure, curiosity, and attention to trade-offs.",
                icon: Brain,
              },
              {
                title: "Large Systems",
                description: "Thinking about architecture, data flow, reliability, and the connections between systems.",
                icon: Network,
              },
              {
                title: "Agentic SDLC",
                description: "Exploring ways AI and automation can support clearer, more effective software delivery.",
                icon: Workflow,
              },
            ].map((item) => (
              <Card key={item.title} className="border-border/50 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-3">
                  <item.icon className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Education & Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Interests & Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="outline"
                        className="text-sm bg-muted/50 hover:bg-muted transition-colors duration-200"
                      >
                        {interest}
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
  );
}
