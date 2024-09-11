import { ValidationError } from "../errors/validation.error.js";

export const ValidationMiddleware = (schema) => {
    return (req, __, next) => {
        const data = req.body
        const {value, error} = schema.validate(data);
        if (error) {
            throw new ValidationError(error.message)
        };
        req.body = value
        next();
    }
}