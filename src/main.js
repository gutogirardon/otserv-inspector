const PacketBuffer = require('./buffer/PacketBuffer');
const OTServer = require('./network/OTServer');

(async () => {
    const packetBuffer = new PacketBuffer();

    packetBuffer.addChar(255);
    packetBuffer.addChar(1);
    packetBuffer.addShort(
        1 | // REQUEST_BASIC_SERVER_INFO
        2 | // REQUEST_OWNER_SERVER_INFO
        4 | // REQUEST_MISC_SERVER_INFO
        8 | // REQUEST_PLAYERS_INFO
        16 | // REQUEST_MAP_INFO
        32 | // REQUEST_EXT_PLAYERS_INFO
        64 | // REQUEST_PLAYER_STATUS_INFO
        128 // REQUEST_SERVER_SOFTWARE_INFO
    );

    const serverIp = 'eldoria.rubinot.com.br';
    const server = new OTServer(serverIp);
    try {
        const status = await server.sendPacket(packetBuffer);

        console.log(`Basic Server Information:`);
        console.log(`  Name: ${status.getName()}`);
        console.log(`  IP: ${status.getIp()}`);
        console.log(`  Port: ${status.getPort()}`);

        console.log(`\nOwner Information:`);
        console.log(`  Owner: ${status.getOwner()}`);
        console.log(`  Email: ${status.getEmail()}`);

        console.log(`\nMiscellaneous Information:`);
        console.log(`  MOTD: ${status.getMotd()}`);
        console.log(`  Location: ${status.getLocation()}`);
        console.log(`  URL: ${status.getUrl()}`);
        console.log(`  Version: ${status.getVersion()}`);

        console.log(`\nPlayers Information:`);
        console.log(`  Online: ${status.getOnline()}`);
        console.log(`  Peak: ${status.getPeak()}`);
        console.log(`  Maximum: ${status.getMax()}`);

        console.log(`\nMap Information:`);
        console.log(`  Map Name: ${status.getMap()}`);
        console.log(`  Author: ${status.getAuthor()}`);
        console.log(`  Size: ${status.getWidth()} x ${status.getHeight()}`);

        console.log(`\nServer Software Information:`);
        console.log(`  Software Name: ${status.getSoftwareName()}`);
        console.log(`  Software Version: ${status.getSoftwareVersion()}`);
        console.log(`  Software Protocol: ${status.getSoftwareProtocol()}`);

        console.log(`\nPlayer List:`);
        for (const [name, level] of Object.entries(status.getPlayers())) {
            console.log(`  ${name} (Level: ${level})`);
        }

        const playerStatus = status.getPlayerStatus();
        if (Object.keys(playerStatus).length > 0) {
            console.log(`\nPlayer Status Information:`);
            for (const [name, info] of Object.entries(playerStatus)) {
                console.log(`  Name: ${name}`);
                console.log(`    Level: ${info.level}`);
                console.log(`    Vocation: ${info.vocation}`);
                console.log(`    Health: ${info.health}`);
                console.log(`    Mana: ${info.mana}`);
                console.log(`    Position: x=${info.position.x}, y=${info.position.y}, z=${info.position.z}`);
            }
        }
    } catch (err) {
        console.error('Error:', err);
    }
})();
