module.exports = (client) => {
    console.log(`Bot ${client.user.tag} đã sẵn sàng!`);
    client.user.setPresence({ activities: [{ name: '✨/help · running on ♡'}], status: 'online' });
}