var myFirstApp = angular.module("myFirstApp", []);

myFirstApp.config(function(){
	console.log('so far so good');
});

myFirstApp.run(function(){

});

myFirstApp.controller('MyController1', function($scope){
	$scope.message = 'hi everyone!';
});