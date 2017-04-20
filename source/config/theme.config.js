angular.module('webApp').config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('blue-grey');

    $mdThemingProvider.theme('night')
        .primaryPalette('blue-grey')
        .accentPalette('grey')
        .dark();

    if (new Date().getHours() >= 20 || new Date().getHours() <= 6) {
        // $mdThemingProvider.setDefaultTheme('night');
    }
}]);

// red
// pink
// purple
// deep-purple
// indigo
// blue
// light-blue
// cyan
// teal
// green
// light-green
// lime
// yellow
// amber
// orange
// deep-orange
// brown
// grey
// blue-grey
