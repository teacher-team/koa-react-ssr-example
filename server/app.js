require('babel-register')({
  plugins: ['dynamic-import-node']
});

const webpack = require('webpack');
const Koa = require('koa');
const devMiddleware = require('koa-webpack');

const router = require('./routes');

const webpackConfog = require('../webpack/webpack.dev.js');

const compiler = webpack(webpackConfog);

const app = new Koa();

app.use(
  devMiddleware({
    compiler: compiler
  })
);
app.use(router.routes());

app.listen(3000, () => {
  console.log('Running on http://localhost:3000/');
});
