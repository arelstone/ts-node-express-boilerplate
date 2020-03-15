import * as dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import BodyParser from 'body-parser';
import { morganMiddleware } from './middleware/morgan';
import Router from './Router';

dotenv.config();

export default class App {
    app: Application;

    constructor() {
        this.app = express();
        this.config();
        new Router(this.app);
    }

    config = () => {
        this.app
            .use(helmet())
            .use(cors())
            .use(express.json())
            .use(BodyParser.json({ type: 'application/json' }))
            .use(morganMiddleware);
    };
}

