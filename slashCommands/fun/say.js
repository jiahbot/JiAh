module.exports = {
    name: 'say',
    description: 'Nhờ bot nói giúp gì đó',
    type: 1,
    options: [
        {
            name: 'chat',
            description: 'Nội dung muốn bot nói',
            type: 3,
            required: true,
        }
    ],
    run: async (client, interaction) => {
        const chat = interaction.options.getString('chat');
        interaction.reply({ content: 'Thao tác thành công!', ephemeral: true });
        interaction.channel.send(chat);
    },
};