// Write a function to represent a Triangle, given input is the number of rows of the triangle
// Example if the number of rows is 3
// Result:
// 1
// 2 3
// 4 5 6

// function generatePyramid() {
//     var totalNumberofRows = 5;
//     var output = '';
//     for (var i = 1; i <= totalNumberofRows; i++) {
//         for (var j = 1; j <= i; j++) {
//             output += j + '  ';
//         }
//         console.log(output);
//         output = '';
//     }
// }

function generatePyramid(e) {
  const totalNumberofRows = e ;
  let output = '';
  let arr2 = [] ;
  for (let i = 1; i <= totalNumberofRows; i++) {
      let arr = [];
      for (let j = 1; j <= i; j++) {
          output ++ ;
          arr.push(output);
      }
      arr2.push(arr);
  }

  for (let i = 0; i < arr2.length; i++) {
      console.log(arr2[i].join().replaceAll(',', ' '));
  }
}

generatePyramid(70);

/*
acceptance criteria 
1. reading the number of rows 
2. if no rows initiate an error msg/ if rows next step
3. prints rows equal to number input
4. The first number in the first row is 1.
5. The number that the next row prints out is a continuation of thr previous rows counts (lastrownumber + 1 e.g. 1 (newrow) 2,3 if the input was two) 
6. Each row prints numbers equal to the index of the row are printed ( row one prints 1 number row two prints 2 numbers )
7. once the number of inputs given is met the functions ends 
*/