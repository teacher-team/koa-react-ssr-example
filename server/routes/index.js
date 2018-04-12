import fs from 'fs';
import path from 'path';

import Router from 'koa-router';
import { renderToString } from 'react-dom/server';

import React from 'react';
import { StaticRouter } from 'react-router-dom';

import App from '../../src/containers/app.jsx';

const router = new Router();

router.get('/*', async (ctx, next) => {
  let context = {};
  console.log(ctx);
  let html = renderToString(
    <StaticRouter context={context} location={ctx.request.url}>
      <App />
    </StaticRouter>
  );
  ctx.body = `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8" />
      <title>酒店管理系统</title>
  <link href="./style/vendor.css" rel="stylesheet"><link href="./style/main.css" rel="stylesheet"></head>
  <body>
      <div id="main">${html}</div>
      <script type="text/javascript" src="./vendor.bundle.js"></script>
      <script type="text/javascript" src="./main.bundle.js"></script></body>
  </body>

  </html>`;
});

module.exports = router;
