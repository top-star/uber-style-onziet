Blog.controller('SignupController', function ($scope,$location) {
    //close modals
    $scope.close = function (action) {
        console.log("home signup clicked");
    };
    $scope.signup = function () {
      console.log("clicked");
      $location.path('/signup');
    }
});