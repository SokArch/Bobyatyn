var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_str_Bob_1 = new ol.format.GeoJSON();
var features_str_Bob_1 = format_str_Bob_1.readFeatures(json_str_Bob_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_str_Bob_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_str_Bob_1.addFeatures(features_str_Bob_1);
var lyr_str_Bob_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_str_Bob_1, 
                style: style_str_Bob_1,
                popuplayertitle: 'str_Bob',
                interactive: true,
                title: '<img src="styles/legend/str_Bob_1.png" /> str_Bob'
            });
var format_addr_Bob_2 = new ol.format.GeoJSON();
var features_addr_Bob_2 = format_addr_Bob_2.readFeatures(json_addr_Bob_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_addr_Bob_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_addr_Bob_2.addFeatures(features_addr_Bob_2);
var lyr_addr_Bob_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_addr_Bob_2, 
                style: style_addr_Bob_2,
                popuplayertitle: 'addr_Bob',
                interactive: true,
                title: '<img src="styles/legend/addr_Bob_2.png" /> addr_Bob'
            });
var group_geojson3 = new ol.layer.Group({
                                layers: [lyr_str_Bob_1,lyr_addr_Bob_2,],
                                fold: 'open',
                                title: 'geojson (3)'});

lyr_GoogleSatellite_0.setVisible(true);lyr_str_Bob_1.setVisible(true);lyr_addr_Bob_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_geojson3];
lyr_str_Bob_1.set('fieldAliases', {'str_id': 'str_id', 'str_type': 'str_type', 'codifier': 'codifier', 'name_old': 'name_old', 'str_name': 'str_name', 'name_eng': 'name_eng', 'note': 'note', 'additional': 'additional', 'cvk': 'cvk', 'dms': 'dms', 'dpa': 'dpa', 'ds': 'ds', 'edessb': 'edessb', 'mvs': 'mvs', 'nais': 'nais', 'oe': 'oe', 'ozpa': 'ozpa', 'pd': 'pd', 'uoma': 'uoma', });
lyr_addr_Bob_2.set('fieldAliases', {'build_code': 'build_code', 'str_id': 'str_id', 'index': 'index', 'build_num': 'build_num', 'corp_num': 'corp_num', 'obj_type': 'obj_type', 'floor': 'floor', 'entrance': 'entrance', 'flat': 'flat', 'note': 'note', 'build_type': 'build_type', 'sub_type': 'sub_type', 'category': 'category', 'condition': 'condition', 'area': 'area', 'cvk': 'cvk', 'dms': 'dms', 'dpa': 'dpa', 'ds': 'ds', 'edessb': 'edessb', 'mvs': 'mvs', 'nais': 'nais', 'oe': 'oe', 'ozpa': 'ozpa', 'pd': 'pd', 'uoma': 'uoma', 'str_Bob_str_type': 'str_Bob_str_type', 'str_Bob_codifier': 'str_Bob_codifier', 'str_Bob_name_old': 'str_Bob_name_old', 'str_Bob_str_name': 'str_Bob_str_name', 'str_Bob_name_eng': 'str_Bob_name_eng', 'str_Bob_note': 'str_Bob_note', 'str_Bob_additional': 'str_Bob_additional', 'str_Bob_cvk': 'str_Bob_cvk', 'str_Bob_dms': 'str_Bob_dms', 'str_Bob_dpa': 'str_Bob_dpa', 'str_Bob_ds': 'str_Bob_ds', 'str_Bob_edessb': 'str_Bob_edessb', 'str_Bob_mvs': 'str_Bob_mvs', 'str_Bob_nais': 'str_Bob_nais', 'str_Bob_oe': 'str_Bob_oe', 'str_Bob_ozpa': 'str_Bob_ozpa', 'str_Bob_pd': 'str_Bob_pd', 'str_Bob_uoma': 'str_Bob_uoma', 'poshuk': 'poshuk', });
lyr_str_Bob_1.set('fieldImages', {'str_id': 'TextEdit', 'str_type': 'Range', 'codifier': 'TextEdit', 'name_old': 'TextEdit', 'str_name': 'TextEdit', 'name_eng': 'TextEdit', 'note': 'TextEdit', 'additional': 'TextEdit', 'cvk': 'TextEdit', 'dms': 'TextEdit', 'dpa': 'TextEdit', 'ds': 'TextEdit', 'edessb': 'TextEdit', 'mvs': 'TextEdit', 'nais': 'TextEdit', 'oe': 'TextEdit', 'ozpa': 'TextEdit', 'pd': 'TextEdit', 'uoma': 'TextEdit', });
lyr_addr_Bob_2.set('fieldImages', {'build_code': 'TextEdit', 'str_id': 'TextEdit', 'index': 'TextEdit', 'build_num': 'TextEdit', 'corp_num': 'TextEdit', 'obj_type': 'Range', 'floor': 'TextEdit', 'entrance': 'TextEdit', 'flat': 'TextEdit', 'note': 'TextEdit', 'build_type': 'TextEdit', 'sub_type': 'TextEdit', 'category': 'TextEdit', 'condition': 'TextEdit', 'area': 'TextEdit', 'cvk': 'TextEdit', 'dms': 'TextEdit', 'dpa': 'TextEdit', 'ds': 'TextEdit', 'edessb': 'TextEdit', 'mvs': 'TextEdit', 'nais': 'TextEdit', 'oe': 'TextEdit', 'ozpa': 'TextEdit', 'pd': 'TextEdit', 'uoma': 'TextEdit', 'str_Bob_str_type': 'Range', 'str_Bob_codifier': 'TextEdit', 'str_Bob_name_old': 'TextEdit', 'str_Bob_str_name': 'TextEdit', 'str_Bob_name_eng': 'TextEdit', 'str_Bob_note': 'TextEdit', 'str_Bob_additional': 'TextEdit', 'str_Bob_cvk': 'TextEdit', 'str_Bob_dms': 'TextEdit', 'str_Bob_dpa': 'TextEdit', 'str_Bob_ds': 'TextEdit', 'str_Bob_edessb': 'TextEdit', 'str_Bob_mvs': 'TextEdit', 'str_Bob_nais': 'TextEdit', 'str_Bob_oe': 'TextEdit', 'str_Bob_ozpa': 'TextEdit', 'str_Bob_pd': 'TextEdit', 'str_Bob_uoma': 'TextEdit', 'poshuk': 'TextEdit', });
lyr_str_Bob_1.set('fieldLabels', {'str_id': 'no label', 'str_type': 'no label', 'codifier': 'no label', 'name_old': 'no label', 'str_name': 'inline label - always visible', 'name_eng': 'no label', 'note': 'no label', 'additional': 'no label', 'cvk': 'no label', 'dms': 'no label', 'dpa': 'no label', 'ds': 'no label', 'edessb': 'no label', 'mvs': 'no label', 'nais': 'no label', 'oe': 'no label', 'ozpa': 'no label', 'pd': 'no label', 'uoma': 'no label', });
lyr_addr_Bob_2.set('fieldLabels', {'build_code': 'no label', 'str_id': 'no label', 'index': 'no label', 'build_num': 'inline label - always visible', 'corp_num': 'no label', 'obj_type': 'no label', 'floor': 'no label', 'entrance': 'no label', 'flat': 'no label', 'note': 'no label', 'build_type': 'no label', 'sub_type': 'no label', 'category': 'no label', 'condition': 'no label', 'area': 'no label', 'cvk': 'no label', 'dms': 'no label', 'dpa': 'no label', 'ds': 'no label', 'edessb': 'no label', 'mvs': 'no label', 'nais': 'no label', 'oe': 'no label', 'ozpa': 'no label', 'pd': 'no label', 'uoma': 'no label', 'str_Bob_str_type': 'no label', 'str_Bob_codifier': 'no label', 'str_Bob_name_old': 'no label', 'str_Bob_str_name': 'no label', 'str_Bob_name_eng': 'no label', 'str_Bob_note': 'no label', 'str_Bob_additional': 'no label', 'str_Bob_cvk': 'no label', 'str_Bob_dms': 'no label', 'str_Bob_dpa': 'no label', 'str_Bob_ds': 'no label', 'str_Bob_edessb': 'no label', 'str_Bob_mvs': 'no label', 'str_Bob_nais': 'no label', 'str_Bob_oe': 'no label', 'str_Bob_ozpa': 'no label', 'str_Bob_pd': 'no label', 'str_Bob_uoma': 'no label', 'poshuk': 'no label', });
lyr_addr_Bob_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});