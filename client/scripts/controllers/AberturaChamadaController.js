angular.module("Estrutura-Inicial")
    .controller('AberturaChamadaController', AberturaChamadaController);

function AberturaChamadaController($location, $scope) {
    $scope.turmas = [];
    $scope.horarios = [];
    $scope.turmaSelecionada=null;
    $scope.horarioSelecionado=null;
    $scope.selecaoDeTurma = true;
    turmas_mock();
    horarios_mock();

    function turmas_mock(){
        console.log("@@Inicio do mock de turmas!");
        for(var i=0; i<3; i++){
            var turma = {};
            turma.id = i;
            $scope.turmas.push(turma);
        }
    };

    function horarios_mock(){
        console.log("@@Inicio do mock de horarios!");
        for (var i = 0; i < 3; i++) {
            var horario = {};
            if(i==1){
                horario.inicio = "08:30";
                horario.fim = "12:00";
            } else if(i==2) {
                horario.inicio = "13:30";
                horario.fim = "18:00";
            } else{
                horario.inicio = "18:30";
                horario.fim = "22:00";
            }
            $scope.horarios.push(horario);
        }
    };

    $scope.selecionarTurma = function(turmaT){
        $scope.turmaSelecionada = turmaT;
        console.log("Turma selecionada:"+ $scope.turmaSelecionada.id);
        $scope.selecaoDeTurma = false;
    }

    $scope.selecionarHorario = function (horarioH) {
        $scope.horarioSelecionado = horarioH;
        console.log("Horário selecionado:"+ "Inicio ("+ $scope.horarioSelecionado.inicio+")"+ "Fim ("+$scope.horarioSelecionado.fim+")");
        $scope.selecaoDeTurma = true;
        $scope.redirecionar();
    };

    $scope.redirecionar = function() {
        //$location.path(url).search({horario:$scope.horarioSelecionado,turma: $scope.turmaSelecionada.id});
        let turma = Turmas.findOne({turmaId: 147261});
        let alunosId = turma['alunos'];
        var matricula = parseInt(alunosId[0]);
        let aluno = Alunos.findOne({matricula: matricula});
        let chamadaAntiga = Chamadas.find({}, {chamadaId: 1}).fetch();
        let chamadaAtual = chamadaAntiga[chamadaAntiga.length-1]['chamadaId'] +1;
        Chamadas.insert({chamadaId: chamadaAtual, turmaId: 147261, data: new Date()});
        var redirecionamento = "/einstein/chamada/:147261/:" + chamadaAtual + "/:" + aluno['matricula'];
        $location.path(redirecionamento);
    };
};
