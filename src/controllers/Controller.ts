import { Request, Response } from "express";

interface IController {
    req: Request;
    res: Response;
}

export default class Controller {
    req: Request;
    res: Response;

    constructor({ res, req }: IController) {
        this.res = res;
        this.req = req;
    }
}