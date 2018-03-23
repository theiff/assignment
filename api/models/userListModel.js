'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    contactId: {
        type: String,
        Required: 'Please enter'
    },
    firstName: {
        type: String,
        Required: 'Please enter'
    },
    lastName: {
        type: String,
        Required: 'Please enter'
    },
    //missed left last_name
        MobileNo: {
        type: String,
        Required: 'Please enter'
    },
    Email: {
        type: String,
        Required: 'Please enter'
    },
    Facebook: {
        type: String,
        Required: 'Please enter'
    },
    ImageUrl: {
        type: String,
        Required: 'Please enter'
    },
})








module.exports = mongoose.model('Users', UserSchema)
