// const isPalindrome = (str) => {
//   let reversed = str.split("").reverse().join("");
//   console.log(reversed);
//   if( reversed === str){
//     return true;
//   }else{
//     return false;
//   }
// };

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("jawns"));

const isPalindrome2 = (str) =>{
  for(let i = 0; i < str.length; i++){
    // console.log(str[i]);
    // console.log(str[str.length - 1 - i])
    if(str[i] !== str[str.length - 1 - i] ){
      return false
    }
    return true;
  }
}
console.log(isPalindrome2("jawns"));
