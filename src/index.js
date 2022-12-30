import express from 'express';

const app = express();
const port = 8080;

app.use(() => {
    console.log('Received a request on port ' + port);
})

app.listen(port, () => {
    console.log('listening on port ' + port);
})