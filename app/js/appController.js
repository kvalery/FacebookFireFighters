(function () {

    angular
      .module('FFFApp')
      .controller('FFFAppCtrl', ['$scope', '$rootScope', function($scope, $rootScope){

          $scope.sentData = {data: 'myData', data3: "dddsdfsdg"};

          $scope.takeData = function () {
              console.log($scope.sentData)
          };

          $scope.takeData();

      }]);

})();