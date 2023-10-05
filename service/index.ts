import { IWebSocket, WebSocketMessageReader, WebSocketMessageWriter } from 'vscode-ws-jsonrpc';
import { createConnection, createServerProcess, forward } from 'vscode-ws-jsonrpc/server';
import { Message, InitializeRequest, InitializeParams } from 'vscode-languageserver';
import { WebSocketServer } from 'ws';

const launchLanguageServer = (socket: IWebSocket) => {
    const serverName = 'PYRIGHT'
    const a = '/xxx/monaco-languageclient/node_modules/pyright/dist/pyright-langserver.js'
    const serverConnection = createServerProcess(serverName, 'node', [a, '--stdio'])
    const reader = new WebSocketMessageReader(socket)
    const writer = new WebSocketMessageWriter(socket)
    const socketConnection = createConnection(reader, writer, () => socket.dispose());

    if (serverConnection) {
        forward(socketConnection, serverConnection, message => {
            if (Message.isRequest(message)) {
                console.log(`${serverName} Server received:`);
                console.dir(message);
                if (message.method === InitializeRequest.type.method) {
                    const initializeParams = message.params as InitializeParams;
                    initializeParams.processId = process.pid;
                }
            }
            if (Message.isResponse(message)) {
                console.log(`${serverName} Server sent:`);
                console.log(message);
            }
            return message;
        });
    }
}


const runServer = () => {
    process.on('uncaughtException', function (err: any) {
        console.error('Uncaught Exception: ', err.toString());
        if (err.stack) {
            console.error(err.stack);
        }
    });
    const wss = new WebSocketServer({ port: 6000 });
    wss.on('connection', function (ws) {

        const socket: IWebSocket = {
            send: content => ws.send(content, error => {
                if (error) {
                    throw error;
                }
            }),
            onMessage: cb => ws.on('message', (data) => {
                cb(data);
            }),
            onError: cb => ws.on('error', cb),
            onClose: cb => ws.on('close', cb),
            dispose: () => ws.close()
        };
        launchLanguageServer(socket)
    });
    wss.on('error', function (params) {
        console.error(params)
    })
}

runServer()