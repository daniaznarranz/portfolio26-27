import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio', icon: Home, href: '#inicio' },
  { id: 'proyectos', label: 'Proyectos', icon: Briefcase, href: '#proyectos' },
  { id: 'sobre-mi', label: 'Sobre Mí', icon: User, href: '#sobre-mi' },
  { id: 'contacto', label: 'Contacto', icon: Mail, href: '#contacto' }
];

export default function Navbar({ currentView = 'landing', navigateTo }) {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (currentView === 'cv') {
      setActiveSection('cv');
      return;
    }

    if (currentView !== 'landing') {
      setActiveSection('proyectos');
      return;
    }

    const sections = ['inicio', 'proyectos', 'sobre-mi', 'contacto'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Triggers when the section is in the upper middle area of viewport
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id;
          setActiveSection(targetId === 'proyectos' ? 'inicio' : targetId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Special scroll listener for top of the page (Inicio)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('inicio');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentView]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    // Intercept "proyectos" click to navigate to the projects archive page view
    if (targetId === 'proyectos') {
      navigateTo('projects');
      setActiveSection('proyectos');
      return;
    }
    
    if (currentView !== 'landing') {
      navigateTo('landing', targetId);
      setActiveSection(targetId);
      return;
    }

    // Default landing page behavior
    if (targetId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('inicio');
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Offset slightly to account for the header navbar height
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <header className="navbar-header">
        <a href="#inicio" onClick={(e) => handleLinkClick(e, '#inicio')} className="navbar-logo">
          Ranz_<span className="navbar-logo-accent">DSN©</span>
        </a>
        
        {/* Desktop Capsule Menu */}
        <nav className="navbar-capsule-container">
          <ul className="navbar-capsule">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`navbar-capsule-item ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={16} className="navbar-capsule-icon" />
                    <span className="navbar-capsule-label">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA - CV */}
        <div className="navbar-cta">
          <button 
            onClick={() => navigateTo('cv')} 
            className={`btn-cta ${currentView === 'cv' ? 'active' : ''}`}
            aria-label="Ver Currículum Vitae"
          >
            Mi CV
          </button>
        </div>

        {/* Responsive Mobile Hamburger Toggle */}
        <button 
          className="navbar-burger-btn" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      <div className={`navbar-mobile-drawer ${isOpen ? 'is-open' : ''}`}>
        <nav className="navbar-mobile-nav">
          <ul className="navbar-mobile-links">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="navbar-mobile-item">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      handleLinkClick(e, item.href);
                      setIsOpen(false);
                    }}
                    className={`navbar-mobile-link ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={24} className="navbar-mobile-icon" />
                    <span className="navbar-mobile-label">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="navbar-mobile-cta">
          <button 
            onClick={() => {
              navigateTo('cv');
              setIsOpen(false);
            }} 
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Mi CV
          </button>
        </div>
      </div>
    </>
  );
}
