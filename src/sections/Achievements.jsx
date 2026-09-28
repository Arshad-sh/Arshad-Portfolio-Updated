import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaLightbulb, FaCertificate } from "react-icons/fa";

const achievementsData = [
  {
    title: "TCS CodeVita Season 13",
    desc: "Secured a global rank of 11,451 in the Season 13 competitive programming contest.",
    icon: <FaTrophy className="text-yellow-500 text-2xl" />,
    tag: "Global Rank",
  },
  {
    title: "VIT CODE APEX 2.0",
    desc: "Qualified for Round 2 – Online Pitching.",
    icon: <FaAward className="text-emerald-500 text-2xl" />,
    tag: "Competition",
  },
  {
    title: "AWS Solutions Architecture",
    desc: "Completed the AWS Solutions Architecture Job Simulation by Forage.",
    icon: <FaCertificate className="text-blue-500 text-2xl" />,
    tag: "Job Simulation",
  },
  {
    title: "TensorX National AI Hackathon 2026",
    desc: "Participated in the TensorX National AI Hackathon 2026.",
    icon: <FaLightbulb className="text-[#F7DF1E] text-2xl" />,
    tag: "Hackathon",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#0B1120] relative">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            My <span className="text-blue-500">Achievements</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-blue-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between border border-white/5 shadow-xl relative overflow-hidden group"
            >
              {/* Top Row with icon and tag */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold text-[#94A3B8] bg-white/5 border border-white/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>

              {/* Title & Desc */}
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-[#F8FAFC] leading-snug group-hover:text-blue-500 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Achievements;
