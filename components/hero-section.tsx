"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Socials } from "./socials";
import Profile from "./profile";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-3 sm:px-6 lg:px-8">
      <DotPattern
        className="absolute inset-0 opacity-20"
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
          
          {/* Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="w-80 h-60 sm:w-96 sm:h-72 md:w-[450px] md:h-[320px] lg:w-[560px] lg:h-[400px]">
              <Profile />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl lg:max-w-none px-2 sm:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 lg:space-y-8"
            >
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-muted-foreground font-medium"
              >
                Hello, I'm
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight"
              >
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Darshan Odedara
                </span>
              </motion.h1>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-muted-foreground font-medium space-y-1 sm:space-y-2"
              >
                <p>A Software Engineer</p>
                <p>A Curious Mind</p>
              </motion.div>

              {/* Social Links - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 pt-4 sm:pt-6 lg:pt-8"
              >
                <Socials />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 sm:h-3 bg-muted-foreground/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
