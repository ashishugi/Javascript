// map
var ar = [1,2,3,4];
console.log(ar.map((x)=>{
  return x*2;
}))
// myMap

Array.prototype.myMap = function(y){
  let ar = [];
  for(let i=0;i<this.length;i++){
    ar[i] = y(this[i],i,this);
  }
  return ar;
}
var ar2 = [8,1,2,3,4];
console.log(ar2.myMap((x)=>{
  return x*3;
}))

/////////////////////////// Reduce
var ar = [1,2,3,4];

console.log(ar.reduce(function(acc,curr){
  acc+=curr;
  return acc;
},0))

Array.prototype.myReduce = function(call,intial){
  let prev = intial;
  for(let i=0;i<this.length;i++){
    prev = call(prev, this[i],i,this);
  }
  return prev;
}

console.log(ar.myReduce(function(acc,curr){
  acc+=curr;
  return acc;
},0))
 /////////////////////////////////////////// filter
var ar = [1,2,3,4];

console.log(ar.filter((x)=>{
  return x%2 ==0 ;
}))

Array.prototype.myFilter = function(call){
  let out=[];
  for(let i=0;i<this.length;i++){
    if(call(this[i])){
      out.push(this[i]);
    }
  }
  return out;
}
console.log(ar.myFilter((x)=>{
  return x%2!=0;
}))