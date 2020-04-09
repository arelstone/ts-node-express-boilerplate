import { Request, Response, Application } from 'express';
import status from 'http-status-codes';
import ExampleController from './controllers/ExampleController';
import { SignupController } from './controllers/UserController';

export default class Router {

    constructor(app: Application) {
        app.get('/', (req: Request, res: Response) => res.json('Hello world').status(status.OK));

        app.get('/example', (req: Request, res: Response) => {
            return new ExampleController({ req, res }).greet();
        });

        app.post('/user', SignupController)
    }
}
