(function () {
	var app = angular.module('main', [])

	app.controller('ContactController', ['$http', function ($http) {
		var form = this;
		//$scope.loading = true;
		form.data = {};
		form.response = {};
		this.sendMail = function () {
			$http.post('https://p-teneson.herokuapp.com/contact', form.data).success(function (res) {
				console.log(res.status);
				form.response = res;
				form.data = {};
			}).error(function (res) {
				console.log(res.status);
				form.response = res;
			});
			
		//	$scope.loading = false;
		};
	}]);




})();
