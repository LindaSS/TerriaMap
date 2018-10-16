'use strict';

/*global require*/
var ArcGisMapServerCatalogItem = require('terriajs/lib/Models/ArcGisMapServerCatalogItem');
var BaseMapViewModel = require('terriajs/lib/ViewModels/BaseMapViewModel');
var OpenStreetMapCatalogItem = require('terriajs/lib/Models/OpenStreetMapCatalogItem');

var createPadusBaseMapOptions = function(terria) {
    var result = [];

    var usgsTopo = new ArcGisMapServerCatalogItem(terria);
    usgsTopo.name = 'USGS Topo';
    usgsTopo.url = 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer';
    usgsTopo.opacity = 1.0;
    usgsTopo.isRequiredForRendering = true;
    usgsTopo.allowFeaturePicking = false;

    result.push(new BaseMapViewModel({
        image: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/info/thumbnail',
        catalogItem: usgsTopo
    }));

    var usgsImageryOnly = new ArcGisMapServerCatalogItem(terria);
    usgsImageryOnly.name = 'USGS Imagery';
    usgsImageryOnly.url = 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer';
    usgsImageryOnly.opacity = 1.0;
    usgsImageryOnly.isRequiredForRendering = true;
    usgsImageryOnly.allowFeaturePicking = false;

    result.push(new BaseMapViewModel({
        image: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/info/thumbnail',
        catalogItem: usgsImageryOnly
    }));

    var usgsImageryTopo = new ArcGisMapServerCatalogItem(terria);
    usgsImageryTopo.name = 'USGS Imagery with Labels';
    usgsImageryTopo.url = 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer';
    usgsImageryTopo.opacity = 1.0;
    usgsImageryTopo.isRequiredForRendering = true;
    usgsImageryTopo.allowFeaturePicking = false;

    result.push(new BaseMapViewModel({
        image: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/info/thumbnail',
        catalogItem: usgsImageryTopo
    }));

    var osm = new OpenStreetMapCatalogItem(terria);
    osm.name = 'OpenStreetMap';
    osm.url = 'http://tile.openstreetmap.org/';
    osm.fileExtension = 'png';
    osm.attribution = '© OpenStreetMap ';
    osm.opacity = 1.0;

    result.push(new BaseMapViewModel({
        image: 'https://www.arcgis.com/sharing/rest/content/items/5d2bfa736f8448b3a1708e1f6be23eed/info/thumbnail/temposm.jpg',
        catalogItem: osm
    }));

    var worldOcean = new ArcGisMapServerCatalogItem(terria);
    worldOcean.name = 'ESRI Oceans';
    worldOcean.url = 'https://services.arcgisonline.com/arcgis/rest/services/Ocean_Basemap/MapServer';
    worldOcean.opacity = 1.0;
    worldOcean.isRequiredForRendering = true;
    worldOcean.allowFeaturePicking = false;

    result.push(new BaseMapViewModel({
        image: 'https://www.arcgis.com/sharing/rest/content/items/48b8cec7ebf04b5fbdcaf70d09daff21/info/thumbnail/tempoceans.jpg',
        catalogItem: worldOcean
    }));

    var worldImagery = new ArcGisMapServerCatalogItem(terria);
    worldImagery.name = 'ESRI Imagery with Labels';
    worldImagery.url = 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer';
    worldImagery.opacity = 1.0;
    worldImagery.isRequiredForRendering = true;
    worldImagery.allowFeaturePicking = false;

    result.push(new BaseMapViewModel({
        image: 'https://www.arcgis.com/sharing/rest/content/items/413fd05bbd7342f5991d5ec96f4f8b18/info/thumbnail/imagery_labels.jpg',
        catalogItem: worldImagery
    }));

    var worldStreetMap = new ArcGisMapServerCatalogItem(terria);
    worldStreetMap.name = 'ESRI Streets';
    worldStreetMap.url = 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer';
    worldStreetMap.opacity = 1.0;
    worldStreetMap.isRequiredForRendering = true;
    worldStreetMap.allowFeaturePicking = false;

    result.push(new BaseMapViewModel({
        image: 'https://www.arcgis.com/sharing/rest/content/items/d8855ee4d3d74413babfb0f41203b168/info/thumbnail/world_street_map.jpg',
        catalogItem: worldStreetMap
    }));

    return result;

};

module.exports = createPadusBaseMapOptions;
