const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    sername: {
        type: String
    },
    position: {
        type: String
    },
    academic_standing1: {
        type: String
    },
    academic_standing2: {
        type: String
    },
    affiliation: {
        type: String
    },
    season: {
        type: String
    },
    phone: {
        type: String
    },
    roleuser: {
        type: String
    }
}, {
    collection: 'users'
})

module.exports = mongoose.model('Users', usersSchema);