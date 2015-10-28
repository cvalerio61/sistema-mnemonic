app.controller("sesionCtrl", function($scope,$http,$cookies) {
	$scope.cerrarSesionVisible= true;	//Visibilidad de boton cerrar sesion
	$scope.cuenta={
		nombreUsuario: "Ingresar",
		href: "login.html"
	};
	if($cookies.get('user')!= undefined){
		$scope.cuenta.nombreUsuario = 'Mi cuenta';
		$scope.cuenta.href = 'perfilUsuario.html';
		$scope.cerrarSesionVisible= false;
	}	
	//Función para cerrar sesión
	$scope.cerrarSesion= function(){
		$cookies.remove('user');
		window.location.reload(false); 
	}
});

