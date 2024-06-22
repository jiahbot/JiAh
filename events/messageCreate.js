const db = require('../index');

module.exports = async (client, message) => {
    if (message.author.bot) return;
    const serverData = await db.get(message.guildId) || { prefix: '$' };
    const prefix = serverData.prefix;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args, serverData);
}