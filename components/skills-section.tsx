"use client";

import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";

const skillCategories = [
  {
    category: "Engineering Perspective",
    skills: [
      "System Design",
      "Large-Scale Architecture",
      "Problem Decomposition",
      "Trade-off Analysis",
      "Technical Communication",
    ],
  },
  {
    category: "Software Delivery",
    skills: [
      "Agile Development",
      "Agentic SDLC",
      "Microservices",
      "Cloud Architecture",
      "Interoperability",
    ],
  },
  {
    category: "Core Languages",
    skills: [
      "C++",
      "Java",
      "C# / .NET",
      "Python",
      "TypeScript",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <AnimatedGridPattern
        className="absolute inset-0 opacity-5"
        numSquares={20}
        maxOpacity={0.1}
        duration={4}
        repeatDelay={1}
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
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I prefer to present skills as engineering strengths instead of percentage bars. Tools change, but problem solving, architecture, and delivery judgment compound.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-center">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-lg border border-border/60 bg-muted/20 px-4 py-3"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="border-border/50 bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-center">
                Additional Skills & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "React", "Next.js", "Node.js", "SQL", "REST APIs", "Git",
                  "DSA", "OOP", "FHIR", "EHR Systems", "AI Coding Tools", "Codex",
                  "Claude Code", "Frontend Workflows", "Backend Services", "Healthcare Tech"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
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
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
