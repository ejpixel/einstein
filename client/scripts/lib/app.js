angular
.module("Estrutura-Inicial", [
    'angular-meteor',
    'ionic'
  ]);

  //Use lodash instead of underscore
 _ = lodash;

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}

function onReady() {
angular.bootstrap(document, ["Estrutura-Inicial"]);
}
