const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
    username : {type: String, required: true},
    password: {type: String, required: true},
    circuits: [{type: mongoose.Schema.Types.ObjectId, ref: 'Circuit', required: false}]
})

// Create the user model
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;