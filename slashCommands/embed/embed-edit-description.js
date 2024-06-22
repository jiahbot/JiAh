module.exports = {
    name: 'embed-edit-description',
    description: 'chỉnh sửa mô tả của embed',
    type: 1,
    options: [
        {
            name: 'edit-description',
            description: 'tên của embed cần chỉnh sửa',
            type: 3,
            required: true,
        }, 
            {
                name: 'description',
                description: 'mô tả cho embed',
                type: 3,
                required: true,
        }
    ],
    run: async (client, interaction) => {
        const embedNew = interaction.options.getString('edit-description');
        const description = interaction.options.getString('description');
    },
};