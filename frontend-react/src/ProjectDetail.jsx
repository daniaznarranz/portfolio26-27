import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Tag, Briefcase, Award, X } from 'lucide-react';
import { ALL_PROJECTS } from './projectsData';
import './ProjectDetail.css';

// Simple markdown-style bold parser (pure React, no DOM manipulation)
function renderFormattedText(text) {
  if (typeof text !== 'string') return text;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

// Truncate title with ellipsis if it exceeds character limit
function truncateTitle(title, maxChars = 16) {
  if (!title) return '';
  const cleanTitle = title.split(' ✦ ')[0].trim();
  if (cleanTitle.length <= maxChars) return cleanTitle;
  return cleanTitle.slice(0, maxChars).trim() + '...';
}

export default function ProjectDetail({ project, navigateTo, onSelectProject }) {
  if (!project) {
    return (
      <div className="project-detail-error">
        <p>No se ha seleccionado ningún proyecto.</p>
        <button onClick={() => navigateTo('projects')} className="btn btn-primary">
          Volver a Proyectos
        </button>
      </div>
    );
  }

  const currentIndex = ALL_PROJECTS.findIndex(p => p.title === project.title);
  const prevProject = currentIndex > 0 ? ALL_PROJECTS[currentIndex - 1] : ALL_PROJECTS[ALL_PROJECTS.length - 1];
  const nextProject = currentIndex < ALL_PROJECTS.length - 1 ? ALL_PROJECTS[currentIndex + 1] : ALL_PROJECTS[0];

  const [activeImage, setActiveImage] = useState(null);

  // Scroll to top on project change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project]);

  // Keyboard navigation: ArrowLeft / ArrowRight to switch projects, Escape to close lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeImage) {
        setActiveImage(null);
        e.stopPropagation();
      } else if (e.key === 'ArrowLeft' && !activeImage && prevProject && onSelectProject) {
        onSelectProject(prevProject);
      } else if (e.key === 'ArrowRight' && !activeImage && nextProject && onSelectProject) {
        onSelectProject(nextProject);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage, prevProject, nextProject, onSelectProject]);

  // Check if project has a video or if the image is a video URL
  const isVideo = project.video || (project.image && (project.image.endsWith('.mp4') || project.image.includes('video')));

  // Use project gallery if defined, otherwise fall back to mock images
  const showcaseImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [
        project.image,
        'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=800&q=80'
      ];

  return (
    <div className="project-detail-view">
      <div className="project-detail-container">
        {/* Top Navigation Back */}
        <nav className="project-detail-nav">
          <button onClick={() => navigateTo('projects')} className="back-btn" aria-label="Volver a Proyectos (Esc)">
            <ArrowLeft size={18} /> Volver a Proyectos
          </button>
          <span className="keyboard-nav-hint">Usa las teclas ← / → para navegar entre proyectos o Esc para salir</span>
        </nav>

        {/* Hero Header Area (Title left, Subtitle right) */}
        <header className="project-detail-header">
          <h1 className="project-detail-title">
            {project.title.split(' ✦ ')[0].toUpperCase()}
          </h1>
          <span className="project-detail-header-subtitle">
            {project.title.split(' ✦ ')[1] || project.category}
          </span>
        </header>

        {/* Hero Cover Image/Video */}
        <div className="project-hero-media-wrapper" onClick={() => setActiveImage(project.video || project.image)}>
          {isVideo ? (
            <video
              src={project.video || project.image}
              className="project-hero-media"
              autoPlay
              loop
              muted
              playsInline
              controls
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-hero-media" 
              loading="lazy"
              decoding="async"
              style={project.containImages ? { objectFit: 'contain', backgroundColor: '#ffffff', padding: '20px' } : {}} 
            />
          )}
        </div>

        {/* Project Case Study / Info Grid */}
        <section className="project-case-study">
          {/* Left Column: Metadata Card Panel */}
          <div className="case-study-column metadata-column">
            <div className="portfolio-metadata-card">
              <div className="metadata-text-group">
                <span className="metadata-text-label">CONTENIDO</span>
                <div className="metadata-tags-list">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="project-detail-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="metadata-text-group">
                <span className="metadata-text-label">CLIENTE</span>
                <span className="metadata-text-value">{project.client || "Museo de artes decorativas de Madrid"}</span>
              </div>

              <div className="metadata-text-group">
                <span className="metadata-text-label">AÑO</span>
                <span className="metadata-text-value">{project.year || "2025"}</span>
              </div>

              <div className="metadata-text-group">
                <span className="metadata-text-label">ROL</span>
                <span className="metadata-text-value">{project.role || "Proyección experimental completa"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Case study description & links */}
          <div className="case-study-column text-column">
            <div className="info-section-header">
              <span className="metadata-text-label">INFO</span>
              <h2 className="info-section-tagline">
                {project.tagline || "Web y más info del proyecto"}
                {project.link && project.link !== '#' && (
                  <>
                    {' - '}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="info-project-link">
                      (Enlace de {project.title.split(' ✦ ')[0]} aquí)
                    </a>
                  </>
                )}
              </h2>
            </div>

            {project.details && project.details.length > 0 ? (
              (() => {
                const narrativeParagraphs = [];
                const chatbotParagraphs = [];

                project.details.forEach((p) => {
                  if (typeof p === 'string' && p.toLowerCase().includes('chatbot')) {
                    chatbotParagraphs.push(p);
                  } else {
                    narrativeParagraphs.push(p);
                  }
                });

                return (
                  <>
                    {narrativeParagraphs.map((paragraph, idx) => (
                      <p key={`narrative-${idx}`}>{renderFormattedText(paragraph)}</p>
                    ))}

                    {chatbotParagraphs.length > 0 && (
                      <div className="project-chatbot-callout">
                        <span className="chatbot-callout-tag">Utilización del Chatbot</span>
                        {chatbotParagraphs.map((paragraph, idx) => (
                          <p key={`chatbot-${idx}`} className="chatbot-callout-text">
                            {renderFormattedText(paragraph)}
                          </p>
                        ))}
                      </div>
                    )}
                  </>
                );
              })()
            ) : (
              <p>{renderFormattedText(project.description)}</p>
            )}
          </div>
        </section>

        {/* Visual Showcase Gallery (Large grid) */}
        <section className="project-visuals-gallery">
          <h2 className="gallery-section-title">Galería del Proyecto</h2>
          <div className="project-showcase-grid">
            {showcaseImages.map((imgItem, idx) => {
              const isObject = imgItem && typeof imgItem === 'object';
              const imgUrl = isObject ? imgItem.url : imgItem;
              const widthClass = isObject ? imgItem.type : (idx % 3 === 0 ? 'full-width' : 'half-width');
              const isVideoItem = imgUrl && (imgUrl.endsWith('.mp4') || imgUrl.includes('video'));
              
              return (
                <div 
                  key={idx} 
                  className={`showcase-img-card ${widthClass}`} 
                  onClick={() => setActiveImage(imgUrl)}
                >
                  {isVideoItem ? (
                    <video 
                      src={imgUrl} 
                      className="showcase-img" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      controls
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <img 
                      src={imgUrl} 
                      alt={`Showcase view ${idx + 1}`} 
                      className="showcase-img" 
                      loading="lazy"
                      decoding="async"
                      style={project.containImages ? { objectFit: 'contain', backgroundColor: '#ffffff', padding: '20px' } : {}}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Project Next/Prev Navigation Pagination */}
        <section className="project-detail-pagination-wrapper">
          <div className="project-detail-pagination">
            <div className="pagination-side pagination-side-prev">
              {prevProject && (
                <button
                  type="button"
                  className="pagination-btn pagination-btn-prev"
                  onClick={() => onSelectProject ? onSelectProject(prevProject) : navigateTo('projects')}
                  title={`Ver proyecto anterior: ${prevProject.title.split(' ✦ ')[0]}`}
                  aria-label={`Proyecto anterior: ${prevProject.title.split(' ✦ ')[0]}`}
                >
                  <ArrowLeft size={16} strokeWidth={2.2} className="btn-arrow-icon" />
                  <span>Anterior: <strong className="pagination-btn-name">{truncateTitle(prevProject.title, 16)}</strong></span>
                </button>
              )}
            </div>

            <div className="pagination-side pagination-side-center">
              <button
                type="button"
                onClick={() => navigateTo('projects')}
                className="pagination-btn pagination-btn-center"
                aria-label="Ver todos los proyectos"
              >
                <span>Ver todos los proyectos</span>
              </button>
            </div>

            <div className="pagination-side pagination-side-next">
              {nextProject && (
                <button
                  type="button"
                  className="pagination-btn pagination-btn-next"
                  onClick={() => onSelectProject ? onSelectProject(nextProject) : navigateTo('projects')}
                  title={`Ver siguiente proyecto: ${nextProject.title.split(' ✦ ')[0]}`}
                  aria-label={`Siguiente proyecto: ${nextProject.title.split(' ✦ ')[0]}`}
                >
                  <span>Siguiente: <strong className="pagination-btn-name">{truncateTitle(nextProject.title, 16)}</strong></span>
                  <ArrowRight size={16} strokeWidth={2.2} className="btn-arrow-icon" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <footer className="project-detail-footer">
          <button onClick={() => navigateTo('projects')} className="btn btn-secondary">
            <ArrowLeft size={16} /> Volver al Archivo
          </button>
          {project.link && project.link !== '#' && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visitar Sitio En Vivo <ExternalLink size={16} />
            </a>
          )}
        </footer>
      </div>

      {/* Lightbox / Image Viewer Modal */}
      {activeImage && (
        <div className="project-detail-lightbox" onClick={() => setActiveImage(null)}>
          <button className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Cerrar vista completa (Esc)">
            <X size={36} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {activeImage.endsWith('.mp4') || activeImage.includes('video') ? (
              <video
                src={activeImage}
                className="lightbox-media"
                controls
                autoPlay
                loop
                playsInline
              />
            ) : (
              <img src={activeImage} alt="Expanded project visual" className="lightbox-media" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
