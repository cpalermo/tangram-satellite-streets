var Attr = 'Modified <a href="https://scihub.copernicus.eu/">Copernicus</a>' +
    ' Sentinel data 2016 by ' +
    '<a href="http://sentinelmap.eu">SentinelMap</a>' ;

var lAttr = '© <a href="https://openstreetmap.org/copyright">OSM</a>' +
    ' contributors data by ' +
    '<a href="https://mapzen.com">Mapzen</a>' ;

var sUrl= 'http://tile.sentinelmap.eu/16/{mm}/{z}/{x}/{y}.jpg',
    

var aug16= L.tileLayer( sUrl , {id: 'sentinel.aug16', mm: '8', attribution: Attr});

var testUrl= 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png';
var test= L.tileLayer( testUrl , {id: 'test', attribution: Attr});

var Labels = Tangram.leafletLayer({
    scene: './scene.yaml',
    attribution: lAttr
});

var map = L.map('map' , {
    center: [ 47.04, 8.44],
    zoom: 7,
    maxZoom: 14,
    minZoom: 6,
    layers: [aug16],
    zoomControl: false
});

var hash = new L.Hash(map);

var baseLayers = {
    "Sentinel-2": aug16,
    "Test OSM": test
};

var overlayLayers = {
    "Labels": Labels
};

L.control.layers(baseLayers, overlayLayers, {position: 'topleft'}).addTo(map);

L.control.zoom({position: 'topleft'}).addTo(map);
