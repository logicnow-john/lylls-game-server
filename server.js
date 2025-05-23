const { WebSocketServer } = require('ws')
const sockserver = new WebSocketServer({ port: 3000 })

sockserver.on('connection', ws => {
    console.log('New client connected!');
    ws.send("connection established");

    ws.on('close', () => console.log('Client has disconnected!'))
    ws.on('message', data => {
        console.log('Received message', data);
        sockserver.clients.forEach(client => {
            if (client !== ws) {
                client.send(data);
            }
        })
    })
    ws.onerror = function () {
        console.log('websocket error')
    }
})
