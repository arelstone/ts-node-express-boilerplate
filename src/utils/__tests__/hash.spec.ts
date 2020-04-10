import { hash, compare } from '../hash';

describe('hash', () => {
    it('should start with a $', () => {
        expect(hash('string').startsWith('$')).toBe(true)
    });
});

describe('compare', () => {
    it('should return true', () => {
        expect(compare('equal', hash('equal'))).toBe(true);
    });

    it('should return false', () => {
        expect(compare('not_equal', hash('equal'))).toBe(false);
    });
});