const factorial = (num)=> {
  let result = 1;
  for(let i = 1; i<= num; i++){
    result *= i
    

  }
  return result
};

const factorial2 = (num)=> {
  let result = 1;
  for(let i = num; i > 1; i--){
    result *= i
  }
  console.log(result)
};


factorial2(0)
factorial(4)