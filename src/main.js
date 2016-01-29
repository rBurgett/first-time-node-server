import express from 'express';

import layout from './components/layout';
import home from './components/home/home';
import about from './components/about/about';

import adder from './util/adder';

const app = express();

app.get('/', (req, res) => {

    const num1 = req.query.num1 || '';
    const num2 = req.query.num2 || '';

    const sum = (num1 && num2) ? adder(parseInt(num1), parseInt(num2)): '';

    console.log(`sum of ${num1} and ${num2} is ${sum}`);

    res.send(layout({
        title: 'First Time Node Server - Home',
        activePage: 'home',
        content: home({
            num1: num1,
            num2: num2,
            sum: (sum || sum === 0) ? sum : ''
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
