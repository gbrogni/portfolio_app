'use client';

import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a2e] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Interested in working together? Feel free to reach out through any of the channels below.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a
            href="https://github.com/gbrogni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-brogni/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="mailto:harden13brogni@gmail.com"
            className="flex items-center gap-2 px-5 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Mail size={20} /> Email
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
          <MapPin size={16} />
          <span>Santa Catarina, Brazil</span>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Gabriel Brogni. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}