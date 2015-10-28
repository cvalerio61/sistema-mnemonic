app.controller("cargarSesion", function($scope,$http,$cookies) {
	//Si hay una sesión iniciada
	if($cookies.get('user')!= undefined){
		location.href = 'index.html';
	}
	//Funcion que obtiene los datos ingresados y realiza el login de la cuenta
	$scope.realizarLogin= function(){
		data = {
			'usuario' : $scope.nombreUsuario,
			'contrasena' : $scope.contrasena
		}
		$http.post('http://localhost/webservice/index.php/login', data)
        .success(function(data, status, headers, config)
        {
			alert(data.result);
			if(data.result == true){
				$cookies.put('user', data.id);
				//var username = $cookies.get('user');
				//alert("Se ingreso correctamente a la cuenta"+username);
				location.href = 'index.html';
			}
			else{
				alert("El nombre de usuario y contrasena ingresados no concuerdan")	
			}
            console.log(status + ' - ' + data);

        })
        .error(function(data, status, headers, config)
        {
			alert("Sucedió un error, intento de nuevo");
            console.log('error');
        });
	};		
	//Funcion que dirige a la página de registro
	$scope.registrarCuenta= function(){
		location.href= 'registrarse.html';	
	};
});


