angular.
	module('myApp').
	component('myComp', {
		templateUrl:'my-comp.template.html',
      	controller: function MyController(){
      		var self = this;

      		self.openWin = function openWin(){
      			let div = document.querySelector('.second');
      			div.classList.remove('invisible');

      		};

      		self.names = [

							{id: 1, name: 'Света'},

							{id: 2, name: 'Маша'},

							{id: 3, name: 'Лена'}

						];

		}
	});