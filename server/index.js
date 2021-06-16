import express from 'express'
import Connection from './database/db.js';

import defaultData from './default.js';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const app = express();
const PORT = 8000;

Connection(username,password);
app.listen(PORT, () => console.log(`server is succesfully running on ${PORT}`));

//sending data to database
defaultData();