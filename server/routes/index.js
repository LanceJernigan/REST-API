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
        request,
        params,
    } = ctx;
    const {
        body = {},
    } = request;
    const id = body.id || false;

    if (! id)
        ctx.body = 'no id';  // create object

    else
        ctx.body = 'id: ' + id;  // update object
});

resources.delete('/:id', ctx => {
    const {
        resource = '',
        id = false,
    } = ctx.params;

    if ( ! id )
        ctx.body = 'no id';  // nothing deleted

    else
        ctx.body = 'id: ' + id; // delete object
});

module.exports = resources;