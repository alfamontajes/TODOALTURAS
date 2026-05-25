import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'

const productos = {
  manlift: {
    etiqueta: 'MANLIFT',
    titulo: 'Manlift Grove AMZ50XT',
    imagen: '/productos/manlift-grove-amz50xt.jpeg',
    fichaTecnica: '/fichas/ficha-tecnica-manlift-grove-amz50xt.pdf',
    descripcion:
      'Equipo ideal para trabajos en altura, mantenimiento industrial, instalación de estructuras y acceso seguro en zonas elevadas.',
    detalle:
      'El Manlift Grove AMZ50XT es una solución eficiente para trabajos que requieren alcance vertical y horizontal, permitiendo realizar labores de mantenimiento, instalación, inspección y montaje con mayor seguridad.',
    caracteristicas: [
      'Equipo articulado para trabajos en altura.',
      'Ideal para exteriores, obras, industria y mantenimiento.',
      'Permite acceso a zonas elevadas con alcance horizontal.',
      'Diseñado para operación segura en terrenos exigentes.',
      'Apto para instalación de estructuras, cubiertas y mantenimiento industrial.',
    ],
    especificaciones: [
      { nombre: 'Altura de trabajo aproximada', valor: '15 m' },
      { nombre: 'Alcance horizontal aproximado', valor: '9,14 m' },
      { nombre: 'Capacidad de carga', valor: '227 kg' },
      { nombre: 'Tracción', valor: '4WD' },
      { nombre: 'Tipo de equipo', valor: 'Brazo articulado / Manlift' },
    ],
  },

  tijera: {
    etiqueta: 'TIJERA',
    titulo: 'Plataforma tipo tijera',
    imagen: '/productos/plataforma-tijera.jpg',
    fichaTecnica: '/fichas/ficha-tecnica-plataforma-tijera.pdf',
    descripcion:
      'Plataforma de elevación para trabajos verticales en interiores, bodegas, mantenimiento, montajes y actividades de instalación.',
    detalle:
      'La plataforma tipo tijera es ideal para trabajos verticales donde se requiere estabilidad, capacidad de carga y una superficie segura para el personal operativo.',
    caracteristicas: [
      'Plataforma estable para trabajos verticales.',
      'Recomendada para bodegas, mantenimiento e instalaciones.',
      'Amplia capacidad de carga para personal y herramientas.',
      'Equipo práctico para trabajos en superficies niveladas.',
      'Ideal para labores de construcción, montaje y mantenimiento.',
    ],
    especificaciones: [
      { nombre: 'Altura de trabajo aproximada', valor: '9,8 m' },
      { nombre: 'Capacidad de carga', valor: '567 kg' },
      { nombre: 'Alimentación', valor: 'Diésel' },
      { nombre: 'Tracción', valor: '4x4' },
      { nombre: 'Tipo de equipo', valor: 'Plataforma elevadora tipo tijera' },
    ],
  },

  andamio: {
    etiqueta: 'ANDAMIO',
    titulo: 'Andamio multidireccional certificado',
    imagen: '/productos/andamio-multidireccional.jpg',
    fichaTecnica: '/fichas/ficha-tecnica-andamio-multidireccional.pdf',
    descripcion:
      'Sistema modular certificado para obras, montajes, mantenimiento de fachadas, cubiertas y acceso seguro en diferentes niveles de trabajo.',
    detalle:
      'El andamio multidireccional certificado permite crear estructuras seguras, resistentes y adaptables a diferentes tipos de obra, facilitando el acceso a distintos niveles de trabajo.',
    caracteristicas: [
      'Sistema modular versátil y adaptable.',
      'Permite configuraciones para diferentes tipos de obra.',
      'Estructura resistente para trabajos en altura.',
      'Ideal para fachadas, cubiertas, mantenimiento y construcción.',
      'Equipo certificado para acceso seguro en diferentes niveles.',
    ],
    especificaciones: [
      { nombre: 'Tipo de sistema', valor: 'Andamio multidireccional modular' },
      { nombre: 'Uso principal', valor: 'Acceso seguro en alturas' },
      { nombre: 'Aplicación', valor: 'Construcción, fachadas, cubiertas y mantenimiento' },
      { nombre: 'Montaje', valor: 'Modular y adaptable' },
      { nombre: 'Condición', valor: 'Certificado' },
    ],
  },

  colgante: {
    etiqueta: 'COLGANTE',
    titulo: 'Andamio colgante eléctrico certificado',
    imagen: '/productos/andamio-colgante-electrico.jpg',
    fichaTecnica: '/fichas/ficha-tecnica-andamio-colgante-electrico.pdf',
    descripcion:
      'Solución para trabajos en fachadas y acceso vertical seguro en proyectos de mantenimiento, instalación y construcción.',
    detalle:
      'El andamio colgante eléctrico certificado es una alternativa práctica para trabajos verticales en fachadas, permitiendo acceso seguro y eficiente en proyectos de gran altura.',
    caracteristicas: [
      'Equipo eléctrico para acceso vertical.',
      'Ideal para trabajos en fachadas y edificios.',
      'Permite desplazamiento vertical seguro.',
      'Útil en mantenimiento, instalación y construcción.',
      'Solución eficiente para proyectos de altura.',
    ],
    especificaciones: [
      { nombre: 'Tipo de equipo', valor: 'Andamio colgante eléctrico' },
      { nombre: 'Uso principal', valor: 'Acceso vertical en fachadas' },
      { nombre: 'Aplicación', valor: 'Mantenimiento, construcción e instalación' },
      { nombre: 'Operación', valor: 'Eléctrica' },
      { nombre: 'Condición', valor: 'Certificado' },
    ],
  },
}

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const elemento = document.querySelector(location.hash)

      if (elemento) {
        setTimeout(() => {
          elemento.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return null
}

function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="logo">
          <img src="/todoalturas-logo-inicio.png" alt="TODO ALTURAS" />
        </Link>

        <nav className="menu">
          <Link to="/#inicio">Inicio</Link>
          <Link to="/#productos">Productos</Link>
          <Link to="/#nosotros">Nosotros</Link>
          <Link to="/#contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}

function ContactoFooter() {
  return (
    <>
      <section id="contacto" className="contact">
        <div className="container contact-grid">
          <div>
            <span className="section-label">¡Cotiza hoy!</span>
            <h2>Lleva tu proyecto a nuevas alturas</h2>
            <p>
              Comunícate con nosotros para recibir asesoría sobre alquiler de equipos,
              andamios certificados y soluciones para trabajo seguro en alturas.
            </p>
          </div>

          <div className="contact-box">
            <div className="contact-info">
              <p>
                <strong>Celular:</strong> 300 639 7448
              </p>

              <p>
                <strong>Celular:</strong> 301 487 4553
              </p>

              <p>
                <strong>Teléfono fijo:</strong> 602 334 8712
              </p>

              <p>
                <strong>Correo:</strong> alfamontajesycubiertas@hotmail.com
              </p>

              <p>
                <strong>Correo:</strong> todoalturas@alfamontajesycubiertas.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <p>© 2026 TODO ALTURAS. Todos los derechos reservados.</p>
          <p>Equipos certificados para trabajo seguro en alturas.</p>
        </div>
      </footer>
    </>
  )
}

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/573014874553?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20TODO%20ALTURAS."
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir chat de WhatsApp con TODO ALTURAS"
    >
      <img src="/whatsapp-icon.png" alt="WhatsApp" />
    </a>
  )
}

function ProductCard({ slug, producto }) {
  return (
    <Link to={`/producto/${slug}`} className="product-card">
      <div className="product-image">
        <span>{producto.etiqueta}</span>
      </div>

      <div className="product-content">
        <h3>{producto.titulo}</h3>

        <p>{producto.descripcion}</p>

        <ul>
          {producto.caracteristicas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <span className="product-link">Ver más</span>
      </div>
    </Link>
  )
}

function Inicio() {
  return (
    <>
      <Header />

      <main>
        <section id="inicio" className="hero">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/banner-video.mp4" type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>

          <div className="hero-overlay"></div>
        </section>

        <div className="section-divider">
          <div className="divider-layer-one"></div>
          <div className="divider-layer-two"></div>
          <div className="divider-layer-three"></div>
        </div>

        <section id="productos" className="section pattern-light products-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">Nuestros equipos</span>
              <h2>Productos y servicios</h2>

              <p className="section-text">
                Equipos certificados para trabajos en altura, mantenimiento, instalación,
                construcción y acceso seguro en diferentes tipos de proyectos.
              </p>
            </div>

            <div className="product-grid">
              <ProductCard slug="manlift" producto={productos.manlift} />
              <ProductCard slug="tijera" producto={productos.tijera} />
              <ProductCard slug="andamio" producto={productos.andamio} />
              <ProductCard slug="colgante" producto={productos.colgante} />
            </div>
          </div>
        </section>

        <section id="nosotros" className="about-section">
          <div className="about-content">
            <div className="about-text">
              <span className="about-small-title">Acerca de nosotros</span>

              <h2>Nosotros</h2>

              <div className="about-line"></div>

              <p>
                Somos una empresa aliada en sus proyectos, enfocada en brindar soluciones
                integrales para trabajo seguro en alturas, alquiler de maquinaria y equipos
                certificados.
              </p>

              <p>
                Contamos con un equipo comprometido en ofrecer asesoría personalizada,
                calidad, seguridad y eficiencia para que cada cliente tome la mejor decisión
                según las necesidades de su proyecto.
              </p>

              <p>
                Atendemos proyectos en construcción, industria, mantenimiento e instalación,
                ofreciendo equipos certificados y acompañamiento técnico oportuno.
              </p>
            </div>

            <div className="about-image">
              <div className="about-image-overlay"></div>
              <span>Trabajo seguro en alturas</span>
            </div>
          </div>
        </section>

        <ContactoFooter />
      </main>

      <WhatsAppButton />
    </>
  )
}

function ProductoPage({ tipo }) {
  const producto = productos[tipo]
  const [tabActiva, setTabActiva] = useState('caracteristicas')

  if (!producto) {
    return (
      <>
        <Header />

        <main>
          <section className="section pattern-light products-section">
            <div className="container">
              <span className="section-label">Producto no encontrado</span>
              <h2>El producto que buscas no existe</h2>
              <p className="section-text">
                Regresa a la página principal para ver nuestros productos disponibles.
              </p>

              <Link to="/#productos" className="product-link">
                Volver a productos
              </Link>
            </div>
          </section>

          <ContactoFooter />
        </main>

        <WhatsAppButton />
      </>
    )
  }

  return (
    <>
      <Header />

      <main>
        <section className="product-detail-section">
          <div className="container product-detail-grid">
            <div className="product-detail-image">
              <img src={producto.imagen} alt={producto.titulo} />
            </div>

            <div className="product-detail-info">
              <span className="section-label">{producto.etiqueta}</span>
              <h1>{producto.titulo}</h1>
              <p>{producto.detalle}</p>

              <div className="product-tabs">
                <button
                  className={tabActiva === 'caracteristicas' ? 'active' : ''}
                  onClick={() => setTabActiva('caracteristicas')}
                >
                  Características
                </button>

                <button
                  className={tabActiva === 'especificaciones' ? 'active' : ''}
                  onClick={() => setTabActiva('especificaciones')}
                >
                  Especificaciones
                </button>

                <button
                  className={tabActiva === 'ficha' ? 'active' : ''}
                  onClick={() => setTabActiva('ficha')}
                >
                  Ficha técnica
                </button>
              </div>

              <div className="product-tab-content">
                {tabActiva === 'caracteristicas' && (
                  <ul className="detail-list">
                    {producto.caracteristicas.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {tabActiva === 'especificaciones' && (
                  <div className="spec-table">
                    {producto.especificaciones.map((item) => (
                      <div className="spec-row" key={item.nombre}>
                        <strong>{item.nombre}</strong>
                        <span>{item.valor}</span>
                      </div>
                    ))}
                  </div>
                )}

                {tabActiva === 'ficha' && (
                  <div className="ficha-box">
                    <p>
                      Descarga la ficha técnica del equipo para conocer más detalles
                      sobre sus características, aplicaciones y especificaciones.
                    </p>

                    <a
                      href={producto.fichaTecnica}
                      className="product-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Descargar ficha técnica
                    </a>
                  </div>
                )}
              </div>

              <div className="product-detail-actions">
                <a href="#contacto" className="product-link">
                  Solicitar cotización
                </a>

                <Link to="/#productos" className="back-link">
                  Ver otros equipos
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ContactoFooter />
      </main>

      <WhatsAppButton />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/producto/manlift" element={<ProductoPage tipo="manlift" />} />
        <Route path="/producto/tijera" element={<ProductoPage tipo="tijera" />} />
        <Route path="/producto/andamio" element={<ProductoPage tipo="andamio" />} />
        <Route path="/producto/colgante" element={<ProductoPage tipo="colgante" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App