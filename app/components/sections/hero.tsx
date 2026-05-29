"use client"

import { motion } from "framer-motion"
import { Sparkles, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative mx-auto w-full max-w-6xl px-4 py-16 md:py-24 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 -left-4 h-80 w-80 rounded-full bg-gradient-to-r from-violet-600/20 to-fuchsia-600/15 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 -right-4 h-96 w-96 rounded-full bg-gradient-to-r from-fuchsia-600/15 to-violet-700/15 blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-10 left-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        {/* Floating dots */}
        <motion.div
          className="absolute top-32 left-1/3 h-3 w-3 rounded-full bg-violet-400/40"
          animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 h-5 w-5 rounded-full bg-fuchsia-400/25"
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 h-2 w-2 rounded-full bg-purple-300/30"
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="order-2 md:order-1"
        >
          <h1 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
            {"Hi, I'm "}
            <span className="gradient-text font-bold">Eman Fatima</span>{" "}
            <span className="ml-2 inline-flex items-center gap-1 rounded-full border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 text-sm text-violet-300 align-middle">
              <Sparkles className="h-4 w-4" aria-hidden />
              <span className="sr-only">Sparkles</span>
              Crafting clean web apps
            </span>
          </h1>

          <motion.p
            className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Full‑stack developer focused on building elegant, secure, and performant experiences with React,
            Node.js, and modern tooling.
          </motion.p>

          <motion.div
            className="mt-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              asChild
              className="glow-primary bg-primary text-primary-foreground hover:opacity-90 transform transition-all duration-200 hover:scale-105"
            >
              <a href="#contact">Let's Connect</a>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="border border-border/60 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300 transform transition-all duration-200 hover:scale-105"
            >
              <a href="#projects" className="inline-flex items-center gap-2">
                View Projects
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </Button>
          </motion.div>

          {/* Tech stack card */}
          <motion.div
            className="mt-6 rounded-xl border border-violet-500/20 bg-card/60 p-4 backdrop-blur-md shadow-lg hover:shadow-violet-500/10 hover:shadow-xl hover:border-violet-500/40 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ y: -2 }}
          >
            <p className="text-sm text-muted-foreground">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
              >
                React • Next.js • Node.js • TailwindCSS • MongoDB • Express • Firebase • JWT
              </motion.span>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="order-1 md:order-2 flex justify-center"
        >
          <motion.div
            className="relative h-48 w-48 md:h-64 md:w-64"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Animated rings outside the overflow container so they don't blur */}
            <motion.div
              className="absolute -inset-1 rounded-full border-2 border-violet-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-0.5 rounded-full border border-fuchsia-400/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Image container — no rotation transform inside here */}
            <div className="relative h-full w-full overflow-hidden rounded-full border border-violet-500/30 bg-card shadow-lg shadow-violet-500/20">
              <Image
                src="/assets/part 4.png"
                alt="Portrait of Eman Fatima"
                fill
                priority
                className="object-cover"
                style={{ objectPosition: "center 25%" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
