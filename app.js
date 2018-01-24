var youTubeBaseURL = 'https://www.googleapis.com/youtube/v3/search';

function getData(searchTerm, callback) {
	var query = {
		part: 'snippet',
		key: 'AIzaSyAsiEeJm3t2vy-RM-ePonvga20v-NkbhjE',
		q: searchTerm,
		type: 'video'
	}
	$.getJSON(youTubeBaseURL, query, callback);
}

function renderHTML(data) {
	var resultElement = '';
	console.log(data);
	if (data.items) {
		data.items.forEach(function(item) {
			console.log(item);
			resultElement += '<img src="'+item.snippet.thumbnails.default.url+'">'
		});
		console.log(resultElement);
	}
	else {
		resultElement += '<p>No results</p>';
	}
	$('.results').html(resultElement);
}

function watchSubmit() {
	$('#search-form').submit(function(event) {
		event.preventDefault();
		var query = $(this).find('#search-bar').val();
		getData(query, renderHTML);
	});
}

$(function() {watchSubmit();});
