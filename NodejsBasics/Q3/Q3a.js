const request = require('request');
const fs = require('fs');
const url = 'http://www.google.com';
request(url, (err,res,body)=>{
    if(err) return err
    fs.writeFile('data3.html', body, 'utf8', (err)=>{
        if(err) return err;
        console.log('data pulled and created file successfully')
    })
})
