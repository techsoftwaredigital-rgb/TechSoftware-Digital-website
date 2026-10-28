import React, { useState, useEffect } from 'react';
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
import { InquiryType } from './services/leadSubmissionService';
import { PWAProvider } from './context/PWAContext';
import { PWAInstallModal } from './components/PWAInstallModal';
import { PWAFloatingButton } from './components/PWAFloatingButton';
import { PWAInstallGuideModal } from './components/PWAInstallGuideModal';
import { SEOHead, SEO_ROUTES, isPrivatePath } from './components/SEOHead';
import { PrivatePortalNotice } from './components/PrivatePortalNotice';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [prefilledProjectType, setPrefilledProjectType] = useState<string>('Websites');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');
  const [prefilledIntent, setPrefilledIntent] = useState<InquiryType>('Start Your Project');
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  // Handle URL route changes, browser back/forward and SEO path routing
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    const hash = window.location.hash;

    // Handle legacy /demo-projects
    if (path === '/demo-projects' || path.startsWith('/demo-projects/') || hash === '#demo-projects') {
      window.history.replaceState({}, '', '/portfolio');
      setCurrentPath('/portfolio');
      setTimeout(() => {
        const elem = document.getElementById('work') || document.getElementById('portfolio');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 300);
      return () => window.removeEventListener('popstate', handleLocationChange);
    }

    // Handle public SEO service/landing routes smoothly
    const matchedRoute = SEO_ROUTES[path];
    if (matchedRoute && matchedRoute.sectionId && matchedRoute.sectionId !== 'home') {
      setTimeout(() => {
        const elem = document.getElementById(matchedRoute.sectionId!);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 350);
    }

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const scrollToContact = (
    projectType?: string,
    messageNote?: string,
    intent?: InquiryType
  ) => {
    if (projectType) {
      setPrefilledProjectType(projectType);
    }
    if (messageNote) {
      setPrefilledMessage(messageNote);
    }
    if (intent) {
      setPrefilledIntent(intent);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workElem = document.getElementById('work') || document.getElementById('portfolio');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSolutions = () => {
    const solutionsElem = document.getElementById('solutions');
    if (solutionsElem) {
      solutionsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If visiting restricted private portals (admin/crm/dashboard), show private portal with noindex
  if (isPrivatePath(currentPath)) {
    return (
      <>
        <SEOHead currentPath={currentPath} />
        <PrivatePortalNotice
          path={currentPath}
          onReturnHome={() => {
            window.history.pushState({}, '', '/');
            setCurrentPath('/');
          }}
        />
      </>
    );
  }

  return (
    <PWAProvider>
      <SEOHead currentPath={currentPath} />
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
          onOpenContact={() => scrollToContact(undefined, undefined, 'Contact Us')}
          onGetQuote={() =>
            scrollToContact(
              'Business Software',
              'I would like to request an official scope estimate and technical proposal for our project.',
              'Get A Quote'
            )
          }
        />

        {/* Main Single-Page Unified Experience */}
        <main className="relative z-10">
          {/* 1. Cinematic 3D Hero Section */}
          <HeroSection
            onStartProject={() => scrollToContact(undefined, undefined, 'Start Your Project')}
            onExploreWork={scrollToWork}
            onExploreSolutions={scrollToSolutions}
          />

          {/* 2. "The Future of Business is Digital" Strategic Vision */}
          <FutureBusinessSection
            onStartProject={() =>
              scrollToContact(
                'Business Software',
                'We are interested in modernizing our business operations with your digital systems.',
                'Start Your Project'
              )
            }
          />

          {/* 3. Futuristic Services Section ("What We Build") */}
          <ServicesSection
            onSelectServiceForEnquiry={(serviceTitle) => {
              const mappedType = serviceTitle.includes('ANDROID')
                ? 'Android Apps'
                : serviceTitle.includes('iOS')
                ? 'iOS Apps'
                : serviceTitle.includes('WEB APPLICATION')
                ? 'Web Applications'
                : serviceTitle.includes('BUSINESS')
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
                `I would like to discuss engineering requirements for: ${serviceTitle}. Please provide architecture recommendations and a preliminary estimate.`,
                'Get A Quote'
              );
            }}
          />

          {/* 4. AI & Next-Gen Systems: "ENGINEERED FOR WHAT'S NEXT" */}
          <AITechnologySection
            onStartProject={() =>
              scrollToContact(
                'AI Solutions',
                'I would like to discuss deploying intelligent AI workflows and cloud systems for our operations.',
                'Start Your Project'
              )
            }
          />

          {/* 5. Turnkey Business Solutions & ERP Platforms */}
          <SolutionsSection
            onSelectSolutionForEnquiry={(solutionName) => {
              scrollToContact(
                'Business Software',
                `I would like to inquire about implementing your ${solutionName} for our organization.`,
                'Get A Quote'
              );
            }}
          />

          {/* 6. Interactive Technology Ecosystem */}
          <TechSection />

          {/* 7. Company Capability Statistics */}
          <StatsSection />

          {/* 8. Selected Projects & Work (Featuring All 30 Demo Apps & Production Projects) */}
          <PortfolioSection
            onContactAboutSimilar={(projectName, projectCategory) => {
              scrollToContact(
                projectCategory || 'Business Software',
                `I am interested in ordering or building a solution similar to demo project: "${projectName}". Please share a project quote, technical architecture, and implementation timeline.`,
                'Start Your Project'
              );
            }}
          />

          {/* 9. Interactive Development Process Timeline (01-07) */}
          <ProcessSection />

          {/* 10. Why Businesses Choose TechSoftware.digital */}
          <WhyUsSection />

          {/* 11. Engineering Identity & Live Runtime Architecture */}
          <AboutSection onTalkWithUs={() => scrollToContact(undefined, undefined, 'Contact Us')} />

          {/* 12. Large Futuristic CTA Section */}
          <CTASection onStartProject={() => scrollToContact(undefined, undefined, 'Start Your Project')} />

          {/* 13. Project Consultation & Contact Section */}
          <ContactSection
            prefilledProjectType={prefilledProjectType}
            prefilledMessage={prefilledMessage}
            initialIntent={prefilledIntent}
          />
        </main>

        {/* Premium Minimal Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />

        {/* PWA Floating Install Icon on Right Edge */}
        <PWAFloatingButton />

        {/* PWA Guided Install Modal for iOS / Safari / Desktop */}
        <PWAInstallGuideModal />

        {/* PWA Automatic & Interactive Install Popup */}
        <PWAInstallModal />
      </div>
    </PWAProvider>
  );
}
