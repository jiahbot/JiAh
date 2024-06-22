module.exports = {
    name: 'embed-edit-footer',
    description: 'chỉnh sửa chân trang của embed',
    type: 1,
    options: [
        {
            name: 'edit-footer',
            description: 'tên của embed cần chỉnh sửa',
            type: 3,
            required: true,
        }, 
            {
                name: 'text-footer',
                description: 'text mới cho chân',
                type: 3,
                required: false,
        }, 
            {
                name: 'icon-footer',
                description: 'icon mới cho chân',
                type: 3,
                required: false,
        }
    ],
    run: async (client, interaction) => {
        const embedNew = interaction.options.getString('edit-footer');
        const text = interaction.options.getString('text-footer');
        const icon = interaction.options.getString('icon-footer');
    },
};