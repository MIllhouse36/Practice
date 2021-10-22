const swapCase = (str)=> {

  let result = "";
  for(let i=0; i<str.length; i++){
    let letter = str[i];
    if(letter === letter.toUpperCase()){
      result += letter.toLowerCase()
    }else{
      result += letter.toUpperCase()
    }
  }
  return result;
};

console.log(swapCase("Luke I am your Father"))
// swapCase("Luke I am your Father")