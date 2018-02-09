const Router = require('koa-router');
const router = new Router();

router.get('/:resource', ctx => {
    const {
        resource = false
    } = ctx.params;

    ctx.body = {
        status: 'success',
        message: 'Hello world!',
        resource: resource,
    }
});

router.get('/:resource/:id', ctx => {
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