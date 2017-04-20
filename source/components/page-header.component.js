function headerController() { }

headerController.$inject = [];

angular.module('webApp')
  .component('pageHeader', {
    templateUrl: 'page-header.template',
    controller: headerController,
    bindings: {},
  });
