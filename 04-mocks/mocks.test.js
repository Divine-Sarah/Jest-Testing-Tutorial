const axios = require('axios');

const fetchData = async (id) => {
	console.log('called');
	const results = await axios.get(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	return results;
};

const forEach = (items, callback) => {
    for(let i = 0; i < items.length; i++){
    callback(items[i])
    }
};

it("mock callback", () =>{
    const mockCalledback = jest.fn(x => 42 + x);

    forEach([0,1], mockCalledback);

    expect(mockCalledback.mock.calls.length).toBe(2);

    expect(mockCalledback.mock.calls[0][0]).toBe(0);

    expect(mockCalledback.mock.calls[1][0]).toBe(1);

	expect(mockCalledback.mock.results[0].value).toBe(42);
});

it('return mock', () => {
	const mock = jest.fn();

	mock
		.mockReturnValueOnce(true)
		.mockReturnValueOnce(false);

	const results = mock();
	const results2 = mock();

	expect(results).toBe(true);
	expect(results2).toBe(false);
});

it('mock modules or custom functions', async () => {
	jest.spyOn(axios, 'get').mockReturnValueOnce({
		id: 1,
		todo: 'Do youtube',
	});

	const results = await fetchData(1);

	expect(results.todo).toBe('Do youtube');
});