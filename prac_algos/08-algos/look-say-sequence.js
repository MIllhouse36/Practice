const lookAndSay = (n) => {
  let number = n.toString();
  let result = "";
  let currentCount = 1;
  let currentDigit = number[0];
  for (let i = 1; i <= number.length; i++) {
    let digit = number[i];
    console.log(digit);
    if (digit === currentDigit) {
      currentCount++;
    }else{
      result += currentCount;
      result += currentDigit;
      currentCount = 1;
      currentDigit = digit;
    }
  }
  return parseInt(result)
};

console.log(lookAndSay(5441));
