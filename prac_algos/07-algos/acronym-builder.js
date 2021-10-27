const acronymBuilder = (str)=>{
  let words = str.split(" ")
  let acronym = [];
  for(let i = 0; i< words.length; i++){
    let word = words[i]
    let firstLetter = word[0];
    acronym.push(firstLetter)
    console.log(firstLetter)
  }

return acronym.join(".").toUpperCase()
}

console.log(acronymBuilder("what up my dog"))