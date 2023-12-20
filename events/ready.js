module.exports = async(client) => {
    client.on("ready",async() => {
        console.log(`${client.user.username} SECURITY BOT STARTED . IF ANY PROBLEM OCCURS JUST CONTACT RAWKNEE.69 ON INSTAGRAM<3`)
        client.user.setPresence({
            activities : [{
                name : `${client.config.prefix}help`,
                type : "WATCHING"
            }],
            status : "online"
        });
    });
};
