// Ambil koleksi citra landsat
var collection = ee.ImageCollection('LANDSAT/LC08/C01/T1').filterDate('2017-01-01', '2017-12-21');
// buat mosaik bebas awan
var composite = ee.Algorithms.Landsat.simpleComposite(collection);
// hitung ndvi
var composite_ndvi = composite.normalizedDifference(['B5','B4’]);
var palette = [
  'FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718',
  '74A901', '66A000', '529400', '3E8601', '207401', '056201',
  '004C00', '023B01', '012E01', '011D01', '011301'];
// tampilkan komposit dan komposit ndvi
Map.addLayer(composite, {bands: ['B4', 'B3', 'B2'], max: 128}, 'Composite', false);
Map.addLayer(composite_ndvi, {min: 0, max: 1, palette: palette}, 'Composite NDVI', false);
