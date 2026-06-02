import React, { useState } from "react";
import { Phone, GraduationCap, Briefcase } from "lucide-react";

// ============================================
// EXPERIENCE CARD
// ============================================
const ExperienceCard = ({ title, company, period, description, icon: Icon, index }) => (
  <div 
    className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
  >
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
    
    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full w-fit">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

// ============================================
// MAIN SECTION
// ============================================
const ExperienceSection = () => {
  const experiences = [
    {
      icon: Phone,
      title: "Voice Process Associate",
      company: "Teleperformance",
      period: "2022 - 2023",
      description:
        "Strengthened communication and problem-solving skills through customer engagement, fostering effective professional interactions and teamwork. 🚀"
    },
    {
      icon: GraduationCap,
      title: "Python Full Stack Trainee",
      company: "UNIQ TECHNOLOGIES (Internship)",
      period: "2024 (3 Months Course + 6 Months Internship)",
      description:
        "Skilled in Python, HTML, CSS, SQL, Django, and Flask, with a strong understanding of full-stack development fundamentals and modern web technologies. 🚀"
    },
    {
      icon: Briefcase,
      title: "React Frontend Developer",
      company: "Pixla",
      period: "2024 - Present",
      description:
        "JavaScript, React, Vite, TailwindCSS, REST API la work pannuren. Additionalaly i learning backend also: MongoDB, Node.js, Express.js.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#04081A] relative overflow-hidden pt-32 pb-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 mt-10">
        {/* Section Header */}
        <div className="flex flex-col items-center space-y-8 mb-12">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
              Professional Journey
            </h2>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
            My career path and professional experiences 🚀
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              {...exp} 
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000 pointer-events-none" />
    </div>
  );
};

export default ExperienceSection;