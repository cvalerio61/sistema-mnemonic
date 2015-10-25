var app = angular.module('listaItemsApp', []);
app.controller("itemsCtrl", function($scope,$http) {
	$http.get("http://localhost/webservice/libros/")
    .success(function(response) {
			$scope.libros= response.libros;
			})
	.error(function(error, status, headers, config) {
		console.log(status);
		console.log("Error occured");
	});;		
});