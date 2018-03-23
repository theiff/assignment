'use strict'
module.exports = function(app){
    var userList = require('../controllers/userListController')
    var userList2 = require('../controllers/memberListController')

    app.route('/users')
        .get(userList.listAllUsers)
        .post(userList.createAUser)

    app.route('/users/:contactId')
        .get(userList.readAUser)
        .delete(userList.deleteAUser)
        .post(userList.updateAUser)

    app.route('/members')
        .get(userList2.listAllUsers)
}