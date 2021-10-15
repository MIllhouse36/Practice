const vowelCount = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    let lowered = str[i].toLowerCase();
    if (
      lowered === "a" ||
      lowered === "e" ||
      lowered === "i" ||
      lowered === "o" ||
      lowered === "u"
    ) {
      counter += 1;
    }
  }
  return counter;
};
console.log(vowelCount(`POPTART`));

const vowelCount2 = (str) =>{
  let counter = 0;
  const vowels = ["a","e","i","o","u"]
  for(let i=0; i< str.length; i++){
    let lowered = str[i].toLowerCase();
    if(vowels.indexOf(lowered) !== -1){
     counter++;
    }
  }
  return counter;
}

console.log(vowelCount2(`POPTART`));


// let arr = []

// console.log(arr.indexOf())
