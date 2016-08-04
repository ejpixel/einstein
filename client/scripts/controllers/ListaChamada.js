angular.module("Estrutura-Inicial")
    .controller('ListaChamadaController', ListaChamadaController);

function ListaChamadaController($location, $scope, $stateParams) {
    var vm = this;
    //let alunoId = parseInt($stateParams.alunoId.slice(1));
    let aluno = Alunos.findOne({matricula: 123456});
    console.log(aluno.nome);

    $scope.devList = [
        { text: aluno.nome, checked: false },
        { text: aluno.nome, checked: false },
        { text: aluno.nome, checked: false }
    ];
}
