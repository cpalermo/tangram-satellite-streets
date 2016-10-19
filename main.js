var copAttr = 'Modified <a href="https://scihub.copernicus.eu/">Copernicus</a>' +
    ' Sentinel data 2016 by ' +
    '<a href="http://sentinelmap.eu">SentinelMap</a>' ;

var osmAttr = '© <a href="https://openstreetmap.org/copyright">OSM</a>' +
    ' contributors data by ' +
    '<a href="https://mapzen.com">Mapzen</a>' ;

var Attr = copAttr + osmAttr ;

var scLayer = Tangram.leafletLayer({
    scene: './scene/scene.yaml',
    attribution: Attr
});

var map = L.map('map' , {
    center: [ 47.04, 8.44],
    zoom: 7,
    maxZoom: 16,
    minZoom: 6,
    layers: [scLayer],
    zoomControl: false
});

var hash = new L.Hash(map);

var baseLayers = {
    "Sentinel-2": scLayer,
};

L.control.zoom({position: 'topleft'}).addTo(map);
