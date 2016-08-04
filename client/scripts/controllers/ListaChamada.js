angular.module("Estrutura-Inicial")
    .controller('ListaChamadaController', ListaChamadaController);

function ListaChamadaController($location, $scope, $stateParams) {
    var vm = this;

    let chamadaId = $stateParams.chamadaId;
    let alunos = Chamadas.findOne({_id: chamadaId}).alunos;

    $scope.alunosList = _.map(alunos, function(a) {
        let aluno = Alunos.findOne({_id: a.alunoId});
        return {
            text: aluno.nome,
            checked: a.presente === "sim" ? true : false
        };
    });

    vm.confirmar = function() {
        $location.path('/einstein/aberturaChamada');
    };

    vm.cancelar = function() {
        Chamadas.remove({_id: chamadaId});
        $location.path('/einstein/aberturaChamada');
    };
}
