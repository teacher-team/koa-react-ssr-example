import fs from 'fs';
import path from 'path';
import Router from 'koa-router';

import clientRoute from '../clientRoute';

const router = new Router();

router.get('*', async (ctx, next) => {
  ctx.body = clientRoute(ctx);
});

module.exports = router;
