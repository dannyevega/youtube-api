var $form = $('#search-term');

$form.submit(function(el){
	el.preventDefault();
	var $searchQuery = $('#query').val();
	getRequest($searchQuery);
});

var getRequest = (function(userInput){
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
		});		
	};

})();

var appendThumbnails = (function(){
	var $thumbnailList = $('#search-results');
	var thumbnailMarkUp = "";

	return function(data){
		for(var i = 0; i < data.length; i++){
			thumbnailMarkUp += '<p><img src="' + data[i].snippet.thumbnails.medium.url + '"></p>';			
			$thumbnailList.html(thumbnailMarkUp);				
		}	
	};

})();


// var getRequest = (function(userInput){
// 	var params = {
// 		part: 'snippet',
// 		key: "AIzaSyAXZYwp-w3D5_n1NXgfGf1PffG3fxxBZvs",
// 		q: userInput
// 	};
// 	url = "https://www.googleapis.com/youtube/v3/search";

// 	return function(){
// 		$.getJSON(url, params, function(data){
// 			var thumbnailData = data.items;
// 			appendThumbnails(thumbnailData);		
// 		});		
// 	};

// })();

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
