"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, ExternalLink, Github } from "lucide-react";
import { GridPattern } from "@/components/magicui/grid-pattern";

const projects = [
  {
    title: "Agentic SDLC Workflow",
    description: "A placeholder project for a multi-agent software delivery workflow that coordinates stations across planning, implementation, validation, and release readiness.",
    technologies: ["AI Agents", "SDLC Automation", "System Design", "Enterprise Workflows"],
    github: "https://github.com",
    live: "#",
    featured: true,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <GridPattern
        className="absolute inset-0 opacity-5"
        width={40}
        height={40}
        x={-1}
        y={-1}
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
        ]}
      />
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A focused look at the systems and automation ideas I am currently shaping.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Bot className="mx-auto h-10 w-10 text-muted-foreground" />
                      <span className="text-muted-foreground text-sm">Project visual placeholder</span>
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-muted/50 hover:bg-muted transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </a>
                    </Button>
                    
                    {project.live === "#" ? (
                      <Button size="sm" className="flex-1" disabled>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Coming Soon
                      </Button>
                    ) : (
                      <Button size="sm" className="flex-1 group/btn" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
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
  );
}
