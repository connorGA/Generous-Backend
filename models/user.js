const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    date: {
        type: Date,
        default: Date.now()
    },
    places: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'
    }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;