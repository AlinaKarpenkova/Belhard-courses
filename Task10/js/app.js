var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {

    $scope.priceTitle = 'Прайс-лист';
    $scope.priceDate = '2019.05.15';
    $scope.currentDate = new Date();
    $scope.priceList = [
        {
            name: 'Апельсины',
            image: './img/orange.jpg',
            price: 2,
            discount: 0.1,
            date: $scope.currentDate
        }, {
            name: 'Яблоки',
            image: './img/apple.jpg',
            price: 1,
            date: $scope.currentDate
        }, {
            name: 'Бананы',
            image: './img/Банан.jpg',
            price: 4,
            discount: 0.1,
            date: $scope.currentDate
        }, {
            name: 'Персики',
            image: './img/peaches.jpg',
            price: 3,
            date: $scope.currentDate
        }
    ]

    //    Task5

    $scope.sortField = undefined;
    $scope.reverse = false;
    $scope.sort = function (fieldName) {
        if ($scope.sortField === fieldName) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.sortField = fieldName;
            $scope.reverse = false;
        }
    }

    //    Task6
    $scope.addItem = function () {
        $scope.prices.push({
            name: $scope.newItem.name,
            price: $scope.newItem.price,
            discount: $scope.newItem.discount
        });
    }

    //    Task7

    $scope.delItem = function (item) {
        var i = $scope.priceList.indexOf(item);
        $scope.priceList.splice(i, 1);
    }

});
