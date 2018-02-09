const Router = require('koa-router');
const resources = new Router({
    prefix: '/:resource'
});

resources.get('/', ctx => {
    const {
        resource = false
    } = ctx.params;

    ctx.body = {
        status: 'success',
        message: 'Hello world!',
        resource: resource,
    }
});

resources.get('/:id', ctx => {
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

resources.post('/', ctx => {
    const {
        request
    } = ctx;
    const {
        body = {}
    } = request;

    console.log( body.test );
})

module.exports = resources;