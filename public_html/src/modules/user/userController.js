   
(function () {
	var app = angular.module('userModule', []);

	app.controller('userController', ['$scope', function ($scope) {
			$scope.user = {};
			$scope.showForm = false;
			this.showForm = function () {
				$scope.showForm = true;
			};
			this.save = function () {
				rta=("El usuario " + $scope.user.firstName + " " + $scope.user.lastName+"nació el "+$scope.user.fechaNacimiento.toString.toString(1,8));
                                document.getElementById("reemplazo").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ rta +"</div>";;
			};
		}]);

	app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/modules/user/userTemplates.html'
			};
		}]);
})();