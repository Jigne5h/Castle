var castleCompany = angular.module('castleCompany', []);

castleCompany.controller('castleCtrl', function ($scope) {

    $scope.isCastleBuilt = false;
    $scope.land = []; // [3, 6, 10, 2, 14, 17, 9, 6, 21, 17, 24, 23, 18, 13, 25, 9, 5, 2, 30, 22, 15, 10, 8, 18, 23, 15, 13, 21, 26, 14, 8, 17];
    $scope.numberOfCastlesBuilt = 0;

    $scope.addLandHeight = function (landHeight) {
        if (landHeight && landHeight > 0) {
            $scope.land.push(landHeight);
        }
        else {
            alert("Please enter height value greater than 0.");
        }
    };

    $scope.clearLand = function () {
        $scope.land = [];
    };

    $scope.buildCastles = function () {
        if ($scope.land.length <= 0) {
            alert("There is no land to build castles on. Please build some land first!!");
        }
        else {
            let size = $scope.land.length;
            let lastIndex = size - 1;

            // You can always build castle on start of the array, so we built it.
            let count = 1;
            for (let i = 1; i < size - 1; i++) {

                // For Peeks
                if ($scope.land[i] > $scope.land[i - 1]) {
                    if ($scope.land[i] > $scope.land[i + 1]) {
                        count++;
                    }
                    else if ($scope.land[i] == $scope.land[i + 1]) {
                        let j = i + 1;
                        while ($scope.land[i] == $scope.land[j]) {
                            j++;
                        }
                        if ($scope.land[i] > $scope.land[j] || j >= lastIndex) {
                            count++;
                        }
                        else {
                            // i = j;
                        }
                        i = j;
                    }
                    else {
                    }
                }
                // For Valleys
                else if ($scope.land[i] < $scope.land[i - 1]) {
                    if ($scope.land[i] < $scope.land[i + 1]) {
                        count++;
                    }
                    else if ($scope.land[i] == $scope.land[i + 1]) {
                        let j = i + 1;
                        while ($scope.land[i] == $scope.land[j]) {
                            j++;
                        }
                        if ($scope.land[i] < $scope.land[j] || j >= lastIndex) {
                            count++;
                        }
                        else {
                            // i = j;
                        }
                        i = j;
                    }
                    else {
                    }
                }

            }
            // For last height
            if ($scope.land[lastIndex] > $scope.land[lastIndex - 1] || $scope.land[lastIndex] < $scope.land[lastIndex - 1]) {
                count++;
            }
            $scope.numberOfCastlesBuilt = count;
            $scope.isCastleBuilt = true;
        }
    }

    $scope.buildLand = function () {
        $scope.isCastleBuilt = false;
        $scope.land = [];
    }

});