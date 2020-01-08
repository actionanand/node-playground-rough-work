require('./mongoose');
const User = require('./models/user');

User.findByIdAndUpdate('5e148b8adcd9077c0a25baa8', {age: 21}).then((result) => {
    console.log(result);
    return User.countDocuments({age: 21});
}).then((respData) => {
    console.log(respData);
}).catch((e) => {
    console.log(e);
});