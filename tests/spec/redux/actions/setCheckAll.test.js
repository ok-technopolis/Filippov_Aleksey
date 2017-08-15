import chai from "chai";
import * as actions from '../../../../app/redux/actions.js';
import tasks from '../../../../app/redux/tasks.js';
let assert = chai.assert;

describe('reducer setCheckAll', () => {
	it('all checked', () => {
		let store = [{ 
			id: 2,
			text: 'text2',
			checked: true
		}, { 
			id: 1,
			text: 'text',
			checked: true
		}];
		store = tasks(store, actions.setCheckAll());
		assert.deepEqual(store, [{ 
			id: 2,
			text: 'text2',
			checked: true
		}, { 
			id: 1,
			text: 'text',
			checked: true
		}]);
	});
	
	it('all unchecked', () => {
		let store = [{ 
			id: 2,
			text: 'text2',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}];
		store = tasks(store, actions.setCheckAll());
		assert.deepEqual(store, [{ 
			id: 2,
			text: 'text2',
			checked: true
		}, { 
			id: 1,
			text: 'text',
			checked: true
		}]);
	});
	
	it('all diff', () => {
		let store = [{ 
			id: 3,
			text: 'text3',
			checked: false
		}, { 
			id: 2,
			text: 'text2',
			checked: true
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}];
		store = tasks(store, actions.setCheckAll());
		assert.deepEqual(store, [{ 
			id: 3,
			text: 'text3',
			checked: true
		}, { 
			id: 2,
			text: 'text2',
			checked: true
		}, { 
			id: 1,
			text: 'text',
			checked: true
		}]);
	});
});