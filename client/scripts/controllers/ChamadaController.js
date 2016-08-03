angular.module("Estrutura-Inicial")
    .controller('ChamadaController', ChamadaController);

function ChamadaController($location, $scope, $stateParams) {
    var vm = this;

	let turmaId = parseInt($stateParams.turmaId.slice(1));
	let aluno = Alunos.findOne({matricula: parseInt($stateParams.alunoId.slice(1))});
	let chamada = parseInt($stateParams.chamadaId.slice(1));
	let chamadaId = Chamadas.findOne({chamadaId: chamada},{_id: 1});

  $scope.aluno = {
    nome: aluno.nome,
    matricula: aluno.matricula,
    foto: aluno.foto
  };

	var array = Turmas.findOne({turmaId: turmaId}, {_id: 0, alunos: 1});
	alunos = array['alunos'];
	var idAluno = aluno.matricula;
	var index = alunos.indexOf(idAluno.toString());

	vm.marcarFalta = function () {
		Chamadas.update({_id: chamadaId._id}, {$push: { "alunos":{alunoId: idAluno, presente: 'nao'}}});
        if (index+1 == alunos.length) {
            $location.path('/einstein/lista-chamada');
        } else {
            $location.path('/einstein/chamada/:' + turmaId + '/:' + chamada + '/:' + alunos[index + 1]);
        }
	}

  vm.marcarPresenca = function () {
    Chamadas.update({_id: chamadaId._id}, {$push: { "alunos":{alunoId: idAluno, presente: 'sim'}}});
    if (index+1 == alunos.length) {
      $location.path('/einstein/lista-chamada');
    } else {
      $location.path('/einstein/chamada/:' + turmaId + '/:' + chamada + '/:' + alunos[index + 1]);
    }
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
