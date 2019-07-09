const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('static'));

// WRITE YOUR ROUTES HERE /////////////////////



// YOUR ROUTES ABOVE THIS COMMENT /////////////

app.listen(3000);
