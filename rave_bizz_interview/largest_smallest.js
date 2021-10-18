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
// let numbers = [1,3,2,5,4];
// let numbers2 = [7,3,6,5,4];
// let sortedHighesttoLowest = [...numbers.sort((a, b)=> b-a)];
// let sortedLowesttoHighest = [...numbers.sort((a, b)=> a-b)];
// let second 
// let second2 
// let firstsecond
// let firstsecond2
// for(let i = 0; i< sortedHighesttoLowest.length; i++){
//   second = sortedHighesttoLowest[sortedHighesttoLowest.length - 2]
//   firstsecond = sortedHighesttoLowest[1]
// }
// for(let i = 0; i< sortedLowesttoHighest.length; i++){
//   second2 = sortedLowesttoHighest[sortedLowesttoHighest.length - 2]
//   firstsecond2 = sortedLowesttoHighest[1]
// }
// console.log(second);
// console.log(second2);
// console.log(firstsecond)
// console.log(firstsecond2)
// console.log(sortedHighesttoLowest);
// console.log(sortedLowesttoHighest);


// const sortedHighesttoLowest = (arr1, arr2)=> arr1.sort((a, b)=> b-a) && arr2.sort((a, b)=> b-a);
// const sortedLowesttoHighest = (arr)=>arr.sort((a, b)=> a-b);

// console.log(sortedHighesttoLowest(numbers, numbers2));
// // console.log(sortedLowesttoHighest(numbers));

// #solution!!
let full = []
let lastSecond; 
let firstSecond
const lrgSml = ( arr, arr2)=>{
  for( let i = 0; i< arr.length; i++){
    full.push(arr[i]);
  }
  // console.log(full);

  for( let i = 0; i< arr2.length; i++){
    full.push(arr2[i]);

  }
  // console.log(full);

  full.sort((a,b) => b-a);
   for( let i = 0; i< full.length; i++){
      lastSecond = full[full.length -2];
      firstSecond = full[1]
   }
   console.log(full)
   console.log(`2nd largest: ${firstSecond}`);
   console.log(`2nd smallest: ${lastSecond}`)
}

lrgSml([10,5,7,2,4,1,24], [8,23,29,25,40,0,24])


