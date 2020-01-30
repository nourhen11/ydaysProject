const express = require('express')
const app = express()
 const portt=3000

 const productRoute = require('./routes/product');
 const customerRoute = require('./routes/customer');
 const providerRoute = require('./routes/provider');

 app.use(productRoute);
app.use(customerRoute);
app.use(providerRoute);




 
app.listen(portt);