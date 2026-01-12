'use client';

import { motion } from 'framer-motion';
import { Code, Server, Database, TestTube } from 'lucide-react';
import { SectionWrapper } from '../ui/section-wrapper';
import { skills } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  Frontend: <Code size={24} />,
  Backend: <Server size={24} />,
  Databases: <Database size={24} />,
  'Testing & DevOps': <TestTube size={24} />,
};

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-12 text-center">
        Technical <span className="gradient-text">Skills</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {(skills ?? []).map((skill, index) => (
          <motion.div
            key={skill?.category ?? index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-[#fafafa] p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-[#f0f0f5]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-[#4338ca]/10 rounded-lg text-[#4338ca]">
                {iconMap[skill?.category ?? ''] ?? <Code size={24} />}
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a2e]">{skill?.category ?? ''}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {(skill?.items ?? []).map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-white text-[#6b7280] text-sm rounded-lg border border-[#e5e7eb] hover:border-[#4338ca] hover:text-[#4338ca] transition-colors cursor-default"
                >
                  {item ?? ''}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}