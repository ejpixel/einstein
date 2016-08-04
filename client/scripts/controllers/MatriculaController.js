angular.module("Estrutura-Inicial")
    .controller('MatriculaController', MatriculaController);

function MatriculaController($location, $scope, $ionicLoading) {

	$scope.aluno = {
    nome: "",
    matricula: "",
    idade: ""
  };

	$scope.salvarMatricula = function (){
		//TODO salvar o cadastro do aluno na memória local ou bd
    $ionicLoading.show({
      template: 'Salvando...'
    });
    setTimeout(function(){
      $ionicLoading.hide();
      $scope.aluno = {};
    }, 2000);
	};

  $scope.formatarData = function(){
    var formatedValue;
    if ($scope.aluno.idade.length > 2) {
      if ($scope.aluno.idade.substring(2, 3) != "/") {
          formatedValue = $scope.aluno.idade.substring(0, 2) + "/" + $scope.aluno.idade.substring(2, $scope.aluno.idade.length);
          $scope.aluno.idade = formatedValue;
      }
      if($scope.aluno.idade.length > 5){
        if ($scope.aluno.idade.substring(5, 6) != "/") {
            formatedValue = $scope.aluno.idade.substring(0, 5) + "/" + $scope.aluno.idade.substring(5, $scope.aluno.idade.length);
            $scope.aluno.idade = formatedValue;
        }
      }
    }
  };

};
