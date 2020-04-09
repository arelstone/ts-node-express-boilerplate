import * as dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { morganMiddleware } from './middleware/morgan';
import Router from './Router';

dotenv.config();

export default class App {
    app: Application;

    constructor() {
        this.app = express();
        this.setup();
        new Router(this.app);
    }

    setup = () => {
        this.app
            .use(helmet())
            .use(cors())
            .use(express.json())
            .use(bodyParser.urlencoded({ extended: true, type: "*/*" }))
            .use(bodyParser.json({ type: "*/*" }))
            .use(morganMiddleware);
    };
}

