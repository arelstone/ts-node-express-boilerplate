import Application from './app';
import chalk from 'chalk';
import { ConnectionOptions, connect } from 'mongoose';

const { env: { PORT, DB_URL } } = process;

const port = PORT || 4000;
const { app } = new Application();

const dbOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    autoCreate: true,
}

app.listen(port, () => {
    console.log(chalk.green('[App]: Express server listening on port ' + port));

    connect(DB_URL, dbOptions)
        .then(() => console.log(chalk.green('[App]: MongoDB connected')))
        .catch(error => console.error(error))
});
