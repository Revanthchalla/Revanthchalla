const xml2js = require('xml2js');
const fs = require('fs');
const parser  = new xml2js.Parser()
fs.readFile('./xml-data.xml',(err,data)=>{
    parser.parseString(data,(err,result)=>{
        if(err){
            console.log('error');
        } else{
            let data = JSON.stringify(result);
            console.log(data);
        }
    })
})
