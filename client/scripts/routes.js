var app = angular.module("Estrutura-Inicial").config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'client/templates/login.html',
			controller: 'LoginController as loginCtrl'
		})
		.state('app', {
			url: '/einstein',
			abstract: true,
			templateUrl: 'client/templates/menu.html'
		})
		.state('app.first-page', {
			url: '/first-page',
			views: {
				'appContent' : {
					templateUrl: 'client/templates/first-page.html',
					controller: 'FirstPageController as firstCtrl'
				}
			}
    	})
		.state('app.second-page', {
			url: '/second-page',
			views: {
				'appContent': {
					templateUrl: 'client/templates/second-page.html',
					controller: 'SecondPageController as secondCtrl'
				}
			}
		})
		.state('app.third-page', {
			url: '/third-page',
			views: {
				'appContent': {
					templateUrl: 'client/templates/third-page.html',
					controller: 'ThirdPageController as thirdCtrl'
				}
			}
		})
		.state('app.chamada' , {
			url: '/chamada/:alunoId',
			views: {
				'appContent': {
					templateUrl: 'client/templates/chamada.html',
					controller: 'ChamadaController as chamadaCtrl'
				}
			}
		})
		.state('app.detalhe-chamada' , {
			url: '/detalhe-chamada/:alunoId',
			views: {
				'appContent': {
					templateUrl: 'client/templates/detalhe-chamada.html',
					controller: 'DetalheChamadaController as detalheCtrl'
				}
			}
		})
		.state('app.aberturaChamada' , {
			url: '/aberturaChamada',
			views: {
				'appContent': {
					templateUrl: 'client/templates/aberturaChamada.html',
					controller: 'AberturaChamadaController as aberturaChamadaCtrl'
				}
			}
		})
		.state('app.lista-chamada' , {
			url: '/lista-chamada',
			views: {
				'appContent': {
                    templateUrl: 'client/templates/lista-chamada.html',
                    controller: 'ListaChamadaController as listaChamadaCtrl'
                }
            }
        })
		.state('app.matricula' , {
			url: '/matricula',
			views: {
				'appContent': {
					templateUrl: 'client/templates/matricula.html',
					controller: 'MatriculaController as matriculaCtrl'
				}
			}
		})
		.state('app.acompanhamento' , {
			url: '/acompanhamento',
			views: {
				'appContent': {
					templateUrl: 'client/templates/acompanhamento.html',
					controller: 'AcompanhamentoController as acomCtrl'
				}
			}
		})
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
		$urlRouterProvider.otherwise('/login');
}

app.controller('AppController', function($scope, $ionicSideMenuDelegate) {
	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};
})
