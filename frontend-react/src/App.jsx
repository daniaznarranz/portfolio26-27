import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import DriftWall from './DriftWall';
import TextLoop from './TextLoop';
import AccordionGallery from './AccordionGallery';
import Navbar from './Navbar';
import AllProjects, { ALL_PROJECTS } from './AllProjects';
import brumaHero from './assets/bruma_hero.jpg';
import ProjectDetail from './ProjectDetail';
import developerPortrait from './assets/developer_portrait.png';
import tdcHorizontal1 from './assets/TDC_horizontal_1.jpg';
import inputPortada from './assets/Input_Portada.jpg';
import cesidaIdHorizontal1 from './assets/CesidaID_Horizontal1.jpg';
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

gsap.registerPlugin(useGSAP);

const DRIFT_ITEMS = [
  { image: drift1, title: 'Cata la Lata', href: '#' },
  { image: drift2, title: 'Bruma', href: '#' },
  { image: drift3, title: 'Cesida', href: '#' },
  { image: drift4, title: 'Cheesecake World', href: '#' },
  { image: drift5, title: 'Reverfest', href: '#' },
  { image: drift6, title: 'Teatros del Canal Web', href: '#' },
  { image: drift7, title: 'Teatros del Canal Mupi', href: '#' },
  { image: drift8, title: 'Bruma Web', href: '#' },
  { image: drift9, title: 'Guía de Libros Móvil', href: '#' },
  { image: drift10, title: 'Guía de Libros Layout', href: '#' },
  { image: drift11, title: 'Goiko Emmy Kevin', href: '#' },
  { image: drift12, title: 'Goiko Capo Pecorino', href: '#' }
];



const PRELOADER_COLORS = ['#FF6000', '#1A1819', '#4B5563', '#374151'];

const FloatingShapes = () => (
  <div className="floating-shapes-container">
    {/* Star shape */}
    <svg className="floating-shape shape-star" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
    </svg>
    {/* Circle shape */}
    <svg className="floating-shape shape-circle" viewBox="0 0 100 100" fill="currentColor">
      <circle cx="50" cy="50" r="40" />
    </svg>
    {/* Donut shape */}
    <svg className="floating-shape shape-donut" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="18">
      <circle cx="50" cy="50" r="36" />
    </svg>
    {/* Squiggle shape */}
    <svg className="floating-shape shape-squiggle" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round">
      <path d="M10,20 Q25,5 40,20 T70,20 T100,20" />
    </svg>
  </div>
);

function App() {
  const mainRef = useRef(null);
  const [currentView, setCurrentView] = useState('landing');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    navigateTo('project-detail');
  };

  const brumaProject = ALL_PROJECTS.find(p => p.title.toLowerCase().includes('bruma'));
  const tdcProject = ALL_PROJECTS.find(p => p.title.toLowerCase().includes('canal') || p.title.toLowerCase().includes('tdc'));
  const inputProject = ALL_PROJECTS.find(p => p.title.toLowerCase().includes('input'));
  const cesidaIdProject = ALL_PROJECTS.find(p => p.title.toLowerCase().includes('cesida') && p.title.toLowerCase().includes('identidad'));

  const workItems = [
    { image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', label: 'Studio Chroma ✦ Identidad de Marca', link: '#' },
    { 
      image: brumaHero, 
      label: 'Bruma ✦ Proyecto Experimental', 
      onClick: () => handleSelectProject(brumaProject) 
    },
    { 
      image: tdcHorizontal1, 
      label: 'Teatros del Canal ✦ Rediseño de Identidad', 
      onClick: () => handleSelectProject(tdcProject) 
    },
    { 
      image: inputPortada, 
      label: 'Input ✦ Revista de la ESD', 
      onClick: () => handleSelectProject(inputProject) 
    },
    { 
      image: cesidaIdHorizontal1, 
      label: 'Cesida ✦ Rediseño de Identidad', 
      onClick: () => handleSelectProject(cesidaIdProject) 
    },
    { image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80', label: 'Aura Skincare ✦ Dirección de Arte', link: '#' }
  ];

  const navigateTo = (view) => {
    const tl = gsap.timeline();
    tl.to('.app-root-content', { opacity: 0, duration: 0.35, ease: 'power2.inOut' })
      .call(() => {
        setCurrentView(view);
        window.scrollTo(0, 0);
      })
      .to('.app-root-content', { opacity: 1, duration: 0.35, ease: 'power2.inOut' });
  };

  const [hasAnimatedLanding, setHasAnimatedLanding] = useState(false);

  useGSAP(() => {
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

    // 1. Preloader entrance animation (Alternating bouncy slide-in)
    tl.fromTo('.preloader-char',
      {
        yPercent: (index) => (index % 2 === 0 ? -120 : 120),
        opacity: 0
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.05,
        ease: 'back.out(1.5)'
      },
      '+=0.3'
    )
      // 3. Preloader exit (Whole overlay curtain slides up)
      .to('.preloader-overlay', {
        yPercent: -100,
        duration: 1.0,
        ease: 'power4.inOut'
      }, '+=0.6')

      // 4. Navbar slide down and elements fade-in
      .fromTo('.navbar-header',
        { y: -80 },
        { y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(['.navbar-logo', '.navbar-capsule', '.navbar-cta'],
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
        '-=0.5'
      )

      // 5. Hero section elements slide up (Coordinated bouncy wave)
      .fromTo('.hero-subtitle',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'back.out(1.7)' },
        '-=0.3'
      )
      .fromTo('.hero-title',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo('.hero-desc',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo('.hero-actions .btn',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)' },
        '-=0.4'
      )
      // 6. DriftWall entrance
      .fromTo('.right-panel',
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 1.0, ease: 'power2.out' },
        '-=0.3'
      );
  }, { scope: mainRef, dependencies: [currentView, hasAnimatedLanding] });

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
          <>
            {/* Split-Screen Main Layout */}
            <div className="app-container" id="inicio">
              {/* Floating Decorative Shapes for Graphic Design Aesthetic */}
              <FloatingShapes />

              {/* Left Content Panel */}
              <div className="left-panel">
                <main className="hero-content">
                  <span className="hero-subtitle">Diseño Gráfico & Dirección de Arte</span>
                  <h1 className="hero-title">
                    Dando vida a ideas a través del <span className="text-highlight">diseño visual</span>
                  </h1>
                  <p className="hero-desc">
                    Especializado en identidad de marca, dirección de arte, diseño editorial y experiencias digitales alegres. Creo universos visuales que conectan de forma memorable y con un toque de magia en movimiento.
                  </p>
                  <div className="hero-actions">
                    <a href="#proyectos" onClick={(e) => { e.preventDefault(); navigateTo('projects'); }} className="btn btn-primary">
                      Ver Proyectos
                    </a>
                    <a href="#sobre-mi" className="btn btn-secondary">
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
                  Una selección de identidades visuales, proyectos editoriales y campañas creativas que demuestran mi amor por las formas, los colores y las historias visuales.
                </p>

                <div className="works-gallery-container">
                  <AccordionGallery
                    items={workItems}
                    defaultIndex={2}
                    expandRatio={0.58}
                    trigger="hover"
                    grayscale={false}
                    height={620}
                    gap={12}
                    radius={20}
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
                    <h3 className="about-card-title">DISEÑO CON PROPÓSITO & DIRECCIÓN DE ARTE</h3>
                    <p className="about-card-text">
                      Creo firmemente en el poder del diseño para contar historias, transmitir emociones y conectar personas. Combino la rigurosidad tipográfica, el juego cromático y el movimiento para dar vida a marcas audaces y experiencias visuales inolvidables.
                    </p>
                    <div className="about-signature">Daniel Aznar</div>
                  </div>

                  {/* Card 2: Cutout Portrait */}
                  <div className="about-card about-card-portrait glass-card">
                    <span className="about-badge">DISEÑADOR GRÁFICO</span>
                    <div className="about-portrait-wrapper">
                      <img src={developerPortrait} alt="Developer Cutout Portrait" className="about-portrait-img" />
                    </div>
                  </div>

                  {/* Card 3: Solid Coral Accent (Ideas to Canvas) */}
                  <div className="about-card about-card-accent">
                    <div className="about-accent-content">
                      <h4 className="about-accent-title">IDEAS AL PAPEL Y A LA PANTALLA.</h4>
                      <p className="about-accent-desc">Proceso creativo & Motion.</p>
                    </div>
                  </div>

                  {/* Card 4: Thoughts serif italic */}
                  <div className="about-card about-card-quote glass-card">
                    <p className="about-quote-text">
                      "Diseño alegre para marcas felices y proyectos audaces."
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* TextLoop Section Separator */}
            <div className="loop-separator">
              <TextLoop
                text="BRANDING ✦ DIRECCIÓN DE ARTE ✦ ILLUSTRATION ✦ DISEÑO EDITORIAL ✦ PACKAGING ✦ DIGITAL ART ✦ ANIMACIÓN ✦"
                shape="line"
                speed={45}
                direction="forward"
                separator="✦"
                fontSize={20}
                fontWeight={600}
                letterSpacing={6}
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
                  ¡Colaboremos! Si buscas una nueva identidad para tu marca, un proyecto editorial único o simplemente quieres charlar sobre diseño, escríbeme y crearemos algo genial juntos.
                </p>

                <div className="contact-card glass-card">
                  <div className="contact-info">
                    <h3 className="contact-name">Daniel Aznar</h3>
                    <p className="contact-title">Diseñador Gráfico & Director Creativo</p>
                    <div className="contact-details">
                      <div className="contact-detail-item">
                        <span className="contact-detail-icon">✉️</span>
                        <a href="mailto:daniaznarranz@gmail.com" className="contact-detail-link">daniaznarranz@gmail.com</a>
                      </div>
                      <div className="contact-detail-item">
                        <span className="contact-detail-icon">📍</span>
                        <span>Madrid, España</span>
                      </div>
                    </div>
                  </div>

                  <div className="contact-actions">
                    <a href="mailto:daniaznarranz@gmail.com" className="btn btn-primary">
                      Enviar Email
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      Ver LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : currentView === 'project-detail' ? (
          <ProjectDetail project={selectedProject} navigateTo={navigateTo} />
        ) : (
          <AllProjects navigateTo={navigateTo} onSelectProject={handleSelectProject} />
        )}
      </div>
    </div>
  );
}

export default App;
