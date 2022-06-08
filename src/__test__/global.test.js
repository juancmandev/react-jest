const text = 'Hello World';

test('It should be a test', () => {
    expect(text).toMatch(/World/);
});
