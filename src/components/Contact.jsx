
import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../ui/Card";

export default function Contact() {

    const [showCard, setShowCard] = useState(false);

    return (
        <motion.section
            id="contact"
            className="w-full sm:w-3/4 mx-auto px-6 py-20 scroll-mt-20 flex justify-center items-center flex-col gap-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >

            <motion.h2
                className="text-2xl text-center font-semibold mb-6"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Contact Us
            </motion.h2>

            {!showCard ? (

                <motion.div
                    className="w-full sm:w-3/4 lg:w-2/3 mx-auto bg-slate-50 shadow-lg rounded-2xl p-6 md:p-10 border-orange-400 border-2"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >

                    <div className="flex flex-col gap-3 text-center">

                        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                            Get in touch
                        </span>

                        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
                            Let's work <span className="text-orange-500">together.</span>
                        </h1>

                        <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-lg mx-auto">
                            Have a project or opportunity? I'd love to hear from you.
                            Feel free to reach out and let's create something great together.
                        </p>

                        <button
                            type="button"
                            onClick={() => setShowCard(true)}
                            className="inline-block py-3 px-6 text-white bg-orange-600 border-orange-400 border-2 hover:bg-orange-400"
                        >
                            Get Started
                        </button>

                    </div>
                </motion.div>

            ) : (

                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card onClose={() => setShowCard(false)} />
                </motion.div>

            )}

        </motion.section>
    );
}
