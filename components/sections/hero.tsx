'use client';

import { motion } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#fafafa] via-[#f0f0f5] to-[#e8e8f0]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#4338ca] font-medium mb-4 tracking-wide uppercase text-sm">Full-Stack Engineer</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#1a1a2e] mb-6 leading-tight">
            Gabriel <span className="gradient-text">Brogni</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6b7280] max-w-2xl mx-auto mb-10 leading-relaxed">
            Full-stack engineer focused on scalable architecture and high-performance web applications.
            Experienced in designing REST and GraphQL APIs with .NET and Node.js, and building modern frontends with React, Next.js, and Angular.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/resume-gabriel-brogni.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#4338ca] text-white rounded-lg font-medium hover:bg-[#3730a3] transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <Download size={18} /> Download Resume
          </a>
          <a
            href="https://github.com/gbrogni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a1a2e] rounded-lg font-medium border border-[#e5e7eb] hover:border-[#4338ca] hover:text-[#4338ca] transition-all hover:shadow-md"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-brogni/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a1a2e] rounded-lg font-medium border border-[#e5e7eb] hover:border-[#4338ca] hover:text-[#4338ca] transition-all hover:shadow-md"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <a href="#experience" className="text-[#6b7280] hover:text-[#4338ca] transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-current rounded-full mx-auto flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 bg-current rounded-full" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}