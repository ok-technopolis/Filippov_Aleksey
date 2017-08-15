import chai from "chai";
import * as actions from '../../../../app/redux/actions.js';
import tasks from '../../../../app/redux/tasks.js';
let assert = chai.assert;

describe('reducer clearCompleted', () => {
	it('none completed', () => {
		let store = [{ 
			id: 2,
			text: 'text2',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}];
		store = tasks(store, actions.clearCompleted());
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
	
	it('all completed', () => {
		let store = [{ 
			id: 2,
			text: 'text2',
			checked: true
		}, { 
			id: 1,
			text: 'text',
			checked: true
		}];
		store = tasks(store, actions.clearCompleted());
		assert.deepEqual(store, []);
	});
	
	it('some completed', () => {
		let store = [{ 
			id: 3,
			text: 'text3',
			checked: true
		}, { 
			id: 2,
			text: 'text2',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: true
		}];
		store = tasks(store, actions.clearCompleted());
		assert.deepEqual(store, [{ 
			id: 2,
			text: 'text2',
			checked: false
		}]);
	});
});