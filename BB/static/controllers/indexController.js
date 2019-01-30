billing.controller('indexController', function IndexController($scope,
                                                               $mdSidenav,
                                                               $location,
                                                               $state){
    $scope.toggleLeft = buildToggler('left');
    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
    $scope.moveToMain = function () {
        return $state.go('main');
    }
});
