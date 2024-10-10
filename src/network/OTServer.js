const net = require('net');
const ServerResponseHandler = require('../handler/ServerResponseHandler');
const PacketBuffer = require('../buffer/PacketBuffer');

class OTServer {
    constructor(server, port = 7171) {
        this.server = server;
        this.port = port;
    }
    sendPacket(packet) {
        return new Promise((resolve, reject) => {
            const client = net.connect({ host: this.server, port: this.port }, () => {
                let buffer = packet.getBuffer();
                const length = Buffer.alloc(2);
                length.writeUInt16LE(buffer.length, 0);
                buffer = Buffer.concat([length, buffer]);

                client.write(buffer);
            });

            let data = Buffer.alloc(0);

            client.on('data', (chunk) => {
                data = Buffer.concat([data, chunk]);
            });

            client.on('end', () => {
                const handler = new ServerResponseHandler(new PacketBuffer(data));
                resolve(handler);
            });

            client.on('error', (err) => {
                reject(err);
            });

            client.setTimeout(5000, () => {
                client.end();
                reject(new Error('Conexão expirou'));
            });
        });
    }
}

module.exports = OTServer;
