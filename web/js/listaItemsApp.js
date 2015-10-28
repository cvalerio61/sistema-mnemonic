//var app = angular.module('listaItemsApp', ["ngRoute"]);
app.controller("itemsCtrl", function($scope,$http,$cookies) {
	$http.get("http://localhost/webservice/index.php/productos")
    .success(function(response) {
			$scope.libros= response.libros;
			})
	.error(function(error, status, headers, config) {
		console.log(status);
		console.log("Error occured");
	});;	
});

