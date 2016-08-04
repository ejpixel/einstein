angular.module("Estrutura-Inicial")
    .controller('CadastroTurmaController', CadastroTurmaController);

function CadastroTurmaController($location, $scope, $ionicScrollDelegate, $ionicPopup, $stateParams) {
    var vm = this;
     $scope.matriculados = Alunos.find({},{fields: {nome:1,matricula:1}}).fetch();

     vm.adicionarAluno = function (aluno) {
        $scope.matriculados.push(Alunos.find().fetch());
		$ionicScrollDelegate.scrollBottom();
     };

     vm.removerAluno = function(aluno)  {
        $scope.matriculados = $scope.matriculados.filter(function(aluno) {
            if(!aluno.selecionado) return aluno;
        });
     };

     vm.isAlunoSelecionado =  function (matriculados) {
        return matriculados.some(function (aluno) {
            return aluno.selecionado;
        });
     };

     vm.isAlunosSuficientes = function(matriculados) {
		return matriculados.length>=25;
     };

     vm.cadastrarTurma = function() {
		$ionicPopup.alert({
			title: 'Turma cadastrada com sucesso!'
		});
		$location.path('/einstein/abertura-chamada');
     };

}
