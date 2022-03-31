const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    correctAnswer:{
        type: String,
        required: true
    },
    wrongAnswer1:{
        type: String,
        required: true
    },
    wrongAnswer2:{
        type: String,
        required: true
    },
    wrongAnswer3:{
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model('Post', postSchema);