angular.module("Estrutura-Inicial")
    .controller('AcompanhamentoController', AcompanhamentoController);

function AcompanhamentoController($location, $scope, $ionicScrollDelegate) {

	let turmas = _.map(Turmas.find().fetch(), function(r){
		return {
			turma: r,
			faltas: [
				{aluno: "Fulano de tal ", presenca: "80%"},
				{aluno: "Joãozinho ", presenca: "75%"},
				{aluno: "Astolvo ", presenca: "50%"}
			]
		};
	});

	$scope.turmas = turmas;

	console.log(turmas);

	$scope.toggleGroup = function(group) {
		console.log(group);
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
			$ionicScrollDelegate.scrollBottom();
		}
	};
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
};
