import chai from "chai";
import * as actions from '../../../../app/redux/actions.js';
import tasks from '../../../../app/redux/tasks.js';
let assert = chai.assert;

describe('reducer editTask', () => {
	it('first task editing', () => {
		let store = [{ 
			id: 2,
			text: 'text2',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}];
		store = tasks(store, actions.editTask(2, 'text3'));
		assert.deepEqual(store, [{ 
			id: 2,
			text: 'text3',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}]);
	});
	
	it('last task editing', () => {
		let store = [{ 
			id: 2,
			text: 'text2',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}];
		store = tasks(store, actions.editTask(1, 'text3'));
		assert.deepEqual(store, [{ 
			id: 2,
			text: 'text2',
			checked: false
		}, { 
			id: 1,
			text: 'text3',
			checked: false
		}]);
	});
	
	it('internal task editing', () => {
		let store = [{ 
			id: 3,
			text: 'text3',
			checked: false
		}, { 
			id: 2,
			text: 'text2',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}];
		store = tasks(store, actions.editTask(2, 'text4'));
		assert.deepEqual(store, [{ 
			id: 3,
			text: 'text3',
			checked: false
		}, { 
			id: 2,
			text: 'text4',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}]);
	});
	
	it('null task editing', () => {
		let store = [{ 
			id: 1,
			text: 'text',
			checked: false
		}];
		store = tasks(store, actions.editTask(2, 'text4'));
		assert.deepEqual(store, [{ 
			id: 1,
			text: 'text',
			checked: false
		}]);
	});
});