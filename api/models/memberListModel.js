'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Login = new Schema({
    username: {
        type: String,
        Required: 'Please Enter'
    },
    password: {
        type: String,
        Required: 'please enter'
    }
})

module.exports = mongoose.model('Members', Login)