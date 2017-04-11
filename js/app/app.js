(function () {
	var app = angular.module('main', [])

	app.controller('ContactController', ['$http', function ($http) {
		var form = this;
		//$scope.loading = true;
		form.data = {};
		form.response = {};
		this.sendMail = function () {
			$http.options('http://192.168.43.80:3000/contact', form.data).success(function (res) {
				console.log(res.status);
				form.response = res;
			}).error(function (res) {
				console.log(res.status);
				form.response = res;
			});
			form.data = {};
		//	$scope.loading = false;
		};
	}]);




})();
