// geovisor.js
document.addEventListener('DOMContentLoaded', function() {
    // Crear un mapa usando OpenLayers
    const map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([-0.1276, 51.5074]), // Coordenadas de Londres (puedes cambiarlas a las coordenadas que prefieras)
            zoom: 10
        })
    });

    // Agregar una capa vectorial para mostrar la información catastral
    const vectorLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: []
        })
    });

    map.addLayer(vectorLayer);

    // Función para cargar información catastral (simulada aquí, puedes adaptarla a tus necesidades)
    function loadCadastralInfo() {
        const features = [
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([-0.1276, 51.5074])),
                name: 'Propiedad 1'
            }),
            new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([-0.0877, 51.5074])),
                name: 'Propiedad 2'
            })
        ];

        vectorLayer.getSource().addFeatures(features);
    }

    // Cargar la información catastral al inicializar el mapa
    loadCadastralInfo();

    // Agregar interacción para mostrar información sobre las características al hacer clic
    map.on('click', function(evt) {
        const features = map.getFeaturesAtPixel(evt.pixel);
        if (features.length > 0) {
            const feature = features[0];
            const coordinate = evt.coordinate;
            const hdms = ol.coordinate.toStringHDMS(ol.proj.toLonLat(coordinate));
            alert('Propiedad: ' + feature.get('name') + '\nCoordenadas: ' + hdms);
        }
    });
});
