// Write a function to represent a Triangle, given input is the number of rows of the triangle
// Example if the number of rows is 3
// Result:
// 1
// 2 3
// 4 5 6



const triangle = (num)=>{
  let arr = [];

  for(let i = 0; i < num; i++){
      arr.push(i)
    console.log(arr)
  }


}



const triangle2 = (num)=>{


  for(let i = 1; i <=num; i++){
  console.log(i)
}

}

triangle(3);

triangle2(3);