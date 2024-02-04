var mongoose = require('mongoose');

var deletedData = new mongoose.Schema({
    user: String,
    deletedData: String,
});

module.exports = mongoose.model('deletedData', deletedData);