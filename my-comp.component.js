angular.
	module('myApp').
	component('myComp', {
		templateUrl:'my-comp.template.html',
      	controller: function MyController(){
      		var self = this;

      		self.showCover = function showCover() {
      			let coverDiv = document.createElement('div');
      			coverDiv.classList.add('cover-div');
      			document.body.appendChild(coverDiv);
    		};

		    self.showPrompt = function showPrompt() {
      			self.showCover();
      			let input = document.querySelector('.modal-form>input');
      			let container = document.querySelector('.modal-form-container');

				function complete(value) {
					hideCover();
					container.style.display = 'none';
				}

		      container.style.display = 'block';
		      input.focus();
		    };

      		self.names = [

							{id: 1, name: 'Екатерина'},
							{id: 2, name: 'Мария'},
							{id: 3, name: 'Светлана'},
							{id: 4, name: 'Михаил'},
							{id: 5, name: 'Константин'},
							{id: 6, name: 'Альберт'},


						];

		}
	});