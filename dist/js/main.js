var app = {
	init: function(){
		notes.init();
	}
}

var $ = {
	delegate: function(container, eventListener, selector, func){
		container.addEventListener(eventListener, function(e) {
			for (var target=e.target; target && target!=this; target=target.parentNode) {
				if (target.matches(selector)) {
					func.call(target, e);
					break;
				}
			}
		}, false);
	}
}

var notes = {
	wrap: null,
	noteTemplate: null,
	container: null,
	addNoteInput: null,
	addNotePlaceholder: null,
	counter: null,
	add: function(text){
		text = text.trim();
		if (!text) return;
		
		var tempNote = notes.noteTemplate.content.cloneNode(true);
		tempNote.querySelector('.one-task').dataset['value'] = text;
		tempNote.querySelector('.one-task__text').innerText = text;
		if (notes.container.children.length){
			notes.container.insertBefore(tempNote, notes.container.firstChild);
		} else {
			notes.container.appendChild(tempNote);
		}
		notes.updateAll();
	},
	remove: function(el){
		if (!el.matches('.one-task')) return;
		
		el.remove();
		notes.updateAll();
	},
	check: function(el){
		if (!el.matches('.one-task')) return;
		
		el.classList.add('one-task_checked');
		notes.updateFooterCounter();
	},
	checkAll: function(){
		var len = notes.container.children.length;
		for (var i = 0; i < len; i++){
			notes.container.children[i].classList.add('one-task_checked');
		}
		notes.updateFooterCounter();
	},
	uncheck: function(el){
		if (!el.matches('.one-task')) return;
		
		el.classList.remove('one-task_checked');
		notes.updateFooterCounter();
	},
	updateAll: function(){
		if (notes.container.children.length == 0){
			notes.wrap.classList.add('block-notes_empty');
		} else {
			notes.wrap.classList.remove('block-notes_empty');
			
			notes.updateFooterCounter();
		}
	},
	updateFooterCounter: function(){
		var checked = notes.container.querySelectorAll('.one-task_checked').length;
		var left = notes.container.children.length - checked;
		var text;
		if (left == 0){
			text = 'no items left';
		} else {
			text = left + (left > 1 ? ' items' : ' item') + ' left';
		}
		notes.counter.innerText = text;
	},
	init: function(){
		notes.wrap = document.getElementById('block-notes');
		notes.noteTemplate = document.getElementById('note-template');
		notes.container = document.getElementById('tasks-container');
		notes.counter = document.getElementById('notes-counter');
		notes.addNoteInput = document.getElementById('add-note-input');
		notes.addNotePlaceholder = document.getElementById('add-note-placeholder');
		notes.selectAll = document.getElementById('select-all');
		
		notes.selectAll.addEventListener('click', function(){
			notes.checkAll();
		});
		
		var updatePlaceholderCondition = function(){
			if (notes.addNoteInput.value.length > 0){
				notes.addNotePlaceholder.classList.add('placeholder_unvisible');
			} else {
				notes.addNotePlaceholder.classList.remove('placeholder_unvisible');
			}
		}
		
		notes.addNoteInput.addEventListener('keypress', function(e){
			if (e.which == 13 || e.keyCode == 13) {
				if (this.value.trim()){
					notes.add(this.value);
					this.value = '';
					updatePlaceholderCondition();
				}
			}
		});
		notes.addNoteInput.addEventListener('input', function(e){
			updatePlaceholderCondition();
		});
		
		var startEdit = function(el){
			el.classList.add('one-task_editable');
			var input = el.querySelector('.one-task__input');
			input.value = el.dataset['value'];
			input.focus();
		};
		
		var stopEdit = function(el){
			el.classList.remove('one-task_editable');
			var input = el.querySelector('.one-task__input');
			var text = el.querySelector('.one-task__text');
			el.dataset['value'] = input.value;
			text.innerText = input.value;
		}
		
		$.delegate(notes.container, 'click', '.one-task__check', function(){
			var parent = this.parentElement;
			if (parent.classList.contains('one-task_checked')){
				notes.uncheck(parent);
			} else {
				notes.check(parent);
			}
		});
		
		$.delegate(notes.container, 'click', '.one-task__remove', function(){
			notes.remove(this.parentElement);
		});
		
		$.delegate(notes.container, 'dblclick', '.one-task__text', function(){
			startEdit(this.parentElement.parentElement);
		});
		
		$.delegate(notes.container, 'focusout', '.one-task__input', function(){
			stopEdit(this.parentElement.parentElement);
		});
		
		$.delegate(notes.container, 'keypress', '.one-task__input', function(e){
			if (e.which == 13 || e.keyCode == 13) {
				stopEdit(this.parentElement.parentElement);
			}
		});
		
		var sortable = new Sortable(notes.container, {
			sort: true,
			animation: 150,
			draggable: '.one-task'
		});
		
		notes.updateAll();
	}
}


document.addEventListener('DOMContentLoaded', function(event) { 
	app.init();
});