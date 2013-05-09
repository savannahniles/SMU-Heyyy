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
    maxZoom: 17,
    minZoom: 17,
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

$(document).ready(function() {	
//source file is https://docs.google.com/spreadsheet/ccc?key=0Ak0qDiMLT3XddHlNempadUs1djdkQ0tFLWF6ci1rUUE	
$(function listBooks() {	
$.getJSON( "https://spreadsheets.google.com/feeds/list/0AjImsUF0T00udEU4NWZhVkdnY294REVuMzRPUGxoQ1E/od6/public/values?alt=json-in-script&callback=?",
	function (data) {	
		$('div#item-list').append('<ul class="items"></ul>');
		$.each(data.feed.entry, function(i,entry) {	
			var item = '<ul class="post">';
			item += '<li class="author">' + '<span class="timestamp">' + entry.title.$t + '  </span>' + entry.gsx$whereareyou.$t + ':</li>';
			item += '<li class="title">' + entry.gsx$whatsonyourmind.$t + '</li>';
			item += '</ul>';
			$('.items').prepend('<li>' + item + '</li>');	
			});
		});
	});
});

$(document).ready(function() {
	$('#infoButton').click(function() {
	  $('#add').hide('fast', function() {
	    // Animation complete.
	  });
	  $('#info').fadeToggle('fast', function() {
	    // Animation complete.
	  });
	});

	$('#addButton').click(function() {
	  $('#info').hide('fast', function() {
	    // Animation complete.
	  });
	  $('#add').fadeToggle('fast', function() {
	    // Animation complete.
	  });
	});
});

jQuery(document).ready(function() {
  $("select.flexselect").flexselect();

   $('.tooltip').tooltipster({
				maxWidth: 200
	});
});
