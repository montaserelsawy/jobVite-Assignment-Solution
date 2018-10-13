/* 
 * Developed By: Montaser Elsawy
 * montaserelsawy@gmail.com
 * JobVite Assignment  @ 21-04-2015
 */

(function() {
    
    var app = angular.module('JobviteApp', ['ngRoute','ngAnimate','ui.bootstrap','angularCharts']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'JobviteController',
                templateUrl: 'app/views/jobvite.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());