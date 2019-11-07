import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import AddForm from '../AddForm';
import store from '../../../redux';

test('adding item to store todos array', () => {
	jest.spyOn(store, 'dispatch');
	const expectation = { type: 'ADD_ITEM', value: 'My todo' };
	const { getByTestId } = render(
		<Provider store={store}>
			<AddForm />
		</Provider>
	);
	const input = getByTestId('todo-input');
	fireEvent.change(input, { target: { value: expectation.value } });
	fireEvent.click(getByTestId('add-btn'));

	expect(store.dispatch).toBeCalledWith(expectation);
	expect(store.getState().todos.length).toEqual(1);
});