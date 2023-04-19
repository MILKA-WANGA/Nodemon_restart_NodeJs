//User sends the data and is redirected to the localhost
const fs = require('fs');
const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;

if(url==='/')
{
    //Take input from user
    res.write('<html>');
    res.write ('<head><title>Enter your mesage</title></head>');
    res.write('<body>  <form method="/message" method="POST"><input type="text" name="message"><button type="submit" name="button" >submit </form></body>');
    res.write('</html>');
    return res.end();
}    
    
    if(url==='/message' && method==='POST')
    { 
        // create listener to listen for a request
        const body=[];      
        res.on('data', (chunk) =>
        {
            console.log(chunk);
            body.push(chunk);
        }
        );
      return req.on('end', () =>
        {
         const parsebody=Buffer.concat(body).toString();
        //store request
        const message=parsebody.split('=')[1];
        fs.writeFile ('message.txt', message ,(error)=>
        {
        res.statusCode=302;
        res.setHeader('Location', '/');
        return res.end();
        });
      });
       
         
    }
    //process.exit();
    //Create responce
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write ('<head><title>Welcome to NodeJs page</title></head>');
    res.write('<body> <h1>Hello there welcome to NodeJs server Responce</h1></body>');
    res.write('</html>');
    res.end();
};
module.exports=(requestHandler);

              
       