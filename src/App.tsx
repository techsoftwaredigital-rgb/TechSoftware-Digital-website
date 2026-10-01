import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CyberMatrixCanvas } from './components/CyberMatrixCanvas';
import { BackgroundOrb } from './components/BackgroundOrb';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { SolutionsSection } from './sections/SolutionsSection';
import { TechSection } from './sections/TechSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { ProcessSection } from './sections/ProcessSection';
import { WhyUsSection } from './sections/WhyUsSection';
import { AboutSection } from './sections/AboutSection';
import { CTASection } from './sections/CTASection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [prefilledProjectType, setPrefilledProjectType] = useState<string>('Website');
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

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Global Interactive Cyber Matrix Constellation Canvas */}
      <CyberMatrixCanvas />

      {/* Subtle Slow-Moving Translucent 3D Orbs (React Three Fiber + Motion Scroll Reaction) */}
      <BackgroundOrb />

      {/* Sticky Glassmorphic Navigation */}
      <Navbar onOpenContact={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero with 3D Scene */}
        <HeroSection
          onStartProject={() => scrollToContact()}
          onExploreServices={scrollToServices}
        />

        {/* 2. Services Section ("What We Build") */}
        <ServicesSection
          onSelectServiceForEnquiry={(serviceTitle) => {
            const mappedType = serviceTitle.includes('Mobile')
              ? 'Mobile App'
              : serviceTitle.includes('Web App')
              ? 'Web Application'
              : serviceTitle.includes('Business Management')
              ? 'Business Software'
              : serviceTitle.includes('E-Commerce')
              ? 'E-Commerce'
              : serviceTitle.includes('AI')
              ? 'AI Solution'
              : serviceTitle.includes('SaaS')
              ? 'Custom Software'
              : serviceTitle.includes('Custom')
              ? 'Custom Software'
              : 'Website';

            scrollToContact(
              mappedType,
              `I would like to discuss our requirements for: ${serviceTitle}. Please provide architecture recommendations and a preliminary estimate.`
            );
          }}
        />

        {/* 3. Business Solutions Section */}
        <SolutionsSection
          onSelectSolutionForEnquiry={(solutionName) => {
            scrollToContact(
              'Business Software',
              `I would like to inquire about implementing your ${solutionName} for our organization.`
            );
          }}
        />

        {/* 4. Technologies Section */}
        <TechSection />

        {/* 5. Selected Projects Portfolio */}
        <PortfolioSection
          onContactAboutSimilar={(projectTitle) => {
            scrollToContact(
              'Custom Software',
              `I would like to discuss building a project similar to: ${projectTitle}.`
            );
          }}
        />

        {/* 6. Development Process Timeline */}
        <ProcessSection />

        {/* 7. Why TechSoftware.digital */}
        <WhyUsSection />

        {/* 8. About TechSoftware.digital */}
        <AboutSection onTalkWithUs={() => scrollToContact()} />

        {/* 9. Large CTA Section */}
        <CTASection onStartProject={() => scrollToContact()} />

        {/* 10. Contact & Project Consultation Section */}
        <ContactSection
          prefilledProjectType={prefilledProjectType}
          prefilledMessage={prefilledMessage}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
