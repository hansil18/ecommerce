import express from 'express'
import Connection from './database/db.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes/routes.js';

import defaultData from './default.js';

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/',Routes);


dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const PORT = 8000;

Connection(username,password);
app.listen(PORT, () => console.log(`server is succesfully running on ${PORT}`));

//sending data to database
defaultData();