const CubejsServer = require('@cubejs-backend/server');
const cubejs = require("./cube")
const throng = require('throng')
const WORKERS = process.env.WEB_CONCURRENCY || 2
const server = new CubejsServer(cubejs);
throng(WORKERS, start)
function start(){
    server
    .listen()
    .then(({ version, port }) => {
      console.log(`🚀 Cube.js server (${version}) is listening on ${port}`);
    })
    .catch((e) => {
      console.error('Fatal error during server start: ');
      console.error(e.stack || e);
    });
}
