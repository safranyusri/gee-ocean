// Construct start and end dates:
var start = ee.Date('2017-01-01');
var finish = ee.Date('2017-12-31');
// Center the map on indonesia.
Map.centerObject(aoi, 5);
// Load MODIS Aqua Data SMI (Standard Mapped Image)
var aqua_smi = ee.ImageCollection('NASA/OCEANDATA/MODIS-Aqua/L3SMI')
           .filterBounds(aoi)
           .filterDate(start, finish);         
// Calculate mean of Sea Surface Temperature
var aqua_sst = aqua_smi.select('sst');
var aqua_sstm = aqua_sst.reduce('mean').clip(aoi);
Map.addLayer(aqua_sstm, {}, 'SST MEAN');
