const express = require('express');

const postRoutes = require('./routes/post');

const app = express();

// app.use((req,res,next)=>{
//     res.setHeader('Content-Type', 'application/json');
//     next();
// })


app.use(express.json());
app.use('/',postRoutes);


app.listen(8080);
