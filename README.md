# Tangram Satellite Streets style

A [Tangram](https://github.com/tangrams/tangram) scene for adding OSM data to a satellite raster baselayer.

![Tangram Satellite Streets](https://raw.githubusercontent.com/cpalermo/tangram-satellite-streets/master/img/example.png)

Check how it works on [SentinelMap website](https://www.sentinelmap.eu#13/50.95/1.86).

## How to use it

This scene combines a raster tile layer with vector tiles to deploy a web map. In particular it supports:
* SentinelMap [basemap tile service](https://github.com/sentinelmap/sentinelmap-services) -- [sign up for an API key here](https://devs.sentinelmap.eu)
* Mapzen [vector tile service](https://mapzen.com/documentation/vector-tiles/) -- [sign up for an API key here](https://mapzen.com/developers)

For deploy a map you can simply set your keys on [global.yaml](https://github.com/cpalermo/tangram-satellite-streets/blob/master/global.yaml#L6-L12) file:
* line 7:
``` yaml
sat_api_key: '' ## set this value to your SentinelMap API key
```
* line 12: 
``` yaml
osm_api_key: '' ## set this value to your Mapzen API key
```
