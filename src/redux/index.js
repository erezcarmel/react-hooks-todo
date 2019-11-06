import { createStore } from 'redux';
import { todo } from './reducers';

export default createStore(
	todo,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);