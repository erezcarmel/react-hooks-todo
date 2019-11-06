import _ from 'lodash';

const INITIAL_STATE = {
	todos: []
};

const todo = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return { ...state, todos: [...state.todos, { value: action.value, done: false }] };
		case 'REMOVE_ITEM':
			return { ...state, todos: _.filter(state.todos, todo => todo !== action.item) };
		case 'UPDATE_ITEM':
			const todos = [...state.todos].map(item => item.value === action.item.value ? action.item : item);
			return { ...state, todos };
		default:
			return state;
	}
};

export default todo;