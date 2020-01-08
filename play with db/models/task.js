const mongoose = require('mongoose');
const validator = require('validator');

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Minimum length should be at least 3 char!'],
        maxlength: [35, 'Maximum allowed length is 35 char only!']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = Task