module.exports = {
    name: 'embed-edit-color',
    description: 'chỉnh sửa màu của embed',
    type: 1,
    options: [
        {
            name: 'edit-color',
            description: 'tên của embed cần chỉnh sửa',
            type: 3,
            required: true,
        }, 
            {
                name: 'color',
                description: 'màu hex cho embed (eg. #f4cccc)',
                type: 3,
                required: false,
        }
    ],
    run: async (client, interaction) => {
        const embedNew = interaction.options.getString('edit-color');
        const color = interaction.options.getString('color');
    },
};