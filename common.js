// common.js
document.addEventListener('DOMContentLoaded', function() {
    // Función para agregar el encabezado
    function addHeader() {
        const header = `
            <header>
                <h1>Plataforma Participativa</h1>
                <nav>
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="geovisor.html">Geovisor</a></li>
                        <li><a href="tramite.html">Trámite</a></li>
                        <li><a href="estadisticos.html">Estadísticos</a></li>
                    </ul>
                </nav>
            </header>
        `;
        document.body.insertAdjacentHTML('afterbegin', header);
    }

    // Función para agregar el pie de página
    function addFooter() {
        const footer = `
            <footer>
                <div class="footer-info">
                    <h3>Información de la Entidad</h3>
                    <p>Dirección: Calle Falsa 123, Ciudad, País</p>
                    <p>Teléfono: (123) 456-7890</p>
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
        document.body.insertAdjacentHTML('beforeend', footer);
    }

    // Llamar a las funciones para agregar el encabezado y el pie de página
    addHeader();
    addFooter();
});
