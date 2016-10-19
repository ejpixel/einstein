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
         console.log('fuck');
         var url = 'https://docs.google.com/spreadsheets/d/1GGxSOPKJMWZhJEw4NP2MCYghdzExwjD6PjqQep15Hn4/edit?usp=sharing'
    var parse = function(entry) {
      var category = entry['gsx$category']['$t'];
      var description = entry['gsx$description']['$t'];
      var title = entry['gsx$title']['$t'];
      var url = entry['gsx$url']['$t'];
      var yo = entry['gsx$yo']['$t'];
      return {
        category: category,
        description: description,
        title: title,
        url: url,
        yo: yo
      };
    }
    $http.get(url)
    .success(function(response) {
      var entries = response['feed']['entry'];
      $scope.parsedEntries = [];
      for (key in entries) {
        var content = entries[key];
        $scope.parsedEntries.push(parse(content));
      }
    });
    console.log($scope);
     };

}
