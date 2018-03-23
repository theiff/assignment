'use strict'
module.exports = function(app){
    var userList2 = require('../controllers/memberListController')
    /app.route('/members')
    .get(userList2.readAUser)
    
}