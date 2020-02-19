import { Request, Response, Application } from "express";
import status from 'http-status-codes';

export default class Router {
    constructor(app: Application) {
        app.get('/', (req: Request, res: Response) => res.send('Hello world').status(status.OK))
    }
}