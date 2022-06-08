const text = 'Hello World';
const fourElements = ['💦', '🪨', '🔥', '💨'];

test('It should be a test', () => {
    expect(text).toMatch(/World/);
});

test('We have fire', () => {
    expect(fourElements).toContain('🔥');
});
