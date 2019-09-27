var express = require('express')

var app =  express()
//Define request reponse in root URL
 app.get('/', function(req, res) {
	res.send('Hello World!')
 })

//Launch listening server on port 8081
app.listen(8081, function() {
	console.log('app listening on port 8081!')
})