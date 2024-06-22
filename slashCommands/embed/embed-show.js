const { EmbedBuilder, WebhookClient } = require('discord.js');

module.exports = {
    name: 'embed-show',
    description: 'Xem trước embed',
    type: 1,
    options: [
        {
            name: 'embed',
            description: 'tên embed bạn cần show',
            type: 3,
            required: true,
        },
        {
            name: 'webhook',
            description: 'thay vào đó hãy gửi embed dưới dạng webhook (cần có liên kết hợp lệ)',
            type: 3,
            required: false,
        },
    ],
    run: async (client, interaction) => {
        const embedName = interaction.options.getString('embed');
        const webhookUrl = interaction.options.getString('webhook');

        const embed = client.embeds.find(e => e.name === embedName);
        if (!embed) {
            await interaction.reply('Không có embed này!');
            return;
        };

        if (webhookUrl) {
            const webhook = new WebhookClient(webhookUrl);
            await webhook.send(embed);
            await interaction.reply('embed gửi dưới dạng webhook!');
        } else {
            const title = embed.title;
            const description = embed.description;
            const color = embed.color;

            const embedToSend = new EmbedBuilder()
                .setTitle(title)
                .setDescription(description)
                .setColor(color);

        await interaction.reply({
            content: '✅ *embed đã gửi!* (bây giờ bạn có thể xóa tin nhắn này nếu bạn chỉ muốn gủi embed này vào kênh của mình)', 
            embeds: [embedToSend] });
        }
    },
};