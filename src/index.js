import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import modules from './modules';
import dotenv from 'dotenv'
// require('dotenv').config();


dotenv.config()
console.log(process.env.TEST_DATABASE_URL)
const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello world, I am the Phidi API');
  });

modules(app);

app.use('*', (req, res) => {
    res.status(404).send({
        message: "Url not found"
    });
});

app.listen(port, () => {
    console.log(`Server connected successfully on http://localhost:${port}/api/v1`)
});

export default app;
        