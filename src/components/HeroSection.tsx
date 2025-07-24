import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect } from "react";

interface HeroSectionProps {
  name?: string;
  tagline?: string;
  projectsCount?: number;
  clientsCount?: number;
  videosCount?: number;
  backgroundImage?: string;
  profileImage?: string;
}

const HeroSection = ({
  name = "Sonali Singhal",
  tagline = "Crafting stories through cuts, color, and rhythm",
  projectsCount = 60,
  clientsCount = 200,
  videosCount = 4,
  backgroundImage = "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&q=30",
  profileImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=sonali",
}: HeroSectionProps) => {
  const projectsMotionValue = useMotionValue(0);
  const yearsMotionValue = useMotionValue(0);

  const animatedProjects = useTransform(projectsMotionValue, (value) =>
    Math.round(value),
  );
  const animatedYears = useTransform(yearsMotionValue, (value) =>
    Math.round(value),
  );

  useEffect(() => {
    const projectsAnimation = animate(projectsMotionValue, projectsCount, {
      duration: 2,
      delay: 1,
    });

    const yearsAnimation = animate(yearsMotionValue, videosCount, {
      duration: 2,
      delay: 1.2,
    });

    return () => {
      projectsAnimation.stop();
      yearsAnimation.stop();
    };
  }, [projectsCount, videosCount, projectsMotionValue, yearsMotionValue]);
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
      </div>
      {/* Content container */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 flex flex-col h-full justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* Professional title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium"
            >
              Professional Film & Video Editor
            </motion.div>

            {/* Name and headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              {name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-lg"
            >
              {tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => {
                  const aboutSection = document.querySelector(".about-section");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Let's collaborate <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Edits That Delivers Real Results
            </h2>
            <p className="text-gray-400 mb-8">
              From branding assignments to cinematic visual storytelling, my
              work is focused on creating powerful, impactful narratives that
              resonate with audiences.
            </p>

            <div className="space-y-6">
              {/* Projects count */}
              <div className="flex items-center">
                <div className="mr-4">
                  <span className="text-3xl md:text-4xl font-bold text-orange-500">
                    <motion.span>{animatedProjects}</motion.span>+
                  </span>
                  <p className="text-sm text-gray-400">Projects Done</p>
                </div>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              {/* Clients count */}

              {/* Videos count */}
              <div className="flex items-center">
                <div className="mr-4">
                  <span className="text-3xl md:text-4xl font-bold text-orange-500">
                    <motion.span>{animatedYears}</motion.span>+
                  </span>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ height: [6, 12, 6] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 bg-orange-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
