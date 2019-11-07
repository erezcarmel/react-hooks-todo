import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import List from '../List';
import store from '../../../redux';

const item = { value: 'My todo', done: false };

beforeAll(() => {
	store.dispatch({ type: "ADD_ITEM", value: item.value });
});

test('update item "done" value on checkbox click', () => {
	const { getByTestId } = render(
		<Provider store={store}>
			<List />
		</Provider>
	);

	fireEvent.click(getByTestId(`${item.value}_done`));

	expect(store.getState().todos.length).toEqual(1);
});

test('returns the same item if item does not exist in store', () => {
	render(
		<Provider store={store}>
			<List />
		</Provider>
	);
	const expected = store.getState().todos[0].done;

	store.dispatch({ type: "UPDATE_ITEM", item: { value: 'something' }});

	expect(store.getState().todos[0].done).toBe(expected);
});

test('remove item on remove button click', () => {
	const { getByTestId } = render(
		<Provider store={store}>
			<List />
		</Provider>
	);
	fireEvent.click(getByTestId(`${item.value}_remove`));

	expect(store.getState().todos.length).toEqual(0);
});