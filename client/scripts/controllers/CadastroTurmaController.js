angular.module("Estrutura-Inicial")
    .controller('CadastroTurmaController', CadastroTurmaController);

function CadastroTurmaController($location, $scope) {
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
        if(matriculados.length<25){
            return false;
         }else{
            return true;
         }
     };

     vm.cadastrarTurma = function() {
          $location.path('/first-page');
     };

}