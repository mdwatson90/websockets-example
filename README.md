# Websockets Example
- A small chat application using `socket.io` to demo websocket implementation with a Node Express server and html file.

## Running app
- run `npm start` in terminal

## Socket.io
- Socket.io is a library that ["enables low-latency, bidirectional, event-based communication between a client and server."](https://socket.io/docs/v4/)
- It is built on top of the Websocket protocol.

## Pros of Socket.io
- [HTTP long-polling fallback](https://socket.io/docs/v4/#http-long-polling-fallback)
- [Various implementation examples - server and client](https://socket.io/docs/v4/#what-socketio-is)
- [Automatic reconnection](https://socket.io/docs/v4/#automatic-reconnection)
- [Packet buffering](https://socket.io/docs/v4/#packet-buffering)
- [Broadcasting](https://socket.io/docs/v4/#packet-buffering)

## Cons of Socket.io
- [Traditional WebSocket client will not be able to successfully connect to a Socket.IO server](https://socket.io/docs/v4/#what-socketio-is-not)
- [Socket.IO client will not be able to connect to a plain WebSocket server](https://socket.io/docs/v4/#what-socketio-is-not)
- [Added bytes as opposed to traditional Websocket (although it is minimal)](https://socket.io/docs/v4/#packet-buffering)

## Questions
- Communication between LRU and server – how to capture / emit events via socket.io?
- BE language / config preferences – is it supported by socket.io?