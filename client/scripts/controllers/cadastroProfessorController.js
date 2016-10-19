angular.module("Estrutura-Inicial")
    .controller('CadastroProfessorController', CadastroProfessorController);

function CadastroProfessorController($location, $scope, $ionicPopup) {
    var vm = this;

    $scope.professor = {
        disciplina: {
            id: "Matemática",
            value: "Matemática"
        }
    }

    vm.salvar = function() {
        Accounts.createUser({
            username: $scope.professor.login,
            password: $scope.professor.senha,
            profile: {
                disciplina: $scope.professor.disciplina
            }
        });
        $location.path('/einstein/aberturaChamada');
    };
}
