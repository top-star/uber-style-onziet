Blog.controller('EmployeeSigninController', function ($scope,$location) {
    //close modals
    $scope.close = function (action) {
        console.log("home signup clicked");
    };
    $scope.employee_signin = function () {
      console.log("clicked");
      $location.path('/employee_signin');
    }
    $scope.rider_signin = function () {
      console.log("clicked");
      $location.path('/rider_signin');
    }
});