Blog.controller('HomeController', function ($scope,$location) {
    //close modals
    $scope.close = function (action) {
        console.log("home signup clicked");
    };
    $scope.signup = function () {
      $location.path('/signup');
    }

    $scope.signin = function () {
      $location.path('/signin');
    }

});