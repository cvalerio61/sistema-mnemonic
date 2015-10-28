app.controller("registrarse", function($scope,$http) {
	//Verificar si hay sesion activa
	if($cookies.get('user')!= undefined){
		location.href = 'index.html';
	}
	$scope.registrarCuenta= function(){
		data = {
            'nombreUsuario' : $scope.nombreUsuario,
            'contrasena' : $scope.contrasena,
			'nombre': $scope.nombre,
			'apellido1' : $scope.apellido1,
			'apellido2' : $scope.apellido2,
			'correo' : $scope.correo,
			'telefono' : $scope.telefono,
			'direccion' : $scope.direccion
        };
		$http.post('http://localhost/webservice/index.php/crearCuenta', data)
        .success(function(data, status, headers, config)
        {
			alert("Se creo exitosamente su cuenta");
            console.log(status + ' - ' + data);
			location.href = 'index.html';
        })
        .error(function(data, status, headers, config)
        {
			alert("Sucedió un error, intento de nuevo");
            console.log('error');
        });
	}
});