var app = angular.module('myApp');
app.factory('LoginService', function() {
	var admin = 'username';
	var pass = 'password';
	var isAuthenticated = false;
	return {
		login : function(username, password) {
			var regex = new RegExp("(?=.*[A-Z])")
			isAuthenticated =  regex.test(password);
			
			return isAuthenticated;
		},
		isAuthenticated : function() {
			return isAuthenticated;
		}
	};
});