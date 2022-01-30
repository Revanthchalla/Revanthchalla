
const groupObjectBy = function(array,object){
  
   const groupedArray = array.reduce(function(newValue, prevValue){
     (newValue[prevValue[object]] = newValue[prevValue[object]] || []).push(prevValue);
     return newValue;
   },{});
   
   return groupedArray;
}

arr =[ 
  {
    "channel": "A",
    "name": "shoe"
  },
  {
    "channel": "A",
    "name": "electronics"
  },
  {
    "channel": "B",
    "name": "apparel"
  },
  {
    "channel": "C",
    "name": "electronics"
  }
]

console.log('Grouping by channel');
console.log(groupObjectBy(arr,'channel'));

console.log('Grouping by name');
console.log(groupObjectBy(arr,'name'));
