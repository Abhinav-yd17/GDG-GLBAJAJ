import React from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "../ui/RevealOnScroll";

const SectionHeader = ({ title, subtitle, accentColor = "blue" }) => {
  // Google theme color classes
  const googleAccent = {
    blue: "text-googleBlue",
    red: "text-googleRed",
    yellow: "text-googleYellow",
    green: "text-googleGreen",
    gradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-googleBlue via-googleRed via-googleYellow to-googleGreen",
  };

  const accentClass = googleAccent[accentColor] || googleAccent.blue;

  return (
    <RevealOnScroll>
      <div className="text-center mb-16">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
        >
          {title.split(" ").map((word, index, arr) => (
            <span
              key={index}
              className={
                index === arr.length - 1
                  ? accentClass
                  : "text-gray-900 dark:text-white"
              }
            >
              {word}
              {index < arr.length - 1 ? " " : ""}
            </span>
          ))}
        </motion.h2>

        {/* SUBTITLE */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </RevealOnScroll>
  );
};

export default SectionHeader;
