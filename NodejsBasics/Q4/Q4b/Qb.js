var fs = require('fs'),
    request = require('request');

async function download(uri, filename, callback){
  request.head(uri, function(err, res, body){
    if (err) return err;
    console.log(`${filename} is adding to images folder`);
    //console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
const imgdata = [
  {
    name: '',
    imgurl:'https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg'
  },
  {
    name: '2',
    imgurl:'https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg'
  },
  {
    name: '3',
    imgurl:'https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg'
  },
  {
    name: '4',
    imgurl:'https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg'
  },
  {
    name: '5',
    imgurl:'https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg'
  },
  {
    name: '6',
    imgurl:'https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg'
  },
  {
    name: '7',
    imgurl:'https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg'
  },
]

function newFolder(folder,n,i){
    if(i-1!=0 && (i-1)%5==0){
        foldername = `./folder${n}`;
        fs.mkdirSync(foldername);
    } else{
        foldername = folder;
    }
    return foldername;
}
var i = 1;
var file = 1;
var folder = 'folder1';
imgdata.forEach(ele=>{
    const name = ele.name;
    var newfolder = newFolder(folder,file,i)
    folder = newfolder;
    download(ele.imgurl, `./${newfolder}/${name}.png`, function(){
    console.log(`done-${ele.name}`);
    })
    file++;
    i++;
});
