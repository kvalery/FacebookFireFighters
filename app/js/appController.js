(function () {

    angular
      .module('FFFApp')
      .controller('FFFAppCtrl', ['$scope', '$window', function($scope, $window){

          $scope.sentData = {data: 'myData', data3: "dddsdfsdg"};

          $scope.takeData = function () {
              console.log($scope.sentData)
          };

          $scope.takeData();

          // $scope.getMyLastName = function() {
          //     facebookService.me()
          //       .then(function(response) {
          //             $scope.last_name = response.last_name;
          //         }
          //       );
          // };

          // $scope.getMyLastName()

          $scope.puhhh = function () {

              console.log($window.FB)

          } ;


      }]);

})();