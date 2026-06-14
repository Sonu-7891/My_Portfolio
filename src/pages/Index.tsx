import { useEffect, useState, useCallback } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Experience from '@/components/Experience/Experience';
import Skills from '@/components/Skills/Skills';
import AIExpertise from '@/components/AIExpertise/AIExpertise';
import Projects from '@/components/Projects/Projects';
import TechWall from '@/components/TechWall/TechWall';
import Achievements from '@/components/Achievements/Achievements';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import CustomCursor from '@/components/Shared/CustomCursor';
import ParticleCanvas from '@/components/Shared/ParticleCanvas';
import SplashScreen from '@/components/Shared/SplashScreen';
import { useCustomCursor } from '@/hooks/useCustomCursor';
import { useParticleCanvas } from '@/hooks/useParticleCanvas';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { useNavScroll } from '@/hooks/useNavScroll';

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);

  useCustomCursor();
  useParticleCanvas();
  useTypingEffect('typingText');
  useScrollAnimations();
  useCounterAnimation('hero');
  useNavScroll('nav');

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  useEffect(() => {
    document.title = 'Sonu Verma — AI Engineer & Full Stack Developer';
  }, []);

  return (
    <div className="portfolio-page">
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <CustomCursor />
      <ParticleCanvas />
      <div className={`main-content${splashDone ? ' content-visible' : ''}`}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <AIExpertise />
        <Projects />
        <TechWall />
        <Achievements />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

