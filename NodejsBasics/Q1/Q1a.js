const parser = require('xml2js');
const xmldata = `<student>
    <details>
        <name>gayathri</name>
        <id>1</id>
    </details>
    <details>
        <name>dolly</name>
        <id>2</id>
    </details>
</student>`;
parser.parseString(xmldata,(err,result)=>{
    let data = JSON.stringify(result)
    console.log(data)
});
