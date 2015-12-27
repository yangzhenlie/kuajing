
var m1 = angular.module('myApp', ['ngRoute']);

m1.config(['$routeProvider',function($routeProvider) {

	$routeProvider
		.when('/index', {
			templateUrl: 'main.html'
		})
		.when('/product', {
			templateUrl: 'product.html'
		})
		.when('/cart', {
			templateUrl: 'cart.html'
		})
		.when('/list', {
			templateUrl: 'list.html'
		})
		.when('/about', {
			templateUrl: 'about.html'
		})
		.when('/found', {
			templateUrl: 'found.html'
		})
		.when('/foundDetail', {
			templateUrl: 'foundDetail.html'
		})
		.when('/member', {
			templateUrl: 'member.html'
		})
		.otherwise({
			redirectTo: '/index'
		});

}]);

m1.run(['$rootScope', function($rootScope){

	$rootScope.$on('$routeChangeStart', function(){
		NProgress.start();
		NProgress.configure({ ease: 'ease', speed: 500 });
	});

	$rootScope.$on('$routeChangeSuccess', function(){
		$("html,body").scrollTop(0);
		NProgress.done();
	});

}]);