var billing = angular.module('billingApp', ['ngMaterial', 'ui.router', 'ngMessages', 'ngResource'])

    .config(function ($interpolateProvider, $httpProvider) {
        $interpolateProvider.startSymbol('{[');
        $interpolateProvider.endSymbol(']}');
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    })
    .config(function ($stateProvider) {
        $stateProvider
            .state('abonents',
                {
                    url: '/abonents',
                    component: 'abonents',
                })
            .state('abonentsAddNew',
                {
                    url: '/abonents/add',
                    component: 'newAbonents',
                })
            .state('addresses',
                {
                    url: '/addresses',
                    component: 'addresses',
                })
            .state('tariffs',
                {
                    url: '/tariffs',
                    component: 'tariffs',
                })
            .state('report',
                {
                    url: '/report',
                    component: 'report',
                })
            .state('storage',
                {
                    url: '/storage',
                    component: 'storage',
                })
            .state('monitoring',
                {
                    url: '/monitoring',
                    component: 'monitoring',
                }
            )


    });

