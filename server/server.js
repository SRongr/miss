/**
 * Created by kenkozheng on 2017/11/27.
 */

const fs = require('fs');
const path = require('path');
const LRU = require('lru-cache');
const express = require('express');
const server = express();
const { createBundleRenderer } = require('vue-server-renderer');

const isProd = process.env.NODE_ENV === 'production';
const resolve = file => path.resolve(__dirname, file);
const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
});
const createRenderer = (bundle, options) => createBundleRenderer(bundle, Object.assign(options, {
  // for component caching
  cache: LRU({
    max: 1000,
    maxAge: 1000 * 60 * 15
  }),
  // recommended for performance
  runInNewContext: false
}));

let render;
const templatePath = resolve('../web/tpl.html');
let baseRender = (renderer, req, res) => {
  //context是一个对象，在模版中，使用<title>{{ title }}</title>方式填充 https://ssr.vuejs.org/zh/basic.html
  let context = { title: 'VueSSR Multipages', url: req.url };
  renderer.renderToString(context, (err, html) => {
    const state = JSON.stringify(context.state)
    // console.log(state)
    if (err) {
      console.log(err);
      res.status(err.code).end('Internal Server Error');
      return
    }
    res.send(html);
    res.end();
  })
};

if (isProd) {
  // In production: create server renderer using template and built server bundle.
  // The server bundle is generated by vue-ssr-webpack-plugin.
  const template = fs.readFileSync(templatePath, 'utf-8')
  const bundle = require('../dist/vue-ssr-server-bundle.json')            //todo 多页面需要有个列表文件列出所有bundle，然后这里建立多个renderer
  // The client manifests are optional, but it allows the renderer
  // to automatically infer preload/prefetch links and directly add <script>
  // tags for any async chunks used during render, avoiding waterfall requests.
  const clientManifest = require('../dist/vue-ssr-client-manifest.json')
  let renderer = createRenderer(bundle, {
    template,
    clientManifest
  });
  //多页面，todo 根据请求选对应的bundle renderer处理
  render = (req, res) => {
    baseRender(renderer, req, res);
  };
} else {
  // In development: setup the dev server with watch and hot-reload,
  // and create a new renderer on bundle / index template update.
  // devserver使用的是webpack-dev-middleware，过程文件存储在内存
  const devServerSetup = require('../build/setup-dev-server');
  let renderer;
  var promise = devServerSetup(server, templatePath, (bundle, options) => {
    renderer = createRenderer(bundle, options);     //刷新renderer
  });
  render = (req, res) => {
    promise.then(() => baseRender(renderer, req, res));     //需要等待文件初始化
  };
}

server.use('/dist', serve('../dist'));      //静态目录
server.use('/public', serve('../web/public'));
server.use('/assets', serve('../web'))

const content = fs.readFileSync('web/css/base.styl').toString()

console.log(content)
/**
 * 不建议在server.js中写太多路由的事情，如果路由多了，建议迁移到额外一个配置表中
 */
server.get('/api/getValue', (req,res) => {
  res.end('hello')
})
server.get('*', render);

const port = 80;
server.listen(port, () => {
  console.log(`server started at localhost:${port}`)
});