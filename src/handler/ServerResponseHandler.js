class ServerResponseHandler {
    constructor(info) {
        this.name = null;
        this.ip = null;
        this.port = null;
        this.owner = null;
        this.email = null;
        this.motd = null;
        this.location = null;
        this.url = null;
        this.version = null;
        this.online = null;
        this.max = null;
        this.peak = null;
        this.map = null;
        this.author = null;
        this.width = null;
        this.height = null;
        this.players = {};
        this.playerStatus = {};
        this.softwareName = null;
        this.softwareVersion = null;
        this.softwareProtocol = null;

        this.RESPOND_BASIC_SERVER_INFO = 0x10;
        this.RESPOND_OWNER_SERVER_INFO = 0x11;
        this.RESPOND_MISC_SERVER_INFO = 0x12;
        this.RESPOND_PLAYERS_INFO = 0x20;
        this.RESPOND_EXT_PLAYERS_INFO = 0x21;
        this.RESPOND_PLAYER_STATUS_INFO = 0x22;
        this.RESPOND_SERVER_SOFTWARE_INFO = 0x23;
        this.RESPOND_MAP_INFO = 0x30;

        info.getShort();

        while (info.isValid()) {
            const code = info.getChar();
            switch (code) {
                case this.RESPOND_BASIC_SERVER_INFO:
                    this.name = info.getString();
                    this.ip = info.getString();
                    this.port = parseInt(info.getString(), 10);
                    break;

                case this.RESPOND_OWNER_SERVER_INFO:
                    this.owner = info.getString();
                    this.email = info.getString();
                    break;

                case this.RESPOND_MISC_SERVER_INFO:
                    this.motd = info.getString();
                    this.location = info.getString();
                    this.url = info.getString();
                    this.version = info.getString();
                    break;

                case this.RESPOND_PLAYERS_INFO:
                    this.online = info.getLong();
                    this.max = info.getLong();
                    this.peak = info.getLong();
                    break;

                case this.RESPOND_MAP_INFO:
                    this.map = info.getString();
                    this.author = info.getString();
                    this.width = info.getShort();
                    this.height = info.getShort();
                    break;

                case this.RESPOND_EXT_PLAYERS_INFO:
                    const count = info.getLong();
                    for (let i = 0; i < count; i++) {
                        const name = info.getString();
                        this.players[name] = info.getLong();
                    }
                    break;

                case this.RESPOND_PLAYER_STATUS_INFO:
                    //todo :)
                    break;

                case this.RESPOND_SERVER_SOFTWARE_INFO:
                    this.softwareName = info.getString();
                    this.softwareVersion = info.getString();
                    this.softwareProtocol = info.getString();
                    break;

                default:
                    break;
            }
        }
    }

    getName() {
        return this.name;
    }
    getIp() {
        return this.ip;
    }
    getPort() {
        return this.port;
    }
    getOwner() {
        return this.owner;
    }
    getEmail() {
        return this.email;
    }
    getMotd() {
        return this.motd;
    }
    getLocation() {
        return this.location;
    }
    getUrl() {
        return this.url;
    }
    getVersion() {
        return this.version;
    }
    getOnline() {
        return this.online;
    }
    getMax() {
        return this.max;
    }
    getPeak() {
        return this.peak;
    }
    getMap() {
        return this.map;
    }
    getAuthor() {
        return this.author;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getPlayers() {
        return this.players;
    }
    getPlayerStatus() {
        return this.playerStatus;
    }
    getSoftwareName() {
        return this.softwareName;
    }
    getSoftwareVersion() {
        return this.softwareVersion;
    }
    getSoftwareProtocol() {
        return this.softwareProtocol;
    }
}

module.exports = ServerResponseHandler;
