billing.controller('storageController', function BaseController($scope,
                                                                $resource,
                                                                $timeout,
                                                                $http
    ) {

        $scope.objectTypes = [
            'Вузлове обладнання',
            'Оптичні модулі',
            'Кабель',
            'Інше',
        ];

        $scope.objectUnits = [
            'шт.',
            "метр."
        ];

        $scope.storageContent = [
            {
                name: 'Dlink DES 3200-26',
                type: 'Вузлове обладнання',
                count: 2,
                units: 'шт.',
            },
            {
                name: 'twinpair',
                type: 'Кабель',
                count: 600,
                units: "метр."
            }
        ]


    }
);