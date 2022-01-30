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

array = [1,4,2,6,3,10,11]
const obj = new SortArray(array);
console.log(obj.getSortedArray());
const arr = [
  { name: "Alex",   grade: 15 },
  { name: "Devlin", grade: 13 },
  { name: "Eagle",  grade: 12 },
  { name: "Sam",    grade: 14 },
]
const obj2 = new SortObjectArray(arr);
obj2.sortJSON()
console.log(obj2.getSortedArray()); 
