import React from 'react';
import { ArrowLeft, ExternalLink, Calendar, Tag, Briefcase, Award, X } from 'lucide-react';
import './ProjectDetail.css';

export default function ProjectDetail({ project, navigateTo }) {
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

  // Check if project has a video or if the image is a video URL
  const isVideo = project.video || (project.image && (project.image.endsWith('.mp4') || project.image.includes('video')));

  // Use project gallery if defined, otherwise fall back to mock images
  const showcaseImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [
        project.image,
        'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=800&q=80', // Stationary mock
        'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', // Brochure layout
        'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=800&q=80'  // Poster design
      ];

  const [activeImage, setActiveImage] = React.useState(null);

  return (
    <div className="project-detail-view">
      <div className="project-detail-container">
        {/* Navigation back button */}
        <nav className="project-detail-nav">
          <button onClick={() => navigateTo('projects')} className="back-btn">
            <ArrowLeft size={18} /> Volver a Proyectos
          </button>
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
              project.details.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))
            ) : (
              <p>{project.description}</p>
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
                      style={project.containImages ? { objectFit: 'contain', backgroundColor: '#ffffff', padding: '20px' } : {}}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer CTA navigation */}
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
          <button className="lightbox-close" onClick={() => setActiveImage(null)}>
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
