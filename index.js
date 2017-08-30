var express = require("express")
var app = express()

app.get('/', function(req, res) {
   res.json({
      ipaddress: req.ip
   })
})

app.listen("3000", function() {
   console.log("It's working")
})
