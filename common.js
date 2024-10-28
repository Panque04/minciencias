// common.js
document.addEventListener("DOMContentLoaded", function () {
  // Función para agregar el encabezado
  function addHeader() {
    const header = `
            <header>
                <div class="top-bar">
          <div class="container">
            <img src="Imagenes/LogoIGAC.jpg" alt="LogoIGAC" width="80" height="35">
            <span>GOV.CO</span>
          </div>
        </div>
        <div class="main-header">
          <div class="container">
            <div class="logo-section">
              <img src="Imagenes/EscudoUD.png" alt="UD" width="100" height="100">
              <div class="tausa-logo">
                <img src="Imagenes/AlcaldiaTausa.jpg" alt="AlcaldiaTausa" width="100" height="50">
                  <div>PLATAFORMA PARTICIPATIVA</div>
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
                        <li><a href="geovisor.html">Geovisor</a></li>
                        <li><a href="tramite.html">Trámite</a></li>
                        <li><a href="estadisticos.html">Estadísticos</a></li>
                    </ul>
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
                    <p>Email: soporte@entidad.com</p>
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
  // Agregar estilos
  const styles = `
    <style>
      body, html {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
      }
      .top-bar {
        background-color: #2563eb;
        color: white;
        padding: 10px 0;
      }
      .container {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .main-header {
        padding: 10px 0;
        background-color: white;
        color: black;   
      }
      .logo-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .tausa-logo {
        display: flex;
        font-size: 2em;
        font-weight: bold;
        align-items: center;
        justify-content: space-between;    
     
      }
      .nav-bar {
        background-color: #1e40af;
        color: white;
        padding: 15px 0;
      }
      .nav-bar .container {
        justify-content: flex-start;
      }
      .nav-title {
        margin-right: 200px;
      }
      .nav-bar ul {
        list-style-type: none;
        padding: 50;
        margin: 0;
        display: flex;
      }
      .nav-bar li {
        margin-right: 30px;
      }
      .nav-bar a {
        color: white;
        text-decoration: none;
      }
    </style>
  `;
  document.head.insertAdjacentHTML("beforeend", styles);
});
