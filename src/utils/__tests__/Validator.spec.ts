import Joi from 'joi';
import Validator from '../Validator';

const rules = Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.number().required(),
})
const input = {
    age: 10,
    name: 'John',
};

let validator: Validator<unknown>;

describe('Validator', () => {
    beforeAll(() => {
        validator = new Validator<unknown>(input, rules);
    })

    it('should bind input to this.data', () => {
        expect(validator.data).toEqual(input);
    });

    it('should bind tules to this.rules', () => {
        expect(validator.rules).toEqual(rules);
    });

    describe('valid data', () => {
        beforeAll(() => {
            validator = new Validator<unknown>({
                age: 10,
                name: 'John',
            }, rules);
        })

        it('errors should be null', () => {
            expect(validator.validate().error).toBeNull();
        });

        it('value should match the input', () => {
            expect(validator.validate().value).toEqual({
                age: 10,
                name: 'John',
            });
        });

        it('passes() should be true', () => {
            expect(validator.passes()).toBe(true);
        });

        it('fails() should be false', () => {
            expect(validator.fails()).toBe(false);
        });

    });

    describe('invalid data', () => {
        beforeAll(() => {
            validator = new Validator<unknown>({ name: 'John', }, rules);
        });

        it('error.name should be ValidationError', () => {
            expect(validator.validate().error.name).toEqual('ValidationError')
        });

        it('details should tell that age is required', () => {
            expect(validator.validate().error.details[0].message).toBe('"age" is required')
        });

        it('passes() should be false', () => {
            expect(validator.passes()).toBe(false);
        });

        it('fails() should be true', () => {
            expect(validator.fails()).toBe(true);
        });

    });
});
