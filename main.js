var satAttr = 'Modified <a href="https://scihub.copernicus.eu/">Copernicus</a>' +
    ' Sentinel data 2016 by ' +
    '<a href="https://sentinelmap.eu">SentinelMap</a>' ;
var osmAttr = ' | © <a href="https://openstreetmap.org/copyright">OSM</a>' +
    ' contributors data by ' +
    '<a href="https://mapzen.com">Mapzen</a>' ;
var attr = satAttr + osmAttr ;

var layer = Tangram.leafletLayer({
    scene: {
	import: ['global.yaml'],
	global: {'labels_overlay': true,
		 'roads_overlay': true},
    },
    attribution: attr,
});
var scene = layer.scene;

var map = L.map('map' , {
    center: [48.92, 11.25],
    zoom: 6,
    maxZoom: 16,
    minZoom: 5,
    layers: [layer],
    zoomControl: false
});
L.control.zoom({position: 'bottomright'}).addTo(map);

var hash = new L.Hash(map);

var sidebar = L.control.sidebar('sidebar').addTo(map);

// Scene config controls

function btn(ico_id, str_id, value) {
    if (value) {old_icon = 'fa-toggle-on'} else {old_icon = 'fa-toggle-off'}
    if (value) {new_icon = 'fa-toggle-off'} else {new_icon = 'fa-toggle-on'}
    if (value) {status = 'off'} else {status = 'on'}
    document.getElementById(ico_id).classList.remove(old_icon);
    document.getElementById(ico_id).classList.add(new_icon);
    document.getElementById(str_id).innerHTML = status;
};

document.getElementById('labels').addEventListener('click', function() {
    var overlay = scene.config.global.labels_overlay;
    btn('labels_toggle', 'labels_status', overlay);
    if (overlay) {overlay = false} else {overlay = true};
    scene.config.global.labels_overlay = overlay;
    scene.updateConfig();
});

document.getElementById('roads').addEventListener('click', function() {
    var overlay = scene.config.global.roads_overlay;
    btn('roads_toggle', 'roads_status', overlay);
    if (overlay) {overlay = false} else {overlay = true};
    scene.config.global.roads_overlay = overlay;
    scene.updateConfig();
});

// DEBUG

/*
scene.subscribe({
    load: function (e) {
        console.log('scene loaded:', e);
    }
});

scene.subscribe({
    view_complete: function () {
	console.log('scene view complete');
    }
});
*/
