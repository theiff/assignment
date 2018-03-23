'use strict'
var mongoose = require('mongoose')
User2 = mongoose.model('Members')


exports.listAllUsers = function(req, res){
    var query = { sort: { firstName: 1 } }
    User2.findOne({}, null, query, function(err, user){
        if(err) throw err
        res.json(user)
    })
}