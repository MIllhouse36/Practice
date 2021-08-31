// Write a function that takes an array of numbers and a function as parameters. The function parameter should return true if the input meets a certain condition or false otherwise. Your function should run the function parameter on every element in the array parameter and , if it returns true, add the element to a new array. Return the new array. 
// Ex:
// Input: [1,2,3]  function(num){return num === 2}
// Output: [2]
// Input: [1,2,3,4,5,6]  function(num){return num % 2 === 0}
// Output: [2,4,6]
// Input: [1,2,3,4,5,6]  function(num){return num > 3}
// Output: [4,5,6]

function two(x){
  if(x === 2){
    return x
  }
}

function lt3(x){
  if(x > 3){
    return x
  }
}


function remainder(x){
  if(x % 2 === 0){
    return x
  }
}

function sorting(x, cb){
  const newArr = [];
  for (let i = 0; i < x.length; i++) {
      const newNum = cb(x[i])
      if(newNum !== undefined){
        newArr.push(newNum) 
      }
      
    
      
  }
  return newArr
}

let a = [2,5,6]

console.log(sorting(a,lt3))
