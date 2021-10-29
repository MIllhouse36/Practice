const reverse = (str)=>{
  let words = str.split("").reverse();
  let results = "" 
  for(let i=0; i<words.length; i++){
    results += words[i].split("").reverse().join("");
  }
  return results
}

console.log(reverse("just keep swimming"))