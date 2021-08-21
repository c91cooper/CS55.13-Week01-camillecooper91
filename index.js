//loading http library
let myhttp = require("http");

//calling createServer() method on an instance of http
let myServer = myhttp.createServer(
  function(myRequest,myResponse){
    console.log(myRequest.url);

    let text;
    
    if (myRequest.url === "/howdy"){
      text = "Well hey there!";
    }else{
      text = "I don't know you!";
    }

    myResponse.writeHead(200, {"Content-Type" : "text/plain"});
    

    myResponse.end( text+"\n");
  }
);

//telling server to listen over a tcp port and from which ip address
myServer.listen(8080, "0.0.0.0");

console.log("server has started");

