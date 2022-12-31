import express from 'express';

const app = express();
app.set('view engine', 'ejs');

const port = 8080;

app.get('/', (req, res) => {
    res.render('index');
})

app.use((request, response) => {
    console.log('Received a request on port ' + port);
    console.log('Request is ', request);
    console.log('Response is ', response);
})

app.listen(port, () => {
    console.log('listening on port ' + port);
})