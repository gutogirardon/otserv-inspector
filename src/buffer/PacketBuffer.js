class PacketBuffer {
    constructor(buffer) {
        this.buffer = buffer || Buffer.alloc(0);
        this.position = 0;
    }

    getBuffer() {
        return this.buffer;
    }

    getPos() {
        return this.position;
    }

    isValid() {
        return this.position < this.buffer.length;
    }

    isLonger(length = 1) {
        return this.position + length <= this.buffer.length;
    }

    getChar() {
        if (this.isLonger(1)) {
            const value = this.buffer.readUInt8(this.position);
            this.position += 1;
            return value;
        }
        return null;
    }

    addChar(char) {
        const newBuf = Buffer.alloc(1);
        newBuf.writeUInt8(char, 0);
        this.buffer = Buffer.concat([this.buffer, newBuf]);
    }

    getShort() {
        if (this.isLonger(2)) {
            const value = this.buffer.readUInt16LE(this.position);
            this.position += 2;
            return value;
        }
        return null;
    }

    addShort(short) {
        const newBuf = Buffer.alloc(2);
        newBuf.writeUInt16LE(short, 0);
        this.buffer = Buffer.concat([this.buffer, newBuf]);
    }

    getLong() {
        if (this.isLonger(4)) {
            const value = this.buffer.readUInt32LE(this.position);
            this.position += 4;
            return value;
        }
        return null;
    }

    addLong(long) {
        const newBuf = Buffer.alloc(4);
        newBuf.writeUInt32LE(long, 0);
        this.buffer = Buffer.concat([this.buffer, newBuf]);
    }

    getString(length = false) {
        if (!length) {
            length = this.getShort();
        }
        if (this.isLonger(length)) {
            const value = this.buffer.toString('utf8', this.position, this.position + length);
            this.position += length;
            return value;
        }
        return null;
    }

    addString(string) {
        const stringBuf = Buffer.from(string, 'utf8');
        this.buffer = Buffer.concat([this.buffer, stringBuf]);
    }
}

module.exports = PacketBuffer;
