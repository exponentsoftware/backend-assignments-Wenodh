const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Todo = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
        },
        title: {
            type: String,
            require: true,
        },
        status: {
            type: String,
            enum: ['completed', 'notCompleted'],
            required: true,
        },
        category: {
            type: String,
            enum: ['work', 'hobby', 'task'],
            required: true,
        },
    },
    {
        timestamps: { createdAt: 'addedAt', updatedAt: 'modifiedAt' },
    }
);

Todo.plugin(mongoosePaginate);

module.exports = mongoose.model('Todo', Todo);
