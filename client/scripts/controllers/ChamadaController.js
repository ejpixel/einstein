angular.module("Estrutura-Inicial")
    .controller('ChamadaController', ChamadaController);

function ChamadaController($location, $scope, $stateParams, $state) {
    var vm = this;

  	let turmaId = $stateParams.turmaId;

    let chamadaId = Chamadas.insert({
      turmaId: turmaId,
      data: new Date(),
      alunos: []
    });

	$scope.alunos = Turmas.findOne({_id: turmaId}).alunos;

    var updateAluno = function(i) {
        idAluno = $scope.alunos[i]._id;
        $scope.aluno = Alunos.findOne({_id: idAluno});
    };

    var index = 0;
    var idAluno = 0;
	updateAluno(index);

    var marcar = function(presenca) {
        Chamadas.update({_id: chamadaId}, {$push: { "alunos":{alunoId: idAluno, presente: presenca}}});
        if (index+1 == $scope.alunos.length) {
            $state.go('app.lista-chamada', {chamadaId: chamadaId});
        } else {
            updateAluno(++index);
        }
    }

	vm.marcarFalta = function () {
		marcar('nao');
	}

    vm.marcarPresenca = function () {
        marcar('sim');
    }

	vm.goToDetalhePage = function() {
		$location.path('/einstein/detalhe-chamada/:'.concat(aluno.matricula));
	}

	vm.voltar = function () {
		Chamadas.update({_id: chamadaId._id}, {$pop: { "alunos": 1}});
		$location.path('/einstein/chamada/:' + turmaId + '/:' + chamada + '/:' + alunos[index - 1]);
	}

	vm.goToListaPage = function() {
		$location.path('/einstein/lista-chamada');
	}

}
