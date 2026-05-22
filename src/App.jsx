import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'

const productos = {
  manlift: {
    etiqueta: 'MANLIFT',
    titulo: 'Manlift Grove AMZ50XT',
    descripcion:
      'Equipo ideal para trabajos en altura, mantenimiento industrial, instalación de estructuras y acceso seguro en zonas elevadas.',
    detalle:
      'El Manlift Grove AMZ50XT es una solución eficiente para trabajos que requieren alcance vertical y horizontal, permitiendo realizar labores de mantenimiento, instalación, inspección y montaje con mayor seguridad.',
    caracteristicas: [
      'Altura de trabajo aproximada: 15 m',
      'Alcance horizontal aproximado: 9,14 m',
      'Capacidad de carga: 227 kg',
      'Tracción 4WD',
    ],
    aplicaciones: [
      'Mantenimiento industrial',
      'Instalación de estructuras',
      'Trabajos en bodegas',
      'Montajes en zonas elevadas',
    ],
  },
  tijera: {
    etiqueta: 'TIJERA',
    titulo: 'Plataforma tipo tijera',
    descripcion:
      'Plataforma de elevación para trabajos verticales en interiores, bodegas, mantenimiento, montajes y actividades de instalación.',
    detalle:
      'La plataforma tipo tijera es ideal para trabajos verticales donde se requiere estabilidad, capacidad de carga y una superficie segura para el personal operativo.',
    caracteristicas: [
      'Altura de trabajo aproximada: 9,8 m',
      'Capacidad de carga: 567 kg',
      'Alimentación diésel',
      'Tracción 4x4',
    ],
    aplicaciones: [
      'Trabajos en interiores',
      'Bodegas y centros logísticos',
      'Mantenimiento general',
      'Instalaciones eléctricas y mecánicas',
    ],
  },
  andamio: {
    etiqueta: 'ANDAMIO',
    titulo: 'Andamio multidireccional certificado',
    descripcion:
      'Sistema modular certificado para obras, montajes, mantenimiento de fachadas, cubiertas y acceso seguro en diferentes niveles de trabajo.',
    detalle:
      'El andamio multidireccional certificado permite crear estructuras seguras, resistentes y adaptables a diferentes tipos de obra, facilitando el acceso a distintos niveles de trabajo.',
    caracteristicas: [
      'Sistema modular versátil',
      'Alta resistencia y durabilidad',
      'Seguridad certificada',
      'Fácil montaje y adaptación',
    ],
    aplicaciones: [
      'Construcción',
      'Mantenimiento de fachadas',
      'Instalación de cubiertas',
      'Acceso seguro en obra',
    ],
  },
  colgante: {
    etiqueta: 'COLGANTE',
    titulo: 'Andamio colgante eléctrico certificado',
    descripcion:
      'Solución para trabajos en fachadas y acceso vertical seguro en proyectos de mantenimiento, instalación y construcción.',
    detalle:
      'El andamio colgante eléctrico certificado es una alternativa práctica para trabajos verticales en fachadas, permitiendo acceso seguro y eficiente en proyectos de gran altura.',
    caracteristicas: [
      'Equipo eléctrico de alto rendimiento',
      'Alta capacidad de carga',
      'Versátil y eficiente',
      'Seguridad certificada',
    ],
    aplicaciones: [
      'Trabajos en fachadas',
      'Mantenimiento de edificios',
      'Instalación en altura',
      'Proyectos de construcción vertical',
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
        <section className="section pattern-light products-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">{producto.etiqueta}</span>
              <h2>{producto.titulo}</h2>

              <p className="section-text">{producto.descripcion}</p>
            </div>

            <div className="two-columns" style={{ marginTop: '42px' }}>
              <div className="product-card">
                <div className="product-image">
                  <span>{producto.etiqueta}</span>
                </div>

                <div className="product-content">
                  <h3>{producto.titulo}</h3>
                  <p>{producto.detalle}</p>

                  <Link to="/#productos" className="product-link">
                    Ver otros equipos
                  </Link>
                </div>
              </div>

              <div className="contact-box" style={{ background: '#ffffff' }}>
                <span className="section-label">Información del equipo</span>

                <h2 style={{ color: '#06234a', marginTop: 0 }}>Características</h2>

                <ul className="product-content" style={{ padding: 0, textAlign: 'left' }}>
                  {producto.caracteristicas.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h2 style={{ color: '#06234a' }}>Aplicaciones</h2>

                <ul className="product-content" style={{ padding: 0, textAlign: 'left' }}>
                  {producto.aplicaciones.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a href="#contacto" className="product-link">
                  Solicitar cotización
                </a>
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