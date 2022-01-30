const SortArray = function(array){
  this.originalArray = array;
  const cb = function(a,b){
    return a-b;
  }
  const sort = function(originalArray){
    return originalArray.sort(cb);
  }
  this.getSortedArray = function(){
    return sort(this.originalArray);
  }
};

const SortObjectArray = function(jsonObject){
  SortArray.call(this, jsonObject);
  this.sortJSON = function(){
    this.originalArray = this.originalArray.sort((a, b) => a.grade - b.grade);
  }
};

SortObjectArray.prototype = Object.create(SortArray.prototype);

array = [4,3,2,7,1,11,10]
const obj = new SortArray(array);
console.log(obj.getSortedArray());
const arr = [
  { name: "mr.a",   grade: 15 },
  { name: "mr.y", grade: 13 },
  { name: "mr.x",  grade: 12 },
  { name: "mr.z",    grade: 14 },
]
const obj2 = new SortObjectArray(arr);
obj2.sortJSON()
console.log(obj2.getSortedArray()); 
