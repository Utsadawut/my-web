const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let listSchoolSchema = new Schema({
    name: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    }
}, {
    collection: 'listSchools'
})

module.exports = mongoose.model('listSchool', listSchoolSchema);