// common.js
document.addEventListener("DOMContentLoaded", function () {
  // Función para agregar el encabezado
  function addHeader() {
    const header = `
            <header>
                <div class="top-bar">
          <div class="container">
            <img src="Imagenes/IGAC.png" alt="IGAC" width="100" height="50">
              <section id="informacion-municipio" style="width: 100%; text-align: center;">
              <h2 style="font-style: oblique cursive;">El Catastro es de todos, ¡Hagamos que Funcione !</h2>
              </section>
            <span>GOV.CO</span>
          </div>
        </div>
        <div class="main-header">
                    <div class="container">
                        <div class="logo-section">
                            <img src="Imagenes/EscudoUD.png" alt="UD" width="100" height="100">
                            <div class="tausa-logo" style="display: flex; align-items: center;">
                                <div style="margin-right: 20px;">PLATAFORMA PARTICIPATIVA</div>
                                <img src="Imagenes/AlcaldiaTausa.jpg" alt="AlcaldiaTausa" width="100" height="50">
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav class="nav-bar">
          <div class="container">
            <div class="nav-title">Catastro Tausa</div>                            
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li>
                          <a href="geovisor.html" class="geovisor-link">
                          Geovisor

                          </a>
                        </li>
                        <li><a href="tramite.html">Trámite</a></li>
                        <li><a href="estadisticos.html">Estadísticos</a></li>
                        <li><a href="login.html">Login</a></li>
                </div>
                </nav>
            </header>
        `;
    document.body.insertAdjacentHTML("afterbegin", header);
    
  }

  // Función para agregar el pie de página
  function addFooter() {
    const footer = `
            <footer>
                <div class="footer-info">
                    <h3>Información de la Entidad</h3>
                    <p>Dirección: Calle 41 B Sur, Tausa, Colombia</p>
                    <p>Teléfono: +57 (601) 881-7890</p>
                    <p>Email: alcaldia@tausa-cundinamarca.gov.co </p>
                </div>
                  <div class="footer-horarios">
                      <h3>Horarios de Atención</h3>
                      <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                      <p>Sábado: 9:00 AM - 1:00 PM</p>
                  </div>
                <div class="footer-soporte">
                    <h3>Correos de Soporte</h3>
                    <p>General: soporte@entidad.com</p>
                    <p>Técnico: techsoporte@entidad.com</p>
                </div>
            </footer>
        `;
    document.body.insertAdjacentHTML("beforeend", footer);
  }


  // Llamar a las funciones para agregar el encabezado y el pie de página
  addHeader();
  addFooter();
});
