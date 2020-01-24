/* eslint-disable no-console */
// Load HTTP module


import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

import DB_CONFIG    from './config/database';
import SERVER_CONFIG from './config/server';

import Routes from './routes';
import DefaultCollections from './mongodb/collections';


const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true, useNewUrlParser: true }));

MongoClient.connect(
    `mongodb://${DB_CONFIG.user}:${DB_CONFIG.password}@${DB_CONFIG.host}:${DB_CONFIG.port}/`,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(result => {
    const db = result.db('pokemonApp');

    DefaultCollections.forEach(collecton => {
        db.createCollection(collecton)
            .then()
            .catch(err => console.err(err));
    });

    Routes(server, db);
    
    server.listen(SERVER_CONFIG.port, () => {
        console.log(`Server running at http://${SERVER_CONFIG.host}:${SERVER_CONFIG.port}/`);
    });
}).catch(error => console.error(error));
