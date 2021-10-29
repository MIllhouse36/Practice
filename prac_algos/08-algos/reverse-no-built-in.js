const reverse = (str)=>{
  let words = str.split("").reverse();
  let results = "" 
  for(let i=0; i<words.length; i++){
    // let letters = words[i].split('').reverse().join("");
    results += words[i].split("").reverse().join("");

    // console.log(letters)
    
  }
  return results
}

console.log(reverse("just keep swimming"))