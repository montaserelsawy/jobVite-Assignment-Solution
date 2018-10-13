/* 
 * Developed By: Montaser Elsawy
 * montaserelsawy@gmail.com
 * JobVite Assignment  @ 21-04-2015
 */

(function () {

    var JobviteController = function ($scope, appSettings, $http) {
        $scope.jobviteData = [];
        $scope.appSettings = appSettings;
        $scope.Fchart = {};
                
        //get data from JOSN file
        $http.get('data/jobvite.json').success(function (data) {
            $scope.jobviteData = data;
        });

        //show/hide percentage bars
        $scope.toggleDetail = function ($index) {
            $scope.activePosition = $scope.activePosition == $index ? -1 : $index;
        };

        //chart
        $scope.config = {
            tooltips: true,
            labels: true,
            colors: ['#71ab48', '#eb7b31'],
            legend: {
                display: false,
                position: 'right'
            },
            waitForHeightAndWidth: true
        };

            //var test =$scope.jobviteData.unit_test[0].point1;
            var test =1000;
            $scope.Fchart['unit_test'] = {
                data: [
                    {x: '', y: [test]},
                    {x: '', y: [500]}
                ]
            };

            $scope.Fchart['functional_test'] = {
                data: [
                    {x: '', y: [150]},
                    {x: '', y: [80]}
                ]
            };
  


        //declare the Changelist / Build class name
        $scope.getcssClass = function (state) {

            if (state == 'Pending') {
                return "gradient-gray";
            } else if (state == 'Running') {
                return "gradient-blue";
            } else if (state == 'Rejected') {
                return "gradient-red";
            } else if (state == 'Complete') {
                return "gradient-green";
            } else if (state == 'Accepted') {
                return "gradient-green";
            }
            return {};
        };

        //declare the item progress bar class name
        $scope.getProgressbarcssClass = function (state) {

            if (state == 'Pending') {
                return "pb_gray";
            } else if (state == 'Running') {
                return "pb_blue";
            } else if (state == 'Rejected') {
                return "pb_red";
            } else if (state == 'Complete') {
                return "pb_green";
            } else if (state == 'Accepted') {
                return "pb_green";
            }
            return {};
        };
        //declare the text colors
        $scope.getTextColor = function (state) {

            if (state == 'Pending') {
                return "gray";
            } else if (state == 'Running') {
                return "blue";
            } else if (state == 'Rejected') {
                return "red";
            } else if (state == 'Complete') {
                return "green";
            } else if (state == 'Accepted') {
                return "green";
            }
            return {};
        };

        //declare the item progress bar class name
        $scope.getIconClass = function (type) {

            if (type == 'Firewall') {
                return "flaticon-brickwall";
            } else if (type == 'Build') {
                return "flaticon-pc6";
            }
            return {};
        };

        // disable the pending items
        $scope.isDisabled = function (state) {
            if (state == 'Pending') {
                return status.isDisabled;
            }
            return {};
        };


    };
    JobviteController.$inject = ['$scope', 'appSettings', '$http'];
    angular.module('JobviteApp')
            .controller('JobviteController', JobviteController);
}());