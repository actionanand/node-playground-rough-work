const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Minimum length is 3'],
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!');
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%?=*&]).{8,20}/;
            const commonPass = ['password', '123', 'qwe','abc','iloveyou','iluvu','iloveu','admin','098','987','000','111'];
            const temp = commonPass.filter(f => value.toLowerCase().includes(f));

            if (temp.length >= 1) {
                throw new Error(`Please don't use common passwords like qwe, 123, your name, etc inside the password!`);
            } else if(!regex.test(value)) {
                throw new Error('Password should be of min 8 char & max 20 char with atleast 1 digit, 1 lower and upper cases')
            }
        }
    },
    age: {
        type: Number,
        default: 18,
        validate(value) {
            if(value < 13) {
                throw new Error('Age must be more than 13!')
            }
        }
    }
});

module.exports = User