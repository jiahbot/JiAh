module.exports = {
    name: 'embed-edit-timestamp',
    description: 'chỉnh sửa thời gian của embed',
    type: 1,
    options: [
        {
            name: 'edit-timestamp',
            description: 'tên của embed cần chỉnh sửa',
            type: 3,
            required: true,
        }, 
            {
                name: 'timestamp',
                description: 'bật/tắt thời gian của embed',
                type: 5,
                required: true,
        }
    ],
    run: async (client, interaction) => {
        const embedNew = interaction.options.getString('edit-timestamp');
        const timestamp = interaction.options.getBoolean('timestamp');
    },
};