const { EmbedBuilder } = require('discord.js');
const { name } = require('./embed-create')

module.exports = {
    name: 'embed-list',
    description: 'Hiển thị danh sách embed',
    type: 1,
    options: [],
    run: async (client, interaction) => {
        const guild = interaction.guild;
        const authorName = guild.name;

        const embedDataList = await client.database.getEmbedDataList();
        if (!embedDataList || embedDataList.length === 0) {
            return interaction.reply('Bạn không có embed nào được đăng ký!');
        };

        const embedNames = embedDataList.map(data => data.name).join(' ');
        const totalEmbes = embedDataList.length;

        const embed = new EmbedBuilder()
            .setAuthor({ iconURL: guild.iconURL, name: authorName })
            .setTitle('✨ embeds có sẵn')
            .setDescription(embedNames)
            .setFooter({ text: `tổng cộng: ${totalEmbes}` })
            .setColor(0xf4cccc);
        
        await interaction.reply({ embeds: [embed] });
    },
};