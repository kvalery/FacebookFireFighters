(function () {

    angular
      .module('FFFApp')
      .controller('pageCtrl', ['$scope', '$window', function($scope, $window){

          $scope.sentData = {data: 'myData111111111', data3: "dddsdfsdg1111111111"};

          $scope.takeData = function () {
              console.log($scope.sentData)
          };

          $scope.takeData();

          $scope.puhhh = function () {

              console.log($window.FB)


              $window.FB.ui({
                  method: 'share_open_graph',
                  action_type: 'og.likes',
                  action_properties: JSON.stringify({
                      object:'https://developers.facebook.com/docs/',
                  })
              }, function(response){
                  // Debug response (optional)
                  console.log(response);
              });

          } ;

      }]);

})();