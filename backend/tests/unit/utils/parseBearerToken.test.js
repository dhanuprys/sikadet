const parseBearerToken = require('../../../dist/utils/parseBearerToken').default;

describe('Get exact wuku names', () => {
    test('Parse truth case', () => {
        const token1 = parseBearerToken('Bearer xxx1');
        const token2 = parseBearerToken('Bearer xxx2');

        expect(token1).toBe('xxx1');
        expect(token2).toBe('xxx2');
    });

    test('Parse invalid case', () => {
        const token1 = () => parseBearerToken('xxxx1');
        const token2 = () => parseBearerToken('xxxx2 Bea');
        const token3 = () => parseBearerToken('Bearer');

        expect(token1).toThrow(Error);
        expect(token2).toThrow(Error);
        expect(token3).toThrow(Error);
    })
});