// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route for handling POST requests
server.post('/posts', (req, res, next) => {
  req.body.id = Date.now(); // Assign a unique ID
  next();
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
