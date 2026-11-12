
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-24 md:px-12 lg:px-28"
        >
            {/* Text Content */}
            <motion.div
                className="flex-1 text-center md:text-left"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                    Welcome to My Portfolio
                </h2>

                <p className="text-base md:text-lg mb-4 leading-relaxed">
                    Hi, I'm{" "}
                    <span className="text-orange-400 font-bold">
                        Jammel
                    </span>
                    , a passionate web developer with a love for creating
                    beautiful and functional websites. Explore my projects
                    and get in touch!
                </p>

                <div className="resume">
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
                    >
                        Download Resume
                    </a>
                </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, scale: 0.7, x: 80 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <img
                    src={`${import.meta.env.BASE_URL}picture1.JPG`}
                    alt="Hero"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-xl"
                />
            </motion.div>
        </section>
    );
}
