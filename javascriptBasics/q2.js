const MetadataParser = function(){
  let _version;
  let _channel;
  let _keyField;
  
  
  this.setVersion = function(version){
      _version = version;
  }
  this.setChannel = function(channel){
      _channel = channel;
  }
  this.setkeyField = function(arr){
      _keyField = arr;
  }
  
  
  this.getVersion = function(){
    return _version;
  }
  this.getChannel = function(){
    return _channel;
  }
  this.getKeyField = function(arr){
    this.setkeyField(arr);
    return _keyField;
  }
};

const x2s = new MetadataParser();
x2s.setVersion(2);
x2s.setChannel('s');
const arr = [{channel:'A'},{channel:'B'},{channel:'C'}];
console.log(x2s.getVersion(),x2s.getChannel(),x2s.getKeyField(arr));
