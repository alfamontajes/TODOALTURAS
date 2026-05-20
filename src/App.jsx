import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <a href="#inicio" className="logo">
            <img src="/todoalturas-logo-inicio.png" alt="TODO ALTURAS" />
          </a>

          <nav className="menu">
            <a href="#inicio">Inicio</a>
            <a href="#productos">Productos</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

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
              <article className="product-card">
                <div className="product-image">
                  <span>MANLIFT</span>
                </div>

                <div className="product-content">
                  <h3>Manlift Grove AMZ50XT</h3>
                  <p>
                    Equipo ideal para trabajos en altura, mantenimiento industrial,
                    instalación de estructuras y acceso seguro en zonas elevadas.
                  </p>

                  <ul>
                    <li>Altura de trabajo aproximada: 15 m</li>
                    <li>Alcance horizontal aproximado: 9,14 m</li>
                    <li>Capacidad de carga: 227 kg</li>
                    <li>Tracción 4WD</li>
                  </ul>

                  <a href="#contacto" className="product-link">
                    Solicitar cotización
                  </a>
                </div>
              </article>

              <article className="product-card">
                <div className="product-image">
                  <span>TIJERA</span>
                </div>

                <div className="product-content">
                  <h3>Plataforma tipo tijera</h3>
                  <p>
                    Plataforma de elevación para trabajos verticales en interiores,
                    bodegas, mantenimiento, montajes y actividades de instalación.
                  </p>

                  <ul>
                    <li>Altura de trabajo aproximada: 9,8 m</li>
                    <li>Capacidad de carga: 567 kg</li>
                    <li>Alimentación diésel</li>
                    <li>Tracción 4x4</li>
                  </ul>

                  <a href="#contacto" className="product-link">
                    Solicitar cotización
                  </a>
                </div>
              </article>

              <article className="product-card">
                <div className="product-image">
                  <span>ANDAMIO</span>
                </div>

                <div className="product-content">
                  <h3>Andamio multidireccional certificado</h3>
                  <p>
                    Sistema modular certificado para obras, montajes, mantenimiento de
                    fachadas, cubiertas y acceso seguro en diferentes niveles de trabajo.
                  </p>

                  <ul>
                    <li>Sistema modular versátil</li>
                    <li>Alta resistencia y durabilidad</li>
                    <li>Seguridad certificada</li>
                    <li>Fácil montaje y adaptación</li>
                  </ul>

                  <a href="#contacto" className="product-link">
                    Solicitar cotización
                  </a>
                </div>
              </article>

              <article className="product-card">
                <div className="product-image">
                  <span>COLGANTE</span>
                </div>

                <div className="product-content">
                  <h3>Andamio colgante eléctrico certificado</h3>
                  <p>
                    Solución para trabajos en fachadas y acceso vertical seguro en
                    proyectos de mantenimiento, instalación y construcción.
                  </p>

                  <ul>
                    <li>Equipo eléctrico de alto rendimiento</li>
                    <li>Alta capacidad de carga</li>
                    <li>Versátil y eficiente</li>
                    <li>Seguridad certificada</li>
                  </ul>

                  <a href="#contacto" className="product-link">
                    Solicitar cotización
                  </a>
                </div>
              </article>
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

        <section className="section why">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">¿Por qué elegirnos?</span>
              <h2>Trabajamos con seguridad como prioridad</h2>
            </div>

            <div className="why-grid">
              <div className="why-item">
                <strong>Equipos certificados</strong>
                <p>Soluciones confiables para trabajos en altura.</p>
              </div>

              <div className="why-item">
                <strong>Marcas líderes</strong>
                <p>Equipos adecuados para proyectos exigentes.</p>
              </div>

              <div className="why-item">
                <strong>Mantenimiento garantizado</strong>
                <p>Operación segura y acompañamiento técnico.</p>
              </div>

              <div className="why-item">
                <strong>Asesoría personalizada</strong>
                <p>Te ayudamos a elegir el equipo correcto.</p>
              </div>
            </div>
          </div>
        </section>

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
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>© 2026 TODO ALTURAS. Todos los derechos reservados.</p>
          <p>Equipos certificados para trabajo seguro en alturas.</p>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href="https://wa.me/573014874353?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20TODO%20ALTURAS."
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir chat de WhatsApp con TODO ALTURAS"
      >
        <img src="/whatsapp-icon.png" alt="WhatsApp" />
      </a>    
    </>
  )
}

export default App