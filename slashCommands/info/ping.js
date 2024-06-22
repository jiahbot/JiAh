module.exports = {
    name: 'ping',
    description: 'Xem độ trễ của bot',
    type: 1,
    run: async (client, interaction) => {
        interaction.reply(`🏓 Pong! ${client.ws.ping}ms`);
    },
};