import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
