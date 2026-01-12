'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { SectionWrapper } from '../ui/section-wrapper';
import { projects } from '@/lib/data';

export function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-[#fafafa]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-12 text-center">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <div className="grid gap-8">
        {(projects ?? []).map((project, index) => (
          <motion.div
            key={project?.name ?? index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border border-[#e5e7eb] group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#4338ca]/10 rounded-lg text-[#4338ca] group-hover:bg-[#4338ca] group-hover:text-white transition-colors">
                <Code2 size={28} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-[#1a1a2e]">{project?.name ?? ''}</h3>
                  {project?.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6b7280] hover:text-[#4338ca] transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <p className="text-[#6b7280] mb-6 leading-relaxed">{project?.description ?? ''}</p>
                <div className="flex flex-wrap gap-2">
                  {(project?.tech ?? []).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#4338ca]/10 text-[#4338ca] text-sm rounded-full font-medium"
                    >
                      {tech ?? ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}