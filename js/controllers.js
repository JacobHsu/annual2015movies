'use strict';

var moviesApp = angular.module('moviesApp', []);

moviesApp.controller('listCtrl', function($scope, $http) {

	$scope.templates =
      [ { name: 'template1.html', url: 'template1.html'},
        { name: 'template2.html', url: 'template2.html'} ];

    var checkUrl = function(title) {
		var sUrl = 'http://www.omdbapi.com/?t=' + title + '&type=movie&tomatoes=true';
		if(title=="Cinderella") {
			sUrl = 'http://www.omdbapi.com/?t=' + title + '&y=2015&type=movie&tomatoes=true';
		}
    	return sUrl;
  	}

  	var checkData = function(oData) {
		if(oData.Poster == "N/A") { //Our Times (2015)
		 	oData.Poster = "pics/MV5BNjYzOTVkMjQtZTY1My00MzJlLWE5NmQtZWE5NGY4NjZkMmQ0XkEyXkFqcGdeQXVyNjQ1OTAwMzc@._V1_SY317_CR7,0,214,317_AL_.jpg";
		} else if(oData.Poster == undefined){
			oData.Poster = "";
		} else {
			var filename = oData.Poster.split("/").pop();
			oData.Poster = "pics/"+ filename;
		}
		if(oData.Title =="Surprise") {
			oData.Poster = "http://img03.sogoucdn.com/app/a/07/6441d3997bf50ed2059d2099cd8f286d";
			oData.Website = "http://wwmxd.youku.com/";
		}
    	return oData;
  	}


    $http.get('data/quotes.json').success(function(data) {
		$scope.quotes = data;
		data.forEach(function(section, id) {
			$scope.quote = [];
			var sUrl = 'http://www.omdbapi.com/?t=' + section.title + '&type=movie&tomatoes=true';
			$http.get(sUrl).success(function(oData) {
				oData = checkData(oData);
			    $scope.quote[id] = oData;
			});
		});
	});

	$http.get('data/movies.json').success(function(data) {

		$scope.movies = data;
		data.forEach(function(section, id) {
			$scope.movie = [];

			var sUrl = checkUrl(section.title);
			$http.get(sUrl).success(function(oData) {
				oData = checkData(oData);
			    $scope.movie[id] = oData;
			});

			
			$scope.list = [];

			var list = [];
			section.list.forEach(function(name) {

				var sUrl = checkUrl(name);
				$http.get(sUrl).success(function(oData) {
					oData = checkData(oData);
					list.push(oData);
					$scope.list[id] = list;
				});

			});

		});

	});



});

moviesApp.directive('bgImg', function(){
    return function(scope, element, attrs){
        var url = attrs.bgImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});