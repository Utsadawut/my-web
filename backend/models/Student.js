const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    idschool: {
        type: String
    },
    name: {
        type: String
    },
    sername: {
        type: String
    },
    schools: {
        type: String
    }
    ,
    class: {
        type: String
    }
}, {
    collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema);