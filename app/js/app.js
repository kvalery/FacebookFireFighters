'use strict';

var FFFApp = angular.module('FFFApp', [
    'ngRoute',
    'ui.bootstrap'
]);
FFFApp.run(['$rootScope', '$window',
    function($rootScope, $window ) {
        $rootScope.user = {};

        $window.fbAsyncInit = function() {
            FB.init({
                appId            : '135361657071813',
                autoLogAppEvents : true,
                xfbml            : true,
                channelUrl       : 'app/html/channel.html',
                version          : 'v2.10'
            });
        };

        (function(d){
            // load the Facebook javascript SDK

            var js,
              id = 'facebook-jssdk',
              ref = d.getElementsByTagName('script')[0];

            if (d.getElementById(id)) {
                return;
            }

            js = d.createElement('script');
            js.id = id;
            js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";

            ref.parentNode.insertBefore(js, ref);

        }(document));

    }]);