const express = require('express');
const helmet = require('helmet');
const server = express();
const ProjectRouter = require('./router/projects-router');


server.use(helmet());
server.use(express.json());

// server.get('/', (req, res) => {
//     res.send("Lets write some code!")
// })

server.use('/api/projects', ProjectRouter);

module.exports = server;