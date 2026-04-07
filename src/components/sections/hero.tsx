"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper
      id="hero"
      className={cn("relative w-full h-screen overflow-hidden")}
    >
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1 flex flex-col justify-center items-start",
            "pt-28 md:p-20 lg:p-24 xl:p-28",
          )}
        >
          {!isLoading && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
              className="flex flex-col"
            >
              {/* Intro */}
              <BlurIn delay={0.5}>
                <p className="text-slate-500 dark:text-zinc-400 text-lg">
                  Hi, I am
                </p>
              </BlurIn>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="leading-none font-thin text-6xl md:text-8xl xl:text-9xl font-display"
              >
                <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-[shine_4s_linear_infinite]">
                  {config.author.split(" ")[0]}
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-[shine_6s_linear_infinite]">
                  {config.author.split(" ")[1]}
                </span>
              </motion.h1>

              {/* Typing Role */}
              <div className="mt-4">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1500,
                    "AI SaaS Builder",
                    1500,
                    "React + Next.js Developer",
                    1500,
                    "RAG & AI Systems Engineer",
                    1500,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="text-slate-500 dark:text-zinc-400 text-lg md:text-xl"
                />
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-4 w-fit">
                <Link
                  href="https://drive.google.com/file/d/1NxrWpQntu8JE8cpBUVkPTw7tTSAug8GE/view?usp=sharing"
                  target="_blank"
                >
                  <BoxReveal delay={1.5} width="100%">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className="relative group w-full"
                    >
                      {/* Glow Background */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-60 blur-xl transition duration-500" />

                      <Button
                        className="
      relative w-full flex items-center justify-center gap-2
      rounded-xl px-5 py-3
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white font-medium
      shadow-lg shadow-blue-500/20
      border border-white/10
      transition-all duration-300
      hover:shadow-purple-500/40
    "
                      >
                        <File size={18} />
                        Resume
                      </Button>
                    </motion.div>
                  </BoxReveal>
                </Link>

                <div className="flex gap-3">
                  <Tooltip delayDuration={200}>
                    <TooltipTrigger asChild>
                      <Link href="#contact">
                        <Button variant="outline">Hire Me</Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Let’s build something great 🚀</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* SOCIAL LINKS (SAFE + ANIMATED) */}
                  <div className="flex gap-2">
                    {config.social.github && (
                      <motion.div whileHover={{ scale: 1.15, y: -3 }}>
                        <Link href={config.social.github} target="_blank">
                          <Button variant="outline">
                            <SiGithub size={18} />
                          </Button>
                        </Link>
                      </motion.div>
                    )}

                    {config.social.linkedin && (
                      <motion.div whileHover={{ scale: 1.15, y: -3 }}>
                        <Link href={config.social.linkedin} target="_blank">
                          <Button variant="outline">
                            <SiLinkedin size={18} />
                          </Button>
                        </Link>
                      </motion.div>
                    )}

                    {config.social.twitter && (
                      <motion.div whileHover={{ scale: 1.15, y: -3 }}>
                        <Link href={config.social.twitter} target="_blank">
                          <Button variant="outline">
                            <SiX size={18} />
                          </Button>
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* RIGHT SIDE (keep for future 3D / image) */}
        <div className="hidden md:block"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
