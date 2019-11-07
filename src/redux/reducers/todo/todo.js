import {
	ADD_ITEM,
	UPDATE_LIST,
	UPDATE_SERVER_START,
	UPDATE_SERVER_SUCCESS,
	UPDATE_SERVER_FAILED
} from './actions';

const INITIAL_STATE = {
	todos: [],
	updating: false,
	error: null
};

const todo = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return { ...state, todos: [...state.todos, { value: action.value, done: false }] };
		case UPDATE_LIST:
			return { ...state, todos: action.list };
		case UPDATE_SERVER_START:
			return {
				...state,
				updating: true,
				error: null
			};
		case UPDATE_SERVER_SUCCESS:
			return {
				...state,
				updating: false
			};
		case UPDATE_SERVER_FAILED:
			return {
				...state,
				updating: false,
				error: action.error
			};
		default:
			return state;
	}
};

export default todo;