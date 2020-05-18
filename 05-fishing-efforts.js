var gfw = ee.ImageCollection('GFW/GFF/V1/fishing_hours');
var effort_all = gfw
  .filterMetadata('country', 'equals', 'WLD')
  .filterDate('2016-01-01','2017-01-01');
var effort_2016 = effort_all
  .sum(); 
var all_trawling_2016 = effort_2016.select('trawlers');
var effort_all_2016 = effort_2016.reduce(ee.Reducer.sum()); 
effort_all_2016 = effort_all_2016.mask(effort_all_2016.gt(0));
Map.addLayer(effort_all_2016,{palette: ['0C276C', '3B9088', 'EEFF00', 'ffffff']}, "Total effort");
