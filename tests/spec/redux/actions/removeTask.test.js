import chai from "chai";
import * as actions from '../../../../app/redux/actions.js';
import tasks from '../../../../app/redux/tasks.js';
let assert = chai.assert;

describe('reducer removeTask', () => {
	it('first task removing', () => {
		let store = [{ 
			id: 2,
			text: 'text2',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}];
		store = tasks(store, actions.removeTask(2));
		assert.deepEqual(store, [{ 
			id: 1,
			text: 'text',
			checked: false
		}]);
	});
	
	it('last task removing', () => {
		let store = [{ 
			id: 2,
			text: 'text2',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}];
		store = tasks(store, actions.removeTask(1));
		assert.deepEqual(store, [{ 
			id: 2,
			text: 'text2',
			checked: false
		}]);
	});
	
	it('internal task removing', () => {
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
		store = tasks(store, actions.removeTask(2));
		assert.deepEqual(store, [{ 
			id: 3,
			text: 'text3',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}]);
	});
	
	it('null task removing', () => {
		let store = [{ 
			id: 1,
			text: 'text',
			checked: false
		}];
		store = tasks(store, actions.removeTask(2));
		assert.deepEqual(store, [{ 
			id: 1,
			text: 'text',
			checked: false
		}]);
	});
});