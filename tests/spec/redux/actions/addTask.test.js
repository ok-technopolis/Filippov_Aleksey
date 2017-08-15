import chai from "chai";
import * as actions from '../../../../app/redux/actions.js';
import tasks from '../../../../app/redux/tasks.js';
let assert = chai.assert;

describe('reducer addTask', () => {
	it('first task adding', () => {
		let store = [];
		store = tasks(store, actions.addTask('text'));
		assert.deepEqual(store, [{ 
			id: 1,
			text: 'text',
			checked: false
		}]);
	});
	
	it('second task adding', () => {
		let store = [];
		store = tasks(store, actions.addTask('text'));
		store = tasks(store, actions.addTask('text2'));
		assert.deepEqual(store, [{ 
			id: 2,
			text: 'text2',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}]);
	});
});