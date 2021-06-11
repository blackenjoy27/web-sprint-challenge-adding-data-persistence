const express = require("express");

const server = express();
const resourceRouter = require("./resource/router");
const projectRouter = require("./project/router");
const taskRouter = require("./task/router");

server.use(express.json());

server.use("/api/resources",resourceRouter);
server.use("/api/projects",projectRouter);
server.use("/api/tasks",taskRouter);


server.use((error,req,res,next)=>{
    res.status(error.status||500).json({
        message:error.message
    })
})

module.exports = server;
