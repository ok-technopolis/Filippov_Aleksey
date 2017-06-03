import Action from './Action.js';

// const initialState = [{
// 		text: 'CSS',
// 		checked: false,
// 		id: 1
// 	}, {
// 		text: 'HTML',
// 		checked: false,
// 		id: 2
// 	}
// ];
const initialState = [];

export default function tasks(store = initialState, action){
	switch (action.type){
		case Action.ADD_TASK:
			return [
				{
					text: action.text,
					checked: false,
					id: store.reduce((id, task) => Math.max(id, task.id), 0) + 1
				},
				...store
			];
		
		case Action.EDIT_TASK:
			let copy = store.slice();
			for (let i = 0; i < copy.length; i++){
				if (copy[i].id === action.id){
					copy[i].text = action.text;
					break;
				}
			}
			return copy;
			
		case Action.REMOVE_TASK:
			return store.filter(item => item.id != action.id);
		
		case Action.SET_CHECK:
			let copy2 = store.slice();
			for (let i = 0; i < copy2.length; i++){
				if (copy2[i].id === action.id){
					copy2[i].checked = action.checked;
					break;
				}
			}
			return copy2;
			
		case Action.SET_CHECK_ALL:
			return store.map(item => ({...item, checked: true}));
			
		case Action.CLEAR_COMPLETED:
			return store.filter(item => !item.checked);
			
		default:
			return store;
	}
}