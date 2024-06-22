module.exports = {
    name: 'embed-edit-thumbnail',
    description: 'chỉnh sửa hình thu nhỏ của embed',
    type: 1,
    options: [
        {
            name: 'edit-thumbnail',
            description: 'tên của embed cần chỉnh sửa',
            type: 3,
            required: true,
        }, 
            {
                name: 'thumbnail',
                description: 'hình thu nhỏ',
                type: 11,
                required: false,
        }
    ],
    run: async (client, interaction) => {
        const embedNew = interaction.options.getString('edit-thumbnail');
        const thumbnail = interaction.options.getAttachment('thumbnail');
    },
};