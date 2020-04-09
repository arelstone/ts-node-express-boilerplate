export default class Exception {
    constructor({ message, error, status, statusText }) {
        return {
            error: {
                message,
                ...error,
            },
            meta: {
                status,
                statusText,
            }
        };
    }
}