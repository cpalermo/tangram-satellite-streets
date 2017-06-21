var satAttr = 'Modified <a href="https://scihub.copernicus.eu/">Copernicus</a>' +
    ' Sentinel data 2016 by ' +
    '<a href="https://sentinelmap.eu">SentinelMap</a>' ;

var osmAttr = ' | © <a href="https://openstreetmap.org/copyright">OSM</a>' +
    ' contributors data by ' +
    '<a href="https://mapzen.com">Mapzen</a>' ;

var Attr = satAttr + osmAttr ;

var scLayer = Tangram.leafletLayer({
    scene: {
	import: ['global.yaml'],
	global: {'labels_overlay': true,
		 'roads_overlay': true},
    },
    attribution: Attr,
});

var map = L.map('map' , {
    center: [48.92, 11.25],
    zoom: 6,
    maxZoom: 16,
    minZoom: 5,
    layers: [scLayer],
    zoomControl: false
});

L.control.zoom({position: 'bottomright'}).addTo(map);

var hash = new L.Hash(map);

var sidebar = L.control.sidebar('sidebar').addTo(map);

// Scene config controls

var scene = scLayer.scene;

document.getElementById('labels').addEventListener('click', function(){
    var value = scene.config.global.labels_overlay;
    if (value) {old_icon = 'fa-toggle-on'} else {old_icon = 'fa-toggle-off'}
    if (value) {value = false} else {value = true};
    if (value) {new_icon = 'fa-toggle-on'} else {new_icon = 'fa-toggle-off'}
    scene.config.global.labels_overlay = value;
    scene.updateConfig();
    document.getElementById('labels_toggle').classList.remove(old_icon);
    document.getElementById('labels_toggle').classList.add(new_icon);
    //document.getElementById("test").innerHTML = value;
    //console.log(value);
});

document.getElementById('roads').addEventListener('click', function(){
    var value = scene.config.global.roads_overlay;
    if (value) {old_icon = 'fa-toggle-on'} else {old_icon = 'fa-toggle-off'}
    if (value) {value = false} else {value = true};
    if (value) {new_icon = 'fa-toggle-on'} else {new_icon = 'fa-toggle-off'}
    scene.config.global.roads_overlay = value;
    scene.updateConfig();
    document.getElementById('roads_toggle').classList.remove(old_icon);
    document.getElementById('roads_toggle').classList.add(new_icon);
    //document.getElementById("test").innerHTML = value;
    //console.log(value);
});

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
