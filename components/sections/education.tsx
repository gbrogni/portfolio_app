'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { SectionWrapper } from '../ui/section-wrapper';
import { education, certifications } from '@/lib/data';

export function Education() {
  return (
    <SectionWrapper id="education" className="bg-[#fafafa]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-12 text-center">
        Education & <span className="gradient-text">Certifications</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e7eb]"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#4338ca]/10 rounded-lg text-[#4338ca]">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#1a1a2e]">Education</h3>
          </div>
          {(education ?? []).map((edu, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h4 className="font-medium text-[#1a1a2e]">{edu?.degree ?? ''}</h4>
              <p className="text-[#4338ca]">{edu?.institution ?? ''}</p>
              <p className="text-sm text-[#6b7280]">{edu?.period ?? ''}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e7eb]"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#4338ca]/10 rounded-lg text-[#4338ca]">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#1a1a2e]">Certifications</h3>
          </div>
          {(certifications ?? []).map((cert, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h4 className="font-medium text-[#1a1a2e]">{cert?.name ?? ''}</h4>
              <p className="text-sm text-[#6b7280]">Issued: {cert?.issued ?? ''}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}