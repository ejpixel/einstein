angular.module("Estrutura-Inicial")
    .controller('SecondPageController', SecondPageController);

function SecondPageController($location, $scope) {
    var vm = this;

    vm.showMessage = function($message) {
        alert($message);
    }

    vm.goToThirdPage = function() {
        $location.path('/einstein/third-page');
    }
}
