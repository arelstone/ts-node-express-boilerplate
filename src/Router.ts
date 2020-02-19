import { Request, Response, Application } from 'express';
import status from 'http-status-codes';
import ExampleController from './controllers/ExampleController';
import listEndpoints from 'express-list-endpoints';

const { env } = process;

export default class Router {
    constructor(app: Application) {
        app.get('/', (req: Request, res: Response) => res.send('Hello world').status(status.OK));

        app.get('/example', (req: Request, res: Response) => {
            return res.json(new ExampleController().greet).status(status.OK);
        });

        if (env.NODE_ENV === 'local') {
            console.table(listEndpoints(app));
        }
    }
}
