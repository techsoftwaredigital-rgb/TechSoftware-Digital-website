import React, { useEffect } from 'react';

export interface PageSEORoute {
  path: string;
  title: string;
  description: string;
  canonicalUrl: string;
  sectionId?: string;
  serviceId?: string;
  breadcrumbName: string;
  isPrivate?: boolean;
}

export const SEO_ROUTES: Record<string, PageSEORoute> = {
  '/': {
    path: '/',
    title: 'TechSoftware.digital — Websites, Apps & Business Software Solutions',
    description: 'TechSoftware.digital is a software development company in Maharashtra, India specializing in custom software development, modern websites, business management software, mobile apps, CRM, and cloud systems.',
    canonicalUrl: 'https://techsoftwaredigital.in/',
    sectionId: 'home',
    breadcrumbName: 'Home',
  },
  '/website-development': {
    path: '/website-development',
    title: 'Website Development Company India | TechSoftware.digital',
    description: 'Modern, high-performance website development services in India. Responsive websites, corporate portals, and custom web designs engineered for fast speeds and high conversions.',
    canonicalUrl: 'https://techsoftwaredigital.in/website-development',
    sectionId: 'services',
    serviceId: 'websites',
    breadcrumbName: 'Website Development',
  },
  '/software-development': {
    path: '/software-development',
    title: 'Custom Software Development Services India | TechSoftware.digital',
    description: 'Bespoke custom software development for businesses in India. Tailored business logic, scalable backend APIs, proprietary algorithmic workflows, and modern cloud architecture.',
    canonicalUrl: 'https://techsoftwaredigital.in/software-development',
    sectionId: 'services',
    serviceId: 'custom-software',
    breadcrumbName: 'Software Development',
  },
  '/business-management-software': {
    path: '/business-management-software',
    title: 'Business Management Software & Custom ERP India | TechSoftware.digital',
    description: 'Custom business management software, ERP, billing POS, inventory tracking, and CRM systems engineered to streamline business operations and eliminate manual spreadsheets.',
    canonicalUrl: 'https://techsoftwaredigital.in/business-management-software',
    sectionId: 'solutions',
    serviceId: 'business-software',
    breadcrumbName: 'Business Management Software',
  },
  '/android-app-development': {
    path: '/android-app-development',
    title: 'Android App Development Company India | TechSoftware.digital',
    description: 'High-performance native and cross-platform Android mobile application development with offline support, fluid UI animations, and secure cloud synchronization.',
    canonicalUrl: 'https://techsoftwaredigital.in/android-app-development',
    sectionId: 'services',
    serviceId: 'android-apps',
    breadcrumbName: 'Android App Development',
  },
  '/ios-app-development': {
    path: '/ios-app-development',
    title: 'iOS App Development Company India | TechSoftware.digital',
    description: 'Premium iOS mobile app development conforming to Apple Human Interface Guidelines. Fluid gesture navigation, FaceID biometric security, and App Store readiness.',
    canonicalUrl: 'https://techsoftwaredigital.in/ios-app-development',
    sectionId: 'services',
    serviceId: 'ios-apps',
    breadcrumbName: 'iOS App Development',
  },
  '/portfolio': {
    path: '/portfolio',
    title: 'Portfolio & Software Demos (30 Projects) | TechSoftware.digital',
    description: 'Explore our portfolio of 30 live demo apps, SaaS platforms, ERP systems, POS retail portals, and mobile app concepts built by TechSoftware.digital.',
    canonicalUrl: 'https://techsoftwaredigital.in/portfolio',
    sectionId: 'work',
    breadcrumbName: 'Portfolio',
  },
  '/work': {
    path: '/work',
    title: 'Portfolio & Software Demos (30 Projects) | TechSoftware.digital',
    description: 'Explore our portfolio of 30 live demo apps, SaaS platforms, ERP systems, POS retail portals, and mobile app concepts built by TechSoftware.digital.',
    canonicalUrl: 'https://techsoftwaredigital.in/portfolio',
    sectionId: 'work',
    breadcrumbName: 'Portfolio',
  },
  '/about': {
    path: '/about',
    title: 'About Us — Engineering Identity | TechSoftware.digital',
    description: 'Learn about TechSoftware.digital: our engineering principles, modern software stack, 100% source code ownership guarantee, and dedication to enterprise reliability.',
    canonicalUrl: 'https://techsoftwaredigital.in/about',
    sectionId: 'about',
    breadcrumbName: 'About Us',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Us — Start Your Project | TechSoftware.digital',
    description: 'Connect directly with the software engineering team at TechSoftware.digital. Get a project quote, technical architecture advice, or discuss your requirements.',
    canonicalUrl: 'https://techsoftwaredigital.in/contact',
    sectionId: 'contact',
    breadcrumbName: 'Contact Us',
  },
};

// Check if a path is private (Admin, CRM, Login, Dashboard)
export function isPrivatePath(path: string): boolean {
  const normalized = path.toLowerCase().replace(/\/+$/, '');
  return (
    normalized.startsWith('/admin') ||
    normalized.startsWith('/crm') ||
    normalized.startsWith('/dashboard') ||
    normalized.startsWith('/command-center') ||
    normalized.startsWith('/login') ||
    normalized.startsWith('/auth')
  );
}

interface SEOHeadProps {
  currentPath: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ currentPath }) => {
  useEffect(() => {
    const normalizedPath = currentPath.replace(/\/+$/, '') || '/';
    const isPrivate = isPrivatePath(normalizedPath);

    // If private route, set noindex, nofollow
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (isPrivate) {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.name = 'robots';
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.content = 'noindex, nofollow';
      document.title = 'Private Portal | TechSoftware.digital';
      return;
    } else {
      if (robotsMeta) {
        robotsMeta.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
      }
    }

    // Resolve matching SEO Route
    const route = SEO_ROUTES[normalizedPath] || SEO_ROUTES['/'];

    // Update document title
    document.title = route.title;

    // Update meta description
    let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (descMeta) {
      descMeta.content = route.description;
    }

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = route.canonicalUrl;
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (ogTitle) ogTitle.content = route.title;

    const ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (ogDesc) ogDesc.content = route.description;

    const ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    if (ogUrl) ogUrl.content = route.canonicalUrl;

    // Update Twitter Card tags
    const twTitle = document.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
    if (twTitle) twTitle.content = route.title;

    const twDesc = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null;
    if (twDesc) twDesc.content = route.description;

    // Update dynamic BreadcrumbList Schema
    let breadcrumbScript = document.getElementById('seo-dynamic-breadcrumbs') as HTMLScriptElement | null;
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'seo-dynamic-breadcrumbs';
      breadcrumbScript.type = 'application/ld+json';
      document.head.appendChild(breadcrumbScript);
    }

    const breadcrumbs = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://techsoftwaredigital.in/',
      },
    ];

    if (normalizedPath !== '/') {
      breadcrumbs.push({
        '@type': 'ListItem',
        position: 2,
        name: route.breadcrumbName,
        item: route.canonicalUrl,
      });
    }

    breadcrumbScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs,
    });
  }, [currentPath]);

  return null;
};
