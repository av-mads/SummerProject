let mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    date: {
        type: Date,
        default: Date.now()
    },
    comments: [{
        body: {
            required: true,
            type: String
        },
            date: {
                type: Date,
                default: Date.now()
            }
    }]
});

const Match = mongoose.model('Match', matchSchema);

module.exports =  Match;