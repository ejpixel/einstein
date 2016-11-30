angular.module("Estrutura-Inicial")
    .controller('CadastroTurmaController', CadastroTurmaController);

function CadastroTurmaController($location, $scope, $ionicScrollDelegate, $ionicPopup, $stateParams, $http) {
    var vm = this;

     $scope.alunos = Alunos.find({},{fields: {nome:1,matricula:1}}).fetch();

     angular.forEach($scope.alunos, function(a) {
         a.selecionado = true;
     });

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
            if(a.selecionado){
                matriculados.push({
                    _id: a._id
                });
            }
        });
        console.log(matriculados);
        Turmas.insert({
            nome: vm.nome,
            alunos: matriculados
        });
		$location.path('/einstein/aberturaChamada');
     };

     vm.deletar = function(aluno) {
         console.log(aluno);
         Alunos.remove({_id: aluno._id});
         $scope.alunos = Alunos.find({},{fields: {nome:1,matricula:1}}).fetch();
     };

}
