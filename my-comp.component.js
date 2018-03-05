angular.
	module('myApp').
	component('myComp', {
		templateUrl:'my-comp.template.html',
      	controller: function MyController($scope){

      		$scope.hide = true;

		    this.showModal = function showModal() {
		    	$scope.hide = false;
		    };

		    this.selectItem = function selectItem(name){
		    	$scope.nameId = name.id;
		    	$scope.nameSelected = name.name;
		    	$scope.hide = true;
		    };

      		this.names = [

							{id: 1, name: 'Екатерина'},
							{id: 2, name: 'Мария'},
							{id: 3, name: 'Светлана'},
							{id: 4, name: 'Михаил'},
							{id: 5, name: 'Константин'},
							{id: 6, name: 'Альберт'}


						];

		}
	});