angular.module('mainapp').controller('questionController', 
	function ($scope, $http) {
		$scope.submitAnswer = function () {
			$scope.answered = true;
			$scope.wasGivenRightAnswer = checkIfRightAnswer(questionForm.answer);
		}

		$scope.skip = function () {
			// body...
		}

		$scope.stop = function () {
			// body...
		}

		$scope.next = function () {
			// body...
		}				

		function checkIfRightAnswer(answers) {
			var givenAnswer = answers.value;
			if(!givenAnswer.length || givenAnswer.length <= 0) 
				return false;

			return parseBoolean(
				answers[parseInt(givenAnswer)]
				.getAttribute('data-isrightanswer'));
		}

		function parseBoolean(str) {
			if(!str.length || str.length <= 0) return false;
			if(str.toLowerCase() === "false") return false;
			if(str.toLowerCase() === "true") return true;
		}
	});