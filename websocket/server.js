import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

console.log("Server started");

wss.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("message", (rawData) => {
        console.log("MESSAGE EVENT FIRED");

        const message = rawData.toString();
        console.log("Received:", message);

        console.log("Clients:", wss.clients.size);

        wss.clients.forEach((client) => {
            console.log("readyState =", client.readyState);

            if (client.readyState === WebSocket.OPEN) {
                client.send(`server broadcast: ${message}`);
            }
        });
    });
});

console.log("websocket server is live on ws://localhost:8080")


