
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="w-full sm:w-3/4 mx-auto px-6 min-h-screen py-20 scroll-mt-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Heading */}
      <motion.h2
        className="text-2xl text-center font-semibold mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Contact Us
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-5 border border-orange-600 rounded focus:border-orange-700 focus:outline-none"
          whileFocus={{ scale: 1.02 }}
        />

        <motion.input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-5 border border-orange-600 rounded focus:border-orange-700 focus:outline-none"
          whileFocus={{ scale: 1.02 }}
        />

        <motion.textarea
          placeholder="Message"
          rows="5"
          className="w-full p-2 mb-5 border border-orange-600 rounded focus:border-orange-700 focus:outline-none"
          whileFocus={{ scale: 1.02 }}
        />

        <motion.button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full sm:w-80 block mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Send
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
