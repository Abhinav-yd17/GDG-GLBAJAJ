import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Rocket, Award } from "lucide-react";
import SectionHeader from "../components/layout/SectionHeader";
import RevealOnScroll from "../components/ui/RevealOnScroll";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description:
        "We build a strong, inclusive, futuristic community where everyone can grow together.",
      glow: "googleBlue",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description:
        "We encourage experimentation, innovation and pushing boundaries using modern tech.",
      glow: "googleRed",
    },
    {
      icon: Target,
      title: "Learning",
      description:
        "We believe continuous skill upgrades and futuristic learning create tomorrow’s leaders.",
      glow: "googleYellow",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in all our initiatives, events and community projects.",
      glow: "googleGreen",
    },
  ];

  const milestones = [
    {
      year: "2022",
      event: "GDG GL Bajaj Established",
      description: "Our cyber-community of innovators begins.",
      color: "googleBlue",
    },
    {
      year: "2022",
      event: "First Workshop",
      description: "Kickstarted Web Development for 120+ students.",
      color: "googleGreen",
    },
    {
      year: "2023",
      event: "Hackathon 2023",
      description: "A 24-hour futuristic coding marathon.",
      color: "googleRed",
    },
    {
      year: "2023",
      event: "500+ Members",
      description: "The community reaches hyperscale.",
      color: "googleYellow",
    },
    {
      year: "2024",
      event: "AI/ML Series",
      description: "Advanced AI, ML & automation workshops launched.",
      color: "googleBlue",
    },
  ];

  const glowColors = {
    googleBlue: "text-[#4285F4] bg-[#4285F4]/20",
    googleRed: "text-[#DB4437] bg-[#DB4437]/20",
    googleYellow: "text-[#F4B400] bg-[#F4B400]/20",
    googleGreen: "text-[#0F9D58] bg-[#0F9D58]/20",
  };

  const dotColors = {
    googleBlue: "bg-[#4285F4]",
    googleRed: "bg-[#DB4437]",
    googleYellow: "bg-[#F4B400]",
    googleGreen: "bg-[#0F9D58]",
  };

  const textColors = {
    googleBlue: "text-[#4285F4]",
    googleRed: "text-[#DB4437]",
    googleYellow: "text-[#F4B400]",
    googleGreen: "text-[#0F9D58]",
  };

  return (
    <div className="pt-20 min-h-screen relative">

      {/* BACKGROUND — SAME AS BLOG PAGE */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-[#0B0F19] overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neonBlue rounded-full opacity-40"
            animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader
          title="About GDG GL Bajaj"
          subtitle="Redefining the future of developer communities"
          accentColor="blue"
        />

        {/* MISSION SECTION */}
        <RevealOnScroll>
          <section className="mb-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* LEFT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Our <span className="text-[#4285F4]">Mission</span>
                </h2>

                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                  GDG GL Bajaj is a futuristic developer community powered by Google technologies.
                </p>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="
                    p-6 rounded-2xl 
                    bg-white dark:bg-[#111827] 
                    border border-[#1F2937] 
                    shadow-xl
                  "
                >
                  <h3 className="text-xl font-semibold text-[#4285F4] mb-3">What We Do</h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Workshops & hands-on learning</li>
                    <li>• AI/ML & Cloud development</li>
                    <li>• Hackathons & challenges</li>
                    <li>• Open-source projects</li>
                    <li>• Mentorship & career guidance</li>
                  </ul>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE IMAGE CARD */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="
                    p-8 rounded-2xl 
                    bg-white dark:bg-[#111827]
                    border border-[#1F2937] 
                    shadow-xl
                  "
                >
                  <img
                    src="/images/about/team-photo.jpg"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                    alt="Team"
                  />

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Join Our Future-Driven Community
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Connect with top developers worldwide and build real-world solutions.
                  </p>
                </motion.div>
              </motion.div>

            </div>
          </section>
        </RevealOnScroll>

        {/* VALUES SECTION */}
        <RevealOnScroll>
          <section className="mb-28">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              Our <span className="text-[#9333EA]">Core Values</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="
                    p-6 rounded-xl 
                    bg-white dark:bg-[#111827] 
                    border border-[#1F2937] 
                    shadow-xl text-center cursor-pointer
                  "
                >
                  <div
                    className={`w-20 h-20 mx-auto rounded-full mb-4 flex items-center justify-center ${glowColors[value.glow]}`}
                  >
                    <value.icon className="h-10 w-10" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        {/* TIMELINE */}
        <RevealOnScroll>
          <section className="mb-28">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
              Our <span className="text-[#4285F4]">Journey</span>
            </h2>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 
              bg-gradient-to-b from-[#4285F4] via-[#DB4437] to-[#0F9D58] h-full" />

              {milestones.map((m, index) => (
                <motion.div
                  key={m.event}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center mb-16 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-1/2 p-4">
                    <div
                      className="
                        p-6 rounded-xl 
                        bg-white dark:bg-[#111827]
                        border border-[#1F2937] shadow-xl
                      "
                    >
                      <div className={`font-bold ${textColors[m.color]}`}>{m.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {m.event}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">{m.description}</p>
                    </div>
                  </div>

                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full ${dotColors[m.color]}`}
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        {/* CTA */}
        <RevealOnScroll>
          <section className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="
                p-14 rounded-2xl 
                bg-white dark:bg-[#111827]
                border border-[#1F2937] shadow-xl
              "
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Join the Future?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Become part of the most futuristic student developer community.
              </p>
            </motion.div>
          </section>
        </RevealOnScroll>

      </div>
    </div>
  );
};

export default About;
