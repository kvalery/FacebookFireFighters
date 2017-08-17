(function () {

    angular
      .module('FFFApp')
      .controller('FFFAppCtrl', ['$scope', '$window', function($scope, $window){

          $scope.sentData = {data: 'myData', data3: "dddsdfsdg"};

          $scope.takeData = function () {
              console.log($scope.sentData)
          };

          $scope.takeData();

      }]);

})();

