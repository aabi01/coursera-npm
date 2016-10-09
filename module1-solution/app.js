(function () {
    angular.module('LunchChecker', [])

            .controller('LunchCheckerController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.msg = '';
        $scope.items = '';

        $scope.checkLunch = function () {

            if ($scope.items == "") {
                $scope.msg = 'Please Enter Data First';
            } else {
                var items = $scope.items.split(",");

                var itemsNum = items.length;
                
                if (itemsNum <= 3) {
                    $scope.msg = 'Enjoy!';
                } else {
                    $scope.msg = 'Too Much!';
                }
            }
        };
    }
})();
