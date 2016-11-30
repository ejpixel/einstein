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
		.state('app.chamada' , {
			url: '/chamada/:turmaId',
			cache: false,
			params: {
				chamdaId: '',
				horarioSelecionado: {}
			},
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
			cache: false,
			views: {
				'appContent': {
					templateUrl: 'client/templates/aberturaChamada.html',
					controller: 'AberturaChamadaController as aberturaChamadaCtrl'
				}
			}
		})
		.state('app.cadastro-turma' , {
			url: '/cadastro-turma',
			views: {
				'appContent': {
					templateUrl: 'client/templates/cadastro-turma.html',
					controller: 'CadastroTurmaController as cadastroTurmaCtrl'
				}
			}
		})
		.state('app.importacao-alunos' , {
			url: '/importacao-alunos',
			views: {
				'appContent': {
					templateUrl: 'client/templates/importacao-alunos.html',
					controller: 'ImportacaoAlunosController as importacaoAlunosCtrl'
				}
			}
		})
		.state('app.lista-chamada' , {
			url: '/lista-chamada',
			params: {
				turmaId: '',
				chamadaId: ''
			},
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
		.state('app.cadastroProfessor' , {
			url: '/cadastro-professor',
			views: {
				'appContent': {
					templateUrl: 'client/templates/cadastroProfessor.html',
					controller: 'CadastroProfessorController as cadastroProfessorCtrl'
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
	$scope.isMobile = Meteor.isCordova;
})
