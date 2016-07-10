Blog.controller('EmployerSigninController', function ($scope,$location) {
    //close modals
    $scope.close = function (action) {
        console.log("home signup clicked");
    };
    $scope.employer_signin = function () {
      console.log("clicked");
      $location.path('/employer_signin');
    }
    $scope.rider_signin = function () {
      console.log("clicked");
      $location.path('/rider_signin');
    }
});