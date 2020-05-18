var terra = ee.Image('NOAA/NGDC/ETOPO1');
var bathymetry = terra.clip(aoi);
Map.addLayer(bathymetry, {}, 'bathymetry');
var slope = ee.Terrain.slope(bathymetry);
// Get the aspect (in degrees).
var aspect = ee.Terrain.aspect(bathymetry);
// Convert to radians, compute the sin of the aspect.
var terrain = aspect.divide(180).multiply(Math.PI).sin();
// Calculate curvature
var curvature = ee.Terrain.slope(slope);
// Calculate hillshade
var hillshade = ee.Terrain.hillshade(bathymetry);
Map.addLayer(slope, {}, 'slope');
Map.addLayer(aspect, {}, 'aspect');
Map.addLayer(terrain, {}, 'terrain');
Map.addLayer(curvature, {}, 'curvature');
Map.addLayer(hillshade, {}, 'hillshade');
