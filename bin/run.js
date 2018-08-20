'use strict';

const service = require('../server/service');
const http = require('http');

const server = http.createServer(service);
server.listen(3001);

server.on('listening', () => {
    console.log(`Iris Time is listening on port ${server.address().port} in ${service.get('env')} mode.`);
});