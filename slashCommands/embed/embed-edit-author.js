module.exports = {
    name: 'embed-edit-author',
    description: 'chỉnh sửa tác giả của embed',
    type: 1,
    options: [
        {
            name: 'edit-author',
            description: 'tên của embed cần chỉnh sửa',
            type: 3,
            required: true,
        }, 
            {
                name: 'text',
                description: 'text mới cho tác giả',
                type: 3,
                required: false,
        }, 
            {
                name: 'icon',
                description: 'icon mới cho tác giả',
                type: 3,
                required: false,
        }
    ],
    run: async (client, interaction) => {
        const embedNew = interaction.options.getString('edit-author');
        const text = interaction.options.getString('text');
        const icon = interaction.options.getString('icon');
    },
};