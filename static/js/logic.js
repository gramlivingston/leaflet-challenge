// Define variables for our tile layers
var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

// Creating map object
var myMap = L.map("map", {
    center: [40.7, -73.95],
    zoom: 11,
    layers: [light]
  });

  var geojsonMarkerOptions = {
    radius: 2,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// Eathquake Data
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// open Earthquake Data
d3.json(url, function(response) {

        L.geoJSON(response, {
            pointToLayer: function (response, latlng) {
                return L.circleMarker(latlng, geojsonMarkerOptions);
      }
    }).addTo(myMap);

  

  });
  