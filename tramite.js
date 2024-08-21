// tramite.js
document.addEventListener('DOMContentLoaded', function() {
    const tipoTramiteSelect = document.getElementById('tipo-tramite');
    const camposAdicionales = document.getElementById('campos-adicionales');

    // Función para manejar el cambio de tipo de trámite
    tipoTramiteSelect.addEventListener('change', function() {
        const tipoTramite = tipoTramiteSelect.value;

        // Limpiar campos adicionales
        camposAdicionales.innerHTML = '';

        // Agregar campos adicionales según el tipo de trámite seleccionado
        if (tipoTramite === 'desenglobe' || tipoTramite === 'englobe') {
            camposAdicionales.innerHTML = `
                <label for="numero-parcelas">Número de Parcelas:</label>
                <input type="number" id="numero-parcelas" name="numero-parcelas" required><br>
            `;
        } else if (tipoTramite === 'division' || tipoTramite === 'fusion') {
            camposAdicionales.innerHTML = `
                <label for="area-total">Área Total (m²):</label>
                <input type="number" id="area-total" name="area-total" required><br>
            `;
        } else if (tipoTramite === 'modificacion') {
            camposAdicionales.innerHTML = `
                <label for="descripcion-modificacion">Descripción de la Modificación:</label>
                <textarea id="descripcion-modificacion" name="descripcion-modificacion" required></textarea><br>
            `;
        }
    });
});
