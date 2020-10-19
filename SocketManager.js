/*
    This file belongs on a nodejs server
    Author: benhdev

    Websocket Server | express | socket.io
*/

const axios = require('axios');

const express = require('express');
const app = express();

const http = require('http');
const Websocket = require('socket.io');

class SocketManager {
    static init() {
        this.server = http.createServer(app);
        this.socket = Websocket(this.server, {});

        this.registerEvents(() => {
            return this.server.listen(3000);
        });
    }

    static registerEvents(callback) {
        this.socket.on('connection', (socket) => {
            console.log('Socket connection established!');

            socket.on('message', (data) => {
                console.log('Socket message: ', data);
            });

            socket.on('some-event', (data) => {
                console.log('some-event: ', data);
            });
        });

        return callback();
    }
}

SocketManager.init();
