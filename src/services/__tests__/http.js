import React from 'react';
import http from '../http';

beforeAll(() => {
	const xhrMockClass = () => ({
		open            : jest.fn(),
		send            : jest.fn(),
		setRequestHeader: jest.fn()
	});
	window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
});

test('calling server with provided data and returns result', async() => {
	const result = await http.call('POST', 'data');
	expect(result).toBe('data');
});

test('returns null if no data provided', async() => {
	const result = await http.call('POST');
	expect(result).toBeNull();
});