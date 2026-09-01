import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectCard from './ProjectCard';
import { CATEGORIES, ALL_PROJECTS } from './projectsData';
import './AllProjects.css';

export { CATEGORIES, ALL_PROJECTS };

export default function AllProjects({ navigateTo, onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredProjects = activeCategory === 'todos'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(project => project.categoryKey === activeCategory);

  useGSAP(() => {
    // Settle dynamic entry transition for filtered items
    gsap.fromTo('.project-card',
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: 'back.out(1.5)' /* Cheerful bouncy stagger */
      }
    );
  }, { dependencies: [activeCategory] });

  return (
    <div className="all-projects-view">
      <div className="all-projects-container">
        {/* Navigation & Header */}
        <header className="all-projects-header">
          <button
            onClick={() => navigateTo('landing')}
            className="back-to-home-btn"
            aria-label="Volver al Inicio"
          >
            <ArrowLeft size={16} strokeWidth={2.2} />
            <span>Volver al Inicio</span>
          </button>
          <div className="all-projects-title-block">
            <span className="all-projects-subtitle">Portfolio Completo</span>
            <h1 className="all-projects-title">Archivo de <span className="text-highlight">Proyectos</span></h1>
            <p className="all-projects-desc">
              Una galería detallada de proyectos que abarca identidades visuales, publicaciones impresas, empaques ilustrados y productos digitales.
            </p>
          </div>
        </header>

        {/* Filter categories */}
        <nav className="all-projects-filters-nav">
          <ul className="all-projects-filters">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <li key={category.id}>
                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className={`all-projects-filter-btn ${isActive ? 'active' : ''}`}
                  >
                    {category.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Projects Grid */}
        <main className="all-projects-grid-wrapper">
          {filteredProjects.length > 0 ? (
            <div className="all-projects-grid">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} onSelect={onSelectProject} />
              ))}
            </div>
          ) : (
            <div className="all-projects-empty">
              No se encontraron proyectos en esta categoría.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
