// const reverse = (str)=>{
//   let words = str.split("").reverse();
//   let results = "" 
//   for(let i=0; i<words.length; i++){
//     results += words[i].split("").reverse().join("");
//   }
//   return results
// }


const reverse = (str)=>{
  let words = str.split('');
  let results = "";
  for(let i=words.length -1; i>=0;i--){
    results += words[i]
  }
  return results
}
console.log(reverse("just keep swimming"))