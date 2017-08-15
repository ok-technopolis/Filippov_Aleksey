import Action from './Action.js';

export const addTask = (text) => ({
	type: Action.ADD_TASK,
	text: text
});

export const editTask = (id, text) => ({
	type: Action.EDIT_TASK,
	id: id,
	text: text
});

export const removeTask = (id) => ({
	type: Action.REMOVE_TASK,
	id: id
});

export const setCheck = (id, checked) => ({
	type: Action.SET_CHECK,
	id: id,
	checked: checked
});

export const setCheckAll = () => ({
	type: Action.SET_CHECK_ALL
});

export const clearCompleted = () => ({
	type: Action.CLEAR_COMPLETED
});