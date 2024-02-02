var mongoose = require('mongoose');

var articles = new mongoose.Schema({
    rank: Number,
    link: String,
    url: String,
    upvotes: String,
    time: String,
    comments: String
});

module.exports = mongoose.model('articles', articles);