const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, TextInputComponent, TextInputStyle, ModalBuilder } = require('discord.js');

module.exports = {
    name: 'embed-create',
    description: 'tạo embed mới',
    type: 1,
    options: [
        {
            name: 'name',
            description: 'tên của embed',
            type: 3,
            required: true,
        }
    ],
    run: async (client, interaction) => {
        const name = interaction.options.getString('name');
        await interaction.channel.send(`Đã tạo 1 embed có tên: ${name}.
            • Giờ đây, bạn có thể tham khảo nội dung nhúng có {embed:${name}} trong thư trả lời tự động hoặc tin nhắn chào/rời/tăng cường.
            • ví dụ: để đính kèm vào tin nhắn chào mừng`);

        const embed = new EmbedBuilder()
            .setTitle(`**Đã tạo thành công 1 embed có tên:** ${name}`)
            .setDescription(`vui lòng chọn từ các nút bên dưới để biết nội dung bạn muốn chỉnh sửa!
                ngoài ra, bạn có thể chỉnh sửa riêng lẻ các slash command với /embed edit.`);

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('edit-basic-info')
                    .setLabel('Chỉnh sửa thông tin cơ bản (màu / tiêu đề / mô tả)')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('edit-author')
                    .setLabel('Chỉnh sửa tác giả')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('edit-footer')
                    .setLabel('Chỉnh sửa chân')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('edit-images')
                    .setLabel('Chỉnh sửa hình ảnh')
                    .setStyle(ButtonStyle.Secondary),
            );

            if (interaction.customId === 'edit-basic-info') {
                const basic = new ModalBuilder()
                    .setCustomId('edit-basic-info')
                    .setTitle('Chỉnh sửa thông tin cơ bản');

                    const titleInput = new TextInputComponent()
                        .setCustomId('title-input')
                        .setLabel('Tiêu để')
                        .setStyle(TextInputStyle.Short);
                    const descriptionInput = new TextInputComponent()
                        .setCustomId('description-input')
                        .setLabel('Mô tả')
                        .setStyle(TextInputStyle.Paragraph)
                        .setMaxlength(4000);
                    const colorInput = new TextInputComponent()
                        .setCustomId('color-input')
                        .setLabel('Hex Color')
                        .setStyle(TextInputStyle.Short);

                basic.addComponents([titleInput, descriptionInput, colorInput]);

                await interaction.showModal(basic);
            } else if (interaction.customId === 'edit-author') {
                const authorInput = new ModalBuilder()
                    .setCustomId('edit-author')
                    .setTitle('Chỉnh sửa tác giả');

                    const authorTextInput = new TextInputComponent()
                        .setCustomId('author-text-input')
                        .setLabel('Tác giả')
                        .setStyle(TextInputStyle.Short);
                    const authorImageInput = new TextInputComponent()
                        .setCustomId('author-image-input')
                        .setLabel('Hình ảnh tác giả (tùy chọn)')
                        .setStyle(TextInputStyle.Short)
                        .setPlaceholder('https://cdn.jiah.bot/img.png');

                authorInput.addComponents([authorTextInput, authorImageInput]);

                await interaction.showModal(authorInput);
            } else if (interaction.customId === 'edit-footer') {
                const footerInput = new ModalBuilder()
                    .setCustomId('edit-footer')
                    .setTitle('Chỉnh sửa chân');

                    const footerTextInput = new TextInputComponent()
                        .setCustomId('footer-text-input')
                        .setLabel('Text chân')
                        .setStyle(TextInputStyle.Short);
                    const footerImageInput = new TextInputComponent()
                        .setCustomId('footer-image-input')
                        .setLabel('Hình ảnh chân (tùy chọn)')
                        .setStyle(TextInputStyle.Short)
                        .setPlaceholder('https://cdn.jiah.bot/img.png');
                    const timestampInput = new TextInputComponent()
                        .setCustomId('timestamp-input')
                        .setLabel('Thời gian? (yes/no)')
                        .setStyle(TextInputStyle.Short)
                        .setPlaceholder('no');

                footerInput.addComponents([footerTextInput, footerImageInput, timestampInput]);

                await interaction.showModal(footerInput);
            } else if (interaction.customId === 'edit-images') {
                const imagesInput = new ModalBuilder()
                    .setCustomId('edit-images')
                    .setTitle('Chỉnh sửa hình ảnh');

                    const mainImageInput = new TextInputComponent()
                        .setCustomId('main-image-input')
                        .setLabel('Hình ảnh chính')
                        .setStyle(TextInputStyle.Short)
                        .setPlaceholder('https://cdn.jiah.bot/img.png');
                    const thumbnailInput = new TextInputComponent()
                        .setCustomId('thumbnail-input')
                        .setLabel('Hình thu nhỏ')
                        .setStyle(TextInputStyle.Short)
                        .setPlaceholder('https://cdn.jiah.bot/img.png');

                imagesInput.addComponents([mainImageInput, thumbnailInput]);

                await interaction.showModal(imagesInput);
        };
            await interaction.channel.send({ embeds: [embed], components: [row] });
    },
};