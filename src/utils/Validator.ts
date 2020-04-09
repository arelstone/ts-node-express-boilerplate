import { ValidationResult, JoiObject, ValidationError, validate } from "joi";

export default class Validator<T> {
    data: T;
    result: ValidationResult<T>;
    rules: JoiObject;
    error: ValidationError;

    constructor(data: T, rules: JoiObject) {
        this.data = data;
        this.rules = rules;

        this.result = this.validate();
    }

    validate = (): ValidationResult<T> => {
        const validator = validate(this.data, this.rules);
        this.error = validator.error;

        return validator;
    }

    fails = (): boolean => {
        return Boolean(this.result.error);
    }

    passes = (): boolean => {
        return !Boolean(this.result.error);
    }
}