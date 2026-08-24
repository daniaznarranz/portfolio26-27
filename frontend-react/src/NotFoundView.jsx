import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './NotFoundView.css';

export default function NotFoundView({ navigateTo }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Elegant GSAP animation for 404 elements
    gsap.fromTo(el.querySelector('.nf-number-4-left'), 
      { x: -80, opacity: 0, rotate: -15 }, 
      { x: 0, opacity: 1, rotate: 0, duration: 0.55, ease: 'back.out(1.5)' }
    );
    gsap.fromTo(el.querySelector('.nf-number-0'), 
      { scale: 0.85, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)', delay: 0.12 }
    );
    gsap.fromTo(el.querySelector('.nf-number-4-right'), 
      { x: 80, opacity: 0, rotate: 15 }, 
      { x: 0, opacity: 1, rotate: 0, duration: 0.55, ease: 'back.out(1.5)', delay: 0.22 }
    );
    gsap.fromTo(el.querySelector('.nf-content-inner'), 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.4 }
    );
  }, []);

  return (
    <div className="not-found-container" ref={containerRef}>
      <div className="not-found-graphic">
        <span className="nf-number nf-number-4-left">4</span>
        <span className="nf-number nf-number-0 text-highlight">0</span>
        <span className="nf-number nf-number-4-right">4</span>
      </div>
      <div className="nf-content-inner">
        <h1 className="nf-title">Página no encontrada</h1>
        <p className="nf-desc">
          La sección o proyecto que estás buscando no existe, ha sido movido o nunca estuvo aquí. ¡No te preocupes, puedes volver al camino correcto!
        </p>
        <div className="nf-actions">
          <button onClick={() => navigateTo('landing')} className="btn btn-primary">
            Volver al Inicio
          </button>
          <button onClick={() => navigateTo('projects')} className="btn btn-secondary">
            Explorar Proyectos
          </button>
        </div>
      </div>
    </div>
  );
}
