angular.module("Estrutura-Inicial")
    .controller('AcompanhamentoController', AcompanhamentoController);

function AcompanhamentoController($location, $scope, $ionicScrollDelegate) {

    $scope.turmas = Turmas.find().fetch();

    $scope.exportar = function(turma) {
        let chamadas = Chamadas.find({turmaId: turma._id, valid: true}).fetch();

        angular.forEach(chamadas, function(c) {
            let chamadaComAlunos = _.map(c.alunos, function(a) {
                let aluno = Alunos.findOne({_id: a.alunoId});
                aluno.presente = a.presente;
                return aluno;
            });
            let chamadaComFaltantes = _.filter(chamadaComAlunos, function(a) {
                return a.presente === 'nao';
            });
            c.alunos = chamadaComFaltantes;
        });
        console.log(chamadas);

        let csvContent = "Data,Disciplina,Faltantes\n";
        angular.forEach(chamadas, function(c) {
            let data = c.data + " ";
            let alunos = [];

            angular.forEach(c.alunos, function(a) {
                alunos.push(a.nome);
            });

            csvContent += data + "," + c.disciplina + "," + alunos + "\n";
        });

        var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        var a = document.createElement("a");
        url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'dados.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    };
};
