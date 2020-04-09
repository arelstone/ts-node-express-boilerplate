import Exception from "./Exception";
import { ValidationError } from "joi";
import { UNPROCESSABLE_ENTITY } from "http-status-codes";

export default class ValidationException extends Exception {
    constructor(error: ValidationError) {
        super({
            error: {
                name: error.name,
                path: error.details[0].path,
            },
            message: error.message,
            status: UNPROCESSABLE_ENTITY,
            statusText: 'UNPROCESSABLE_ENTITY',
        });
    }
}