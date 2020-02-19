import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import Router from './Router';
import { morganMiddleware } from './middleware/morgan';

dotenv.config();

export default class App {
    app: express.Application;

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
            .use(morganMiddleware);
    };
}
