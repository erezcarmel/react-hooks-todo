import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import App from '../App';
import store from '../redux';

test('adding item to store todos array', () => {
	const { getByTestId } = render(
		<Provider store={store}>
			<App />
		</Provider>
	);
	const app = getByTestId('app');
	expect(app).toBeDefined();
});