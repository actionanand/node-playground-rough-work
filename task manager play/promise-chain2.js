require('./mongoose');
const Task = require('./models/task');

Task.findByIdAndDelete('5e1445d1072f1d4a0df94f5f').then((result) => {
    console.log("Task is removed. " +result);
    return Task.countDocuments({completed: false});
}).then((respData) => {
    console.log(respData);
}).catch((e) => {
    console.log(e);
});