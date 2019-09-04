angular.module('mainapp')
.controller('startGameController', function ($scope, $window) {
	$scope.startGame =function () {
		if(!$scope.playerName.length) {
			$scope.errors = "digite um nome";
			return;
		}

		$window.location.pathname = '/game/' + $scope.playerName + '/q01';
	}
});