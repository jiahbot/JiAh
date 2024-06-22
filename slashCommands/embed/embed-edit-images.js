module.exports = {
    name: 'embed-edit-image',
    description: 'chỉnh sửa hình ảnh của embed',
    type: 1,
    options: [
        {
            name: 'edit-images',
            description: 'tên của embed cần chỉnh sửa',
            type: 3,
            required: true,
        }, 
            {
                name: 'image',
                description: 'hình mới cho embed',
                type: 11,
                required: false,
        }
    ],
    run: async (client, interaction) => {
        const embedNew = interaction.options.getString('edit-images');
        const iamge = interaction.options.getAttachment('image');
    },
};