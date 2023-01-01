import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename).replace("\\src", "");

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const port = 8080;

app.get('/', (req, res) => {
    res.render('index');
});

app.use((request, response) => {
    console.log('Received a request on port ' + port);
    console.log('Request is ', request);
    console.log('Response is ', response);
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});