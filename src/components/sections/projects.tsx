"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import { motion } from "framer-motion";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <SectionHeader id='projects' title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <Modall key={project.src || index} project={project} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-neutral-500">
            No projects found. Please check your data source.
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn p-0 w-full">
          <motion.div
            whileHover="hover"
            initial="initial"
            className="relative w-full max-w-[400px] rounded-2xl overflow-hidden cursor-pointer bg-neutral-100 dark:bg-neutral-900 shadow-xl border border-neutral-200 dark:border-neutral-800"
            style={{ aspectRatio: "3/2" }}
          >
            {/* Image Layer with Smooth Zoom */}
            <motion.div
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.08 }
              }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                className="object-cover w-full h-full"
                src={project.src}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </motion.div>

            {/* Gradient Overlay for Text Legibility */}
            <motion.div 
              variants={{
                initial: { opacity: 0.6 },
                hover: { opacity: 0.8 }
              }}
              className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300" 
            />

            {/* Content Layer */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <motion.div
                variants={{
                  initial: { y: 0 },
                  hover: { y: -12 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="text-xl font-bold text-white mb-2 text-left drop-shadow-md">
                  {project.title}
                </div>
                
                <div className="text-xs font-medium bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full w-fit px-3 py-1">
                  {project.category}
                </div>
              </motion.div>

              {/* "View Details" Animated Reveal */}
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 10 },
                  hover: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-3 text-sm text-white/90 flex items-center gap-2 font-medium"
              >
                <span>View Project Details</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.div>
            </div>

            {/* Subtle Border Highlight on Hover */}
            <motion.div
              variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 }
              }}
              className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none"
            />
          </motion.div>
        </ModalTrigger>
        
        <ModalBody className="md:max-w-4xl md:max-h-[85%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button className="px-4 py-2 bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white border border-neutral-300 dark:border-neutral-700 rounded-lg text-sm font-medium transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
              Close
            </button>
            <Link href={project.live} target="_blank" className="block">
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-6 py-2 rounded-lg border border-black dark:border-white font-bold transition-transform active:scale-95">
                Visit Live Site
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <div className="py-4">
      <h4 className="text-2xl md:text-3xl text-neutral-800 dark:text-neutral-100 font-bold text-center mb-10 tracking-tight">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-8 mb-12">
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs uppercase tracking-widest font-bold text-neutral-500 dark:text-neutral-400">
            Frontend Stack
          </p>
          {project.skills?.frontend?.length > 0 ? (
            <FloatingDock items={project.skills.frontend} />
          ) : (
            <span className="text-sm italic text-neutral-400">Not specified</span>
          )}
        </div>
        
        {project.skills?.backend?.length > 0 && (
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs uppercase tracking-widest font-bold text-neutral-500 dark:text-neutral-400">
              Backend Stack
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      <div className="prose prose-neutral dark:prose-invert max-w-none px-2">
        {project.content}
      </div>
    </div>
  );
};

export default ProjectsSection;