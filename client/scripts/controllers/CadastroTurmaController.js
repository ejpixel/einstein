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

     vm.importarAlunos = function() {
         var fileElem = document.getElementById("file").files[0];

         if(!fileElem){
             $ionicPopup.alert({
     			title: 'Arquivo inválido ou inexistente!',
     			template: 'Por favor insira um arquivo com extensão .csv'
     		});
         }

         var reader = new FileReader();
         reader.readAsText(fileElem);
         reader.addEventListener("load", function () {
             vm.handlePlainText(reader.result);
         }, false);
     };

     vm.handlePlainText = function(plainText) {
         console.log(plainText);

         var lines = plainText.split("\n");
         lines.splice(0,1);
         console.log(lines);

         angular.forEach(lines, function(line) {
             var columns = line.split(",");

             let matricula = columns[0];
             let nome = columns[1];

             Alunos.insert({
                 matricula: matricula,
                 nome: nome
             });
         });
     };

     vm.deletar = function(aluno) {
         console.log(aluno);
         Alunos.remove({_id: aluno._id});
         $scope.alunos = Alunos.find({},{fields: {nome:1,matricula:1}}).fetch();
     };

}
