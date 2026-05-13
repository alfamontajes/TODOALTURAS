import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <a href="#inicio" className="logo">
            TODO <span>ALTURAS</span>
          </a>

          <nav className="menu">
            <a href="#inicio">Inicio</a>
            <a href="#productos">Productos</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#aplicaciones">Aplicaciones</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main>

      <section id="inicio" className="hero pattern-dark">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="tag">Equipos certificados para cada altura</span>

            <h1>Llega más lejos, trabaja con seguridad</h1>

            <p>
              En TODO ALTURAS ofrecemos soluciones integrales para trabajos en altura
              en construcción, industria, mantenimiento y más. Contamos con equipos
              certificados, asesoría personalizada y servicio confiable.
            </p>

            <div className="hero-buttons">
              <a href="#productos" className="btn primary">
                Ver productos
              </a>

              <a href="#contacto" className="btn secondary">
                Cotiza hoy
              </a>
            </div>
          </div>

          <div className="hero-card">
            <h2>Seguridad · Calidad · Confianza</h2>

            <div className="hero-features">
              <div>
                <strong>Equipos</strong>
                <span>Certificados</span>
              </div>

              <div>
                <strong>Marcas</strong>
                <span>Líderes</span>
              </div>

              <div>
                <strong>Asesoría</strong>
                <span>Personalizada</span>
              </div>

              <div>
                <strong>Mantenimiento</strong>
                <span>Garantizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

        <section id="productos" className="section">
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

        <section id="nosotros" className="section light">
          <div className="container two-columns">
            <div>
              <span className="section-label">Acerca de nosotros</span>
              <h2>Soluciones integrales para trabajo seguro en alturas</h2>
            </div>

            <div>
              <p className="section-text">
                TODO ALTURAS brinda alquiler de maquinaria y equipos certificados para
                facilitar el acceso seguro en proyectos industriales, comerciales y de
                construcción.
              </p>

              <p className="section-text">
                Nuestro compromiso es ofrecer seguridad, calidad y confianza a través de
                equipos adecuados, acompañamiento técnico y atención oportuna para cada
                necesidad del cliente.
              </p>
            </div>
          </div>
        </section>

        <section id="aplicaciones" className="section applications">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">Ideal para múltiples aplicaciones</span>
              <h2>Soluciones para diferentes sectores</h2>
            </div>

            <div className="app-grid">
              <article className="app-card">
                <span>Industria</span>
              </article>

              <article className="app-card">
                <span>Construcción</span>
              </article>

              <article className="app-card">
                <span>Mantenimiento</span>
              </article>
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
                  <strong>WhatsApp / Celular:</strong> 300 639 7448
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
              </div>

              <div className="hero-buttons">
                <a
                  className="btn primary"
                  href="https://wa.me/573006397448"
                  target="_blank"
                  rel="noreferrer"
                >
                  Escribir por WhatsApp
                </a>

                <a
                  className="btn secondary"
                  href="mailto:alfamontajesycubiertas@hotmail.com"
                >
                  Enviar correo
                </a>
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
    </>
  )
}

export default App