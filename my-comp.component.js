angular.
	module('myApp').
	component('myComp', {
		templateUrl:'my-comp.template.html',
      	controller: function MyController(){

      		this.showCover = function showCover() {
      			let coverDiv = document.createElement('div');
      			coverDiv.classList.add('cover-div');
      			document.body.appendChild(coverDiv);
    		};

		    this.showModal = function showModal() {
      			this.showCover();
      			let input = document.querySelector('.modal-form>input');
      			let container = document.querySelector('.modal-form-container');

		      container.style.display = 'block';
		      input.focus();
		    };

      		this.names = [

							{id: 1, name: 'Екатерина'},
							{id: 2, name: 'Мария'},
							{id: 3, name: 'Светлана'},
							{id: 4, name: 'Михаил'},
							{id: 5, name: 'Константин'},
							{id: 6, name: 'Альберт'},


						];

		}
	});