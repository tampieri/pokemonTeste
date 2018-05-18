angular.module('pokemonApp')
      .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
          $stateProvider.state('dashboard',{
            url: "/dashboard",
            templateUrl: "dashboard/dashboard.html"
          })
          $stateProvider.state('habilidade',{
            url: "/habilidades",
            templateUrl: "habilidade/habilidades.html"
          })
          $stateProvider.state('usuario',{
            url: "/usuario",
            templateUrl: "usuario/usuario.html"
          })
          $stateProvider.state('pokemon',{
            url: "/pokemon",
            templateUrl: "pokemon/pokemon.html"
          })
          $stateProvider.state('times',{
            url: "/times",
            templateUrl: "times/times.html"
          })
      }
])




    // .config(RoutesConfig)
    // .run(RoutesRun)

// RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
// function RoutesConfig($stateProvider, $urlRouterProvider,$httpProvider) {
//     $stateProvider
//         .state('dashboard', {
//             url: "/dashboard",
//             templateUrl: "dashboard/dashboard.html"
//         })
//
//
//     $httpProvider.interceptors.push('handleResponseError')
// }

// RoutesRun.$inject = ['$rootScope', '$http', '$location', '$window', 'auth']
// function RoutesRun($rootScope, $http, $location, $window, auth) {
//     validateUser()
//     $rootScope.$on('$locationChangeStart', () => validateUser())
//
//     function validateUser() {
//         const user = auth.getUser()
//         const authPage = '/auth.html'
//         const isAuthPage = $window.location.href.includes(authPage)
//         if (!user && isAuthPage) {
//             $window.location.href = authPage
//         } else if (user && !user.isValid) {
//             auth.validateToken(user.token, (err, valid) => {
//                 if (!valid) {
//                     $window.location.href = authPage
//                 } else {
//                     user.isValid = true
//                     $http.defaults.headers.common.Authorization = user.token
//                     isAuthPage ? $window.location.href = '/' : $location.path('/dashboard')
//                 }
//             })
//         }
//     }
// }
