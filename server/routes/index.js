const Router = require('koa-router');
const router = new Router();

router.get('/', ctx => {
    ctx.body = {
        status: 'success',
        message: 'Hello world!',
    }
});

router.post('/', ctx => {
    ctx.body = {
        status: 'success',
        message: 'Goodbye world!',
    }
});

module.exports = router;