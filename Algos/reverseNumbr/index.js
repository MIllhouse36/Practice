// Write a function that takes in a number and reverses the order of the digits.
// Ex:
// Input: 1234
// Output:4321
// Input: 1201
// Output:1021
// Input: 4
// Output: 4

// converting each indivdual number ushing into an array of each individual 
// const reverse = (num)=>{
//   const arrNumStrgs = (num).toString().split("");
//   const output = [];
//   for (let i = arrNumStrgs.length -1 ; i >= 0; i--) {
//   output.push(arrNumStrgs[i]);
//   }
//   const revStrg = output.join("");
//   const revNum = parseInt(revStrg);
//   return revNum;
//   }

  // const reverse = (num)=>{
  //   const arrNumStrgs = num.toString().split("");
  //   const reversed = arrNumStrgs.reverse();
  //   const revNum = reversed.join("")
  //   return parseInt(revNum);
  // }

  // const reverse = (str) => {
  //   var result = "";
  //     for (var i = str.length - 1; i >= 0; i--) {
  //     var letter = str[i];
  //     result += letter;
  //   }
  //   return result;
  // };
  // console.log(reverse("giggle"));

  const reverse = (num) => {
    const str = num.toString();
    var newNumStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
      var number = str[i];
      newNumStr += number;
    }
    const newNum = parseInt(newNumStr)
    return newNum;
  };
  console.log(reverse(34));