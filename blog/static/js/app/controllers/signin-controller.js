Blog.controller('SigninController', function ($scope,$location) {
    //close modals
    $scope.close = function (action) {
        console.log("home signup clicked");
    };
    $scope.employee_signin = function () {
      console.log("clicked");
      $location.path('/employee_signin');
    }
    $scope.employer_signin = function () {
      console.log("clicked");
      $location.path('/employer_signin');
    }
});