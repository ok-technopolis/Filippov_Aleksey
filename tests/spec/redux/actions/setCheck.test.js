import chai from "chai";
import * as actions from '../../../../app/redux/actions.js';
import tasks from '../../../../app/redux/tasks.js';
let assert = chai.assert;

describe('reducer setCheck', () => {
	it('first task setting checked', () => {
		let store = [{ 
			id: 2,
			text: 'text2',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}];
		store = tasks(store, actions.setCheck(2, true));
		assert.deepEqual(store, [{ 
			id: 2,
			text: 'text2',
			checked: true
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}]);
	});
	
	it('first task setting unchecked', () => {
		let store = [{ 
			id: 2,
			text: 'text2',
			checked: true
		}, { 
			id: 1,
			text: 'text',
			checked: true
		}];
		store = tasks(store, actions.setCheck(2, false));
		assert.deepEqual(store, [{ 
			id: 2,
			text: 'text2',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: true
		}]);
	});
	
	it('last task setting checked', () => {
		let store = [{ 
			id: 2,
			text: 'text2',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}];
		store = tasks(store, actions.setCheck(1, true));
		assert.deepEqual(store, [{ 
			id: 2,
			text: 'text2',
			checked: false
		}, { 
			id: 1,
			text: 'text',
			checked: true
		}]);
	});
	
	it('last task setting unchecked', () => {
		let store = [{ 
			id: 2,
			text: 'text2',
			checked: true
		}, { 
			id: 1,
			text: 'text',
			checked: true
		}];
		store = tasks(store, actions.setCheck(1, false));
		assert.deepEqual(store, [{ 
			id: 2,
			text: 'text2',
			checked: true
		}, { 
			id: 1,
			text: 'text',
			checked: false
		}]);
	});
	
	it('internal task setting checked', () => {
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
			checked: true
		}];
		store = tasks(store, actions.setCheck(2, true));
		assert.deepEqual(store, [{ 
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
			checked: true
		}]);
	});
	
	it('internal task setting unchecked', () => {
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
			checked: true
		}];
		store = tasks(store, actions.setCheck(2, false));
		assert.deepEqual(store, [{ 
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
			checked: true
		}]);
	});
	
	it('null task setting checked', () => {
		let store = [{ 
			id: 1,
			text: 'text',
			checked: false
		}];
		store = tasks(store, actions.removeTask(2, true));
		assert.deepEqual(store, [{ 
			id: 1,
			text: 'text',
			checked: false
		}]);
	});
});