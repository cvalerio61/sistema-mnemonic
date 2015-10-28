app.factory('sesion', function($http) {
    var sesion = {
		id : 0,
		usuario: "",
		getNombreUsuario : function( ){
			$http.get("http://localhost/webservice/index.php/getCuentaID?id="+this.id)
			.success(function(response) {
				this.usuario = response.nombreUsuario;
				alert(this.usuario);
			})
			.error(function(error, status, headers, config) {
				console.log(status);
				alert("noooooooooo");
				console.log("Error occured");
			});;
		}
	}
    return sesion;
});