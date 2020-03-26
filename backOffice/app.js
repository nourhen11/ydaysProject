const express = require('express')
const app = express()
 var cors = require('cors')
 var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  }
 app.use(cors(corsOptions))
 app.use(express.json());

 //CONNECT TO DATABASE
const DATABASE_URL="mongodb+srv://ydays:ydays@cluster0-vqgnz.mongodb.net/test?retryWrites=true&w=majority "
mongoose.connect(DATABASE_URL,
  {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
  }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
  ).catch(err=>console.log(err));


//ROUTES
/*
const productRoute = require('./routes/product');
const customerRoute = require('./routes/customer');
const providerRoute = require('./routes/provider');
const categorieRoute = require('./routes/categorie');
const userRoute = require('./routes/user');

app.use(productRoute);
app.use(customerRoute);
app.use(providerRoute);
app.use(categorieRoute);
app.use(productRoute);
app.use(userRoute);
 */
app.listen('3000', function () {
  console.log('Express server listening on port 3001' )
});