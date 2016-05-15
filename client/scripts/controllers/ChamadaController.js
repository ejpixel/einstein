angular.module("Estrutura-Inicial")
    .controller('ChamadaController', ChamadaController);

function ChamadaController($location, $scope) {
    var vm = this;

    vm.goToTelaEdicao = function() {
        confirm("Ir para tela edição");
    }

    vm.goToTelaInfo = function() {
        confirm("Ir para tela info");
    }

	vm.goToDetalhePage = function() {
		$location.path('/einstein/detalhe-chamada/:'.concat(123456));
	}

}
