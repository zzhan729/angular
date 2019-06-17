const express =require ("express");
const bodyParser =require ("body-parser");
const cors =require ("cors");

const app =express();

app.use(bodyParser.json());
app.use(cors());

const carts = require('./routes/api/carts');
const lists = require('./routes/api/lists');
const accounts = require ('./routes/api/accounts');

app.use('/api/lists',lists);
app.use ('/api/carts',carts);
app.use('/api/accounts',accounts);

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log('Server get started on port 5000'));