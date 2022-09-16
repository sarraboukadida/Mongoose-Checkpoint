const express = require ('express') ;
const app = express () ;
app.use(express.json()) ;
const dotenv = require('dotenv') ;
dotenv.config () ;
require('./config/connectDB') ;

//routes

const personRoutes = require ('./routes/personRoutes')
app.use('/api/v1/persons',personRoutes)


app.listen(5000, (err) => 
 err ? console.log(err) : console.log ('server is running on port 5000')
);
