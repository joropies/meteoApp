// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state('vista1', {
                url: '/vista1',
                templateUrl: 'inicio.html'
            }).state('vista2', {
                url: '/vista2',
                templateUrl: 'historico.html'
            }).state('vista3', {
                url: '/vista3',
                templateUrl: 'alertas.html'
            }).state('vista4', {
                url: '/vista4',
                templateUrl: 'cambio-climatico.html'
            })
            $urlRouterProvider.otherwise("/vista1");
        })

.controller('ctrlPrincipal', function ($scope, $http, $filter) {
    $scope.mensaje = 'Alerta de UV';
    $scope.temperatura = '';
    $scope.fecha = new Date(); // da la fecha del celular/navegador
    $scope.hh = parseInt( $filter('date')(new Date(), 'HH'));

    $http.get('http://campitos.elasticbeanstalk.com/estacion/temperatura').success(function (data) {
        // console.log(data.length + " presion" + data[8].presion);
        $scope.temperatura = data[$scope.hh].temperatura;
    })
})

       