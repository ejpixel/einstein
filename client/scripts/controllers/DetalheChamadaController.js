angular.module("Estrutura-Inicial")
    .controller('DetalheChamadaController', DetalheChamadaController);

function DetalheChamadaController($location, $scope, $ionicScrollDelegate, $stateParams, $http) {
    var vm = this;

	let alunoId = parseInt($stateParams.alunoId.slice(1));
	let aluno = Alunos.findOne({matricula: alunoId});

	let query = 'select distinct a.nome,t.disciplina, count(c) as numFaltas from chamadas as c join turmas as t on c.turmaId = t.turmaId join alunos as a on a.matricula = c.alunoId group by a.nome,t.disciplina having c.presente=0 and a.matricula='+alunoId;
	let databaseName = 'meteor';
	let url = "http://localhost:9090/query/fs/"+databaseName+"/?q="+query;

	$scope.aluno = {
		nome: aluno.nome,
		idade: aluno.idade,
		matricula: aluno.matricula,
		foto: aluno.foto
	};

	Tracker.autorun(function() {
		var infoAluno;
		HTTP.get(url, {timeout:30000}, function(error, response) {
			if(response){
				let results = response.content.split("\n");
				results.splice(-1,1);
				let infoAluno = _.map(results, function(r) {
					return JSON.parse(r);
				});
				$scope.faltas = infoAluno;
				console.log($scope.faltas);
				if (!$scope.$$phase){$scope.$apply();}
			}
		});
	});

    $scope.toggleGroup = function() {
        if ($scope.isGroupShown()) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = true;
			$ionicScrollDelegate.scrollBottom();
        }
    };
    $scope.isGroupShown = function() {
        return $scope.shownGroup;
    };
}
