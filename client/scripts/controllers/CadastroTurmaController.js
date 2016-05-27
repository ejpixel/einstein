angular.module("Estrutura-Inicial")
    .controller('CadastroTurmaController', CadastroTurmaController);

function CadastroTurmaController($location, $scope, $ionicScrollDelegate, $ionicPopup) {
    var vm = this;

     $scope.matriculados = [
         {nome: "Júlia", matricula: 55555},
         {nome: "Décio", matricula: 66666},
         {nome: "Thomas", matricula: 11111},
         {nome: "Nicolas", matricula: 99999},
         {nome: "Clayton", matricula: 12345},
         {nome: "Fabio", matricula: 54321},
     ];

     vm.adicionarAluno = function (aluno) {
        $scope.matriculados.push(angular.copy(aluno));
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
