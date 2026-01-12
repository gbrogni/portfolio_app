'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { SectionWrapper } from '../ui/section-wrapper';
import { experiences } from '@/lib/data';

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-12 text-center">
        Professional <span className="gradient-text">Experience</span>
      </h2>
      <div className="space-y-8">
        {(experiences ?? []).map((exp, index) => (
          <motion.div
            key={exp?.company ?? index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#fafafa] p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#f0f0f5]"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#4338ca]/10 rounded-lg text-[#4338ca]">
                <Briefcase size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-[#1a1a2e]">{exp?.title ?? ''}</h3>
                  <span className="text-sm text-[#6b7280] mt-1 md:mt-0">{exp?.period ?? ''}</span>
                </div>
                <p className="text-[#4338ca] font-medium mb-4">{exp?.company ?? ''}</p>
                <ul className="space-y-2 list-disc pl-6 marker:text-[#4338ca]">
                  {(exp?.description ?? []).map((item, i) => (
                    <li key={i} className="text-[#6b7280] leading-6">
                      {item ?? ''}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}