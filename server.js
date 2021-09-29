const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './build'
});
server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))

// Use default router
const PORT = process.env.PORT || 1368;
server.use(router)
server.listen(PORT, () => {
  console.log('JSON Server is running')
})