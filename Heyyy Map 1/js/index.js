var map;
var brooklyn = new google.maps.LatLng(32.843341,-96.781847);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts =[
  {
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "elementType": "geometry.stroke",
    "stylers": [
      { "lightness": -100 },
      { "color": "#000000" },
      { "weight": 1.2 }
    ]
  }
];

  var mapOptions = {
    zoom: 17,
    center: brooklyn,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}

google.maps.event.addDomListener(window, 'load', initialize);