import { Header } from '@/components/ui/header';
import { Hero } from '@/components/sections/hero';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Education } from '@/components/sections/education';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
}