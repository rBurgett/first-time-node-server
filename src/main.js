import express from 'express';  // import the express library

import adder from './util/adder';  // import the adder module

import layout from './components/layout';
import home from './components/home/home';
import about from './components/about/about';

const app = express();  // create the server

app.get('/', (req, res) => {  // handle a GET request to '/'

    const num1 = req.query.num1 || '';  // if a num1 query param, pass into num1, else ''
    const num2 = req.query.num2 || '';  // if a num2 query param, pass into num2, else ''

    // if a num1 and num2 value are present,
    const sum = (num1 && num2) ? adder(parseInt(num1), parseInt(num2)): '';

    res.send(layout({  // call our layout view function, passing in the page's title
        title: 'First Time Node Server - Home',
        activePage: 'home',  // activePage is 'home'
        content: home({
            num1: num1,
            num2: num2,
            sum: (sum || sum === 0) ? sum : ''
        })
    }));

}).get('/about', (req, res) => {  // handle a GET request to '/about'

    res.send(layout({  // call our layout view function, passing in the page's title
        title: 'First Time Node Server - About',
        activePage: 'about',  // activePage is 'about'
        content: about()
    }));

}).use(express.static('public'));  // tell our server to expose the public folder

const port = 3000;

const server = app.listen(port, () => {  // start the server
    console.log(`App listening at port ${server.address().port}`);
});
