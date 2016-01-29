import express from 'express';

import layout from './components/layout';

const app = express();

app
    .get('/', (req, res) => {
        res.send(layout({
            title: 'First Time Node Server',
            content: ''
        }));
    })
    .use(express.static('public'));

const port = 3000;

const server = app.listen(port, () => {
    'use strict';
    console.log(`App listening at port ${server.address().port}`);
});
