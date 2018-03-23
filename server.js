var express = require('express')
app = express()
port = process.env.PORT || 3000
mongoose = require('mongoose')
User = require('./api/models/userListModel')
User2 = require('./api/models/memberListModel')
bodyParser = require('body-parser')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/local', function(error){
    if(error) console.log('error');
    console.log('Successfully connected');
})

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./api/routes/userListRoutes')
routes(app)

app.listen(5678)

console.log('User List started on : '+ port)
