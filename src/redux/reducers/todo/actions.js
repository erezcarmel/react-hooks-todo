import {
	http
} from '../../../services';

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_LIST = 'UPDATE_LIST';
export const UPDATE_SERVER_START = 'UPDATE_SERVER_START';
export const UPDATE_SERVER_SUCCESS = 'UPDATE_SERVER_SUCCESS';
export const UPDATE_SERVER_FAILED = 'UPDATE_SERVER_FAILED';

export const addItem = value => ({ type: ADD_ITEM, value });
export const updateList = list => ({ type: UPDATE_LIST, list });
export const updateServerStart = () => ({ type: UPDATE_SERVER_START });
export const updateServerSuccess = () => ({ type: UPDATE_SERVER_SUCCESS });
export const updateServerFailed = error => ({ type: UPDATE_SERVER_FAILED, error });

export const updateServer = list => {
	return async dispatch => {
		dispatch(updateServerStart());
		try {
			await http.call('POST', list);
			dispatch(updateServerSuccess());
		} catch (error) {
			dispatch(updateServerFailed(error));
		}
	}
};