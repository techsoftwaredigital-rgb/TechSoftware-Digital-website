import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { FutureBusinessSection } from './sections/FutureBusinessSection';
import { ServicesSection } from './sections/ServicesSection';
import { AITechnologySection } from './sections/AITechnologySection';
import { SolutionsSection } from './sections/SolutionsSection';
import { TechSection } from './sections/TechSection';
import { StatsSection } from './sections/StatsSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { ProcessSection } from './sections/ProcessSection';
import { WhyUsSection } from './sections/WhyUsSection';
import { AboutSection } from './sections/AboutSection';
import { CTASection } from './sections/CTASection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundSystem } from './components/BackgroundSystem';
import { IntroAnimation } from './components/IntroAnimation';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [prefilledProjectType, setPrefilledProjectType] = useState<string>('Websites');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  const scrollToContact = (projectType?: string, messageNote?: string) => {
    if (projectType) {
      setPrefilledProjectType(projectType);
    }
    if (messageNote) {
      setPrefilledMessage(messageNote);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSolutions = () => {
    const solutionsElem = document.getElementById('solutions');
    if (solutionsElem) {
      solutionsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workElem = document.getElementById('portfolio');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative selection:bg-cyan-500/25 selection:text-cyan-300">
      {/* Website Entrance Cinematic Intro Animation (First-load only, <2s) */}
      {!introFinished && (
        <IntroAnimation onComplete={() => setIntroFinished(true)} />
      )}

      {/* Futuristic Desktop Custom Cursor System (Disabled on touch & reduced-motion) */}
      <CustomCursor />

      {/* Multi-layered Intelligent Background System (Grid, floating particles, radial glow) */}
      <BackgroundSystem />

      {/* Floating Glassmorphic Sticky Navigation */}
      <Navbar
        onOpenContact={() => scrollToContact()}
        onGetQuote={() => scrollToContact('Business Software', 'I would like to request an official scope estimate and technical proposal for our project.')}
      />

      {/* Main Content Progression */}
      <main className="relative z-10">
        {/* 1. Cinematic 3D Hero Section */}
        <HeroSection
          onStartProject={() => scrollToContact()}
          onExploreSolutions={scrollToSolutions}
        />

        {/* 2. "The Future of Business is Digital" Strategic Vision */}
        <FutureBusinessSection
          onStartProject={() => scrollToContact('Business Software', 'We are interested in modernizing our business operations with your digital systems.')}
        />

        {/* 3. Futuristic Services Section ("What We Build") */}
        <ServicesSection
          onSelectServiceForEnquiry={(serviceTitle) => {
            const mappedType = serviceTitle.includes('ANDROID')
              ? 'Android Apps'
              : serviceTitle.includes('iOS')
              ? 'iOS Apps'
              : serviceTitle.includes('WEB APPLICATIONS')
              ? 'Web Applications'
              : serviceTitle.includes('BUSINESS SOFTWARE')
              ? 'Business Software'
              : serviceTitle.includes('AI')
              ? 'AI Solutions'
              : serviceTitle.includes('SAAS')
              ? 'SaaS Platforms'
              : serviceTitle.includes('CUSTOM')
              ? 'Custom Software'
              : 'Websites';

            scrollToContact(
              mappedType,
              `I would like to discuss engineering requirements for: ${serviceTitle}. Please provide architecture recommendations and a preliminary estimate.`
            );
          }}
        />

        {/* 4. AI & Next-Gen Systems: "ENGINEERED FOR WHAT'S NEXT" */}
        <AITechnologySection
          onStartProject={() => scrollToContact('AI Solutions', 'I would like to discuss deploying intelligent AI workflows and cloud systems for our operations.')}
        />

        {/* 5. Turnkey Business Solutions & ERP Platforms */}
        <SolutionsSection
          onSelectSolutionForEnquiry={(solutionName) => {
            scrollToContact(
              'Business Software',
              `I would like to inquire about implementing your ${solutionName} for our organization.`
            );
          }}
        />

        {/* 6. Interactive Technology Ecosystem */}
        <TechSection />

        {/* 7. Company Capability Statistics */}
        <StatsSection />

        {/* 8. Selected Projects & Work Portfolio */}
        <PortfolioSection
          onContactAboutSimilar={(projectTitle) => {
            scrollToContact(
              'Custom Software',
              `I would like to discuss building a project similar to: ${projectTitle}.`
            );
          }}
          onViewAllProjects={() => {
            const elem = document.getElementById('portfolio');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 9. Interactive Development Process Timeline (01-07) */}
        <ProcessSection />

        {/* 10. Why Businesses Choose TechSoftware.digital */}
        <WhyUsSection />

        {/* 11. Engineering Identity & Live Runtime Architecture */}
        <AboutSection onTalkWithUs={() => scrollToContact()} />

        {/* 12. Large Futuristic CTA Section */}
        <CTASection onStartProject={() => scrollToContact()} />

        {/* 13. Project Consultation & Contact Section */}
        <ContactSection
          prefilledProjectType={prefilledProjectType}
          prefilledMessage={prefilledMessage}
        />
      </main>

      {/* Premium Minimal Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
