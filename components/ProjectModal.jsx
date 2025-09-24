import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, isOpen, onClose }) {
    if (!project) return null;

    const getDetailedContent = (projectId) => {
        switch (projectId) {
            case 1: // Ikimashini
                return {
                    problem: "Burundi lacks vending machines entirely, and fuel distribution suffers from scarcity and illegal black-market trading.",
                    solution: [
                        "Version 1.0: Smart vending machine for drinks/snacks using LilyGO TTGO T-Call ESP32 SIM800H board",
                        "SMS-based mobile payments via Lumicash with automatic verification",
                        "Nema 17 stepper motors and servo motors for product dispensing",
                        "LCD + keypad interface for customer interaction",
                        "Version 2.0: Expands to fuel vending machines with Gitoropass integration"
                    ],
                    impact: "Introduces vending culture to Burundi for the first time. Version 2.0 tackles fuel distribution transparency with huge economic and regulatory importance.",
                    technical: ["ESP32 SIM800H", "Mobile Payment Integration", "Stepper Motors", "SMS Verification", "Government API Integration"],
                    achievements: ["First vending machine in Burundi", "Government partnership for fuel distribution", "24/7 automated solution"]
                };

            case 2: // Mind-Controlled Robot
                return {
                    problem: "People with disabilities often lack ways to interact with machines. BCI technology can open new possibilities for assistive technologies.",
                    solution: [
                        "Uses OpenBCI Ganglion/Cyton board to record brain signals (EEG)",
                        "Focuses on motor imagery (thinking of moving left/right) and eye blinks",
                        "Real-time signal processing, filtering, and classification",
                        "Commands transmitted to Arduino/ESP32 for robot control",
                        "Embedded ML using Edge Impulse, TensorFlow Lite Micro, or UbwonkoEdge AI"
                    ],
                    impact: "Demonstrates BCI potential in Africa, pioneering research in a field often limited to developed countries. Opens doors for assistive technologies for people with disabilities.",
                    technical: ["OpenBCI", "EEG Signal Processing", "Motor Imagery Classification", "Embedded ML", "Real-time Control"],
                    achievements: ["Final-year university research project", "Low-cost BCI prototype", "Affordable assistive technology solution"]
                };

            case 3: // UbwonkoEdge AI Framework
                return {
                    problem: "Existing AI frameworks are too heavy for microcontrollers, limiting edge AI deployment in resource-constrained environments.",
                    solution: [
                        "Lightweight on-device AI framework optimized for ESP32 microcontrollers",
                        "Efficient neural network inference with minimal memory footprint",
                        "Real-time processing capabilities for embedded systems",
                        "Integration with various sensors and actuators",
                        "Optimized for battery-powered IoT devices"
                    ],
                    impact: "Enables AI deployment on low-power devices, making intelligent systems accessible in remote areas and developing regions.",
                    technical: ["ESP32 Optimization", "Neural Network Compression", "Edge Computing", "Real-time Inference", "Memory Management"],
                    achievements: ["Custom AI framework", "Microcontroller optimization", "Edge AI innovation"]
                };

            case 4: // Arduino Buzzers
                return {
                    problem: "Quiz competitions lack fair systems to determine who pressed first, leading to disputes and manual judging errors.",
                    solution: [
                        "Hardware built with Arduino microcontrollers and relays",
                        "8-player system with individual push buttons, lamps, and buzzers",
                        "First-press lockout system prevents others from registering for 3 seconds",
                        "Anti-spam protection prevents rapid re-clicking",
                        "Visual (lamp) and audio (buzzer) feedback for clear indication"
                    ],
                    impact: "Provides reliable, fair, and reusable system for national competitions. Demonstrates local Burundian innovation solving practical needs.",
                    technical: ["Arduino Microcontrollers", "Relay Systems", "Lockout Logic", "Multi-player Hardware", "Real-time Response"],
                    achievements: ["Used in national competitions", "Génies en Herbe Burundi official system", "5+ years of reliable operation"]
                };

            default:
                return {
                    problem: "Project details not available.",
                    solution: [],
                    impact: "",
                    technical: [],
                    achievements: []
                };
        }
    };

    const details = getDetailedContent(project.id);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover rounded-t-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl"></div>
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="absolute bottom-4 left-6 text-white">
                                <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                                <p className="text-lg opacity-90">{project.description}</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-8">
                            {/* Problem Statement */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                                    <span className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-red-600 dark:text-red-400">⚠️</span>
                                    </span>
                                    Problem Statement
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{details.problem}</p>
                            </div>

                            {/* Solution */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                                    <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-blue-600 dark:text-blue-400">💡</span>
                                    </span>
                                    Solution & Features
                                </h3>
                                <ul className="space-y-2">
                                    {details.solution.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-600 dark:text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technical Stack */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                                    <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-purple-600 dark:text-purple-400">⚙️</span>
                                    </span>
                                    Technical Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {details.technical.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Impact */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                                    <span className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-green-600 dark:text-green-400">🎯</span>
                                    </span>
                                    Impact & Significance
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{details.impact}</p>
                            </div>

                            {/* Achievements */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                                    <span className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-yellow-600 dark:text-yellow-400">🏆</span>
                                    </span>
                                    Key Achievements
                                </h3>
                                <ul className="space-y-2">
                                    {details.achievements.map((achievement, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack Tags */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View on GitHub
                                </a>

                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-medium hover:from-green-600 hover:to-blue-600 transition-all"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}