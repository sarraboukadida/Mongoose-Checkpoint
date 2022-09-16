const mongoose = require ('mongoose') ;

mongoose
.connect(process.env.MONGO_URI)
.then((res)=> console.log('database is connected'))
.catch(err => console.log(err));