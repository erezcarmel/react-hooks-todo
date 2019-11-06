import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../../../redux';
import AddForm from '../AddForm';

test('shows the children when the checkbox is checked', () => {
	const { getByTestId } = render(
		<Provider store={store}>
			<AddForm />
		</Provider>
	);
	const input = getByTestId('todo-input');

	input.value = 'My todo';
	fireEvent.click(getByTestId('add-btn'));

	// expect(...) TODO: Test addTodo was called with right value`
});