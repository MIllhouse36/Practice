// Program to find the most repeated word in a string and the count of the word
// “Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on. ” 


const findRepeat = (str)=>{
  // let arr = []
  let string = str.split(" ")
  // for(let i = 0; i < string.length; i++){
  //   if(i){
  //     arr.push(word[i])
  //     console.log(arr)
  //   }
    
  // }
  string.forEach( word => {
    console.log(word)
    
  });
  // console.log(word)
}

findRepeat(
  `Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on`
  )