var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

if (!argv.m){
    return;
}

const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:3000/');


// Executes when the connection is successfully established.
socket.addEventListener('open', event => {
    console.log('WebSocket connection established!');
    // Sends a message to the WebSocket server.
    socket.send(argv.m);
});
// Listen for messages and executes when a message is received from the server.
socket.addEventListener('message', event => {
    console.log('Message from server: ', event.data);
});
// Executes when the connection is closed, providing the close code and reason.
socket.addEventListener('close', event => {
    console.log('WebSocket connection closed:', event.code, event.reason);
});
// Executes if an error occurs during the WebSocket communication.
socket.addEventListener('error', error => {
    console.error('WebSocket error:', error);
});