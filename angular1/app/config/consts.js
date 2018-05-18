angular.module('pokemonApp')
    .constant('consts',{
        appName: 'Pokemon Aplicação',
        version: '1.0',
        owner: 'Higor Tampieri',
        year: '2018',
        apiUrl: 'http://localhost:3003/api',
        oapiUrl: 'http://localhost:3003/oapi',
        userKey: '_pokemon_app_user'
    }).run(['$rootScope', 'consts', function($rootScope, consts) {
    $rootScope.consts = consts
}])
