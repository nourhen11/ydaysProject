const express = require('express')
const app = express()
 const portt=3000

 const productRoute = require('./routes/product');
 app.use(productRoute);


 
app.listen(portt);