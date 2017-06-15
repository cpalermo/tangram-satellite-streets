/*
Define global variables on javascript instead of global.yaml
*/

var satAttr = 'Modified <a href="https://scihub.copernicus.eu/">Copernicus</a>' +
    ' Sentinel data 2016 by ' +
    '<a href="https://sentinelmap.eu">SentinelMap</a>' ;

var osmAttr = ' | © <a href="https://openstreetmap.org/copyright">OSM</a>' +
    ' contributors data by ' +
    '<a href="https://mapzen.com">Mapzen</a>' ;

var Attr = satAttr + osmAttr ;

var scLayer = Tangram.leafletLayer({
    scene: {
	global: {'sat_url': 'https://tile.sentinelmap.eu/2016/summer/rgb/{z}/{x}/{y}.jpg',
	         'sat_api_key': '',
		 'osm_url': 'https://tile.mapzen.com/mapzen/vector/v1/all/{z}/{x}/{y}.topojson',
		 'osm_api_key': ''},
	import: ['global.yaml',
		 'dist/satellite-streets-style.yaml'],
    },
    attribution: Attr
});

var map = L.map('map' , {
    center: [ 48.92, 11.25],
    zoom: 6,
    maxZoom: 16,
    minZoom: 5,
    layers: [scLayer],
    zoomControl: false
});

var baseLayers = {
    "Sentinel-2": scLayer,
};

L.control.zoom({position: 'bottomright'}).addTo(map);

var hash = new L.Hash(map);

// DEBUG
/*
scLayer.scene.subscribe({
    load: function (e) {
        console.log('scene loaded:', e);
    }
});

scLayer.scene.subscribe({
    view_complete: function () {
	console.log('scene view complete');
    }
});
*/
