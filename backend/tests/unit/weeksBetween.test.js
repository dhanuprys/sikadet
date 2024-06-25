const weeksBetween = require('../../dist/utils/weeksBetween').default;

describe('Check week distance', () => {
    test('Distance', () => {
        const weekDistance = weeksBetween(new Date(2023, 12, 19), new Date(2023, 12, 26));
    
        expect(weekDistance).toBe(1);
    });
});