angular.module("Estrutura-Inicial")
    .controller('ListaChamadaController', ListaChamadaController);

function ListaChamadaController($location, $scope, $stateParams) {
    var vm = this;

    let chamadaId = $stateParams.chamadaId;
    let turmaId = $stateParams.turmaId;
    let alunos = Chamadas.findOne({_id: chamadaId}).alunos;

    $scope.nomeTurma = Turmas.findOne({_id: turmaId}).nome;
    console.log($scope.nomeTurma);

    $scope.alunosList = _.map(alunos, function(a) {
        let aluno = Alunos.findOne({_id: a.alunoId});
        return {
            _id: a.alunoId,
            text: aluno.nome,
            checked: a.presente === "sim" ? true : false
        };
    });

    let restoAlunos = Turmas.findOne({_id: turmaId}).alunos;
    console.log(restoAlunos);
    angular.forEach(restoAlunos, function(a) {
        console.log(a);
        let exists = false;
        angular.forEach($scope.alunosList, function(al) {
            console.log(al);
            if(a._id === al._id) {
                exists = true;
            }
        });
        if(!exists){
            let aluno = Alunos.findOne({_id: a._id});
            $scope.alunosList.push({
                _id: a._id,
                text: aluno.nome,
                checked: false
            });
        }
    });

    vm.confirmar = function() {
        let alunosToStore = _.map($scope.alunosList, function(e) {
            return {
                alunoId: e._id,
                presente: e.checked ? 'sim' : 'nao'
            }
        });
        Chamadas.update({_id: chamadaId},
            {
                $set:
                    {
                        alunos: alunosToStore,
                        valid: true
                    }
            });
        $location.path('/einstein/aberturaChamada');
    };

    vm.cancelar = function() {
        Chamadas.remove({_id: chamadaId});
        $location.path('/einstein/aberturaChamada');
    };
}
