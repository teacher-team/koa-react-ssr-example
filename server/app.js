require('babel-register')({
  plugins: ['dynamic-import-node']
});

require('css-modules-require-hook')({
  extensions: ['.css','.less'],
  generateScopedName: '[path][name]__[local]--[hash:base64:5]'
})

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif', 'webp'],
  limit: 8000
})

const webpack = require('webpack');
const Koa = require('koa');
const devMiddleware = require('koa-webpack');
const logger = require('koa-logger')
const Loadable = require('react-loadable');

const router = require('./routes');

const webpackConfog = require('../webpack/webpack.dev.js');

const compiler = webpack(webpackConfog);

const app = new Koa();

app.use(logger());

app.use(
  devMiddleware({
    compiler: compiler,
    dev: {
        serverSideRender: true
    }
  })
);
app.use(router.routes());

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  });
});
