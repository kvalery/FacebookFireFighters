(function () {

    angular
      .module('FFFApp')
      .controller('pageCtrl', ['$scope', '$window', function($scope, $window){

          $scope.sentData = {data: 'myData111111111', data3: "dddsdfsdg1111111111"};

          $scope.takeData = function () {
              console.log($scope.sentData)
          };

          $scope.takeData();

          $scope.puhhh2 = function () {

              // FB.api('/me/feed', 'post', {message: 'Hello, world!'});
              FB.api(
                '135361657071813',
                function (response) {
                    console.log(response)
                    if (response && !response.error) {
                        /* handle the result */
                    }
                }
              );


          };

          $scope.puhhh = function () {

              // console.log(FB)

              //поделиться
              // FB.ui(
              //   {
              //       method: 'share',
              //       href: 'https://developers.facebook.com/docs/'
              //   }, function(response){});

              // FB.ui({
              //     method: 'share_open_graph',
              //     action_type: 'og.likes',
              //     action_properties: JSON.stringify({
              //         object:'https://developers.facebook.com/docs/',
              //     })
              // }, function(response){
              //     // Debug response (optional)
              //     console.log(response);
              // });

              // вход
              // FB.getLoginStatus(function(response) {
              //     if (response.status === 'connected') {
              //         console.log('Logged in.');
              //     }
              //     else {
              //         FB.login();
              //     }
              // });

              FB.login(function(){}, {scope: 'publish_actions'});

              // FB.api('/113124472034820', function(response) {
              //     console.log(response);
              // });


          };

      }]);

})();


