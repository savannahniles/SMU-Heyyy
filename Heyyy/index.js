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


