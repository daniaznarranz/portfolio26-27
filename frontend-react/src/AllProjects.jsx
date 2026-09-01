import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
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

// Import CheesecakeWorld assets
import cheesecakeWorldPrincipal from './assets/CheesecakeWorld_principal.jpg';
import cheesecakeWorldVertical1 from './assets/CheesecakeWorld_vertical1.jpg';
import cheesecakeWorldVertical2 from './assets/CheesecakeWorld_vertical2.jpg';
import cheesecakeWorldHorizontal1 from './assets/CheesecakeWorld_horizontal1.jpg';
import cheesecakeWorldHorizontal2 from './assets/CheesecakeWorld_horizontal2.jpg';
import cheesecakeWorldHorizontal3 from './assets/CheesecakeWorld_horizontal3.jpg';

// Import BM Coffee assets
import bmCoffee1 from './assets/BM_portada horizontal.png';
import bmCoffee2 from './assets/BM_vertical1.png';
import bmCoffee3 from './assets/BM_vertical2.jpeg';
import bmCoffee4 from './assets/Bm_horizontal2.jpeg';
import bmCoffee5 from './assets/Bm_horizontal3.jpeg';

// Import SalsaGoiko assets
import salsaGoikoPrincipal from './assets/SalsaGoiko_Horizontalprincipal.jpg';
import salsaGoikoHorizontal3 from './assets/SalsaGoiko_Horizontal3.png';
import salsaGoikoHorizontal2 from './assets/SalsaGoiko_Horizontal2.png';
import salsaGoikoVertical1 from './assets/SalsaGoiko_Vertical1.jpeg';
import salsaGoikoVertical2 from './assets/SalsaGoiko_Vertical2.jpeg';
import salsaGoikoVertical3 from './assets/SalsaGoiko_Vertical3.jpeg';

// Import LibroEspeculativo assets
import libroEspeculativoVideoPrincipal from './assets/LibroEspeculativo_VideoPrincipal.mp4';
import libroEspeculativoHorizontal1 from './assets/LibroEspeculativo_Horizontal1.jpg';
import libroEspeculativoVertical1 from './assets/LibroEspeculativo_Vertical1.jpg';
import libroEspeculativoVertical2 from './assets/LibroEspeculativo_Vertical2.jpg';

const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'design', label: 'Identidad & Branding' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'packaging', label: 'Packaging' },
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
    technologies: ['Motion Graphics'],
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
    title: 'Identidad Teatros del Canal ✦ Rediseño de Identidad',
    category: 'Identidad & Branding',
    categoryKey: 'design',
    description: 'Rediseño de la identidad visual de los Teatros del Canal de Madrid, unificando la oferta escénica y conectando con nuevos públicos a través de un sistema dinámico y contemporáneo.',
    technologies: ['Branding', 'Gráfica Impresa', 'Motion Graphics', 'Diseño Web'],
    link: '',
    client: 'Teatros del Canal / Comunidad de Madrid',
    year: '2024',
    role: 'Diseñador de Identidad & Experiencia Visual',
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
    description: 'Diseño, maquetación y desarrollo visual para Input, una revista autoeditada por y para estudiantes de la Escuela Superior de Diseño (ESD) de Madrid.',
    technologies: ['Editorial', 'Diseño de Información', 'InDesign'],
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
    technologies: ['Branding', 'Identidad Visual', 'Motion Graphics', 'Experiencia UX/UI'],
    link: '',
    client: 'CESIDA (Coordinadora Estatal de VIH y Sida)',
    year: '2025',
    role: 'Diseñador de Identidad & Web / UX/UI',
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
    image: cheesecakeWorldPrincipal,
    title: 'Cheesecake World ✦ Libro de Maquetación e Ilustración',
    category: 'Editorial & Impresos',
    categoryKey: 'editorial',
    description: 'Diseño, maquetación e ilustración para Cheesecake World, un libro visual que explora el universo de las tartas de queso a través de composiciones gráficas detalladas y narrativa visual gastronómica.',
    technologies: ['Editorial', 'Ilustración', 'Diseño Visual'],
    link: '',
    client: 'Proyecto Personal / Autoedición',
    year: '2025',
    role: 'Diseño Editorial, Ilustración & Maquetación',
    tagline: 'Un libro visual dedicado al dulce arte de la tarta de queso',
    details: [
      'Diseño editorial e ilustración del libro Cheesecake World, un proyecto que celebra el universo de la tarta de queso desde una mirada gráfica y contemporánea. La cubierta combina una paleta cromática sobria con ilustraciones sintéticas y repetitivas, creando un patrón reconocible y lúdico que refuerza el carácter del libro.',
      'El diseño busca convertir la publicación en un objeto atractivo y coleccionable, donde la ilustración y la tipografía dialogan para transmitir cercanía, identidad y coherencia visual, acompañando el contenido de forma clara y sugerente.El diseño busca convertir la publicación en un objeto atractivo y coleccionable, donde la ilustración y la tipografía dialogan para transmitir cercanía, identidad y coherencia visual, acompañando el contenido de forma clara y sugerente.'
    ],
    gallery: [
      { url: cheesecakeWorldVertical1, type: 'half-width' },
      { url: cheesecakeWorldVertical2, type: 'half-width' },
      { url: cheesecakeWorldHorizontal1, type: 'full-width' },
      { url: cheesecakeWorldHorizontal2, type: 'full-width' },
      { url: cheesecakeWorldHorizontal3, type: 'full-width' }
    ]
  },
  {
    image: bmCoffee1,
    title: 'Café BM ✦ Rediseño de Packaging',
    category: 'Packaging & Ilustración',
    categoryKey: 'packaging',
    description: 'Rediseño de la línea de café de marca blanca para BM Supermercados, apostando por una identidad limpia, tipografía contemporánea y un código de color claro para diferenciar las distintas variedades.',
    technologies: ['Packaging', 'Branding', 'Diseño de Producto (Físico)', 'Ilustración'],
    link: '',
    client: 'BM Supermercados / Proyecto Académico',
    year: '2025',
    role: 'Diseño de Packaging & Identidad',
    tagline: 'Nueva identidad visual y sistema de packaging para la gama de café BM',
    details: [
      'El proyecto consiste en el rediseño integral de la gama de café de marca blanca de BM Supermercados. El objetivo principal era alejar el producto de la estética habitual de las marcas de distribución y dotarlo de una personalidad única, premium y atractiva en el lineal.',
      'Se ha desarrollado un sistema visual claro basado en ilustraciones y una paleta de color diferenciada para cada variedad (mezcla, descafeinado, natural, etc.). La tipografía limpia y la disposición ordenada de la información mejoran la legibilidad y la identificación del producto por parte del consumidor.',
      'El resultado es un packaging que transmite calidad y cercanía, revalorizando la marca blanca del supermercado y conectando con un público que valora tanto el diseño cuidado como un buen producto cotidiano.'
    ],
    gallery: [
      { url: bmCoffee2, type: 'auto' },
      { url: bmCoffee3, type: 'auto' },
      { url: bmCoffee4, type: 'auto-full' },
      { url: bmCoffee5, type: 'auto-full' }
    ]
  },
  {
    image: salsaGoikoPrincipal,
    title: 'Salsas Goiko ✦ Rediseño de Packaging',
    category: 'Packaging & Ilustración',
    categoryKey: 'packaging',
    description: 'Rediseño de la gama de salsas para llevar de la conocida cadena de hamburgueserías Goiko, potenciando su identidad atrevida y gamberra.',
    technologies: ['Packaging', 'Branding', 'Diseño de Producto (Físico)', 'Ilustración'],
    link: '',
    client: 'Goiko Grill / Proyecto Académico',
    year: '2025',
    role: 'Diseño de Packaging & Identidad de Producto',
    tagline: 'Nueva identidad visual y sistema de packaging para la gama de salsas Goiko',
    details: [
      'El proyecto consiste en el rediseño integral de la gama de salsas para llevar de la conocida cadena de hamburgueserías Goiko. El principal desafío era trasladar la personalidad gamberra, atrevida y cercana de la marca a un formato de packaging reducido pero de gran impacto visual en el punto de venta y en el delivery.',
      'Se estructuró el diseño a través de un código cromático vibrante y contrastado, facilitando la identificación inmediata de cada salsa (Emmy, Kevin Bacon, Barbacoa, etc.). Además, se incorporaron elementos tipográficos rotundos y desenfadados que sintonizan con el lenguaje y tono característicos de Goiko.',
      'El resultado final es una familia de packagings coherente y enérgica, que convierte el momento de consumo en una extensión de la experiencia física del restaurante y aporta valor diferencial a las salsas de la marca.'
    ],
    gallery: [
      { url: salsaGoikoHorizontal3, type: 'full-width' },
      { url: salsaGoikoVertical1, type: 'third-width' },
      { url: salsaGoikoVertical2, type: 'third-width' },
      { url: salsaGoikoVertical3, type: 'third-width' },
      { url: salsaGoikoHorizontal2, type: 'full-width' }
    ]
  },
  {
    image: libroEspeculativoHorizontal1,
    video: libroEspeculativoVideoPrincipal,
    title: 'Guía Práctica para recuperar los libros ✦ Proyecto Especulativo',
    category: 'Editorial & Impresos',
    categoryKey: 'editorial',
    description: 'Diseño editorial y desarrollo interactivo para un libro especulativo centrado en la recuperación de la memoria impresa y el valor del papel.',
    technologies: ['Editorial', 'Desarrollo Web', 'Diseño Especulativo', 'Automatización', 'Chatbot'],
    link: 'https://guia-practica-de-un-libro.vercel.app/',
    client: 'Proyecto Personal / Autoedición',
    year: '2025',
    role: 'Diseñador Editorial & Desarrollador Web',
    tagline: 'Guía práctica para recuperar los libros',
    details: [
      'Un proyecto de diseño especulativo y editorial que explora la preservación física de los libros en un futuro digital, ofreciendo instrucciones físicas y teóricas sobre la durabilidad, el valor del soporte papel y los métodos de conservación creativa.',
      'La propuesta incluye el diseño del libro físico en sí, prestando especial atención a la tipografía, la composición reticular y la materialidad de la pieza editorial.',
      'Complementando el libro físico, se ha desarrollado una experiencia web interactiva que funciona como una guía de recuperación dinámica, permitiendo al usuario explorar las diferentes fases del proyecto de forma interactiva y fluida.'
    ],
    gallery: [
      { url: libroEspeculativoHorizontal1, type: 'full-width' },
      { url: libroEspeculativoVertical1, type: 'half-width' },
      { url: libroEspeculativoVertical2, type: 'half-width' },
      { url: libroEspeculativoVideoPrincipal, type: 'full-width' }
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
