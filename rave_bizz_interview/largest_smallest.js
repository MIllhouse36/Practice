// *Find the 2nd largest and 2nd smallest number in two arrays of numbers combined
// I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] -> 2nd Largest : 29 , 2nd Smallest: 1

// const lrgSml = (arr) =>{
//   let max = 0
//   let maxArr = []

// //  for(let i = 0; i< arr.length; i++){
// //    let currentNum = arr[i];
// //    if( currentNum > max){
// //      max = currentNum
// //      maxArr.push(max)
// //    }
// //  }
//  console.log(maxArr)
// }
// lrgSml([10,5,7,2,4,1,24])
let numbers = [1,3,2,5,4];
let numbers2 = [7,3,6,5,4];
// let sortedHighesttoLowest = numbers.sort((a, b)=> b-a);
// let sortedLowesttoHighest = numbers.sort((a, b)=> a-b);
const sortedHighesttoLowest = (arr1, arr2)=> arr1.sort((a, b)=> b-a) && arr2.sort((a, b)=> b-a);
const sortedLowesttoHighest = (arr)=>arr.sort((a, b)=> a-b);

console.log(sortedHighesttoLowest(numbers, numbers2));
// console.log(sortedLowesttoHighest(numbers));
