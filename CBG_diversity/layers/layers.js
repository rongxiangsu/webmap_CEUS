var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LA_cbg_residential_diversity_1 = new ol.format.GeoJSON();
var features_LA_cbg_residential_diversity_1 = format_LA_cbg_residential_diversity_1.readFeatures(json_LA_cbg_residential_diversity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LA_cbg_residential_diversity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LA_cbg_residential_diversity_1.addFeatures(features_LA_cbg_residential_diversity_1);
var lyr_LA_cbg_residential_diversity_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LA_cbg_residential_diversity_1, 
                style: style_LA_cbg_residential_diversity_1,
                popuplayertitle: "LA_cbg_residential_diversity",
                interactive: true,
    title: 'LA_cbg_residential_diversity<br />\
    <img src="styles/legend/LA_cbg_residential_diversity_1_0.png" /> High diversity (8.09%)<br />\
    <img src="styles/legend/LA_cbg_residential_diversity_1_1.png" /> Black low diversity (0.77%)<br />\
    <img src="styles/legend/LA_cbg_residential_diversity_1_2.png" /> Black moderate diversity (2.82%)<br />\
    <img src="styles/legend/LA_cbg_residential_diversity_1_3.png" /> Asian low diversity (0.75%)<br />\
    <img src="styles/legend/LA_cbg_residential_diversity_1_4.png" /> Asian moderate diversity (7.03%)<br />\
    <img src="styles/legend/LA_cbg_residential_diversity_1_5.png" /> Latino low diversity (20.99%)<br />\
    <img src="styles/legend/LA_cbg_residential_diversity_1_6.png" /> Latino moderate diversity (29.83%)<br />\
    <img src="styles/legend/LA_cbg_residential_diversity_1_7.png" /> White low diversity (3.68%)<br />\
    <img src="styles/legend/LA_cbg_residential_diversity_1_8.png" /> White moderate diversity (25.98%)<br />\
    <img src="styles/legend/LA_cbg_residential_diversity_1_9.png" /> American Indian low diversity (0.03%)<br />\
    <img src="styles/legend/LA_cbg_residential_diversity_1_10.png" /> Other moderate diversity (0.05%)<br />\
    <img src="styles/legend/LA_cbg_residential_diversity_1_11.png" /> <br />'
        });

lyr_ESRIGraylight_0.setVisible(true);lyr_LA_cbg_residential_diversity_1.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_LA_cbg_residential_diversity_1];
lyr_LA_cbg_residential_diversity_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'block_grou': 'block_grou', 'population': 'population', 'class_domi': 'class_domi', 'class': 'class', 'dominant_r': 'dominant_r', 'scaled_ent': 'scaled_ent', });
lyr_LA_cbg_residential_diversity_1.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'BLKGRPCE': 'TextEdit', 'GEOID': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'block_grou': 'TextEdit', 'population': 'TextEdit', 'class_domi': 'TextEdit', 'class': 'TextEdit', 'dominant_r': 'TextEdit', 'scaled_ent': 'TextEdit', });
lyr_LA_cbg_residential_diversity_1.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'block_grou': 'no label', 'population': 'no label', 'class_domi': 'no label', 'class': 'no label', 'dominant_r': 'no label', 'scaled_ent': 'no label', });
lyr_LA_cbg_residential_diversity_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});