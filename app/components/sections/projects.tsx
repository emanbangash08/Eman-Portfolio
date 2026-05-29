"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Project = {
  name: string
  description: string
  stack: string[]
  image: string
  imagePosition?: string
  live?: string
  github?: string
}

const projects: Project[] = [
  {
    name: "Cogo Shield",
    description: "Personal safety app with guardian registration, emergency notifications, evidence recording, and escalation chain. Implements secure JWT authentication for user and guardian accounts.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Firebase"],
    image: "/cogo-shield.png",
    live: "https://cogo-shield-8f2h.vercel.app/",
    github: "https://github.com/emanbangash08/cogo-shield",
  },
  {
    name: "Expense Tracker",
    description: "Full-stack MERN application for daily expense management with intuitive dashboard and comprehensive financial analytics.",
    stack: ["MongoDB", "Express", "React", "Node"],
    image: "/expense-tracker-dashboard.jpg",
    live: "https://expense-tracker-three-red-37.vercel.app/",
    github: "https://github.com/emanbangash08/ExpenseTracker",
  },
  {
    name: "Vix Commerce",
    description: "End-to-end Amazon management platform providing sustainable growth solutions with expert teams and comprehensive analytics.",
    stack: ["Next.js", "AWS", "Analytics", "SEO"],
    image: "/vix-commerce-dashboard.jpg",
    live: "https://www.vixcommerce.com/",
    github: "https://github.com/emanbangash08/Vixecommerce",
  },
  {
    name: "GlowCare",
    description: "AI-powered skincare recommendation platform providing personalized beauty solutions with modern user interface design.",
    stack: ["Next.js", "Tailwind", "REST"],
    image: "/skincare-recommendation-interface.jpg",
    github: "https://github.com/emanbangash08/GlowCare",
  },
  {
    name: "HireNest",
    description: "Generate tailored CVs and cover letters for every role, track every application and interview, and get insights on your progress — all from one dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Express.js"],
    image: "/hirenest-1.png",
    imagePosition: "left",
    github: "https://github.com/emanbangash08/HireNest",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-balance text-2xl font-semibold md:text-3xl"
      >
        <span className="gradient-text">Projects</span>
      </motion.h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="group h-full overflow-hidden border-border/60 bg-card/80 backdrop-blur hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-500/40 transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={p.image || "/placeholder.svg"}
                    alt={`${p.name} preview`}
                    className="h-40 w-full object-cover md:h-48 transition-transform duration-500"
                    style={{ objectPosition: p.imagePosition ?? "center" }}
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">{p.name}</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s, index) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge variant="outline" className="border-border/70 hover:border-primary/50 transition-colors duration-200">
                        {s}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 p-4 pt-0">
                {p.live && (
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary text-primary-foreground transform transition-all duration-200 hover:scale-105 hover:shadow-md"
                  >
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
                {p.github && (
                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="transform transition-all duration-200 hover:scale-105 hover:shadow-md"
                  >
                    <a href={p.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
