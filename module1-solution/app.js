(function () {
    angular.module('LunchChecker', [])

            .controller('LunchCheckerController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.msg = '';
        $scope.items = '';
        $scope.color = 'black';

        $scope.checkLunch = function () {

            if ($scope.items == "") {
                $scope.msg = 'Please Enter Data First';
                $scope.color= 'red';
            } else {
                var items = $scope.items.split(",");

                var itemsNum = 0;
                
                for(var i=0; i<items.length; i++){
                    if(items[i].trim() != ""){
                        itemsNum++;
                    }
                }
                
                if (itemsNum <= 3) {
                    $scope.msg = 'Enjoy!';
                    $scope.color= 'green';
                } else {
                    $scope.msg = 'Too Much!';
                    $scope.color= 'green';
                }
            }
        };
    }
})();
