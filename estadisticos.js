// estadisticos.js
document.addEventListener('DOMContentLoaded', function() {
    const ctxTramitesPorMutacion = document.getElementById('tramitesPorMutacion').getContext('2d');
    const ctxUsuariosRegistrados = document.getElementById('usuariosRegistrados').getContext('2d');
    const ctxTramitesEnProceso = document.getElementById('tramitesEnProceso').getContext('2d');

    // Gráfico de Trámites por Tipo de Mutación
    const tramitesPorMutacion = new Chart(ctxTramitesPorMutacion, {
        type: 'bar',
        data: {
            labels: ['Desenglobe', 'Englobe', 'División', 'Fusión', 'Modificación'],
            datasets: [{
                label: '# de Trámites',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de Usuarios Registrados
    const usuariosRegistrados = new Chart(ctxUsuariosRegistrados, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            datasets: [{
                label: '# de Usuarios',
                data: [50, 60, 70, 80, 90, 100, 120],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de Trámites en Proceso
    const tramitesEnProceso = new Chart(ctxTramitesEnProceso, {
        type: 'pie',
        data: {
            labels: ['Pendiente', 'En Revisión', 'Aprobado', 'Rechazado'],
            datasets: [{
                label: '# de Trámites',
                data: [15, 10, 5, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });
});
