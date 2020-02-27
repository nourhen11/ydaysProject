const express = require('express')
const app = express()
 const portt=3000
 var cors = require('cors')
 var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
 app.use(cors(corsOptions))



 const productRoute = require('./routes/product');
 const customerRoute = require('./routes/customer');
 const providerRoute = require('./routes/provider');
 const categorieRoute = require('./routes/categorie');

 app.use(productRoute);
app.use(customerRoute);
app.use(providerRoute);
app.use(categorieRoute);




 
app.listen(portt);