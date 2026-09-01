import React from 'react';
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Sparkles,
  Layers,
  CheckCircle2,
  Users,
  Code2,
  Palette
} from 'lucide-react';
import './CvView.css';

function LinkedinIcon({ size = 15, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 15, className = '', color = 'var(--color-primary, #FF6000)' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function CvView({ navigateTo }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-page">
      {/* Action Bar (Hidden in Print) */}
      <div className="cv-action-bar-container">
        <div className="cv-action-bar">
          <button
            onClick={() => navigateTo('landing')}
            className="btn-action btn-back"
            aria-label="Volver al Portfolio (Esc)"
          >
            <ArrowLeft size={18} />
            <span>Volver al Portfolio</span>
          </button>

          <div className="cv-action-buttons">
            <a
              href="mailto:daniaznarranz@gmail.com"
              className="btn-action btn-secondary-action"
            >
              <Mail size={17} />
              <span>Contactar</span>
            </a>
            <button
              onClick={handlePrint}
              className="btn-action btn-primary-action"
              aria-label="Descargar CV en PDF o Imprimir"
              title="Guardar como PDF o Imprimir"
            >
              <Download size={18} />
              <span>Descargar CV en PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main CV Document Canvas */}
      <main className="cv-document-wrapper">
        <article className="cv-paper">

          {/* Header Section */}
          <header className="cv-header">
            <div className="cv-header-main">
              <div className="cv-title-group">
                <h1 className="cv-name">Daniel Aznar Ranz</h1>
                <p className="cv-role">Diseñador Gráfico · UX/UI & Product Designer</p>
              </div>

              {/* Contact Info Pills */}
              <div className="cv-contact-grid">
                <a href="mailto:daniaznarranz@gmail.com" className="cv-contact-item">
                  <Mail size={15} className="contact-icon" />
                  <span>daniaznarranz@gmail.com</span>
                </a>
                <a href="tel:+34692449322" className="cv-contact-item">
                  <Phone size={15} className="contact-icon" />
                  <span>+34 692 44 93 22</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-aznar-ranz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-contact-item"
                >
                  <LinkedinIcon size={15} className="contact-icon" />
                  <span>linkedin.com/in/daniel-aznar-ranz</span>
                </a>
                <a
                  href="https://www.instagram.com/ranz_dsn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-contact-item"
                >
                  <InstagramIcon size={15} className="contact-icon" />
                  <span>@ranz_dsn</span>
                </a>
                <div className="cv-contact-item">
                  <MapPin size={15} className="contact-icon" />
                  <span>Madrid, España</span>
                </div>
                <button
                  onClick={() => navigateTo('landing')}
                  className="cv-contact-item cv-contact-link"
                >
                  <Globe size={15} className="contact-icon" />
                  <span>Portfolio Web</span>
                </button>
              </div>
            </div>
          </header>

          <div className="cv-divider"></div>

          {/* 2-Column Grid Layout */}
          <div className="cv-grid-layout">

            {/* Left Main Column: Perfil + Experiencia */}
            <div className="cv-main-col">

              {/* Perfil Profesional */}
              <section className="cv-section">
                <div className="cv-section-header">
                  <Sparkles size={20} className="section-icon text-highlight" />
                  <h2 className="cv-section-title">Perfil Profesional</h2>
                </div>
                <p className="cv-summary-text">
                  Diseñador Gráfico con especial interés en <strong>WEB, UX/UI, product design y diseño digital</strong>, con sólida visión estratégica y rigor visual. Enfoque integral centrado en entender cada proyecto desde la investigación y la conceptualización hasta resultados óptimos y precisos. Capacidad contrastada de trabajo colaborativo en equipos multidisciplinares,  gestión de grupo, cooperación en el criterio y resolución de problemas.
                </p>
              </section>

              {/* Experiencia Laboral */}
              <section className="cv-section">
                <div className="cv-section-header">
                  <Briefcase size={20} className="section-icon text-highlight" />
                  <h2 className="cv-section-title">Experiencia Laboral</h2>
                </div>

                <div className="cv-timeline">

                  {/* Kuorum.org */}
                  <div className="cv-timeline-item featured-experience">
                    <div className="cv-item-header">
                      <div className="cv-item-title-wrap">
                        <h3 className="cv-job-title">Diseñador Gráfico & UX/UI</h3>
                        <span className="cv-company">Kuorum.org</span>
                      </div>
                      <span className="cv-date-badge">ene. 2026 – may. 2026 · 5 meses</span>
                    </div>
                    <div className="cv-job-meta">
                      <span className="cv-job-type">Contrato de prácticas</span>
                      <span className="cv-job-location">Madrid, España · En remoto</span>
                    </div>
                    <ul className="cv-bullets">
                      <li>
                        Diseño de interfaz de usuario (<strong>UI</strong>) y experiencia de usuario (<strong>UX</strong>) en <strong>Figma</strong> para plataformas digitales y aplicaciones web interactivas.
                      </li>
                      <li>
                        Creación de conceptos visuales, diseño de imagen corporativa y recursos gráficos vectoriales mediante <strong>Adobe Illustrator</strong> y <strong>Figma</strong>.
                      </li>
                      <li>
                        Definición de componentes reutilizables, flujos de navegación intuitivos y diseño de layouts web responsive.
                      </li>
                      <li>
                        Colaboración activa en equipo multidisciplinar bajo metodologías ágiles, comunicando decisiones de diseño y coordinando entregables con alto criterio estético.
                      </li>
                    </ul>
                    <div className="cv-tags-group">
                      <span className="cv-skill-tag">Figma</span>
                      <span className="cv-skill-tag">Diseño UI/UX</span>
                      <span className="cv-skill-tag">Diseño Web</span>
                      <span className="cv-skill-tag">Adobe Illustrator</span>
                      <span className="cv-skill-tag">Conceptos Visuales</span>
                      <span className="cv-skill-tag">Diseño de Imagen</span>
                      <span className="cv-skill-tag">Trabajo en Equipo</span>
                    </div>
                  </div>

                  {/* UD Velilla */}
                  <div className="cv-timeline-item">
                    <div className="cv-item-header">
                      <div className="cv-item-title-wrap">
                        <h3 className="cv-job-title">Entrenador de Fútbol & Coordinación de Grupos</h3>
                        <span className="cv-company">UD VELILLA</span>
                      </div>
                      <span className="cv-date-badge">jun. 2023 – mar. 2026 · 2 años 10 meses</span>
                    </div>
                    <div className="cv-job-meta">
                      <span className="cv-job-type">Jornada parcial</span>
                      <span className="cv-job-location">Velilla de San Antonio, Madrid · Presencial</span>
                    </div>
                    <ul className="cv-bullets">
                      <li>
                        Liderazgo de grupos humanos, gestión de talento individual y fomento de dinámicas de equipo de alto rendimiento y compromiso.
                      </li>
                      <li>
                        Planificación estratégica de objetivos, toma de decisiones en tiempo real y resolución eficaz de retos colectivos.
                      </li>
                      <li>
                        Comunicación asertiva y motivacional, desarrollando una sólida capacidad de resiliencia y empatía.
                      </li>
                    </ul>
                  </div>

                  {/* Atlético Velilla */}
                  <div className="cv-timeline-item">
                    <div className="cv-item-header">
                      <div className="cv-item-title-wrap">
                        <h3 className="cv-job-title">Entrenador de Fútbol</h3>
                        <span className="cv-company">Atlético Velilla C.F.</span>
                      </div>
                      <span className="cv-date-badge">sept. 2018 – may. 2023 · 4 años 9 meses</span>
                    </div>
                    <div className="cv-job-meta">
                      <span className="cv-job-type">Jornada parcial</span>
                      <span className="cv-job-location">Velilla de San Antonio, Madrid · Presencial</span>
                    </div>
                    <p className="cv-job-desc">
                      Dirección deportiva de equipos juveniles, formación en valores, disciplina, constancia y coordinación con familias y cuerpo técnico.
                    </p>
                  </div>

                  {/* Trapecio Log */}
                  <div className="cv-timeline-item">
                    <div className="cv-item-header">
                      <div className="cv-item-title-wrap">
                        <h3 className="cv-job-title">Operador de Carretilla Elevadora / Logística</h3>
                        <span className="cv-company">TRAPECIO LOG SLU</span>
                      </div>
                      <span className="cv-date-badge">mar. 2022 – ago. 2022 · 6 meses</span>
                    </div>
                    <div className="cv-job-meta">
                      <span className="cv-job-type">Jornada completa</span>
                      <span className="cv-job-location">Leganés, Madrid · Presencial</span>
                    </div>
                    <p className="cv-job-desc">
                      Gestión operativa y optimización de flujos de almacén, manteniendo máxima precisión, atención al detalle y cumplimiento de estándares de seguridad y eficiencia.
                    </p>
                  </div>

                </div>
              </section>

            </div>

            {/* Right Sidebar Column: Skills, Stack, Educación, Idiomas */}
            <aside className="cv-sidebar-col">

              {/* Competencias de Diseño */}
              <section className="cv-sidebar-section">
                <div className="cv-section-header">
                  <Palette size={18} className="section-icon text-highlight" />
                  <h2 className="cv-section-title">Diseño & UX/UI</h2>
                </div>
                <div className="cv-skill-chips">
                  <span className="cv-chip">Figma </span>
                  <span className="cv-chip">Design Systems</span>
                  <span className="cv-chip">UX Research & Testing</span>
                  <span className="cv-chip">Wireframing & Prototipado</span>
                  <span className="cv-chip">Arquitectura de Información</span>
                  <span className="cv-chip">Diseño Web Responsive</span>
                  <span className="cv-chip">Branding & Identidad Visual</span>
                  <span className="cv-chip">Diseño Editorial & Packaging</span>
                  <span className="cv-chip">Motion Graphics</span>
                  <span className="cv-chip">Metodologías Ágiles y Design Thinking</span>
                </div>
              </section>

              {/* Herramientas de Software */}
              <section className="cv-sidebar-section">
                <div className="cv-section-header">
                  <Layers size={18} className="section-icon text-highlight" />
                  <h2 className="cv-section-title">Software & Tools</h2>
                </div>
                <ul className="cv-tools-list">
                  <li>
                    <strong>Figma:</strong> Auto-layout, componentes interactivos, variables, prototipado y design systems.
                  </li>
                  <li>
                    <strong>Automatizaciones de IA:</strong> Optimización de flujos creativos, prompting avanzado e integración de IA en el proceso de diseño.
                  </li>
                  <li>
                    <strong>Adobe Illustrator:</strong> Vectorial, branding, tipografía e iconografía.
                  </li>
                  <li>
                    <strong>Adobe Photoshop:</strong> Edición, retoque digital y composición visual.
                  </li>
                  <li>
                    <strong>Adobe InDesign:</strong> Maquetación editorial, guías y publicaciones.
                  </li>
                  <li>
                    <strong>After Effects:</strong> Animación y motion graphics.
                  </li>
                </ul>
              </section>

              {/* Tecnologías & Entornos Digitales */}
              <section className="cv-sidebar-section">
                <div className="cv-section-header">
                  <Code2 size={18} className="section-icon text-highlight" />
                  <h2 className="cv-section-title">Desarrollo & WEB & IA</h2>
                </div>
                <div className="cv-skill-chips">
                  <span className="cv-chip">Automatizaciones de IA</span>
                  <span className="cv-chip">IA adaptativa</span>
                  <span className="cv-chip">HTML5 / Semantic Web</span>
                  <span className="cv-chip">CSS Modern</span>
                  <span className="cv-chip">JavaScript</span>
                  <span className="cv-chip">React / Vite</span>
                  <span className="cv-chip">GSAP (Animaciones)</span>
                  <span className="cv-chip">IA Design & Flujos</span>
                  <span className="cv-chip">Git / GitHub</span>
                </div>
              </section>

              {/* Soft Skills & Liderazgo */}
              <section className="cv-sidebar-section">
                <div className="cv-section-header">
                  <Users size={18} className="section-icon text-highlight" />
                  <h2 className="cv-section-title">Soft Skills</h2>
                </div>
                <div className="cv-soft-skills">
                  <div className="cv-soft-item">
                    <CheckCircle2 size={15} className="check-icon" />
                    <span> Gestión de equipos</span>
                  </div>
                  <div className="cv-soft-item">
                    <CheckCircle2 size={15} className="check-icon" />
                    <span>Trabajo en equipo multidisciplinar</span>
                  </div>
                  <div className="cv-soft-item">
                    <CheckCircle2 size={15} className="check-icon" />
                    <span>Comunicación clara y asertiva</span>
                  </div>
                  <div className="cv-soft-item">
                    <CheckCircle2 size={15} className="check-icon" />
                    <span>Resolución creativa de problemas</span>
                  </div>
                  <div className="cv-soft-item">
                    <CheckCircle2 size={15} className="check-icon" />
                    <span>Adaptabilidad y aprendizaje continuo</span>
                  </div>
                </div>
              </section>

              {/* Educación & Formación */}
              <section className="cv-sidebar-section">
                <div className="cv-section-header">
                  <GraduationCap size={18} className="section-icon text-highlight" />
                  <h2 className="cv-section-title">Educación</h2>
                </div>
                <div className="cv-edu-item">
                  <h3 className="cv-edu-degree">Grado en Diseño Gráfico</h3>
                  <p className="cv-edu-school">Escuela Superior de Diseño de Madrid (ESDM)</p>
                  <span className="cv-edu-date">Enfoque en Diseño Digital</span>
                </div>
              </section>

              {/* Idiomas */}
              <section className="cv-sidebar-section">
                <div className="cv-section-header">
                  <Globe size={18} className="section-icon text-highlight" />
                  <h2 className="cv-section-title">Idiomas</h2>
                </div>
                <div className="cv-languages">
                  <div className="cv-lang-item">
                    <span className="lang-name">Español</span>
                    <span className="lang-level">Nativo</span>
                  </div>
                  <div className="cv-lang-item">
                    <span className="lang-name">Inglés</span>
                    <span className="lang-level lang-level-learning">En aprendizaje activo</span>
                  </div>
                </div>
              </section>

            </aside>

          </div>

          {/* Footer of CV */}
          <footer className="cv-footer">
            <span>Currículum Vitae · Daniel Aznar Ranz · {new Date().getFullYear()}</span>
            <span className="cv-footer-signature">Ranz_DSN©</span>
          </footer>

        </article>
      </main>
    </div>
  );
}
