'use strict'

const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.listen(4444, () => {
    console.log('server running on 4444')
});

const rootController = require('./routes/index'),
    twoConstroller = require('./routes/story2'),
    threeController = require('./routes/story3'),
    fourController = require('./routes/story4'),
    fiveController = require('./routes/story5'),
    sixController = require('./routes/story6');

app.use('/', rootController);
app.use('/story2', twoConstroller);
app.use('/story3', threeController);
app.use('/story4', fourController);
app.use('/story5', fiveController);
app.use('/story6', sixController);


