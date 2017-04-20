function HomeController() {
}

HomeController.$inject = [];

angular.module('webApp')
  .component('home', {
    templateUrl: 'home.template',
    controller: HomeController,
    bindings: {},
  });
