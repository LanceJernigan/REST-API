const Koa = require('koa');

const app = new Koa();
const routes = require('./routes/');

app.use(routes.routes());

app.listen(3000);