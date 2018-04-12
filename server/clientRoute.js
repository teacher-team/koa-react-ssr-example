import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';

import App from '../src/containers/app.jsx';
import combinedReducer from '../src/services';

const normalizeAssets = assets => (Array.isArray(assets) ? assets : [assets]);

export default ctx => {
  let context = {};
  let modules = [];
  const store = createStore(combinedReducer);
  const assetsByChunkName = ctx.state.webpackStats.toJson().assetsByChunkName;

  let html = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={ctx.request.url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  return `
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8" />
      <title>example</title>
      ${normalizeAssets(assetsByChunkName.main)
        .filter(path => path.endsWith('.css'))
        .map(path => `<link rel="stylesheet" href="${path}" />`)
        .join('\n')}
  <body>
      <div id="main" style="height: 100%">${html}</div>
      ${normalizeAssets(assetsByChunkName.main)
        .filter(path => path.endsWith('.js'))
        .map(path => `<script src="${path}"></script>`)
        .join('\n')}
      ${normalizeAssets(assetsByChunkName.vendor)
        .filter(path => path.endsWith('.js'))
        .map(path => `<script src="${path}"></script>`)
        .join('\n')}
  </body>

  </html>`;
};
