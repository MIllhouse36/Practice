// Write code to add all the numbers in `arr` and return the total

const sumArray = (arr) =>{
  let result = 0
  for(let i = 0; i< arr.length; i++){
    let singleNum = arr[i];
    result += singleNum
    
  }
  console.log(result)
};

sumArray([1,2,3])