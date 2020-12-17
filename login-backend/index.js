const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
app.use(cors())
app.set('PORT', process.env.PORT || 3000);

app.listen( app.get('PORT'), () => {
    console.log('El servidor esta en vivo!')
} )

app.get( '/helloworld', (req, res) => {
    res.send('Hello world!')
} )

app.use('/api', apiRouter)
