import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectCard from './ProjectCard';
import './AllProjects.css';
import brumaHero from './assets/bruma_hero.jpg';
import brumaVertical1 from './assets/bruma_vertical_1.jpg';
import brumaVertical2 from './assets/bruma_vertical_2.jpg';
import brumaHorizontal from './assets/bruma_horizontal.jpg';
import brumaMotionFanzineGif from './assets/bruma_Motion_Fanzine_GIF.gif';
import cesidaVideo from './assets/VideoFinal_Resumen_CESIDA.mp4';
import cesidaHero from './assets/drift_3.jpg';

// Import TDC assets
import tdcVideo from './assets/TDC_Video.mp4';
import tdcVertical1 from './assets/TDC_vertical 1.jpg';
import tdcVertical2 from './assets/TDC_Vertical_2.jpg';
import tdcVertical3 from './assets/TDC_Vertical_3.jpg';
import tdcVertical4 from './assets/TDC_Vertical_4.jpg';
import tdcHorizontal1 from './assets/TDC_horizontal_1.jpg';
import tdcHorizontal2 from './assets/TDC_horizontal_2.jpg';

// Import Input assets
import inputPortada from './assets/Input_Portada.jpg';
import inputHorizontal1 from './assets/Input1_horizontal.jpg';
import inputVertical2 from './assets/Input2_Vertical.jpg';
import inputVertical3 from './assets/Input3_Vertical.jpg';

// Import CesidaID assets
import cesidaIdVideoInicial from './assets/CesidaID_VideoInicial.mp4';
import cesidaIdVertical1 from './assets/CesidaID__Vertical1.jpg';
import cesidaIdVertical2 from './assets/CesidaID_Vertical2.jpg';
import cesidaIdHorizontal1 from './assets/CesidaID_Horizontal1.jpg';
import cesidaIdVertical3 from './assets/CesidaID_Vertical3.jpg';
import cesidaIdVertical4 from './assets/CesidaID_Vertical4.png';
import cesidaIdHorizontal2 from './assets/CesidaID_Horizontal2.mp4';

const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'design', label: 'Identidad & Branding' },
  { id: 'editorial', label: 'Editorial & Impresos' },
  { id: 'packaging', label: 'Packaging & Ilustración' },
  { id: 'digital', label: 'Diseño Digital & UI' },
  { id: 'motion', label: 'Motion Graphics' }
];

export const ALL_PROJECTS = [
  {
    image: brumaHero,
    title: 'Bruma ✦ proyecto experimental',
    category: 'Identidad & Branding',
    categoryKey: 'design',
    description: 'Identidad visual y campaña para marca de productos cosméticos orgánicos de origen natural.',
    technologies: ['Branding', 'Gráfica Impresa', 'Motion Graphics', 'Diseño Web'],
    link: 'https://leo-velasco-garcia.github.io/alfombra/#',
    client: 'Museo de artes decorativas de Madrid',
    year: '2025',
    role: 'Proyección experimental completa',
    tagline: 'Web y fanzine del proyecto experimental',
    details: [
      'Proyecto experimental desarrollado junto a Jorge Blas y Leo Velasco después de visitar el museo de Artes Decorativas de Madrid, que explora la relación entre memoria, emoción y gráfica a través del lenguaje del tejido. La propuesta parte de una experiencia web que traduce los recuerdos y la memoria del visitante en una composición visual única, donde el tiempo y la carga emocional se materializan en forma de patrón.',
      'Cada resultado se convierte en una pieza gráfica de carácter casi textil, pensada para ser trasladada al soporte impreso como un objeto táctil y personal. La publicación funciona como archivo físico de la experiencia, haciendo de cada ejemplar una muestra irrepetible.',
      'Un Fanzine experimental sobre la memoria aporta un extra de interes al proyecto y le da ese punto de entendimiento complementando la web y la gráfica impresa.',
      'El sistema se concibe como un proyecto vivo, con una paleta cromática variable que se renueva por temporadas, reforzando la idea de memoria cambiando y reinterpretación constante.'
    ],
    gallery: [
      { url: brumaVertical1, type: 'half-width' },
      { url: brumaVertical2, type: 'half-width' },
      { url: brumaHorizontal, type: 'full-width' },
      { url: brumaMotionFanzineGif, type: 'full-width' }
    ]
  },
  {
    image: cesidaHero,
    video: cesidaVideo,
    title: 'Cesida ✦ Motion Graphics',
    category: 'Motion Graphics',
    categoryKey: 'motion',
    description: 'Pieza audiovisual para la presentación del nuevo sistema de marca de la organización CESIDA.',
    technologies: ['Motion Graphics', 'Dirección de Arte'],
    link: '',
    client: 'CESIDA (Coordinadora Estatal de VIH y Sida)',
    year: '2025',
    role: 'Motion Design & Animación 2D',
    tagline: 'Vídeo presentación de rediseño de identidad',
    details: [
      'Desarrollo y dirección de una pieza audiovisual de Motion Graphics para la presentación dinámica de la nueva identidad visual de la organización CESIDA.',
      'El vídeo expone con claridad los nuevos códigos de color, las tipografías seleccionadas y el lenguaje gráfico unificado que aporta mayor cercanía y dinamismo a la comunicación institucional.',
      'A través de animaciones fluidas y transiciones ágiles en After Effects, se proyectan los valores del nuevo sistema de marca de forma atractiva para redes y eventos oficiales.'
    ],
    gallery: [
      { url: cesidaVideo, type: 'full-width' }
    ]
  },
  {
    image: tdcHorizontal1,
    video: tdcVideo,
    title: 'Teatros del Canal (TDC) ✦ Rediseño de Identidad',
    category: 'Identidad & Branding',
    categoryKey: 'design',
    description: 'Rediseño de la identidad visual de los Teatros del Canal de Madrid, unificando la oferta escénica y conectando con nuevos públicos a través de un sistema dinámico y contemporáneo.',
    technologies: ['Branding', 'Gráfica Impresa', 'Motion Graphics', 'Diseño Web'],
    link: '',
    client: 'Teatros del Canal / Comunidad de Madrid',
    year: '2024',
    role: 'Diseñador de Identidad & Dirección de Arte',
    tagline: 'Identidad visual y sistema gráfico para un gran centro escénico',
    details: [
      'Rediseño de la identidad de uno de los principales centros culturales de Madrid. La propuesta nace desde la idea de mirar al teatro desde una nueva perspectiva, dando lugar a una identidad gráfica renovada cuya misión es ser más llamativa, fresca y accesible para todos los públicos.',
      'Cada sala se identifica mediante un símbolo y un color propio, desarrollados a partir de un sistema de submarcas. Este sistema visual mantiene una conexión constante entre todos los elementos, creando un lenguaje gráfico coherente y reconocible en toda la marca.',
      'El proyecto busca un equilibrio entre innovación y prestigio cultural, con el objetivo de ampliar el público y acercar Teatros del Canal a nuevas audiencias sin perder su identidad ni su valor como referente cultural.'
    ],
    gallery: [
      { url: tdcVertical1, type: 'half-width' },
      { url: tdcVertical2, type: 'half-width' },
      { url: tdcHorizontal1, type: 'full-width' },
      { url: tdcVertical3, type: 'half-width' },
      { url: tdcVertical4, type: 'half-width' },
      { url: tdcHorizontal2, type: 'full-width' }
    ]
  },
  {
    image: inputPortada,
    title: 'Input ✦ Revista de la ESD',
    category: 'Editorial & Impresos',
    categoryKey: 'editorial',
    description: 'Diseño, maquetación y dirección de arte para Input, una revista autoeditada por y para estudiantes de la Escuela Superior de Diseño (ESD) de Madrid.',
    technologies: ['Editorial', 'Layout', 'Dirección de Arte', 'InDesign'],
    link: '',
    client: 'ESD (Escuela Superior de Diseño de Madrid)',
    year: '2024',
    role: 'Co-director Creativo & Maquetador',
    tagline: 'Revista semestral autogestionada para la comunidad estudiantil de la ESD',
    details: [
      'Revista dirigida a los estudiantes de la ESD, bajo el lema «Crea, escupe, impacta!». Junto a mis compañeros Jorge Blas y Leo Velasco, presentamos una propuesta que apuesta por la frescura, la originalidad y el impacto visual, pensada para conectar con el espíritu creativo de la escuela.',
      'El proyecto busca motivar a los alumnos a generar y compartir contenido, al mismo tiempo que da respuesta a las necesidades e inquietudes que los propios estudiantes demandan, convirtiendo la revista en un espacio de expresión, participación y experimentación creativa.'
    ],
    gallery: [
      { url: inputHorizontal1, type: 'full-width' },
      { url: inputVertical2, type: 'half-width' },
      { url: inputVertical3, type: 'half-width' }
    ]
  },
  {
    image: cesidaIdHorizontal1,
    video: cesidaIdVideoInicial,
    title: 'Cesida ✦ Rediseño de Identidad',
    category: 'Identidad & Branding',
    categoryKey: 'design',
    description: 'Rediseño de la identidad visual y sistema de marca para la coordinadora estatal CESIDA, aportando cercanía, claridad y un impacto visual contemporáneo.',
    technologies: ['Branding', 'Identidad Visual', 'Motion Graphics', 'Dirección de Arte'],
    link: '',
    client: 'CESIDA (Coordinadora Estatal de VIH y Sida)',
    year: '2025',
    role: 'Diseñador de Identidad & Dirección de Arte',
    tagline: 'Rediseño institucional y sistema gráfico dinámico',
    details: [
      'Rediseño completo de la identidad visual de la coordinadora CESIDA. La propuesta busca modernizar la comunicación institucional de la organización, dotándola de una voz gráfica clara, optimista y comprometida.',
      'El sistema se basa en la simplificación del logotipo y el uso de una paleta tipográfica y cromática vibrante que facilita su aplicación tanto en soportes físicos como digitales.',
      'El proyecto incluye el diseño de la guía de estilo de marca, cartelería de campañas, mupis animados para redes sociales y plantillas corporativas para las distintas sedes de la coordinadora.'
    ],
    gallery: [
      { url: cesidaIdVertical1, type: 'half-width' },
      { url: cesidaIdVertical2, type: 'half-width' },
      { url: cesidaIdHorizontal1, type: 'full-width' },
      { url: cesidaIdVertical3, type: 'half-width' },
      { url: cesidaIdVertical4, type: 'half-width' },
      { url: cesidaIdHorizontal2, type: 'full-width' }
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    title: 'Aura Skincare ✦ Dirección de Arte',
    category: 'Identidad & Branding',
    categoryKey: 'design',
    description: 'Dirección de arte, fotografía de bodegón de producto y estrategia visual de lanzamiento para cosmética limpia.',
    technologies: ['Fotografía', 'Dirección de Arte', 'Color Grading', 'Photoshop'],
    link: '#',
    client: 'Aura Lab Cosmetics',
    year: '2025',
    role: 'Dirección de Arte & Estilismo fotográfico',
    tagline: 'Campaña visual y dirección creativa para marca cosmética',
    details: [
      'Planificación y dirección de arte para la sesión de fotos de lanzamiento de Aura Skincare, una marca comprometida con ingredientes de origen vegetal.',
      'El estilismo fotográfico se basó en tonos neutros, iluminación diáfana y composición minimalista con piedras y texturas orgánicas para resaltar la pureza y los beneficios del producto.',
      'El material generado sirvió para estructurar la estrategia de lanzamiento en plataformas digitales, e-commerce y publicidad exterior.'
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    title: 'Ecosfera NGO ✦ Experiencia Web',
    category: 'Diseño Digital & UI',
    categoryKey: 'digital',
    description: 'Diseño de interfaz interactiva, prototipado de micro-interacciones y UX para una ONG de conservación marina.',
    technologies: ['UI/UX Design', 'Figma', 'Web Design', 'Design System'],
    link: '#',
    client: 'Fundación Ecosfera',
    year: '2025',
    role: 'Diseño de Experiencia & Interfaz (UI/UX)',
    tagline: 'Diseño web interactivo orientado a la conversión y educación',
    details: [
      'Rediseño de la experiencia web de la ONG Ecosfera con el propósito de optimizar los flujos de captación de socios, donaciones y divulgación ambiental.',
      'Se construyó un sistema de diseño adaptable y accesible, introduciendo micro-interacciones interactivas, mapas en tiempo real del impacto de la ONG y componentes web premium.',
      'El proceso incluyó el prototipado de alta fidelidad en Figma y pruebas de usabilidad con usuarios reales para refinar la interacción.'
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    title: 'Bold Type ✦ Tipografía Experimental',
    category: 'Editorial & Impresos',
    categoryKey: 'editorial',
    description: 'Creación de una tipografía geométrica modular y serie de carteles de gran formato impresos en risografía.',
    technologies: ['Diseño de Tipos', 'Risografía', 'Poster Art', 'Glyphs'],
    link: '#',
    client: 'Autoedición / Proyecto Personal',
    year: '2025',
    role: 'Diseño Tipográfico y Cartelismo',
    tagline: 'Tipografía modular y cartelismo experimental en Risografía',
    details: [
      'Estudio tipográfico modular basado en la geometría racionalista, diseñado digitalmente usando Glyphs y testado en composiciones de gran formato.',
      'Se produjo una edición limitada de posters impresos artesanalmente en Risografía en Madrid, experimentando con superposición de colores planos de alta intensidad (azul cobalto, amarillo flúor) y la vibrante textura típica de este sistema de impresión.',
      'El proyecto es un manifiesto de la estética cruda e imperfecta del soporte físico en la era digital.'
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    title: 'Cacao Cacao ✦ Rebranding Identidad',
    category: 'Identidad & Branding',
    categoryKey: 'design',
    description: 'Identidad visual renovada para una chocolatería artesanal, con ilustraciones personalizadas y bolsas ecológicas.',
    technologies: ['Rebranding', 'Packaging', 'Ilustración', 'Illustrator'],
    link: '#',
    client: 'Cacao Cacao Obrador',
    year: '2026',
    role: 'Diseñador de Identidad y Packaging',
    tagline: 'Rebranding completo de chocolatería tradicional',
    details: [
      'Rebranding integral para la chocolatería Cacao Cacao con el objetivo de elevar su percepción hacia el mercado artesanal premium.',
      'El rediseño abarca el logotipo tipográfico, ilustraciones de plantas y frutos del cacao que decoran el papel de envolver y bolsas, y un sistema cromático cálido inspirado en el tostado del grano.',
      'Se diseñó una línea de embalaje sostenible utilizando papeles rugosos biodegradables que transmiten honestidad y calidad artesana.'
    ]
  }
];

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
          <button onClick={() => navigateTo('landing')} className="back-to-home-btn">
            &larr; Volver al Inicio
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
