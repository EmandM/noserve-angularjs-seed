function stateConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>'
        });
}

stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('webApp').config(stateConfig);
