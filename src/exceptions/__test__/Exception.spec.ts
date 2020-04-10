import Exception from '../Exception';

const exception = new Exception({
    error: { e: 'some error' },
    message: 'Some exception',
    status: 0,
    statusText: 'none'
});

describe('Exception', () => {
    it('should match response', () => {
        expect(exception).toEqual({
            error: {
                message: 'Some exception',
                e: 'some error',
            },
            meta: {
                status: 0,
                statusText: 'none',
            },
        });
    });
});