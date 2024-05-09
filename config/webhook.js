const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5002 });

wss.on('connection', function connection(ws) {
    console.log('Client connected');

    ws.on('message', function incoming(message) {
        console.log('Received: %s', message);
        ws.send(message);
    });
});

console.log(`WebSocket server is running on port 5002`);
