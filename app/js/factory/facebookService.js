(function () {
    angular.module('FFFApp')
      .service('facebookService', ['$window', function($window) {

          console.log('$window.FB')
          console.log($window.FB)

          $window.FB.init({
              appId            : '135361657071813',
              autoLogAppEvents : true,
              xfbml            : false,
              version          : 'v2.10'
          });

    }]);

})();
