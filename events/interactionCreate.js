module.exports = (client, interaction) => {
    if (!interaction.isCommand()) return;
    const command = client.interactions.get(interaction.commandName);
    if (!command) interaction.reply('Lệnh không hợp lệ');
    command.run(client, interaction);
    if (!interaction.isButton()) return;
    const button = client.buttons.get(interaction.customId);
    if (!button);
    button.run(client, interaction);
    if (!interaction.isModalSubmit()) return;
    const input = interaction.fields.getTextInputValue('input-custom-id');
    if (!input) interaction.reply(`Bạn đã nhập: ${input}`);
    input.run(client, interaction);
}