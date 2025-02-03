const mongoose = require('mongoose');
mongoose.connect('');                  //mongo_connection_string
const todoSchema = new mongoose.Schema({
    title: String,
    status: Boolean
});
const todo = mongoose.model('Todo', todoSchema);

module.exports = {todo};
