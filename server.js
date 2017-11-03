const  express = require("express");
const bodyParser = require('body-parser');
var app = express();
var fs = require("fs");
var mysql = require('mysql');
var Client = require('node-rest-client').Client;
var client = new Client();
var http = require('http');
var args = {
    headers: { "appkey": "328d5238-547a-3573-aa69-61bbd12085c4" } // request headers 
};
 
var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "babjul814",
  password: "",
  database: "miniproject"
}); 
app.use(express.bodyParser());
var conn=connection.connect();
console.log("");
//화면이 필요한경우
app.use(express.static(__dirname+'/public'));
//기본루트

app.get('/',function(req,res){
  console.log(req.body.message);
  console.log(req.headers);
 // console.log(req.params.message);
  res.send("send data"+req.body.message);
});
//여러 포팅 주소
app.post('/login',function(req,res){
  
    res.send("senddata");
    
});
app.post('/logout',function(req,res){
    res.send("senddata");
});

app.post('/signIn',function(req,res){
    res.send("senddata");
});

app.post('/regWeaInf',function(req,res){
    var data=req.body.pram;
    res.send("senddata");
    
});

app.put('/updateWeaInfo',function(req,res){
    var data=req.body.pram;
    res.send("senddata");
    
});
app.delete('/deleteWeaInfo',function(req,res){
    var data=req.body.pram;
    res.send("senddata");
    
});
app.get('/getWeather',function(req,res){
    var data=req.body.pram;
    client.get("http://apis.skplanetx.com/weather/summary?lon=105&stnid=108&lat=37&version=1", args,
    function (data, response) {
        // parsed response body as js object 
       
        console.log(data);
      console.log("오늘날씨" +data.weather.summary[0].today.sky.name);
      console.log("오늘최고 온도:"+ data.weather.summary[0].today.temperature.tmax);
      console.log("오늘최저 온도:"+ data.weather.summary[0].today.temperature.tmin);
    
    
    res.send("senddata");
    });
});
app.post('/sendWeather',function(req,res){
    var data=req.body.pram;
    res.send("senddata");
    
});

app.listen(8080,function(){
 console.log('Server Running...');
 
 
  client.get("http://apis.skplanetx.com/weather/summary?lon=105&stnid=108&lat=37&version=1", args,
    function (data, response) {
        // parsed response body as js object 
       
        console.log(data);
      console.log("오늘날씨" +data.weather.summary[0].today.sky.name);
      console.log("오늘최고 온도:"+ data.weather.summary[0].today.temperature.tmax);
      console.log("오늘최저 온도:"+ data.weather.summary[0].today.temperature.tmin);
    
    
    res.send("senddata");
    });
 
});
