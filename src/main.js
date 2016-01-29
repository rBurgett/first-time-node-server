import express from 'express';

import layout from './components/layout';
import home from './components/home/home';
import about from './components/about/about';

const app = express();

app.get('/', (req, res) => {

    const num1 = req.query.num1 || '';
    const num2 = req.query.num2 || '';

    res.send(layout({
        title: 'First Time Node Server - Home',
        activePage: 'home',
        content: home({
            num1: num1,
            num2: num2
        })
    }));
}).get('/about', (req, res) => {
    res.send(layout({
        title: 'First Time Node Server - About',
        activePage: 'about',
        content: about()
    }));
}).use(express.static('public'));

const port = 3000;

const server = app.listen(port, () => {
    'use strict';
    console.log(`App listening at port ${server.address().port}`);
});
