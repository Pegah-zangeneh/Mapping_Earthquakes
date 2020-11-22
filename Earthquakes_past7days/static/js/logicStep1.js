// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([44.0, -80.0], 2);

// Get data from cities.js
//let cityData = cities;

// Add GeoJSON data.
////let sanFranAirport =
//{"type":"FeatureCollection","features":[{
   // "type":"Feature",
    //"properties":{
    //    "id":"3469",
       // "name":"San Francisco International Airport",
       // "city":"San Francisco",
       // "country":"United States",
       // "faa":"SFO",
       // "icao":"KSFO",
       // "alt":"13",
        //"tz-offset":"-8",
        //"dst":"A",
       // "tz":"America/Los_Angeles"},
       // "geometry":{
         //   "type":"Point",
           // "coordinates":[-122.375,37.61899948120117]}}
//]};

// Grabbing our GeoJSON data.
//L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
  //onEachFeature: function(feature, layer) {
   // console.log(layer);
  //  layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2><hr><h2>Airport Name: " + feature.properties.name )
 // }

//}).addTo(map);

// Loop through the cities array and create one marker for each city.
 //cities.forEach(function(city) {
 // console.log(city)
// });

 // Loop through the cities array and create one marker for each city.
 //cityData.forEach(function(city) {
  //console.log(city)
  //L.circleMarker(city.location,{
   // radius: city.population/200000,
  //  color: "orange",
   // fillColor: "#FFA500",
   // lineweight: 4
 // })
//  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString()+ "</h3>")
//.addTo(map);
//});

//L.circleMarker(cityData.location, {
  //color: "black",
  //fillColor: "#FFA500",
  //lineweight: 4,
  //radius: 300
 //}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/Pegah-zangeneh/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

// Create a style for the lines.
let myStyle = {
  color: "#0000FF",
  fillColor: "#ffffa1",
  weight: 1
}

// Grabbing our GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson")
.then(function(data) {
  console.log(data);


// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data).addTo(map);


 //Grabbing our GeoJSON data.
//L.geoJson(data, {
  //style: myStyle,
  //color: "#0000FF",
  //weight: 2,
  //We turn each feature into a marker on the map.
  //onEachFeature: function(feature, layer) {
   // console.log(layer);
     // layer.bindPopup("<h3>Neighborhood: " + feature.properties.AREA_NAME + "</h3> ");
  
  //}

//}).addTo(map);

});
