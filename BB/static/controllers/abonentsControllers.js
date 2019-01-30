billing.controller('abonentsController', function BaseController($scope,
                                                                 $resource,
                                                                 $timeout,
                                                                 $http
) {

    $scope.streetTypes = [
        'вулиця',
        "проспект",
        "бульвар",
        "проща",
        "провулок",
    ];

    $scope.addresses = [
        'вул. Івановича Барського 2',
        'вул. Львовича Матового 3',
        'бульв. Григоровича Трипільського 1',
        'просп. Патріарха Нуружбайського 1',
    ];

    $scope.payments = [
        {
            date: '2018-12-10',
            action: 'minus',
            content: 100,
            author: 'billing',
        },
        {
            date: '2019-01-10',
            action: 'add',
            content: 120,
            author: 'Privat24',

        },
        {
            date: '2018-12-10',
            action: 'minus',
            content: 100,
            author: 'billing',
        },
        {
            date: '2018-12-10',
            action: 'add',
            content: 120,
            author: 'Privat24',
        },
        {
            date: '2018-12-10',
            action: 'minus',
            content: 100,
            author: 'billing',
        },
        {
            date: '2018-11-10',
            action: 'add',
            content: 120,
            author: 'Privat24',
        },
    ];

    $scope.usersList = {
        0:
            {
                id: 0,
                first_name: 'Куценко',
                second_name: 'Руслан',
                third_name: 'Олександрович',
                address: 'бульв. Григоровича Трипільського 1, 13',
                state: 'online',
                money: 12,
                ip: '100.1.1.2',
                mac: 'ab:cd:ef:00:00:00',
                network: '100.1.1.0',
                appeals_to_support: {
                    0:
                        {
                            date: '2019-01-27 00:00:00',
                            title: 'Не працюе інтернет',
                            content: 'Перестав працювати інтернет. Що робити?',
                            state: 'closed',
                        },

                }
            },
        1:
            {
                id: 1,
                first_name: 'Михайло',
                second_name: 'Некулін',
                third_name: 'Анатолійович',
                address: 'вул. Львовича Матового 3, 4',
                state: 'online',
                money: 31,
                ip: '100.1.1.2',
                mac: 'ab:cd:ef:00:00:01',
                network: '100.1.1.0',
                appeals_to_support: {
                    0:
                        {
                            date: '2019-01-27 00:00:00',
                            title: 'Не працюе інтернет',
                            content: 'aaaaaaaaaaa',
                            state: 'closed',
                        },
                    1:
                        {
                            date: '2019-01-27 00:00:00',
                            title: 'Не можу сплатити',
                            content: 'bbbbbbbbbbbbb',
                            state: 'open',
                        },

                }
            },
        2:
            {
                id: 2,
                first_name: 'Павло',
                second_name: 'Зубенко',
                third_name: 'Павлович',
                address: 'вул. Львовича Матового 3, 41',
                state: 'online',
                money: 42,
                ip: '100.1.1.3',
                mac: 'ab:cd:ef:00:00:02',
                network: '100.1.1.0',
                appeals_to_support: {
                    0:
                        {
                            date: '2019-01-27 00:00:00',
                            title: 'Не працюе інтернет',
                            content: '',
                            state: 'closed',
                        },
                    1:
                        {
                            date: '2019-01-27 00:00:00',
                            title: 'Не можу сплатити',
                            content: '',
                            state: 'closed',
                        },

                }
            },
        3:
            {
                id: 3,
                first_name: 'Микола',
                second_name: 'Середній',
                third_name: 'Степанович',
                address: 'просп. Патріарха Нуружбайського 1, 54',
                state: 'credit',
                money: -150,
                ip: '100.1.1.4',
                mac: 'ab:cd:ef:00:00:03',
                network: '100.1.1.0',
                appeals_to_support: {
                    0:
                        {
                            date: '2019-01-27 00:00:00',
                            title: 'Не працюе інтернет',
                            content: '',
                            state: 'closed',
                        },
                    1:
                        {
                            date: '2019-01-27 00:00:00',
                            title: 'Не можу сплатити',
                            content: '',
                            state: 'closed',
                        },

                }
            },
        4:
            {
                id: 4,
                first_name: 'Олексій',
                second_name: 'Рудько',
                third_name: 'Семенович',
                address: 'просп. Патріарха Нуружбайського 1, 55',
                state: 'offline',
                money: -1,
                ip: '100.1.1.5',
                mac: 'ab:cd:ef:00:00:04',
                network: '100.1.1.0',
                appeals_to_support: {
                    0:
                        {
                            date: '2019-01-27 00:00:00',
                            title: 'Не працюе інтернет',
                            content: '',
                            state: 'closed',
                        },
                    1:
                        {
                            date: '2019-01-27 00:00:00',
                            title: 'Не можу сплатити',
                            content: '',
                            state: 'closed',
                        },
                }
            }
    };

    var baseApiAddress = 'api/v1/abonents';

    // $scope.selectedUser = $scope.usersList[1];

    $scope.getUser = function (id) {
        $scope.selectedUser = $scope.usersList[id];
    };

    $scope.tariffs = [
        {
            name: 'Надлегкий',
            payment: 50,
            speed: 50,
            description: 'Для пільгових абонентів'
        },
        {
            name: 'Легкий',
            payment: 80,
            speed: 80,
            description: 'Початковий тарифний план'
        },
        {
            name: 'Впевнений',
            payment: 120,
            speed: 200,
            description: 'Тарифний план для впевнених користувачів'
        },
        {
            name: 'Космос',
            payment: 250,
            speed: 700,
            description: 'Занадто швидко'
        },
    ];



    $scope.saveUpdatedInfo = function (alterUser) {
        // let UpdatedUser = $resource(`${baseApiAddress}/:userId`, {userId: alterUser.id}, {
        //     post: {method: 'POST', params: alterUser}
        // });
        // let updateUser = UpdatedUser.$post(function (result) {
        //     console.log(result);
        //     $scope.selectedUser = result;
        //     $scope.selectedUser.successfullSave = true;
        // })
        $http({method: 'POST', url:`${baseApiAddress}/${alterUser.id}`, params: {a: 3},data: alterUser}).then(
            function (data) {
                console.log(data);
                $scope.successUpdatedUser = true;
            })
            // .success(function (data, status, headers, config) {
            //     console.log(status, headers, config);
            //     $scope.successUpdatedUser = true;
            // })
            // .error(function (data, status, headers, config) {
            //
            // });
    }

    // $scope.

});