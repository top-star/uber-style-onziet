'use strict';

var Blog = angular.module("Blog", ["ui.bootstrap", "ngCookies"], function ($interpolateProvider) {
        $interpolateProvider.startSymbol("{[{");
        $interpolateProvider.endSymbol("}]}");
    }
);

Blog.run(function ($http, $cookies) {
    $http.defaults.headers.common['X-CSRFToken'] = $cookies['csrftoken'];
})

Blog.config(function ($routeProvider) {
    $routeProvider
        .when("/feed", {
            templateUrl: "static/js/app/views/feed.html",
            controller: "FeedController",
            resolve: {
                posts: function (PostService) {
                    return PostService.list();
                }
            }
        })
        .when("/home", {
            templateUrl: "static/js/app/views/home.html",
            controller: "HomeController",
        })
        .when("/signup", {
            templateUrl: "static/js/app/views/signup.html",
            controller: "SignupController",
        })
        .when("/signin", {
            templateUrl: "static/js/app/views/signin.html",
            controller: "SigninController",
        })
        .when("/employee_signin", {
            templateUrl: "static/js/app/views/employeesignin.html",
            controller: "EmployeeSigninController",
        })
        .when("/employer_signin", {
            templateUrl: "static/js/app/views/employersignin.html",
            controller: "EmployerSigninController",
        })
        .when("/post/:id", {
            templateUrl: "static/js/app/views/view.html",
            controller: "PostController",
            resolve: {
                post: function ($route, PostService) {
                    var postId = $route.current.params.id
                    return PostService.get(postId);
                }
            }
        })
        .otherwise({
            redirectTo: '/home'
        })
})