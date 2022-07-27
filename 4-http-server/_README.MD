# Create HTTP Server

1. Importing http library
```javascript
const http = require('http')
```
2. Define Server
```javascript
const server = http.createServer(handler)
//The handler will use two arguments, (request, response)
```


3. call listen function from server object and pass port as an argument
```javascript
server.listen(port, handler)
//the port shouldn't be in use from any other program
// we can pass a function as a second argument to be executed when the server starts litening just to know that the server is running we may use log
```
4. Full Example:
```javascript
const http = require('http')
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type": "text/html"})
    res.end("Hello World")
});
server.listen(3000, ()=>{
    console.log("The server is running on port 3000.")
})
```
Then in your browser you can make a request using the following:
```localhost:3000```

```127.0.0.1:3000```

```{local ip address}:3000             etc: 192.168.5.4:3000 ```

```{hostname or device name}:3000      etc: mydevice:3000```
## Request Object:
1. Request Headers:

    Request Object contains information about the incoming request.
```javascript
{
  "host": "dell-ubuntu:3000",
  "connection": "keep-alive",
  "dnt": "1",
  "upgrade-insecure-requests": "1",
  "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.48 Safari/537.36",
  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "accept-encoding": "gzip, deflate",
  "accept-language": "en-US,en;q=0.9,de;q=0.8"
}
```
    This information helps to generate a suitable response to the client, like the dafault browser language and browser version.

2. Request url:
```javascript
req.url
```
    this will show the requested page.

3. Request Method
    (GET, POST, UPDATE, DELETE, PUT)
```javascript
req.method
```

## Response Object
Before sending the response, we have to set the response header to tell the browser what is the data that will be sent and what is the status.
```javascript
res.writeHead(statusCode, options)
```
1. Http status code:

    200 OK

    301 Redirect

    404 Not found

    read more about [HTTP status code.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

2. Options:
    ```javascript
    {"content-type": "text/html"}
    // sending an HTML
    {"content-type": "text/plain"}
    // sending Text
    {"content-type": "application/json"}
    // sending a json object
    {"content-type": "image/png"}
    // sending an image
    ```

## Run application with nodemon
[nodemon](https://www.npmjs.com/package/nodemon) is a library helps to restart the application each time we make any changes on the application files.
1. You can install nodemon from ```npm``` localy for each project. ```npm install nodemon```

2. Or you can install nodemon to be as a part of nodejs libraries, so you don't have to install it for each project.

To do that follow this steps:

1. make sure that npm works in sudo group
    ```sudo npm --version```

    if not, you may install it using this command in terminal: ```sudo apt install npm```
2. execute this command in Terminal: ```sudo npm install -g nodemon```
3. Then you can use this command to run the application using nodemon: ```nodemon app.js```
    
    Optional: you can add this command in package.json file to be executed as ```npm start```
    ```javascript
    "scripts": {
        "test": "node app",
        "start": "nodemon app"
    }
    ```