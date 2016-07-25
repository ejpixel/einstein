angular.module("Estrutura-Inicial")
    .controller('AberturaChamadaController', AberturaChamadaController);

function AberturaChamadaController($location, $scope) {

    $scope.turmas = Turmas.find().fetch();

    $scope.horarios = [
		{inicio: "08:20", fim: "10:00"},
		{inicio: "10:10", fim: "12:00"},
		{inicio: "13:30", fim: "15:00"},
		{inicio: "15:10", fim: "17:00"},
		{inicio: "18:30", fim: "20:00"},
		{inicio: "20:20", fim: "22:00"},
	];

    $scope.turmaSelecionada=null;
    $scope.horarioSelecionado=null;
    $scope.selecaoDeTurma = true;

	function redirecionar(url) {
		$location.path(url);
	};

    $scope.selecionarTurma = function(turmaT){
        $scope.turmaSelecionada = turmaT;
        $scope.selecaoDeTurma = false;
    }

    $scope.selecionarHorario = function (horarioH) {
        $scope.horarioSelecionado = horarioH;
        $scope.selecaoDeTurma = true;
		redirecionar("/einstein/chamada/:123456", true);
        // redirecionar("/einstein/chamada/:"+$scope.turmaSelecionada.turmaId, true);
    };

};
