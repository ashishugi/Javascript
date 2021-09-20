let name = {
    firstName: "ash",
    lastName:"gup",
  }
  let printFullName = function(){
      console.log(this.firstName+" "+this.lastName);
  }
  printFullName.call(name);
  let name2 = {
    firstName: "sachine",
    lastName:"gup",
  }
  // call() => function borrowing
  printFullName.call(name2); // ( this, "arguments", , , arg )
  
  const printArg = function(ar){
    ar.forEach((x)=>{
      console.log(x);
    })
  }
  // apply () - call() and apply () methods are same just differnt 
  // arguments
  // apply( this reference , arr[] of argument)
  
  
  //bind ->same as call() this bind the function with the refernce given and retrurn 
  // another function, which can be called later
  const nwfunction = printFullName.bind(name2);
  nwfunction();