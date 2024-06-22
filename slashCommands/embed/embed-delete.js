const { name } = require('./embed-create')

module.exports = {
    name: 'embed-delete',
    description: 'xóa embed',
    type: 1,
    options: [
        {
            name: 'embed',
            description: 'tên của embed cần xóa',
            type: 3,
            required: true,
            autocomplete: true,
        },
    ],
    run: async (client, interaction) => {
        const embedName = interaction.options.get('name').value;
        const embed = client.embeds.find(e => e.name === embedName);
        await embed.delete();
        await interaction.channel.send(`✔️ đã xóa thành công embed.`);
    },
};