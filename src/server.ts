import Application from './app';

const { app } = new Application();

app.listen(process.env.PORT, () => {
    console.log('Express server listening on port ' + process.env.PORT);
});
