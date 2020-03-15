import { Request, Response, Application } from 'express';
import status from 'http-status-codes';
import ExampleController from './controllers/ExampleController';

export default class Router {
    exampleController: ExampleController = new ExampleController();

    constructor(app: Application) {
        app.get('/', (req: Request, res: Response) => res.json('Hello world').status(status.OK));

        app.get('/example', (req: Request, res: Response) => {
            res.send(this.exampleController.greet()).status(status.OK);
        });
    }
}
