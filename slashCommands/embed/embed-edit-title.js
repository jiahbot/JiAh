module.exports = {
    name: 'embed-edit-title',
    description: 'chỉnh sửa tiêu đề của embed',
    type: 1,
    options: [
        {
            name: 'edit-title',
            description: 'tên của embed cần chỉnh sửa',
            type: 3,
            required: true,
        }, 
            {
                name: 'title',
                description: 'tiêu đề embed',
                type: 3,
                required: false,
        }
    ],
    run: async (client, interaction) => {
        const embedNew = interaction.options.getString('edit-title');
        const title = interaction.options.getString('title');
    },
};