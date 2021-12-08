var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_lsbuliding_1 = new ol.format.GeoJSON();
var features_lsbuliding_1 = format_lsbuliding_1.readFeatures(json_lsbuliding_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lsbuliding_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lsbuliding_1.addFeatures(features_lsbuliding_1);
var lyr_lsbuliding_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lsbuliding_1, 
                style: style_lsbuliding_1,
                interactive: true,
                title: '<img src="styles/legend/lsbuliding_1.png" /> ls buliding'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_lsbuliding_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_lsbuliding_1];
lyr_lsbuliding_1.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr_lsbuliding_1.set('fieldImages', {'Build_STR': '', 'Build_NO': '', });
lyr_lsbuliding_1.set('fieldLabels', {'Build_STR': 'inline label', 'Build_NO': 'inline label', });
lyr_lsbuliding_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});