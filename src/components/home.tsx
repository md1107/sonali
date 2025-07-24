import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, ExternalLink, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import HeroSection from "./HeroSection";
import PortfolioGallery from "./PortfolioGallery";
import ExperienceTimeline from "./ExperienceTimeline";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "portfolio",
        "skills",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Portfolio" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">Sonali Singhal</h1>
              <span className="ml-2 text-sm text-orange-500">Film Editor</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                    activeSection === item.id ? "text-orange-500" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-zinc-800">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm font-medium transition-colors hover:text-orange-500 ${
                      activeSection === item.id
                        ? "text-orange-500"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="about-section py-20 px-4 md:px-8 lg:px-16 bg-zinc-900"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Crafting Meaningful Stories & Intuitive Digital Experiences
              </h2>
              <p className="text-zinc-300 mb-8">
                Film and Video Editor with 4 years of professional experience in
                the entertainment industry, having collaborated on high-profile
                films, web series and social media platforms. Holding a degree
                in Film Editing from Whistling Woods International, I bring a
                strong technical skill set and a keen eye for storytelling.
              </p>
            </div>
            <div className="relative">
              <img
                src="/sonali-profile.jpg"
                alt="Sonali Singhal"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-5 -left-5 bg-orange-500 p-4 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">4+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-4 md:px-8 lg:px-16 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-center mb-8">
              <a
                href="https://www.imdb.com/name/nm11819347/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors mb-8"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View My IMDB Profile
              </a>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white">
              Professional Experience
            </h2>
            <p className="text-zinc-400 mb-12 text-center max-w-2xl mx-auto">
              A timeline of my journey through the film industry, working on
              feature films, web series, and short films.
            </p>
            <ExperienceTimeline />
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-20 px-4 md:px-8 lg:px-16 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              Selected Projects
            </h2>
            <p className="text-zinc-400 mb-12 text-center max-w-2xl mx-auto">
              Explore my work across various platforms and genres, showcasing my
              versatility and expertise in film and video editing.
            </p>
            <PortfolioGallery />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              Skills & Expertise
            </h2>
            <p className="text-zinc-400 mb-12 text-center max-w-2xl mx-auto">
              Technical proficiencies and creative abilities that define my work
              as a film and video editor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-orange-500 mr-2 text-2xl">01</span>
                    Technical Proficiency
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Badge className="bg-orange-500 mr-2">
                        Adobe Premiere Pro
                      </Badge>
                    </li>
                    <li className="flex items-center">
                      <Badge className="bg-orange-500 mr-2">
                        Adobe After Effects
                      </Badge>
                    </li>
                    <li className="flex items-center">
                      <Badge className="bg-orange-500 mr-2">
                        Avid Media Composer
                      </Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-orange-500 mr-2 text-2xl">02</span>
                    Creative Skills
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Badge className="bg-orange-500 mr-2">Sound Design</Badge>
                    </li>
                    <li className="flex items-center">
                      <Badge className="bg-orange-500 mr-2">
                        Color grading
                      </Badge>
                    </li>
                    <li className="flex items-center">
                      <Badge className="bg-orange-500 mr-2">
                        Text animation
                      </Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-orange-500 mr-2 text-2xl">03</span>
                    Soft Skills
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Badge className="bg-orange-500 mr-2">Storytelling</Badge>
                    </li>
                    <li className="flex items-center">
                      <Badge className="bg-orange-500 mr-2">
                        Attention to Detail
                      </Badge>
                    </li>
                    <li className="flex items-center">
                      <Badge className="bg-orange-500 mr-2">
                        Client Communication
                      </Badge>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-900"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              Education & Training
            </h2>
            <p className="text-zinc-400 mb-12 text-center max-w-2xl mx-auto">
              Academic background and specialized training that has shaped my
              expertise in film editing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Advanced Diploma in Filmmaking – Film Editing
                  </h3>
                  <p className="text-orange-500 mb-4">
                    Whistling Woods International (2018-2020)
                  </p>
                  <p className="text-zinc-300 mb-4">
                    Specialized training in film editing techniques,
                    storytelling, and industry-standard software.
                  </p>
                  <h4 className="font-semibold mb-2">Additional Courses:</h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                    <li>VR Filmmaking and its workflow</li>
                    <li>Advertisements, Music Videos, and Trailer cutting</li>
                    <li>Essentials of Film Direction</li>
                    <li>Essentials of Screen Writing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Bachelor's in Business Administration
                  </h3>
                  <p className="text-orange-500 mb-4">
                    Narsee Monjee Institute of Management Studies (2014-2017)
                  </p>
                  <p className="text-zinc-300 mb-4">
                    Foundation in business principles and management practices.
                  </p>
                  <h4 className="font-semibold mb-2">Key Courses:</h4>
                  <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                    <li>Corporate Finance</li>
                    <li>Branding and Marketing</li>
                    <li>Micro and Macro Economics</li>
                    <li>Strategic Management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Languages</h3>
              <div className="flex space-x-4">
                <Badge className="bg-zinc-800 text-white px-4 py-2">
                  Hindi – Full Professional Proficiency
                </Badge>
                <Badge className="bg-zinc-800 text-white px-4 py-2">
                  English – Full Professional Proficiency
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-zinc-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              Let's Bring Your Vision to Life
            </h2>
            <p className="text-zinc-400 mb-12 text-center max-w-2xl mx-auto">
              Ready to collaborate? Get in touch to discuss your project needs
              and how we can work together.
            </p>

            <div className="flex justify-center">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-orange-500 font-semibold mb-1">
                      Email
                    </h4>
                    <p className="text-white">sonali144jan@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="text-orange-500 font-semibold mb-1">
                      Phone
                    </h4>
                    <p className="text-white">+91 8879773335</p>
                  </div>
                  <div>
                    <h4 className="text-orange-500 font-semibold mb-1">
                      Location
                    </h4>
                    <p className="text-white">Mumbai, India</p>
                  </div>
                  <div>
                    <h4 className="text-orange-500 font-semibold mb-1">IMDB</h4>
                    <a
                      href="https://www.imdb.com/name/nm11819347/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-orange-500 transition-colors"
                    >
                      View IMDB Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 bg-black border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Sonali Singhal</h2>
              <p className="text-zinc-400">Film & Video Editor</p>
            </div>
            <div className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
