const longestWord = (str)=>{
  let words = str.split(" ");
  let longest = words[0];

  for(let i = 1; i < words.length; i++){

    let currentWord = words[i];
    if( currentWord.length > longest.length) {
      longest = currentWord;
      console.log(currentWord.length)
    }
  }

  return longest
}


console.log(longestWord("I love programming"))

let test = "test";

console.log(test.length)