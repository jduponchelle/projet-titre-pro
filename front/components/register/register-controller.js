angular.module('mainApp').controller('registerController', function ($scope, $http, $state) {
    $scope.register = register;

    function register() {
        let user = {
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            username: $scope.username,
            password: $scope.password,
        };
        $http.post("http://localhost:1407/auth/signup", user).then(function (res) {
            swal({
                    title: "Your account is created",
                    icon: "success",
                })
                .then((value) => {
                    if (value) {
                        $state.go('login');
                    }
                });
        });
    };
});