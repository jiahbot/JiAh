const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'avatar',
    description: 'Lấy avatar của bạn hoặc người khác',
    type: 1,
    options: [
        {
            name: 'user',
            description: 'Người bạn muốn lấy avatar',
            type: 6,
            required: false,
        }
    ],
    run: async (client, interaction) => {
        const user = interaction.options.getUser('user') || interaction.user;
        const avatarURL = user.displayAvatarURL({ format: 'png', size: 4096, dynamic: true });
        const embed = new EmbedBuilder()
            .setImage(avatarURL)
            .setTitle(`Avatar của ${user.tag}`)
            .setColor(`#fc79f7`);
        interaction.reply({ embeds: [embed] });
    },
};