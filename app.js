const express = require('express');
const bodyParser = require('body-parser');

const path = require('path')

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const notFoundRouter = require('./routes/404');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
// app.use('/', (req, res, next) => {
//   next();
// });

app.use('/admin', adminRouter);
app.use(shopRouter);
app.use(notFoundRouter);

app.listen(3000);
