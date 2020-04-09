import { UNPROCESSABLE_ENTITY, CREATED, INTERNAL_SERVER_ERROR } from "http-status-codes";
import User from "../models/User.model";
import { CreateUserInput, UserDocument } from "../types/user.types";
import Joi from 'joi';
import ValidationException from "../exceptions/ValidationException";
import Validator from "../utils/Validator";
import { Response, Request } from "express";

const rules = Joi.object().keys({
    email: Joi.string().email().required().min(5),
    password: Joi.string().required().min(8),
    username: Joi.string().required().min(3),
});

export const SignupController = async (req: Request, res: Response) => {
    try {
        const input: CreateUserInput = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        };

        const validation = new Validator<CreateUserInput>(input, rules);

        if (validation.fails()) {
            return res
                .status(UNPROCESSABLE_ENTITY)
                .json(new ValidationException(validation.result.error));
        }

        const user: UserDocument = await new User(input)
            .save();

        return res
            .status(CREATED)
            .json({
                data: user,
                meta: {
                    status: CREATED,
                    statusText: 'CREATED',
                }
            });
    } catch (error) {
        return res
            .status(INTERNAL_SERVER_ERROR)
            .json(error);
    }


}
