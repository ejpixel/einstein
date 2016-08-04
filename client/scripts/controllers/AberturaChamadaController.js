angular.module("Estrutura-Inicial")
    .controller('AberturaChamadaController', AberturaChamadaController);

function AberturaChamadaController($state, $scope) {

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

    $scope.selecionarTurma = function(turmaT){
        $scope.turmaSelecionada = turmaT;
        $scope.selecaoDeTurma = false;
    }

    $scope.selecionarHorario = function (horarioH) {
        $scope.horarioSelecionado = horarioH;
        $scope.selecaoDeTurma = true;
        $state.go('app.chamada', {
          turmaId: $scope.turmaSelecionada._id,
          horarioSelecionado: horarioH
        });
    };

};
