angular.module("Estrutura-Inicial")
    .controller('FirstPageController', FirstPageController);

function FirstPageController($location, $scope) {
    var vm = this;

    vm.goToSecondPage = function() {
        $location.path('/einstein/second-page');
    }

    vm.showMessage = function() {
        confirm("Você clicou no botão");
    }

    vm.goToDetalhePage = function() {
        $location.path('/einstein/detalhe-chamada');
    }
}
