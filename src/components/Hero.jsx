import { motion } from "framer-motion";
import { ImFacebook2 } from "react-icons/im";
import { MdOutlineEmail } from "react-icons/md";

const socialLinks = [
    {
        name: "Facebook",
        icon: ImFacebook2,
        color: "#1877F2",
        url: "https://www.facebook.com/profile.php?id=61583094874695",
    },
    {
        name: "Email",
        icon: MdOutlineEmail,
        color: "#D44638",
        url: "mailto:jammelbrona@gmail.com",
    },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 py-20 md:px-12 lg:px-28"
        >
            <motion.div
                className="flex-1 text-center md:text-left"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
                    Welcome to My Portfolio
                </h2>

                <p className="mb-4 text-base leading-relaxed md:text-lg">
                    Hi, I'm{" "}
                    <span className="font-bold text-orange-400">
                        Jammel
                    </span>
                    , a passionate web developer with a love for creating
                    beautiful and functional websites. Explore my projects and
                    get in touch!
                </p>

                <a
                    href={`${import.meta.env.BASE_URL}resume.pdf`}
                    download
                    className="inline-block rounded-lg bg-orange-500 px-6 py-3 text-white transition-colors hover:bg-orange-600"
                >
                    Download Resume
                </a>

                    <div className="mt-4 flex justify-center gap-4 md:justify-start">
                        {socialLinks.map(({ name, icon: Icon, color, url }) => (
                            <a
                                key={name}
                                href={url}
                                target={name === "Email" ? undefined : "_blank"}
                                rel={name === "Email" ? undefined : "noopener noreferrer"}
                                aria-label={name}
                                title={name}
                                style={{ color }}
                                className="transition-transform hover:scale-110 p-2 border-orange-500 rounded-full border-2"
                            >
                                <Icon className="w-6 h-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
            </motion.div>

            <motion.div
                className="flex flex-1 justify-center"
                initial={{ opacity: 0, scale: 0.7, x: 80 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <img
                    src={`${import.meta.env.BASE_URL}picture1.JPG`}
                    alt="Portrait of Jammel"
                    className="h-48 w-48 rounded-full object-cover shadow-xl sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-80 lg:w-80"
                />
            </motion.div>
        </section>
    );
}
