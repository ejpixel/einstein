angular.module("Estrutura-Inicial")
    .controller('CadastroTurmaController', CadastroTurmaController);

function CadastroTurmaController($location, $scope, $ionicScrollDelegate, $ionicPopup, $stateParams) {
    var vm = this;
     $scope.alunos = Alunos.find({},{fields: {nome:1,matricula:1}}).fetch();

     vm.adicionarAluno = function (aluno) {
        $scope.alunos.push(aluno);
		$ionicScrollDelegate.scrollBottom();
     };

     vm.isAlunoSelecionado =  function (alunos) {
        return alunos.some(function (aluno) {
            return aluno.selecionado;
        });
     };

     vm.isAlunosSuficientes = function(alunos) {
		// return alunos.length>=25;
        return true;
     };

     vm.cadastrarTurma = function() {
        var matriculados = [];
        angular.forEach($scope.alunos, function(a) {
            matriculados.push({
                _id: a._id
            });
        })
        Turmas.insert({
			professorId: '123123123',
            alunos: matriculados
        });
		$location.path('/einstein/abertura-chamada');
     };

}
