const Router = require('koa-router');
const router = new Router({
    prefix: '/:resource'
});

router.get('/', ctx => {
    const {
        resource = false
    } = ctx.params;

    ctx.body = {
        status: 'success',
        message: 'Hello world!',
        resource: resource,
    }
});

router.get('/:id', ctx => {
    const {
        resource = false,
        id = 0
    } = ctx.params;

    ctx.body = {
        status: 'success',
        message: 'Hello world!',
        resource: resource,
        id: id,
    }
});

module.exports = router;