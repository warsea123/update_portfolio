
import { motion } from "framer-motion";


import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBriefcase,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

const technologies = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

// Work Experience Data
const experience = [
  {
    year: "2022 - 2023",
    position: "IT Instructor",
    company: "STI College Legazpi",
    description:
      "Worked as an IT Instructor, sharing technical knowledge and guiding students in information technology.",
  },
  {
    year: "2023 - 2026",
    position: "Technical Support",
    company: "PPh Digital Media Production Inc.",
    description:
      "Provided technical support and troubleshooting assistance for hardware, software, and technology-related concerns.",
  },
];

// Reusable Skill Row
function SkillRow({ items, direction }) {
  return (
    <div className="overflow-hidden py-4">
      <div
        className={`flex w-max gap-12 ${
          direction === "right"
            ? "animate-scroll-right"
            : "animate-scroll-left"
        }`}
      >
        {[...items, ...items].map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={`${tech.name}-${index}`}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="flex min-w-24 flex-col items-center gap-3"
            >
              <Icon size={45} color={tech.color} />

              <span className="text-sm font-medium whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// Work Experience Timeline
function WorkExperience() {
  return (
    <div className="max-w-3xl mx-auto mt-24">
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="text-2xl font-bold text-center mb-12"
      >
        Work Experience
      </motion.h3>

      <div className="relative">

        {/* Timeline Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute left-[9px] top-0 w-1 h-full bg-orange-400 rounded-full"
        />

        <div className="space-y-10">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="relative pl-10"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="absolute left-0 top-5 w-5 h-5 rounded-full bg-orange-500 border-4 border-white shadow-md z-10"
              />

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md border border-orange-200 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-orange-500">
                  {job.year}
                </span>

                <h4 className="text-xl font-bold mt-2">
                  {job.position}
                </h4>

                <p className="text-gray-700 font-medium mt-1">
                  {job.company}
                </p>

                <p className="text-gray-500 text-sm leading-relaxed mt-3">
                  {job.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const firstRow = technologies.slice(0, 4);
  const secondRow = technologies.slice(4, 8);

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-10 scroll-mt-24 min-h-screen flex flex-col items-center gap-10"
    >
      <motion.div 
      
       initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="mb-10 ">
        <img
                    src={`${import.meta.env.BASE_URL}porfile2.jpg`}
                    alt="Hero"
                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-60 lg:h-60 rounded-full object-cover shadow-xl"
                />
      </motion.div>


      {/* About Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold text-center mb-10"
      >
        About Me
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Hi, I'm Jammel!
          </h3>

          <p className="text-gray-600 leading-relaxed">
            I'm an IT graduate passionate about
            technology, web development, and
            solving technical problems.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            I have experience in IT support,
            troubleshooting, and assisting users
            with technology-related concerns.
          </p>

          <p className="text-gray-600 leading-relaxed mt-4">
            Currently, I'm improving my skills
            in React.js, Node.js, and database
            management.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">
            My Technical Skills
          </h3>

          <SkillRow items={firstRow} direction="right" />

          <SkillRow items={secondRow} direction="left" />
        </motion.div>
      </div>

      {/* Work Experience */}
      <WorkExperience />


    </section>
  );
}
