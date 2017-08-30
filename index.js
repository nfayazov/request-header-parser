var express = require("express")
var app = express()

app.get('/', function(req, res) {
   res.json({
      ipaddress: req.headers['x-forwarded-for'],
      language: req.headers["accept-language"].split(',')[0],
      software: req.headers['user-agent'].split(/[()]+/)[1]
   })
})

app.listen(process.env.PORT, function() {
   console.log("It's working")
})
