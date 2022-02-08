const request = require('request')
let EventEmitter= require('events');
let emitter=new EventEmitter();
let url = 'https://jsonplaceholder.typicode.com/todos/1';
request(url, (err, res, body)=>{
    if(err) return err
    console.log(res.statusCode);
    console.log(body);
});
emitter.on('newEvent',(message)=>{
    console.log(`Message:${message}`);
});
emitter.emit('newEvent',"Reading the content in the url");
