const maxNum = (arr)=>{
  let max = arr[0];
  for(let i = 0; i< arr.length; i++){
    let currentNumber = arr[i]
    if(currentNumber > max){
      max = currentNumber;
    }
  }
  return max
}
console.log(maxNum([1,2,3,5, 4, 7, 10, -1]))