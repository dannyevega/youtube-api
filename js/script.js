var $form = $('#search-term');
var $searchQuery = $('#query');

$form.submit(function(el){
	el.preventDefault();
	var searchQuery = $searchQuery.val();
	getRequest(searchQuery);
});

var getRequest = (function(){
	var params = {
		part: 'snippet',
		key: "AIzaSyAXZYwp-w3D5_n1NXgfGf1PffG3fxxBZvs"
	};
	var url = "https://www.googleapis.com/youtube/v3/search";

	return function getRequest(userInput){
		params.q = userInput;
		$.getJSON(url, params, function(data){
			var thumbnailData = data.items;
			appendThumbnails(thumbnailData);	
			$searchQuery.val('');
		});		
	};

})();

var appendThumbnails = (function(){
	var $thumbnailList = $('#search-results');

	return function(items){
		var elements = [];
		for(var i = 0; i < items.length; i++){
			var $p = $('<p>');
			var $img = $('<img>').attr('src', items[i].snippet.thumbnails.medium.url);
			$p.append($img);
			elements.push($p);
		}
		$thumbnailList.html(elements);
	}

})();

// function getRequest(userInput){
// 	var params = {
// 		part: 'snippet',
// 		key: "AIzaSyAXZYwp-w3D5_n1NXgfGf1PffG3fxxBZvs",
// 		q: userInput
// 	};
// 	url = "https://www.googleapis.com/youtube/v3/search";

// 	$.getJSON(url, params, function(data){
// 		var thumbnailData = data.items;
// 		appendThumbnails(thumbnailData);		
// 	});
// }


// var appendThumbnails = (function(){
// 	var $thumbnailList = $('#search-results');
// 	var thumbnailMarkUp = "";

// 	return function(data){
// 		for(var i = 0; i < data.length; i++){
// 			thumbnailMarkUp += '<p><img src="' + data[i].snippet.thumbnails.medium.url + '"></p>';			
// 			$thumbnailList.html(thumbnailMarkUp);				
// 		}	
// 	};

// })();
