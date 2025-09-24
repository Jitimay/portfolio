import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import ProjectCarousel from '../components/ProjectCarousel';
import SkillsCarousel from '../components/SkillsCarousel';
import { projects } from '../data/projects';
import { skills } from '../data/skills';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <Head>
        <title>Jitimay Josué - Embedded Systems & AI Enthusiast</title>
        <meta name="description" content="Full-stack developer specializing in embedded systems, IoT, and AI solutions" />
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
                  className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  AVAILABLE FOR HACKATHONS
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
                      embedded
                    </span>
                    <br />
                    <span className="text-gray-700 dark:text-gray-300">
                      systems
                    </span>
                    <br />
                    engineer
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
                  Founder of Spatium Lapis, building Burundi's first smart vending machines. 
                  I specialize in mind-controlled robotics, embedded AI systems, and have won multiple national competitions.
                </motion.p>

                {/* CTA Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <button className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Let's Build Together
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
                      <a href="https://github.com/Jitimay" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                        <span className="text-xl">🐙</span>
                      </a>
                      <a href="https://www.linkedin.com/in/josu%C3%A9-jitimay-8b4aa923a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8s5DhMO4SeO7BlsHhigwzA%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                        <span className="text-xl">💼</span>
                      </a>
                      <a href="https://x.com/SpatiumL44991" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                        <span className="text-xl">🐦</span>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=100009109167059" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                        <span className="text-xl">📘</span>
                      </a>
                      <a href="mailto:jitimayjosh1@gmail.com" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                        <span className="text-xl">📧</span>
                      </a>
                      <a href="tel:+25769820499" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                        <span className="text-xl">📱</span>
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
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">BCI EXPERT</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">OpenBCI • ESP32</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Rate Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute -right-4 sm:-right-16 bottom-32 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl z-30 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">$50 - $100</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">per hour</p>
                    </div>
                  </motion.div>

                  {/* Floating Brands Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="absolute -bottom-12 left-4 right-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-4 shadow-xl z-30"
                  >
                    <p className="text-white text-sm font-medium mb-2">National Competition Wins</p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs">🏆</span>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs">🥈</span>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs">🧠</span>
                        </div>
                      </div>
                      <span className="text-white/80 text-xs">2024-2025</span>
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
                I'm the founder of <strong className="text-gray-900 dark:text-white">Spatium Lapis</strong>, where I'm building 
                Burundi's first smart vending machine for medication and essentials. My passion lies in creating 
                innovative solutions that combine embedded systems, AI, and brain-computer interfaces.
              </p>
              <p>
                Currently pursuing my Bachelor of Science and Technology, I've developed groundbreaking projects 
                including mind-controlled robots using OpenBCI and ESP32, and UbwonkoEdge AI - a lightweight 
                on-device AI framework for microcontrollers.
              </p>
              <p>
                As a national competition winner and Indaba Deep Learning conference attendee, I'm committed to 
                pushing the boundaries of what's possible with embedded AI and robotics in Africa.
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
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Founder & Lead Engineer</h3>
                <p className="text-purple-600 dark:text-purple-400 mb-2">Spatium Lapis • Jan 2024 - Present</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Designed Ikimashini, Burundi's first smart vending machine for medication and essentials. 
                  Built UbwonkoEdge AI, a lightweight on-device AI framework for ESP32 microcontrollers.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Developer</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">Uhuru Chat Inc • Aug 2024 - Present</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Contributing to backend/frontend development of an international chat application 
                  using Flutter and Firebase, serving users globally.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Staff Member</h3>
                <p className="text-green-600 dark:text-green-400 mb-2">Génies en Herbe Burundi • Feb 2020 - Present</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Engineered 8-player Arduino buzzer system with lockout logic, enhancing national competitions. 
                  Authored quiz questions and supported event logistics.
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
                Recognition for innovation, technical excellence, and leadership in technology competitions across Burundi.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* National Pitch Competition Winner */}
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1st Place Winner</h3>
                  <p className="text-yellow-700 dark:text-yellow-300 font-semibold mb-2">National Pitch Competition</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Burundi • 2024</p>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Won the national startup pitch competition with innovative technology solutions
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Arduino Day Competition */}
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
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Burundi • 2025</p>
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Recognized for outstanding embedded systems and Arduino project innovation
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* National Quiz Competition */}
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
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Burundi • 2020</p>
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Demonstrated exceptional knowledge and quick thinking in national academic competition
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Competition Track Record</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-black">3</div>
                  <div className="text-purple-100">Major Awards</div>
                </div>
                <div>
                  <div className="text-3xl font-black">5</div>
                  <div className="text-purple-100">Years Competing</div>
                </div>
                <div>
                  <div className="text-3xl font-black">100%</div>
                  <div className="text-purple-100">Podium Finish Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Contact</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
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
              © 2024 Jitimay Josué. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
