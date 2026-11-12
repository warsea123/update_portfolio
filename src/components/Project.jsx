
import { motion } from "framer-motion";
import { FaCode, FaFolderOpen } from "react-icons/fa";

export default function Project() {
    return (
        <section
            id="projects"
            className="project min-h-screen py-20 px-6 md:px-10 text-center scroll-mt-24"
        >
            {/* Section Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="text-3xl font-bold mb-10"
            >
                My Projects
            </motion.h2>

            <div className="flex justify-center">

                {/* Project Card */}
                <motion.div
                    initial={{ opacity: 0, y: 80, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                    whileHover={{
                        y: -8,
                        scale: 1.02,
                        transition: { duration: 0.3 }
                    }}
                    className="border border-orange-400 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-gray-50 hover:shadow-lg transition-shadow duration-300 min-h-72"
                >

                    {/* Folder Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: false }}
                        transition={{
                            duration: 0.7,
                            delay: 0.3
                        }}
                    >
                        <FaFolderOpen
                            size={60}
                            className="text-orange-400 mb-5"
                        />
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-2">
                        No Projects Available Yet
                    </h3>

                    <p className="text-gray-500 text-sm mb-4">
                        I'm currently working on exciting projects. Stay tuned!
                    </p>

                    {/* Coming Soon */}
                    <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="flex items-center gap-2 text-orange-500 text-sm font-medium"
                    >
                        <FaCode />
                        Coming Soon
                    </motion.span>

                </motion.div>
            </div>
        </section>
    );
}
