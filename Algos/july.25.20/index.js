function arraychecker(arr,x){
  let output = false
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
  if(arr[index] === x ){
    output = true
  }
  }
  console.log(output)
}
arraychecker(["code", "dev", "nerd"], "nerd")