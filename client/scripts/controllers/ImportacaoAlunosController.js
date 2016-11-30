angular.module("Estrutura-Inicial")
    .controller('ImportacaoAlunosController', ImportacaoAlunosController);

function ImportacaoAlunosController($state, $scope) {

    var vm = this;

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

            $ionicPopup.alert({
                title: 'Sucesso!',
                template: 'Planilha importada.'
            });
            $location.path('/einstein/aberturaChamada');
        });
    };
};
