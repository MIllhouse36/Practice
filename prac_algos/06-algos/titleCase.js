const titleCase = (str)=>{
  let words = str.split(' ')
let result= [];
  for(let i=0; i< words.length; i++){
    let word = words[i].split('')

    word[0] = word[0].toUpperCase();

    result.push(word.join(''))
  }
return result}

console.log(titleCase("Hello dickhead"))