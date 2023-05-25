var data = [];

function initMap(data) {
    map = new OpenLayers.Map("viewDiv");

    map.addLayer(new OpenLayers.Layer.OSM());

    var markers = new OpenLayers.Layer.Markers("Markers");
    map.addLayer(markers);

    var markersArray = data;
    for (var i = 0; i < markersArray.length; i++) {
        var lonLat = new OpenLayers.LonLat(markersArray[i].longitude, markersArray[i].latitude)
            .transform(
                new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
                map.getProjectionObject(), // to Spherical Mercator Projection
                console.log(done)
            );
        var icon = new OpenLayers.Icon("/hospital.jpg", new OpenLayers.Size(32, 32));
        markers.addMarker(new OpenLayers.Marker(lonLat, icon));
    }
    var lonLatcenter = new OpenLayers.LonLat(395.87500000,32.012900)
        .transform(
            new OpenLayers.Projection("EPSG:4326"),
            map.getProjectionObject()
        );
    var zoom = 15;
    map.setCenter(lonLatcenter, zoom);

    console.log("thats my dude")
}

initMap(data);