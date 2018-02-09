const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const routes = require('./routes/');

app.use(bodyParser());
app.use(routes.routes());

app.listen(3000);