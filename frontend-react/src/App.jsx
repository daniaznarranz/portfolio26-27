import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import DriftWall from './DriftWall';
import TextLoop from './TextLoop';
import AccordionGallery from './AccordionGallery';
import Navbar from './Navbar';
import AllProjects, { ALL_PROJECTS } from './AllProjects';
import ScrollTrigger from 'gsap/ScrollTrigger';
import brumaHero from './assets/bruma_hero.jpg';
import ProjectDetail from './ProjectDetail';
import CvView from './CvView';
import ErrorBoundary from './ErrorBoundary';
import NotFoundView from './NotFoundView';
import developerPortrait from './assets/Foto sobre mi 2.jpeg';
import tdcHorizontal1 from './assets/TDC_horizontal_1.jpg';
import inputPortada from './assets/Input_Portada.jpg';
import cesidaIdHorizontal1 from './assets/CesidaID_Horizontal1.jpg';
import cheesecakeWorldPrincipal from './assets/CheesecakeWorld_principal.jpg';
import bmCoffee1 from './assets/BM_portada horizontal.png';
import salsaGoikoPrincipal from './assets/SalsaGoiko_Horizontalprincipal.jpg';
import libroEspeculativoHorizontal1 from './assets/LibroEspeculativo_Horizontal1.jpg';
import drift1 from './assets/drift_1.jpg';
import drift2 from './assets/drift_2.jpg';
import drift3 from './assets/drift_3.jpg';
import drift4 from './assets/drift_4.jpg';
import drift5 from './assets/drift_5.jpg';
import drift6 from './assets/drift_6.jpg';
import drift7 from './assets/drift_7.jpg';
import drift8 from './assets/drift_8.jpg';
import drift9 from './assets/drift_9.jpg';
import drift10 from './assets/drift_10.jpg';
import drift11 from './assets/drift_11.jpg';
import drift12 from './assets/drift_12.jpg';
import './App.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const DRIFT_ITEMS = [
  { image: drift1, title: 'Cata la Lata' },
  { image: drift2, title: 'Bruma' },
  { image: drift3, title: 'Cesida' },
  { image: drift4, title: 'Cheesecake World' },
  { image: drift5, title: 'Reverfest' },
  { image: drift6, title: 'Teatros del Canal Web' },
  { image: drift7, title: 'Teatros del Canal Mupi' },
  { image: drift8, title: 'Bruma Web' },
  { image: drift9, title: 'Guía de Libros Móvil' },
  { image: drift10, title: 'Guía de Libros Layout' },
  { image: drift11, title: 'Goiko Emmy Kevin' },
  { image: drift12, title: 'Goiko Capo Pecorino' }
];



const PRELOADER_COLORS = ['#FF6000', '#1A1819', '#4B5563', '#374151'];

function WhatsAppIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z" />
    </svg>
  );
}

function App() {
  const mainRef = useRef(null);
  const [currentView, setCurrentView] = useState('landing');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(1080);
  const prevViewRef = useRef(currentView);

  useEffect(() => {
    prevViewRef.current = currentView;
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsTabletOrMobile(width <= 968);
      setIsLandscape(width > height);
      setViewportHeight(height);
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    navigateTo('project-detail');
  };

  const brumaProject = ALL_PROJECTS.find(p => p.title.toLowerCase().includes('bruma'));
  const tdcProject = ALL_PROJECTS.find(p => p.title.toLowerCase().includes('canal') || p.title.toLowerCase().includes('tdc'));
  const inputProject = ALL_PROJECTS.find(p => p.title.toLowerCase().includes('input'));
  const cesidaIdProject = ALL_PROJECTS.find(p => p.title.toLowerCase().includes('cesida') && p.title.toLowerCase().includes('identidad'));
  const cesidaMotionProject = ALL_PROJECTS.find(p => p.title.toLowerCase().includes('cesida') && p.title.toLowerCase().includes('motion'));
  const cheesecakeProject = ALL_PROJECTS.find(p => p.title.toLowerCase().includes('cheesecake'));
  const bmCoffeeProject = ALL_PROJECTS.find(p => p.title.toLowerCase().includes('bm'));
  const goikoProject = ALL_PROJECTS.find(p => p.title.toLowerCase().includes('goiko'));
  const libroEspeculativoProject = ALL_PROJECTS.find(p => p.title.toLowerCase().includes('especulativo'));

  const workItems = [
    {
      image: libroEspeculativoHorizontal1,
      label: 'Guía Práctica ✦ Libro Especulativo',
      onClick: () => handleSelectProject(libroEspeculativoProject)
    },
    {
      image: salsaGoikoPrincipal,
      label: 'Salsas Goiko ✦ Rediseño de Packaging',
      onClick: () => handleSelectProject(goikoProject)
    },
    {
      image: brumaHero,
      label: 'Bruma ✦ Proyecto Experimental',
      onClick: () => handleSelectProject(brumaProject)
    },
    {
      image: drift3,
      label: 'Cesida ✦ Motion Graphics',
      onClick: () => handleSelectProject(cesidaMotionProject)
    },
    {
      image: inputPortada,
      label: 'Input ✦ Revista de la ESD',
      onClick: () => handleSelectProject(inputProject)
    }
  ];

  const [pendingScrollTarget, setPendingScrollTarget] = useState(null);

  const navigateTo = (view, targetId = null) => {
    if (view === currentView) {
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          const headerOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
      return;
    }

    if (targetId) {
      setPendingScrollTarget(targetId);
    }

    // Disable interaction during transition
    document.body.style.pointerEvents = 'none';

    // Snappy fade out of current view
    gsap.to('.app-root-content', {
      opacity: 0,
      y: -15,
      duration: 0.18,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentView(view);
        if (!targetId) {
          window.scrollTo(0, 0);
        }
      }
    });
  };

  useGSAP(() => {
    const prevView = prevViewRef.current;
    if (prevView === currentView) {
      return;
    }

    // Snappy fade-in and slide-up of new view content
    gsap.fromTo('.app-root-content',
      { y: 15, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.28,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        clearProps: 'transform',
        onComplete: () => {
          document.body.style.pointerEvents = 'auto';
        }
      }
    );
  }, [currentView]);

  useEffect(() => {
    if (currentView === 'landing' && pendingScrollTarget) {
      const targetElement = document.getElementById(pendingScrollTarget);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'auto'
        });
      }
      setPendingScrollTarget(null);
    }
  }, [currentView, pendingScrollTarget]);

  useEffect(() => {
    let title = 'Daniel Aznar Ranz ✦ Diseño Gráfico, UX/UI & Product Design';
    if (currentView === 'cv') {
      title = 'Currículum Vitae ✦ Daniel Aznar Ranz';
    } else if (currentView === 'projects') {
      title = 'Todos los Proyectos ✦ Daniel Aznar Ranz';
    } else if (currentView === 'project-detail' && selectedProject) {
      title = `${selectedProject.title} ✦ Proyectos ✦ Daniel Aznar Ranz`;
    }
    document.title = title;
  }, [currentView, selectedProject]);

  const [hasAnimatedLanding, setHasAnimatedLanding] = useState(false);

  useGSAP(() => {
    // If not on landing page, ensure navbar is always visible and preloader is hidden
    if (currentView !== 'landing') {
      const preloader = document.querySelector('.preloader-overlay');
      if (preloader) {
        preloader.style.display = 'none';
      }
      gsap.set('.navbar-header', { y: 0 });
      gsap.set(['.navbar-logo', '.navbar-capsule', '.navbar-cta'], { opacity: 1, y: 0 });
      if (!hasAnimatedLanding) {
        setHasAnimatedLanding(true);
      }
      return;
    }

    if (hasAnimatedLanding) {
      // User is returning to landing page after initial animation already played
      // Skip preloader screen overlay
      const preloader = document.querySelector('.preloader-overlay');
      if (preloader) {
        preloader.style.display = 'none';
      }

      // Instantly set elements to their final states to avoid re-animating
      gsap.set(['.navbar-logo', '.navbar-capsule', '.navbar-cta', '.hero-subtitle', '.hero-title', '.hero-desc', '.hero-actions .btn', '.right-panel'], {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1
      });
      gsap.set('.navbar-header', { y: 0 });
      return;
    }

    // --- FIRST TIME LOAD SEQUENCING (hasAnimatedLanding is false) ---
    // Initial states to avoid FOUC (Flash of Unstyled Content) for landing elements
    gsap.set(['.navbar-logo', '.navbar-capsule', '.navbar-cta'], { opacity: 0 });
    gsap.set('.navbar-header', { y: -80 });
    gsap.set('.preloader-char', { yPercent: 120, opacity: 0 });
    gsap.set(['.hero-subtitle', '.hero-title', '.hero-desc', '.hero-actions .btn', '.right-panel'], {
      opacity: 0
    });

    const tl = gsap.timeline({
      onComplete: () => {
        // Fully remove the preloader overlay to make page interactive
        const preloader = document.querySelector('.preloader-overlay');
        if (preloader) {
          preloader.style.display = 'none';
        }
        setHasAnimatedLanding(true);
      }
    });

    // 1. Preloader entrance animation (Clean uniform slide up with 0.5s added initial delay)
    tl.fromTo('.preloader-char',
      {
        yPercent: 100,
        opacity: 0
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.02,
        ease: 'power4.out'
      },
      '+=0.65'
    )
      // 2. Preloader exit (Fast exit slide up)
      .to('.preloader-overlay', {
        yPercent: -100,
        duration: 0.65,
        ease: 'power4.inOut'
      }, '+=0.25')

      // 4. Navbar slide down and elements fade-in
      .fromTo('.navbar-header',
        { y: -80 },
        { y: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.45'
      )
      .fromTo(['.navbar-logo', '.navbar-capsule', '.navbar-cta'],
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power3.out' },
        '-=0.35'
      )

      // 5. Hero section elements slide up (Coordinated snappy wave - 0.3s faster)
      .fromTo('.hero-subtitle',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'back.out(1.7)' },
        '-=0.35'
      )
      .fromTo('.hero-title',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.35'
      )
      .fromTo('.hero-desc',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' },
        '-=0.35'
      )
      .fromTo('.hero-actions .btn',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'back.out(1.5)' },
        '-=0.3'
      )
      // 6. DriftWall entrance
      .fromTo('.right-panel',
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.65, ease: 'power2.out' },
        '-=0.35'
      );
  }, { dependencies: [currentView, hasAnimatedLanding] });

  // Animation for Skills Section on Landing View
  useGSAP(() => {
    if (currentView !== 'landing') return;

    const skillBars = gsap.utils.toArray('.skill-progress-fill');

    skillBars.forEach(bar => {
      const targetPercent = parseInt(bar.getAttribute('data-percent'), 10);
      const percentLabel = bar.closest('.skill-item').querySelector('.skill-percent');

      // Animate progress bar fill width
      gsap.fromTo(bar,
        { width: '0%' },
        {
          width: `${targetPercent}%`,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 92%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Animate percentage text count-up
      const counter = { value: 0 };
      gsap.to(counter, {
        value: targetPercent,
        duration: 1.6,
        ease: 'power2.out',
        roundProps: 'value',
        onUpdate: () => {
          if (percentLabel) {
            percentLabel.textContent = `${counter.value}%`;
          }
        },
        scrollTrigger: {
          trigger: bar,
          start: 'top 92%',
          toggleActions: 'play none none none'
        }
      });
    });
  }, { dependencies: [currentView] });

  return (
    <div ref={mainRef}>
      {/* Intro Preloader Screen */}
      <div className="preloader-overlay">
        <div className="preloader-text">
          {"Ranz_DSN©".split("").map((char, index) => {
            const letterColor = PRELOADER_COLORS[index % PRELOADER_COLORS.length];
            return (
              <span key={index} className="preloader-char-mask">
                <span className="preloader-char" style={{ color: letterColor }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Global Navigation Header */}
      <Navbar currentView={currentView} navigateTo={navigateTo} />

      <div className="app-root-content">
        {currentView === 'landing' ? (
          <ErrorBoundary onReset={() => navigateTo('landing')}>
            <>
              {/* Split-Screen Main Layout */}
              <div className="app-container" id="inicio">
                {/* Left Content Panel */}
                <div className="left-panel">
                  <main className="hero-content">
                    <span className="hero-subtitle">Diseño Gráfico, UX/UI & Product Design</span>
                    <h1 className="hero-title">
                      Dando vida a ideas a través del <span className="text-highlight">diseño</span>
                    </h1>
                    <p className="hero-desc">
                      Diseñador enfocado en el entorno digital, UX/UI y product design. Disfruto de entender cada reto para dar con la mejor solución, cuidar los detalles y construir proyectos tan sólidos como visuales.
                    </p>
                    <div className="hero-actions">
                      <button
                        onClick={() => navigateTo('projects')}
                        className="btn btn-primary"
                      >
                        Ver Proyectos
                      </button>
                      <a
                        href="#sobre-mi"
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById('sobre-mi');
                          if (el) {
                            const headerOffset = 80;
                            const elementPosition = el.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.scrollY - headerOffset;
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: 'smooth'
                            });
                          }
                        }}
                        className="btn btn-secondary"
                      >
                        Sobre Mí
                      </a>
                    </div>
                  </main>
                </div>

                {/* Right Visual Panel with DriftWall */}
                <div className="right-panel">
                  <DriftWall
                    items={DRIFT_ITEMS}
                    columns={4}
                    tileWidth={230}
                    tileHeight={150}
                    gap={14}
                    tilt={18}
                    turn={-22}
                    perspective={1050}
                    depth={120}
                    speed={38}
                    direction="up"
                    variance={0.45}
                    parallax={0.7}
                    lift={44}
                    fade={0.6}
                    dim={0.8}
                    overlayColor="#FFFFFF" /* Matches clean white canvas background */
                    radius={18} /* Matches designer rounded feel */
                    roll={9}
                  />
                </div>
              </div>

              {/* Latest Works Section (Proyectos) */}
              <section id="proyectos" className="works-section">
                <div className="section-container">
                  <span className="section-subtitle">Portfolio</span>
                  <h2 className="section-title">Últimos <span className="text-highlight">Trabajos</span></h2>
                  <p className="section-desc">
                    Una selección de trabajos de diferentes disciplinas donde el criterio visual, la estrategia y la usabilidad se encuentran para transformar conceptos en soluciones que realmente funcionan.
                  </p>

                  <div className="works-gallery-container">
                    <AccordionGallery
                      items={workItems}
                      defaultIndex={2}
                      expandRatio={0.58}
                      trigger={(isTabletOrMobile || isTouchDevice) ? "click" : "hover"}
                      grayscale={false}
                      height={(isTabletOrMobile && !isLandscape) ? 400 : (viewportHeight < 500 ? 280 : (viewportHeight < 800 ? 420 : 620))}
                      gap={12}
                      radius={20}
                      orientation={(isTabletOrMobile && !isLandscape) ? "vertical" : "horizontal"}
                    />
                    <div className="works-view-all">
                      <button onClick={() => navigateTo('projects')} className="btn btn-secondary">
                        Ver Todos los Proyectos &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sobre Mí Section (Bento Grid Style) */}
              <section id="sobre-mi" className="about-section">
                <div className="section-container">
                  {/* Background Giant Watermark Text */}
                  <div className="about-bg-text">RANZ DSN</div>

                  <div className="about-bento-grid">

                    {/* Card 1: Main Copy */}
                    <div className="about-card about-card-main glass-card">
                      <h3 className="about-card-title">DISEÑO GRÁFICO, UX/UI & PRODUCT DESIGN</h3>
                      <p className="about-card-text">
                        Soy Daniel Aznar, diseñador gráfico con especial interés en entornos digitales. Me gusta entender bien cada proyecto antes de empezar, cuidar el proceso y llegar a soluciones pensadas y bien ejecutadas. Disfruto trabajando en equipo, comunicando de forma clara y aportando valor real, combinando criterio visual, tendencias actuales y una ejecución cuidada.
                      </p>
                      <div className="about-signature">Daniel Aznar</div>
                    </div>

                    {/* Card 2: Cutout Portrait */}
                    <div className="about-card about-card-portrait glass-card">
                      <span className="about-badge">GRÁFICO, UX/UI & PRODUCT DESIGNER</span>
                      <div className="about-portrait-wrapper">
                        <img src={developerPortrait} alt="Developer Cutout Portrait" className="about-portrait-img" />
                      </div>
                    </div>

                    {/* Card 3: Skills Bento Card */}
                    <div className="about-card about-card-skills glass-card">
                      <h3 className="about-skills-title">HABILIDADES & HERRAMIENTAS</h3>
                      <div className="about-skills-grid">
                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">Figma / Product Design</span>
                            <span className="skill-percent">0%</span>
                          </div>
                          <div className="skill-progress-bg">
                            <div className="skill-progress-fill" data-percent="95" />
                          </div>
                        </div>

                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">Suite Adobe / PS / AI / ID </span>
                            <span className="skill-percent">0%</span>
                          </div>
                          <div className="skill-progress-bg">
                            <div className="skill-progress-fill" data-percent="87" />
                          </div>
                        </div>

                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">Diseño WEB</span>
                            <span className="skill-percent">0%</span>
                          </div>
                          <div className="skill-progress-bg">
                            <div className="skill-progress-fill" data-percent="95" />
                          </div>
                        </div>

                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">IA design / Automatizaciones</span>
                            <span className="skill-percent">0%</span>
                          </div>
                          <div className="skill-progress-bg">
                            <div className="skill-progress-fill" data-percent="90" />
                          </div>
                        </div>

                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">HTML / CSS / JavaScript</span>
                            <span className="skill-percent">0%</span>
                          </div>
                          <div className="skill-progress-bg">
                            <div className="skill-progress-fill" data-percent="90" />
                          </div>
                        </div>

                        <div className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">Motion Graphics</span>
                            <span className="skill-percent">0%</span>
                          </div>
                          <div className="skill-progress-bg">
                            <div className="skill-progress-fill" data-percent="87" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* TextLoop Section Separator */}
              <div className="loop-separator">
                <TextLoop
                  text="PRODUCT DESIGN ✦ UX/UI ✦ DISEÑO WEB ✦ BRANDING ✦ DISEÑO EDITORIAL ✦ PACKAGING ✦ MOTION GRAPHICS ✦ IA"
                  shape="line"
                  speed={45}
                  direction="forward"
                  separator="✦"
                  fontSize={isTabletOrMobile ? 15 : 20}
                  fontWeight={600}
                  letterSpacing={isTabletOrMobile ? 4 : 6}
                  uppercase
                  color="#FF6000" /* Orange color loop */
                  ribbon={false}
                  pauseOnHover
                />
              </div>

              {/* Contacto Section */}
              <section id="contacto" className="contact-section">
                <div className="section-container">
                  <span className="section-subtitle">Contacto</span>
                  <h2 className="section-title">¿Tienes una <span className="text-highlight">Idea</span>?</h2>
                  <p className="section-desc">
                    ¡Colaboremos! Si buscas una nueva identidad para tu marca, un entorno web, la idea de una nueva app o cualquier tipo de idea relacionada con el diseño escribeme y podemos crear algo juntos.
                  </p>

                  <div className="contact-card glass-card">
                    <div className="contact-info">
                      <h3 className="contact-name">Daniel Aznar</h3>
                      <p className="contact-title">Diseñador Gráfico, UX/UI & Product Designer</p>
                      <div className="contact-details">
                        <div className="contact-detail-item">
                          <span className="contact-detail-icon">✉️</span>
                          <a href="mailto:daniaznarranz@gmail.com" className="contact-detail-link">daniaznarranz@gmail.com</a>
                        </div>
                        <div className="contact-detail-item">
                          <span className="contact-detail-icon">📞</span>
                          <a href="tel:+34692449322" className="contact-detail-link">+34 692 44 93 22</a>
                        </div>
                        <div className="contact-detail-item">
                          <span className="contact-detail-icon">📸</span>
                          <a href="https://www.instagram.com/ranz_dsn/" target="_blank" rel="noopener noreferrer" className="contact-detail-link">@ranz_dsn</a>
                        </div>
                        <div className="contact-detail-item">
                          <span className="contact-detail-icon">📍</span>
                          <span>Madrid, España</span>
                        </div>
                      </div>
                    </div>

                    <div className="contact-actions">
                      <a
                        href="https://wa.me/34692449322?text=Hola%20Daniel%2C%20me%20gustar%C3%ADa%20consultar%20disponibilidad%20para%20un%20proyecto."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <WhatsAppIcon size={18} />
                        <span>Escribir por WhatsApp</span>
                      </a>
                      <a href="mailto:daniaznarranz@gmail.com" className="btn btn-primary">
                        Enviar Email
                      </a>
                      <a href="https://www.linkedin.com/in/daniel-aznar-ranz/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        Ver LinkedIn
                      </a>
                      <a href="https://www.instagram.com/ranz_dsn/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        Ver Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </>
          </ErrorBoundary>
        ) : currentView === 'cv' ? (
          <ErrorBoundary onReset={() => navigateTo('landing')}>
            <CvView navigateTo={navigateTo} />
          </ErrorBoundary>
        ) : currentView === 'project-detail' ? (
          selectedProject ? (
            <ErrorBoundary onReset={() => navigateTo('landing')}>
              <ProjectDetail project={selectedProject} navigateTo={navigateTo} />
            </ErrorBoundary>
          ) : (
            <NotFoundView navigateTo={navigateTo} />
          )
        ) : currentView === 'projects' ? (
          <ErrorBoundary onReset={() => navigateTo('landing')}>
            <AllProjects navigateTo={navigateTo} onSelectProject={handleSelectProject} />
          </ErrorBoundary>
        ) : (
          <NotFoundView navigateTo={navigateTo} />
        )}
      </div>
    </div>
  );
}

export default App;
