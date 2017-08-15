(function () {

    angular
      .module('FFFApp')
      .controller('pageCtrl', ['$scope', '$rootScope', function($scope, $rootScope){

          $scope.sentData = {data: 'myData111111111', data3: "dddsdfsdg1111111111"};

          $scope.takeData = function () {
              console.log($scope.sentData)
          };

          $scope.takeData();

      }]);

})();