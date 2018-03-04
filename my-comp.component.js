angular.
	module('myApp').
	component('myComp', {
		templateUrl:'my-comp.template.html',
      	controller: function MyController(){

      		this.coverDiv = document.createElement('div');
      		this.container = document.querySelector('.modal-form-container');

      		this.showCover = function showCover() {
      			this.coverDiv.classList.add('cover-div');
      			document.body.append(this.coverDiv);
    		};

		    this.showModal = function showModal() {
      			this.showCover();

      			let input = document.querySelector('.modal-form>input');

		      	this.container.style.display = 'block';
		      	input.focus();
		    };

		    this.selectItem = function selectItem(){
		    	let parentInput = document.querySelector('input[name=parentInput]');
		    	let tbody = document.querySelector('tbody');
		    	let self = this;

		    	tbody.addEventListener('click', function(event){
		    		let target = event.target;

		    		parentInput.value = target.textContent;
		    		self.container.style.display = 'none';
		    		document.body.removeChild(self.coverDiv);
		    	});
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