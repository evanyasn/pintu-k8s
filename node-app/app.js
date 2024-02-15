const express = require('express')
const app = express()
const port = 3000

var os = require('os');

app.get('/ostype', function(req, res) {
 res.send("OS Type: "+os.type()+"\nOS Platform: "+os.platform()+"\nOS Release "+os.release())
});

app.get('/trialinfo', function(req, res) {
 var date_ob = new Date();
 let date = ("0" + date_ob.getDate()).slice(-2);
 let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
 let year = date_ob.getFullYear();

 res.send("Xendit - Trial - Evan Nababan - <24-02-2020> - <"+date+"-"+month+"-"+year+">")
});

app.get('/osinfo', function(req, res) {
 res.send("CPU Usage: "+JSON.stringify(os.cpus())+"\nMem Total: "+os.totalmem()+"\nMem Free "+os.freemem())
});

app.get('/health', function(req, res) {
 res.send("Health is OK !")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

