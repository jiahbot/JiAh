const db = require('../../index');

module.exports = {
    name: 'prefix',
    category: 'info',
    run: async (client, message, args, serverData) => {
        if (!args[0]) return message.channel.send(`Prefix hiện tại của bạn là ${serverData.prefix}`);
        await db.set(message.guildId, {...serverData, prefix: args[0].toLowerCase() });
        message.reply(`✅ | Đã đổi prefix thành công!`);
    }
}