const mongoose = require('mongoose')
const { Schema } = mongoose;

const ScoreSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    score: {
        type: Number,
        // required: true,
    },
    total: {
        type: Number,
        // required: true,
    },
    quiz: {
        type: String,
     
    }
})
module.exports = mongoose.model("score", ScoreSchema)