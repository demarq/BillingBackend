billing.controller('monitoringController', function MonitoringController($scope,
                                                                         $resource,
                                                                         $timeout,
                                                                         $http
) {

    $scope.switches = [
        {
            name: "Dlink DES 3200-26",
            ip: '10.200.1.2',
            mac: '00:1f:de:f1:12:25',
            uptime: '14 days 15 hours',
            software_version: '1.89',

            ports: [{
                number: 1,
                vlans: {
                    '2000': 'tagged',
                    '2001': 'untagged',
                },
                errors: 33286,
            },
                {
                    number: 2,
                    link: true,
                    mac_list: [
                        'aa:a1:a1:a1:a2:a3',
                        'b4:b4:b4:b4:b4:b4'
                    ],
                    vlans: {
                        '2000': 'tagged',
                        '2001': 'untagged',
                    },
                    errors: 4567,
                },
                {
                    number: 3,
                    vlans: {
                        '2000': 'tagged',
                        '2001': 'untagged',
                    },
                    errors: 298,
                },
                {
                    number: 4,
                    vlans: {
                        '2000': 'tagged',
                        '2001': 'untagged',
                    },
                    errors: 734,
                },
                {
                    number: 5,
                    vlans: {
                        '2000': 'tagged',
                        '2001': 'untagged',
                    },
                    errors: 5,
                },
                {
                    number: 6,
                    vlans: {
                        '2000': 'tagged',
                        '2001': 'untagged',
                    },
                    errors: 57,
                },
                {
                    number: 7,

                    vlans: {
                        '2000': 'tagged',
                        '2001': 'untagged',
                    },
                    errors: 775,
                },
                {
                    number: 8,
                    link: true,
                    mac_list: [
                        'aa:a1:a1:a1:a2:a3',
                        'b4:b4:b4:b4:b4:b4'
                    ],
                    vlans: {
                        '2000': 'tagged',
                        '2001': 'untagged',
                    },
                    errors: 122,
                },
                {
                    number: 9,
                    vlans: {
                        '2000': 'tagged',
                        '2001': 'untagged',
                    },
                    errors: 4125,
                },
                {
                    number: 10,
                    link: true,
                    mac_list: [
                        'aa:a1:a1:a1:a2:a3',
                        'b4:b4:b4:b4:b4:b4'
                    ],
                    vlans: {
                        '2000': 'tagged',
                        '2001': 'untagged',
                    },
                    errors: 0,
                }
            ]

        },
        {
            name: "Dlink DGS 3420-26 TC",
            ip: '10.200.1.3',
            software_version: '1.89',
            mac: '00:55:14:f1:12:26',
            uptime: '22 days 3 hours',
            ports: [{
                number: 1,
                vlans: {
                    '2000': 'tagged',
                    '2001': 'untagged',
                },
                errors: 33286,
            }]
        }
    ]

    $scope.selectSw = function(sw){
        $scope.selectedSw = sw;
    };

});