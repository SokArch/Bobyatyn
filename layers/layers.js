var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_street_Bobyatyn_1 = new ol.format.GeoJSON();
var features_street_Bobyatyn_1 = format_street_Bobyatyn_1.readFeatures(json_street_Bobyatyn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_street_Bobyatyn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_street_Bobyatyn_1.addFeatures(features_street_Bobyatyn_1);
var lyr_street_Bobyatyn_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_street_Bobyatyn_1, 
                style: style_street_Bobyatyn_1,
                popuplayertitle: 'street_Bobyatyn',
                interactive: true,
                title: '<img src="styles/legend/street_Bobyatyn_1.png" /> street_Bobyatyn'
            });
var format_adressBob_2 = new ol.format.GeoJSON();
var features_adressBob_2 = format_adressBob_2.readFeatures(json_adressBob_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adressBob_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adressBob_2.addFeatures(features_adressBob_2);
var lyr_adressBob_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adressBob_2, 
                style: style_adressBob_2,
                popuplayertitle: 'adressBob',
                interactive: true,
                title: '<img src="styles/legend/adressBob_2.png" /> adressBob'
            });
var group_geojson1 = new ol.layer.Group({
                                layers: [lyr_street_Bobyatyn_1,lyr_adressBob_2,],
                                fold: 'open',
                                title: 'geojson (1)'});

lyr_OSMStandard_0.setVisible(true);lyr_street_Bobyatyn_1.setVisible(true);lyr_adressBob_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_geojson1];
lyr_street_Bobyatyn_1.set('fieldAliases', {'str_id': 'str_id', 'str_type': 'str_type', 'codifier': 'codifier', 'name_old': 'name_old', 'str_name': 'str_name', 'name_eng': 'name_eng', 'note': 'note', 'additional': 'additional', 'cvk': 'cvk', 'dms': 'dms', 'dpa': 'dpa', 'ds': 'ds', 'edessb': 'edessb', 'mvs': 'mvs', 'nais': 'nais', 'oe': 'oe', 'ozpa': 'ozpa', 'pd': 'pd', 'uoma': 'uoma', });
lyr_adressBob_2.set('fieldAliases', {'build_code': 'build_code', 'str_id': 'str_id', 'index': 'index', 'build_num': 'build_num', 'corp_num': 'corp_num', 'obj_type': 'obj_type', 'floor': 'floor', 'entrance': 'entrance', 'flat': 'flat', 'note': 'note', 'build_type': 'build_type', 'sub_type': 'sub_type', 'category': 'category', 'condition': 'condition', 'area': 'area', 'cvk': 'cvk', 'dms': 'dms', 'dpa': 'dpa', 'ds': 'ds', 'edessb': 'edessb', 'mvs': 'mvs', 'nais': 'nais', 'oe': 'oe', 'ozpa': 'ozpa', 'pd': 'pd', 'uoma': 'uoma', 'street_Bobyatyn_str_type': 'street_Bobyatyn_str_type', 'street_Bobyatyn_codifier': 'street_Bobyatyn_codifier', 'street_Bobyatyn_name_old': 'street_Bobyatyn_name_old', 'street_Bobyatyn_str_name': 'street_Bobyatyn_str_name', 'street_Bobyatyn_name_eng': 'street_Bobyatyn_name_eng', 'street_Bobyatyn_note': 'street_Bobyatyn_note', 'street_Bobyatyn_additional': 'street_Bobyatyn_additional', 'street_Bobyatyn_cvk': 'street_Bobyatyn_cvk', 'street_Bobyatyn_dms': 'street_Bobyatyn_dms', 'street_Bobyatyn_dpa': 'street_Bobyatyn_dpa', 'street_Bobyatyn_ds': 'street_Bobyatyn_ds', 'street_Bobyatyn_edessb': 'street_Bobyatyn_edessb', 'street_Bobyatyn_mvs': 'street_Bobyatyn_mvs', 'street_Bobyatyn_nais': 'street_Bobyatyn_nais', 'street_Bobyatyn_oe': 'street_Bobyatyn_oe', 'street_Bobyatyn_ozpa': 'street_Bobyatyn_ozpa', 'street_Bobyatyn_pd': 'street_Bobyatyn_pd', 'street_Bobyatyn_uoma': 'street_Bobyatyn_uoma', 'poshuk': 'poshuk', 'poshuk2': 'poshuk2', });
lyr_street_Bobyatyn_1.set('fieldImages', {'str_id': 'TextEdit', 'str_type': 'Range', 'codifier': 'TextEdit', 'name_old': 'TextEdit', 'str_name': 'TextEdit', 'name_eng': 'TextEdit', 'note': 'TextEdit', 'additional': 'TextEdit', 'cvk': 'TextEdit', 'dms': 'TextEdit', 'dpa': 'TextEdit', 'ds': 'TextEdit', 'edessb': 'TextEdit', 'mvs': 'TextEdit', 'nais': 'TextEdit', 'oe': 'TextEdit', 'ozpa': 'TextEdit', 'pd': 'TextEdit', 'uoma': 'TextEdit', });
lyr_adressBob_2.set('fieldImages', {'build_code': 'TextEdit', 'str_id': 'TextEdit', 'index': 'TextEdit', 'build_num': 'TextEdit', 'corp_num': 'TextEdit', 'obj_type': 'Range', 'floor': 'TextEdit', 'entrance': 'TextEdit', 'flat': 'TextEdit', 'note': 'TextEdit', 'build_type': 'TextEdit', 'sub_type': 'TextEdit', 'category': 'TextEdit', 'condition': 'TextEdit', 'area': 'TextEdit', 'cvk': 'TextEdit', 'dms': 'TextEdit', 'dpa': 'TextEdit', 'ds': 'TextEdit', 'edessb': 'TextEdit', 'mvs': 'TextEdit', 'nais': 'TextEdit', 'oe': 'TextEdit', 'ozpa': 'TextEdit', 'pd': 'TextEdit', 'uoma': 'TextEdit', 'street_Bobyatyn_str_type': 'Range', 'street_Bobyatyn_codifier': 'TextEdit', 'street_Bobyatyn_name_old': 'TextEdit', 'street_Bobyatyn_str_name': 'TextEdit', 'street_Bobyatyn_name_eng': 'TextEdit', 'street_Bobyatyn_note': 'TextEdit', 'street_Bobyatyn_additional': 'TextEdit', 'street_Bobyatyn_cvk': 'TextEdit', 'street_Bobyatyn_dms': 'TextEdit', 'street_Bobyatyn_dpa': 'TextEdit', 'street_Bobyatyn_ds': 'TextEdit', 'street_Bobyatyn_edessb': 'TextEdit', 'street_Bobyatyn_mvs': 'TextEdit', 'street_Bobyatyn_nais': 'TextEdit', 'street_Bobyatyn_oe': 'TextEdit', 'street_Bobyatyn_ozpa': 'TextEdit', 'street_Bobyatyn_pd': 'TextEdit', 'street_Bobyatyn_uoma': 'TextEdit', 'poshuk': 'TextEdit', 'poshuk2': 'TextEdit', });
lyr_street_Bobyatyn_1.set('fieldLabels', {'str_id': 'no label', 'str_type': 'no label', 'codifier': 'no label', 'name_old': 'no label', 'str_name': 'inline label - always visible', 'name_eng': 'no label', 'note': 'no label', 'additional': 'no label', 'cvk': 'no label', 'dms': 'no label', 'dpa': 'no label', 'ds': 'no label', 'edessb': 'no label', 'mvs': 'no label', 'nais': 'no label', 'oe': 'no label', 'ozpa': 'no label', 'pd': 'no label', 'uoma': 'no label', });
lyr_adressBob_2.set('fieldLabels', {'build_code': 'no label', 'str_id': 'no label', 'index': 'no label', 'build_num': 'inline label - always visible', 'corp_num': 'no label', 'obj_type': 'no label', 'floor': 'no label', 'entrance': 'no label', 'flat': 'no label', 'note': 'no label', 'build_type': 'no label', 'sub_type': 'no label', 'category': 'no label', 'condition': 'no label', 'area': 'no label', 'cvk': 'no label', 'dms': 'no label', 'dpa': 'no label', 'ds': 'no label', 'edessb': 'no label', 'mvs': 'no label', 'nais': 'no label', 'oe': 'no label', 'ozpa': 'no label', 'pd': 'no label', 'uoma': 'no label', 'street_Bobyatyn_str_type': 'no label', 'street_Bobyatyn_codifier': 'no label', 'street_Bobyatyn_name_old': 'no label', 'street_Bobyatyn_str_name': 'no label', 'street_Bobyatyn_name_eng': 'no label', 'street_Bobyatyn_note': 'no label', 'street_Bobyatyn_additional': 'no label', 'street_Bobyatyn_cvk': 'no label', 'street_Bobyatyn_dms': 'no label', 'street_Bobyatyn_dpa': 'no label', 'street_Bobyatyn_ds': 'no label', 'street_Bobyatyn_edessb': 'no label', 'street_Bobyatyn_mvs': 'no label', 'street_Bobyatyn_nais': 'no label', 'street_Bobyatyn_oe': 'no label', 'street_Bobyatyn_ozpa': 'no label', 'street_Bobyatyn_pd': 'no label', 'street_Bobyatyn_uoma': 'no label', 'poshuk': 'no label', 'poshuk2': 'no label', });
lyr_adressBob_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});