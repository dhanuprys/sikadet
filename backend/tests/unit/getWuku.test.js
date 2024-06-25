const getWuku = require('../../dist/utils/getWuku').default;

describe('Get exact wuku names', () => {
    test('First wuku', () => {
        const firstWuku = getWuku(new Date(2023, 12, 19));
    
        expect(firstWuku).toBe('Sinta');
    });

    test('Random wuku', () => {
        const randomWuku = getWuku(new Date(2024, 6, 25));
    
        expect(randomWuku).toBe('Kelawu');
    });
});