# Tangram Satellite Street Style

A [Tangram](https://github.com/tangrams/tangram) scene for adding OSM data to a satellite raster baselayer.

![Tangram Satellite Street](https://raw.githubusercontent.com/cpalermo/tangram-satellite-streets/master/img/example.png)

Check how it works on [SentinelMap website](https://www.sentinelmap.eu#13/50.95/1.86).

## How to use it

This scene combines a raster tile layer with vector tiles to deploy a web map. Specifically it uses:
* SentinelMap [basemap tile service](https://github.com/sentinelmap/sentinelmap-services) -- [sign up for an API key here](https://devs.sentinelmap.eu)
* Mapzen [vector tile service](https://mapzen.com/documentation/vector-tiles/) -- [sign up for an API key here](https://mapzen.com/developers)

For deploy a map you need to edit tile layer URLs with your key on [scene.yaml](https://github.com/cpalermo/tangram-satellite-streets/blob/master/scene.yaml#L48-L54) file:
* line 48: ``url: https://tile.sentinelmap.eu/2016/summer/rgb/{z}/{x}/{y}.jpg?key=_my-sentinelmap-key_``
* line 54: ``url: https://tile.mapzen.com/mapzen/vector/v1/all/{z}/{x}/{y}.topojson?api_key=_my-mapzen-key_``
