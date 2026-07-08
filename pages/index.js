import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import ProjectCarousel from '../components/ProjectCarousel';
import SkillsCarousel from '../components/SkillsCarousel';
import { projects } from '../data/projects';
import { skills } from '../data/skills';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored === 'true') setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleSend = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus('sending');
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      { from_name: formData.name, from_email: formData.email, message: formData.message },
      'YOUR_PUBLIC_KEY'
    ).then(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }).catch(() => setFormStatus('error'));
  };

  return (
    <>
      <Head>
        <title>Jitimay Josué — Applied AI & Embedded Systems</title>
        <meta name="description" content="Computer Science graduate (BIU, 2026) building applied AI and offline-first systems for African markets. Embedded systems, edge AI, blockchain, and research." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Hero Section */}
        <section className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 relative overflow-visible">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"></div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-20"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              y: [0, 15, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-40 left-10 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-15"
          ></motion.div>

          <motion.div 
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-20 w-12 h-12 border-2 border-purple-400 rounded-lg opacity-30"
          ></motion.div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
              
              {/* Left Content */}
              <div className="space-y-8">
                {/* Status Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                  DEEP LEARNING INDABA 2026 — LAGOS
                </motion.div>

                {/* Main Heading */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h1 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight">
                    Hi, I'm an
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                      applied AI
                    </span>
                    <br />
                    <span className="text-gray-700 dark:text-gray-300">
                      researcher &
                    </span>
                    <br />
                    builder
                    <span className="text-blue-600">©</span>
                  </h1>
                </motion.div>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
                >
                  Graduating July 2026 with a B.Sc. in Computer Science from Bujumbura International University. 
                  I build applied AI systems and offline-first infrastructure for African markets — from SMS-based medical triage to blockchain savings platforms and edge AI on microcontrollers.
                </motion.p>

                {/* CTA Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <button 
                    onClick={() => {
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Research collaboration & select projects
                  </button>
                </motion.div>
              </div>

              {/* Right Content */}
              <div className="relative px-4 sm:px-12 py-8">
                {/* Profile Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative"
                >
                  {/* Main Profile Image */}
                  <div className="relative z-20 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">Jitimay Josué</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Bujumbura, Burundi</p>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                      <img 
                        src="/Josh.jpg" 
                        alt="Jitimay Josué"
                        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x320/6366f1/ffffff?text=Jitimay+Josué";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      <a href="https://github.com/Jitimay" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-gray-900 dark:hover:bg-white transition-colors group">
                        <svg className="w-5 h-5 text-gray-800 dark:text-gray-300 group-hover:text-white dark:group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/josu%C3%A9-jitimay-8b4aa923a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8s5DhMO4SeO7BlsHhigwzA%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors group">
                        <svg className="w-5 h-5 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="https://x.com/SpatiumL44991" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-black transition-colors group">
                        <svg className="w-5 h-5 text-black dark:text-white group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=100009109167059" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-colors group">
                        <svg className="w-5 h-5 text-blue-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href="mailto:jitimayjosh1@gmail.com" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-red-500 transition-colors group">
                        <svg className="w-5 h-5 text-red-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                      <a href="tel:+25769820499" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-green-500 transition-colors group">
                        <svg className="w-5 h-5 text-green-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Floating Skill Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -left-4 sm:-left-16 top-16 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl z-30 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl">🤖</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">APPLIED AI RESEARCH</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Edge · Offline-first · Africa</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Brands Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="absolute -bottom-20 left-4 right-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-4 shadow-xl z-30"
                  >
                    <p className="text-white text-sm font-medium mb-2">Deep Learning Indaba</p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">NG</span>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">RW</span>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">GH</span>
                        </div>
                      </div>
                      <span className="text-white/80 text-xs">2023 · 2025 · 2026</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Me</h2>
            <div className="text-lg text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                I'm graduating in July 2026 with a B.Sc. in Computer Science from{' '}
                <strong className="text-gray-900 dark:text-white">Bujumbura International University (BIU)</strong>.
                My work sits at the intersection of applied AI research, embedded systems, and offline-first infrastructure for African markets.
              </p>
              <p>
                I'm the founder of <strong className="text-gray-900 dark:text-white">Spatium Lapis</strong>, where I built
                Burundi's first smart vending machine. Recent projects include an SMS-based medical triage system in Kirundi/French
                (fine-tuned Gemma), a blockchain rotating-savings platform on Sui, and an SMS-to-LLM multilingual gateway.
                I'm currently interning at REGIDESO building MajiSafe, a smart water and electricity dispensing platform.
              </p>
              <p>
                I've presented research at Deep Learning Indaba in Accra (2023), Kigali (2025), and Lagos (2026),
                where my Regulus poster was accepted to Research in Africa Days. I'm interested in research collaborations
                and select engineering projects focused on practical impact in low-resource environments.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore my innovative projects in embedded systems, AI, and robotics that are shaping the future of technology in Africa.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ProjectCarousel projects={projects} />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Expertise</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                From brain-computer interfaces to embedded systems, explore the technologies I use to build innovative solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <SkillsCarousel skills={skills} />
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Experience</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Engineering Intern</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">REGIDESO (National Water & Electricity Utility) · 2026–Present</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Building MajiSafe, a smart water and electricity dispensing platform. Stack: ESP32/SIM800L hardware,
                  Node.js/Express backend, Flutter mobile app, React dashboard, SHA-256 hash-chained ledger for tamper-evident transaction records.
                </p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Founder & Lead Engineer</h3>
                <p className="text-purple-600 dark:text-purple-400 mb-2">Spatium Lapis · Jan 2024–Present</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Designed Ikimashini, Burundi's first smart vending machine for medication and essentials.
                  Built UbwonkoEdge AI, a lightweight on-device AI inference framework for ESP32 microcontrollers.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Physics Teacher</h3>
                <p className="text-yellow-600 dark:text-yellow-400 mb-2">2024–Present</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Teaching secondary-level physics alongside engineering work.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Developer</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">Uhuru Chat Inc · Aug 2024–Present</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Contributing to backend and frontend development of an international chat application
                  using Flutter and Firebase.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Staff Member</h3>
                <p className="text-green-600 dark:text-green-400 mb-2">Génies en Herbe Burundi · Feb 2020–Present</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Engineered an 8-player Arduino buzzer system with lockout logic for national competitions.
                  Authored quiz questions and supported event logistics.
                </p>
              </div>
              <div className="border-l-4 border-gray-400 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Webmaster</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">Buja Sans Tabou</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Managed and maintained the organization's web presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Achievements Section */}
        <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Awards & Achievements</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Recognition for technical work and competition results in Burundi.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-700 shadow-lg"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1st Place</h3>
                  <p className="text-yellow-700 dark:text-yellow-300 font-semibold mb-2">National Pitch Competition</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Burundi · 2024</p>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      National startup pitch competition, technology track.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-700 shadow-lg"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🥈</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2nd Place</h3>
                  <p className="text-blue-700 dark:text-blue-300 font-semibold mb-2">Arduino Day Competition</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Burundi · 2025</p>
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Embedded systems and Arduino project competition.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-700 shadow-lg"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🧠</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Champion</h3>
                  <p className="text-green-700 dark:text-green-300 font-semibold mb-2">National Quiz Competition</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Burundi · 2020</p>
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Génies en Herbe national academic competition.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Other Recognition</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-black">3</div>
                  <div className="text-purple-100">Competition Awards</div>
                </div>
                <div>
                  <div className="text-3xl font-black">3×</div>
                  <div className="text-purple-100">Deep Learning Indaba</div>
                </div>
                <div>
                  <div className="text-3xl font-black">2</div>
                  <div className="text-purple-100">Hackathon Submissions (2026)</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Conferences & Research Section */}
        <section id="conferences" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-2 text-center">Conferences & Research</h2>
              <p className="text-purple-100 text-center mb-10">Deep Learning Indaba attendee and poster presenter.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-sm font-semibold text-purple-200 mb-1">2026 · Lagos, Nigeria</div>
                  <div className="font-bold text-lg mb-1">Deep Learning Indaba</div>
                  <div className="text-sm text-purple-100">Research in Africa Days — poster presenter (Regulus)</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-sm font-semibold text-purple-200 mb-1">2025 · Kigali, Rwanda</div>
                  <div className="font-bold text-lg mb-1">Deep Learning Indaba</div>
                  <div className="text-sm text-purple-100">Attendee</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-sm font-semibold text-purple-200 mb-1">2023 · Accra, Ghana</div>
                  <div className="font-bold text-lg mb-1">Deep Learning Indaba</div>
                  <div className="text-sm text-purple-100">Attendee</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Research</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Peer-reviewed and accepted research contributions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Header bar */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 flex items-center gap-2">
                <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">Accepted Poster</span>
                <span className="ml-auto text-white/70 text-xs">Research in Africa Days · Deep Learning Indaba 2026</span>
              </div>

              <div className="p-6 sm:p-8 bg-white dark:bg-gray-800">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Left: text content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Regulus</h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mt-1">
                        Deep Learning Indaba 2026 · Lagos, Nigeria · August 2026
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      An AI-assisted policy simulation platform combining a hybrid LLM + calibrated simulation engine architecture.
                      Uses a confidence coefficient to encode data-availability uncertainty, applied to the Nigeria 2023 fuel subsidy removal as a primary case study.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {["Flutter Web", "BLoC", "Supabase Edge Functions", "Groq API", "LLM", "Policy Simulation"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium border border-purple-200 dark:border-purple-700">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Citation */}
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-mono border-l-2 border-gray-300 dark:border-gray-600 pl-3 leading-relaxed">
                      Jitimay Josué. <em>Regulus: AI-Assisted Policy Simulation.</em> Research in Africa Days, Deep Learning Indaba 2026.
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href="/research/regulus-poster.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        </svg>
                        View Poster (PDF)
                      </a>
                      <a
                        href="https://regulus-policy-sim.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-sm hover:from-purple-700 hover:to-blue-700 transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Right: venue badge */}
                  <div className="sm:w-40 flex-shrink-0">
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-700 rounded-2xl p-4 text-center space-y-2">
                      <div className="text-3xl">🧠</div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide">Deep Learning Indaba</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Lagos, Nigeria</p>
                      <p className="text-xs text-purple-600 dark:text-purple-400 font-semibold">August 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">Let's Connect</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
                Available for research collaboration and select engineering projects.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <a href="mailto:jitimayjosh1@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      jitimayjosh1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <a href="tel:+25769820499" className="text-green-600 dark:text-green-400 hover:underline">
                      +257 69 82 04 99
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Location</p>
                    <p className="text-purple-600 dark:text-purple-400">Bujumbura, Burundi</p>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Follow me on social media:</p>
                  <div className="flex space-x-3">
                    <a href="https://github.com/Jitimay" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-900 dark:hover:bg-white transition-colors group">
                      <svg className="w-5 h-5 text-gray-800 dark:text-gray-300 group-hover:text-white dark:group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/josu%C3%A9-jitimay-8b4aa923a" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group">
                      <svg className="w-5 h-5 text-blue-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Quick Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Quick Message</h3>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <textarea 
                        rows="4" 
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      ></textarea>
                    </div>
                    {formStatus === 'success' && <p className="text-green-600 dark:text-green-400 text-sm">Message sent!</p>}
                    {formStatus === 'error' && <p className="text-red-600 dark:text-red-400 text-sm">Failed to send. Try emailing directly.</p>}
                    <button 
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {formStatus === 'sending' ? 'Sending…' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://github.com/Jitimay" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/josu%C3%A9-jitimay-8b4aa923a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8s5DhMO4SeO7BlsHhigwzA%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                LinkedIn
              </a>
              <a href="https://x.com/SpatiumL44991" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                X (Twitter)
              </a>
              <a href="https://www.facebook.com/profile.php?id=100009109167059" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Facebook
              </a>
              <a href="mailto:jitimayjosh1@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Email
              </a>
              <a href="tel:+25769820499" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Phone
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              © 2026 Jitimay Josué. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
