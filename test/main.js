var copAttr = 'Modified <a href="https://scihub.copernicus.eu/">Copernicus</a>' +
    ' Sentinel data 2016 by ' +
    '<a href="http://sentinelmap.eu">SentinelMap</a>' ;

var osmAttr = '© <a href="https://openstreetmap.org/copyright">OSM</a>' +
    ' contributors data by ' +
    '<a href="https://mapzen.com">Mapzen</a>' ;

var Sat = Tangram.leafletLayer({
    scene: 'sat.yaml',
    attribution: copAttr
});

var Labels = Tangram.leafletLayer({
    scene: 'labels.yaml',
    attribution: osmAttr
});

var scene = Sat.scene;
scene.subscribe({
    load: function (e) {
        console.log('scene loaded:', e);
    }
});

var map = L.map('map' , {
    center: [ 47.04, 8.44],
    zoom: 7,
    maxZoom: 16,
    minZoom: 6,
    layers: [Sat, Labels],
    zoomControl: false
});

var hash = new L.Hash(map);

var baseLayers = {
    "Sentinel-2": Sat,
};

var overlayLayers = {
    "Labels": Labels
};

L.control.layers(baseLayers, overlayLayers, {position: 'topleft'}).addTo(map);

L.control.zoom({position: 'topleft'}).addTo(map);
