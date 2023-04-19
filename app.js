
//Import http 
const http =require('http');
const routes =require('./routes')
//create a function with request and responce arguments

//create server and execute routes
const server1= http.createServer(routes);
    


 
//set the port the server to listen at
server1.listen(1000);


