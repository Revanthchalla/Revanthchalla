const handlebars = require('handlebars');
const fs = require('fs');

let data = fs.readFileSync('handlebarinput.json');
let jsondata = JSON.parse(data);

let template  = handlebars.compile(fs.readFileSync("temp.handlebars").toString());

let xml = template({input:jsondata});
console.log(xml);
