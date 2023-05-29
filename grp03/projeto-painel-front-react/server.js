const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const axios = require('axios');
const io = new Server(server,{
    maxHttpBufferSize: 10 * 1024 * 1024, // 10MB
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
    
});

const cors = require('cors');
app.use(cors());


io.on('connection', (socket) => {
    // console.log(socket.id+', conectado ...')

    socket.on('cardRender', async (msg) => {
      io.emit('cardRender', msg);
      console.log(msg)  
    });

      

  });

const porta = 3001  
server.listen(porta, () => {
  console.log(`listening on *:${porta}`);
});
